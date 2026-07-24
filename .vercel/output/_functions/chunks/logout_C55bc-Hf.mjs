import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as COOKIE_NAME } from "./auth_gHSJznGH.mjs";
//#region src/pages/api/auth/logout.ts
var logout_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ cookies, redirect }) => {
	cookies.delete(COOKIE_NAME, { path: "/" });
	return redirect("/admin");
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/auth/logout@_@ts
var page = () => logout_exports;
//#endregion
export { page };
