import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { i as verifyPassword, n as createSessionToken, r as getSessionCookieOptions, t as COOKIE_NAME } from "./auth_gHSJznGH.mjs";
//#region src/pages/api/auth/login.ts
var login_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request, cookies, redirect }) => {
	if (!await verifyPassword((await request.formData()).get("password")?.toString() ?? "")) return new Response(JSON.stringify({ error: "Feil passord" }), {
		status: 401,
		headers: { "Content-Type": "application/json" }
	});
	const token = await createSessionToken();
	const opts = getSessionCookieOptions();
	cookies.set(COOKIE_NAME, token, opts);
	return redirect("/admin/dashboard");
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/auth/login@_@ts
var page = () => login_exports;
//#endregion
export { page };
