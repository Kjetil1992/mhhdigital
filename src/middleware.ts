import { defineMiddleware } from 'astro:middleware';
import { verifySessionToken, COOKIE_NAME } from './lib/auth';
import { getSupabase } from './lib/supabase';

const SKIP_PATHS = ['/admin', '/api', '/_astro', '/favicon'];

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Log public page views (fire-and-forget, never blocks the request)
  if (!SKIP_PATHS.some(p => pathname.startsWith(p)) && !pathname.includes('.')) {
    const referrer = context.request.headers.get('referer') ?? null;
    const country = context.request.headers.get('x-vercel-ip-country') ?? null;
    getSupabase()
      .from('page_views')
      .insert({ path: pathname, referrer, country })
      .then(() => {});
  }

  if (!pathname.startsWith('/admin')) return next();

  // Login page is always accessible
  if (pathname === '/admin' || pathname === '/admin/') return next();

  const token = context.cookies.get(COOKIE_NAME)?.value;
  const valid = token ? await verifySessionToken(token) : false;

  if (!valid) {
    // Return 404 — makes admin area invisible to outsiders
    return new Response(null, { status: 404 });
  }

  return next();
});
