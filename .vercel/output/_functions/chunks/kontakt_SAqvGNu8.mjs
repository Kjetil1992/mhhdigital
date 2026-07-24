import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { t as $$Layout } from "./Layout_LUesk3AW.mjs";
//#region src/pages/kontakt.astro
var kontakt_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Kontakt,
	file: () => $$file,
	url: () => $$url
});
var $$Kontakt = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Kontakt",
		"description": "Ta kontakt med MHH Digital – vi svarer raskt."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="pt-36 pb-24 px-6 text-center"><div class="max-w-2xl mx-auto"><span class="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Si hei</span><h1 class="text-4xl md:text-5xl font-extrabold mt-3 mb-4">Ta kontakt</h1><p class="text-gray-400 text-lg">Vi svarer vanligvis innen én arbeidsdag.</p></div></section><section class="pb-24 px-6"><div class="max-w-xl mx-auto"><div class="bg-gray-900 border border-gray-800 rounded-2xl p-10 text-center"><div class="text-5xl mb-6">✉️</div><h2 class="text-2xl font-bold mb-3">Send oss en e-post</h2><p class="text-gray-400 mb-8">Fortell oss om prosjektet ditt, hva du trenger hjelp med, og så tar vi en uforpliktende prat.</p><a href="mailto:hei@mhhdigital.no" class="inline-block bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold px-8 py-4 rounded-xl text-lg transition-colors">hei@mhhdigital.no</a></div></div></section>` })}`;
}, "/Users/kjetil/mhhdigital/src/pages/kontakt.astro", void 0);
var $$file = "/Users/kjetil/mhhdigital/src/pages/kontakt.astro";
var $$url = "/kontakt";
//#endregion
//#region \0virtual:astro:page:src/pages/kontakt@_@astro
var page = () => kontakt_exports;
//#endregion
export { page };
