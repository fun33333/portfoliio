// scripts/seed-pinecone.ts
// One-time script to index portfolio content into Pinecone

// Load environment variables from .env.local
import * as fs from 'fs';
import * as path from 'path';

const envPath = path.resolve(__dirname, '../.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  const lines = envContent.split('\n');
  lines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      const value = valueParts.join('=');
      if (key && value) {
        process.env[key] = value;
      }
    }
  });
  console.log('✅ Loaded environment variables from .env.local');
} else {
  console.warn('⚠️ .env.local file not found');
}

import { portfolioChunks } from '../lib/portfolio-content';
import { getEmbedding, upsertVectorsToPinecone } from '../lib/rag';

async function seedPinecone() {
  console.log('🌱 Starting Pinecone seeding process...');
  console.log(`📚 Found ${portfolioChunks.length} chunks to index`);

  if (portfolioChunks.length === 0) {
    console.error('❌ No chunks found to index!');
    process.exit(1);
  }

  if (!process.env.PINECONE_API_KEY) {
    console.error('❌ PINECONE_API_KEY environment variable not set!');
    process.exit(1);
  }

  const vectors = [];
  let successCount = 0;
  let errorCount = 0;

  // Process each chunk
  for (let i = 0; i < portfolioChunks.length; i++) {
    const chunk = portfolioChunks[i];
    console.log(`⏳ Processing chunk ${i + 1}/${portfolioChunks.length}: ${chunk.id}`);

    try {
      // Generate embedding for the chunk text
      const embedding = await getEmbedding(chunk.text);

      if (!embedding || embedding.length === 0) {
        console.error(
          `⚠️ No embedding returned for chunk ${chunk.id}`
        );
        errorCount++;
        continue;
      }

      // Create vector object for Pinecone
      vectors.push({
        id: chunk.id,
        values: embedding,
        metadata: {
          text: chunk.text,
          category: chunk.category,
          section: chunk.metadata.section,
          ...chunk.metadata,
        },
      });

      successCount++;
      console.log(`✅ Processed chunk ${chunk.id}`);
    } catch (error) {
      console.error(`❌ Error processing chunk ${chunk.id}:`, error);
      errorCount++;
    }

    // Add a small delay to avoid rate limiting
    if ((i + 1) % 5 === 0) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  if (vectors.length === 0) {
    console.error('❌ Failed to generate embeddings for any chunks!');
    process.exit(1);
  }

  console.log(`\n📤 Upserting ${vectors.length} vectors to Pinecone...`);

  // Debug: Check if vectors array is populated
  if (vectors.length === 0) {
    console.error('❌ ERROR: vectors array is empty!');
    console.log('successCount:', successCount);
    console.log('errorCount:', errorCount);
    process.exit(1);
  }

  // Debug: Show vector summary (not full structure)
  console.log('First vector ID:', vectors[0].id);
  console.log('First vector values length:', vectors[0].values.length);
  console.log('First vector metadata keys:', Object.keys(vectors[0].metadata).join(', '));

  try {
    await upsertVectorsToPinecone(vectors);
    console.log(
      `✅ Successfully indexed ${successCount} chunks into Pinecone!`
    );

    if (errorCount > 0) {
      console.warn(`⚠️  ${errorCount} chunks failed to process`);
    }

    console.log('\n🎉 Pinecone seeding complete!');
    console.log('You can now ask the chatbot questions about your portfolio.');
  } catch (error) {
    console.error('❌ Error upserting vectors to Pinecone:', error);
    process.exit(1);
  }
}

// Run the seeding process
seedPinecone().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
