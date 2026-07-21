import { defineMiddleware } from 'astro:middleware';
import { verifySessionToken, COOKIE_NAME } from './lib/auth';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

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
