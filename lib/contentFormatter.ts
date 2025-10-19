// lib/contentFormatter.ts
export type Block =
  | { type: 'text'; content: string }
  | { type: 'image'; url: string; alt?: string }
  | { type: 'iframe'; url: string; title?: string; description?: string }
  | { type: 'reference'; title: string; url: string };

export function formatContent(raw: string): Block[] {
  if (!raw) return [];

  // Strip markdown JSON fences if model returned ```json ... ```
// at top of formatContent()
const cleaned = raw
  .replace(/```(?:json)?/g, '')
  .replace(/<!DOCTYPE[\s\S]*<\/html>/i, '')
  .trim();
  
  try {
    const parsed = JSON.parse(cleaned);
    if (Array.isArray(parsed)) {
      // Basic validation & normalization
      return parsed.map((b) => {
        if (b && typeof b === 'object' && 'type' in b) {
          return b as Block;
        }
        // fallback: stringify unknown object as text block
        return { type: 'text', content: typeof b === 'string' ? b : JSON.stringify(b) };
      });
    }
  } catch (e) {
    // not JSON — continue to fallback
  }

  // Fallback: return the whole raw as a single text block
  return [{ type: 'text', content: raw }];
}
