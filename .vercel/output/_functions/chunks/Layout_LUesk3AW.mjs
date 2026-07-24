import { _ as createRenderInstruction, g as addAttribute, h as renderHead, i as renderComponent, m as maybeRenderHead, s as renderSlot, u as renderTemplate, w as createAstro } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
/* empty css                 */
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/Nav.astro
createAstro("https://astro.build");
var $$Nav = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Nav;
	const links = [
		{
			href: "/",
			label: "Hjem"
		},
		{
			href: "/tjenester",
			label: "Tjenester"
		},
		{
			href: "/portfolio",
			label: "Portfolio"
		},
		{
			href: "/om-oss",
			label: "Om oss"
		},
		{
			href: "/kontakt",
			label: "Kontakt"
		}
	];
	const current = Astro.url.pathname;
	return renderTemplate`${maybeRenderHead($$result)}<nav class="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800"><div class="max-w-6xl mx-auto px-6 flex items-center justify-between h-16"><a href="/" class="text-xl font-bold tracking-tight"><span class="text-white">MHH</span><span class="text-cyan-400">Digital</span></a><ul class="hidden md:flex gap-8 text-sm font-medium">${links.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")}${addAttribute(`transition-colors hover:text-cyan-400 ${current === link.href ? "text-cyan-400" : "text-gray-300"}`, "class")}>${link.label}</a></li>`)}</ul><a href="/kontakt" class="hidden md:inline-block bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold text-sm px-5 py-2 rounded-lg transition-colors">Ta kontakt</a><!-- Mobile menu button --><button id="menu-toggle" class="md:hidden text-gray-300" aria-label="Meny"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div><!-- Mobile menu --><div id="mobile-menu" class="hidden md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4"><ul class="flex flex-col gap-4 text-sm font-medium">${links.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")} class="block text-gray-300 hover:text-cyan-400 transition-colors">${link.label}</a></li>`)}</ul></div></nav>${renderScript($$result, "/Users/kjetil/mhhdigital/src/components/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/kjetil/mhhdigital/src/components/Nav.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-gray-900 border-t border-gray-800 mt-24"><div class="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500"><div><span class="text-white font-bold">MHH</span><span class="text-cyan-400 font-bold">Digital</span><p class="mt-1">Vi bygger digitale løsninger for bedrifter.</p></div><nav class="flex gap-6"><a href="/tjenester" class="hover:text-cyan-400 transition-colors">Tjenester</a><a href="/portfolio" class="hover:text-cyan-400 transition-colors">Portfolio</a><a href="/om-oss" class="hover:text-cyan-400 transition-colors">Om oss</a><a href="/kontakt" class="hover:text-cyan-400 transition-colors">Kontakt</a></nav><p>© ${(/* @__PURE__ */ new Date()).getFullYear()} mhhdigital.no</p></div></footer>`;
}, "/Users/kjetil/mhhdigital/src/components/Footer.astro", void 0);
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title, description = "MHH Digital – Vi lager apper og nettsider for bedrifter" } = Astro.props;
	return renderTemplate`<html lang="no"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title} | MHH Digital</title>${renderHead($$result)}</head><body class="min-h-screen flex flex-col">${renderComponent($$result, "Nav", $$Nav, {})}<main class="flex-1">${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/Users/kjetil/mhhdigital/src/layouts/Layout.astro", void 0);
//#endregion
export { $$Layout as t };
