import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({
    url: import.meta.env.SUPABASE_URL ? import.meta.env.SUPABASE_URL.slice(0, 30) + '...' : 'MANGLER',
    key: import.meta.env.SUPABASE_SERVICE_KEY ? 'OK (finnes)' : 'MANGLER',
  }), { headers: { 'Content-Type': 'application/json' } });
};
