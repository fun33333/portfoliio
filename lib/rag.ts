// lib/rag.ts
// RAG (Retrieval Augmented Generation) utilities for Pinecone vector database

import { Pinecone } from '@pinecone-database/pinecone';
import { embeddingClient, currentProvider } from './ai-sdk';

const indexName = process.env.PINECONE_INDEX_NAME || 'portfolio-rag';

// Lazy initialize Pinecone client
let pinecone: Pinecone | null = null;

function getPineconeClient(): Pinecone {
  if (!pinecone) {
    if (!process.env.PINECONE_API_KEY) {
      throw new Error(
        'PINECONE_API_KEY is not set. Please set it in your .env.local file.'
      );
    }
    pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY,
    });
  }
  return pinecone;
}

/**
 * Generate embeddings for text using the configured AI provider
 */
export async function getEmbedding(text: string): Promise<number[]> {
  try {
    // Use the appropriate embedding model based on provider
    const model = currentProvider === 'openai' ? 'text-embedding-3-small' : 'models/embedding-001';

    console.log(`Generating embedding with model: ${model}`);

    const embeddingResponse = await (embeddingClient as any).embeddings.create({
      model,
      input: text,
    });

    if (!embeddingResponse.data || embeddingResponse.data.length === 0) {
      throw new Error('No embedding data returned from API');
    }

    const embedding = embeddingResponse.data[0].embedding;
    if (!embedding || embedding.length === 0) {
      throw new Error('Empty embedding vector returned');
    }

    return embedding;
  } catch (error) {
    console.error(`❌ Error generating embedding with provider ${currentProvider}:`, error);
    throw error;
  }
}

/**
 * Query Pinecone for relevant portfolio content
 */
export async function queryPinecone(
  query: string,
  topK: number = 5
): Promise<string[]> {
  try {
    // Get embedding for the query
    const embedding = await getEmbedding(query);

    // Query Pinecone index
    const pineconeClient = getPineconeClient();
    const index = pineconeClient.Index(indexName);
    const results = await index.query({
      vector: embedding,
      topK,
      includeMetadata: true,
    });

    // Extract and return the text chunks
    const textChunks = results.matches
      .filter(match => match.metadata?.text)
      .map(match => match.metadata.text as string);

    return textChunks;
  } catch (error) {
    console.error('Error querying Pinecone:', error);
    // Return empty array on error to prevent agent from crashing
    return [];
  }
}

/**
 * Upsert vectors into Pinecone (used by seed script)
 */
export async function upsertVectorsToPinecone(
  vectors: {
    id: string;
    values: number[];
    metadata: Record<string, string | number>;
  }[]
): Promise<void> {
  try {
    console.log(`[RAG] upsertVectorsToPinecone called with ${vectors.length} vectors`);

    if (vectors.length === 0) {
      throw new Error('No vectors provided for upsert');
    }

    const pineconeClient = getPineconeClient();
    const index = pineconeClient.Index(indexName);

    console.log(`[RAG] Attempting to upsert to index: ${indexName}`);
    console.log(`[RAG] First vector:`, JSON.stringify(vectors[0], null, 2).substring(0, 200));

    // Format vectors for Pinecone - use proper type casting
    const formattedVectors = vectors.map(v => ({
      id: v.id,
      values: v.values,
      metadata: {
        text: v.metadata.text || '',
        category: v.metadata.category || '',
        section: v.metadata.section || '',
      }
    }));

    console.log(`[RAG] Formatted vectors count: ${formattedVectors.length}`);
    console.log(`[RAG] Sample formatted vector:`, JSON.stringify(formattedVectors[0]).substring(0, 200));
    console.log(`[RAG] Vector IDs:`, formattedVectors.map(v => v.id).join(', '));

    // v7.0.0 requires wrapping records in an object with 'records' property
    console.log(`[RAG] About to upsert records:`, formattedVectors.length > 0 ? 'Yes' : 'No');
    const result = await index.upsert({
      records: formattedVectors
    });
    console.log(`[RAG] Upsert result:`, result);
    console.log(`✅ Upserted ${vectors.length} vectors to Pinecone index "${indexName}"`);
  } catch (error) {
    console.error('Error upserting vectors to Pinecone:', error);
    throw error;
  }
}

/**
 * Delete index and recreate it (useful for testing)
 */
export async function resetPineconeIndex(): Promise<void> {
  try {
    const pineconeClient = getPineconeClient();
    const index = pineconeClient.Index(indexName);
    await index.deleteAll();
    console.log(`Reset Pinecone index "${indexName}"`);
  } catch (error) {
    console.error('Error resetting Pinecone index:', error);
    throw error;
  }
}
