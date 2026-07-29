import type { APIRoute } from 'astro';
import Anthropic from '@anthropic-ai/sdk';

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get('receipt') as File | null;

  if (!file || file.size === 0) {
    return new Response(JSON.stringify({ error: 'Ingen fil' }), { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const base64 = Buffer.from(bytes).toString('base64');
  const mediaType = (file.type || 'image/jpeg') as 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp';

  const isPdf = file.type === 'application/pdf';

  const client = new Anthropic({ apiKey: import.meta.env.ANTHROPIC_API_KEY });

  const contentBlock = isPdf
    ? {
        type: 'document' as const,
        source: { type: 'base64' as const, media_type: 'application/pdf' as const, data: base64 },
      }
    : {
        type: 'image' as const,
        source: { type: 'base64' as const, media_type: mediaType, data: base64 },
      };

  const response = await client.messages.create({
    model: 'claude-opus-5',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: [
          contentBlock,
          {
            type: 'text',
            text: `Les av denne kvitteringen og returner et JSON-objekt med følgende felter:
- date: dato for kjøpet (format YYYY-MM-DD, bruk dagens dato hvis uklar)
- amount: totalbeløp i norske kroner som tall uten valutasymbol (eks: 299.90)
- description: kort beskrivelse av hva som ble kjøpt (maks 80 tegn)
- category: én av disse verdiene: programvare, maskinvare, kontor, markedsforing, reise, annet
- notes: leverandørnavn og eventuell ekstra info (kan være tom streng)

Returner KUN gyldig JSON, ingen annen tekst.`,
          },
        ],
      },
    ],
  });

  const text = response.content.find(b => b.type === 'text')?.text ?? '{}';

  let parsed: Record<string, unknown>;
  try {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    parsed = JSON.parse(jsonMatch?.[0] ?? '{}');
  } catch {
    return new Response(JSON.stringify({ error: 'Kunne ikke tolke svar fra AI' }), { status: 500 });
  }

  return new Response(JSON.stringify(parsed), {
    headers: { 'Content-Type': 'application/json' },
  });
};
