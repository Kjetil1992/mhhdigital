import { O as defineMiddleware, _ as sequence } from "./chunks/render_B5czdnHN.mjs";
import { a as verifySessionToken, t as COOKIE_NAME } from "./chunks/auth_gHSJznGH.mjs";
//#endregion
//#region \0virtual:astro:middleware
var onRequest = sequence(defineMiddleware(async (context, next) => {
	const { pathname } = context.url;
	if (!pathname.startsWith("/admin")) return next();
	if (pathname === "/admin" || pathname === "/admin/") return next();
	const token = context.cookies.get(COOKIE_NAME)?.value;
	if (!(token ? await verifySessionToken(token) : false)) return new Response(null, { status: 404 });
	return next();
}));
//#endregion
export { onRequest };
