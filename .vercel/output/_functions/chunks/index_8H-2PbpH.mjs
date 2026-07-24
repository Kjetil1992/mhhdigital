import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { h as renderHead, u as renderTemplate, w as createAstro } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { a as verifySessionToken, t as COOKIE_NAME } from "./auth_gHSJznGH.mjs";
//#region src/pages/admin/index.astro
var admin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const token = Astro.cookies.get(COOKIE_NAME)?.value;
	if (token ? await verifySessionToken(token) : false) return Astro.redirect("/admin/dashboard");
	const error = Astro.url.searchParams.get("error");
	return renderTemplate`<html lang="no" data-astro-cid-nsou3le4><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin – MHH Digital</title>${renderHead($$result)}</head><body data-astro-cid-nsou3le4><div class="card" data-astro-cid-nsou3le4><h1 data-astro-cid-nsou3le4>MHH Digital</h1><p class="sub" data-astro-cid-nsou3le4>Admin — kun for intern bruk</p>${error && renderTemplate`<div class="error" data-astro-cid-nsou3le4>Feil passord. Prøv igjen.</div>`}<form method="POST" action="/api/auth/login" data-astro-cid-nsou3le4><label for="password" data-astro-cid-nsou3le4>Passord</label><input id="password" name="password" type="password" autofocus autocomplete="current-password" required data-astro-cid-nsou3le4><button type="submit" data-astro-cid-nsou3le4>Logg inn</button></form></div></body></html>`;
}, "/Users/kjetil/mhhdigital/src/pages/admin/index.astro", void 0);
var $$file = "/Users/kjetil/mhhdigital/src/pages/admin/index.astro";
var $$url = "/admin";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/index@_@astro
var page = () => admin_exports;
//#endregion
export { page };
