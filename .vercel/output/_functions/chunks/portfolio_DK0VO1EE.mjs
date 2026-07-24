import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_B_hu0jgv.mjs";
import { t as createComponent } from "./compiler_uT6rBWMH.mjs";
import { t as $$Layout } from "./Layout_LUesk3AW.mjs";
//#region src/pages/portfolio.astro
var portfolio_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Portfolio,
	file: () => $$file,
	url: () => $$url
});
var $$Portfolio = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Portfolio",
		"description": "Se eksempler på nettsider og apper vi har laget."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="pt-36 pb-16 px-6 text-center"><div class="max-w-2xl mx-auto"><span class="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Arbeidet vårt</span><h1 class="text-4xl md:text-5xl font-extrabold mt-3 mb-4">Portfolio</h1><p class="text-gray-400 text-lg">Et utvalg av prosjekter vi har levert.</p></div></section><section class="pb-24 px-6"><div class="max-w-5xl mx-auto"><!-- Tabs --><div class="flex gap-2 mb-10 bg-gray-900 border border-gray-800 rounded-xl p-1 w-fit mx-auto"><button id="tab-apper" onclick="showTab('apper')" class="tab-btn px-6 py-2 rounded-lg font-semibold text-sm transition-colors bg-cyan-500 text-gray-950">📱 Apper</button><button id="tab-nettsider" onclick="showTab('nettsider')" class="tab-btn px-6 py-2 rounded-lg font-semibold text-sm transition-colors text-gray-400 hover:text-white">🌐 Nettsider</button></div><!-- Apper --><div id="content-apper"><div class="bg-gray-900 border border-gray-800 rounded-2xl p-10 text-center text-gray-500"><div class="text-5xl mb-4">📱</div><p>Appprosjekter kommer snart.</p></div></div><!-- Nettsider --><div id="content-nettsider" class="hidden space-y-6"><div class="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden"><div class="p-8 md:p-10"><span class="text-xs text-orange-400 font-semibold uppercase tracking-wider">Nettside</span><h2 class="text-2xl font-bold mt-1 mb-3">Nordvik Bygg – demo for håndverksbedrift</h2><p class="text-gray-400 mb-6 max-w-2xl">En komplett demo-nettside for et fiktivt tømrer- og byggmesterfirma. Viser hvordan vi bygger nettsider som selger: tjenesteoversikt, prosjektgalleri, tydelig prosessforklaring og et innebygd tilbudsskjema som konverterer besøkende til henvendelser.</p><div class="flex flex-wrap gap-2 mb-8">${[
		"HTML/CSS",
		"Responsivt design",
		"Tilbudsskjema"
	].map((tag) => renderTemplate`<span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-md">${tag}</span>`)}</div><a href="/demo-nordvik-bygg.html" target="_blank" rel="noopener" class="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold px-6 py-3 rounded-xl transition-colors">Se live demo →</a></div></div><div class="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden"><div class="p-8 md:p-10"><span class="text-xs text-orange-400 font-semibold uppercase tracking-wider">Nettside</span><h2 class="text-2xl font-bold mt-1 mb-3">Berglund Grunn & Anlegg – demo for maskinentreprenør</h2><p class="text-gray-400 mb-6 max-w-2xl">Demo-nettside for en liten grunn- og maskinentreprenør. Viser frem tjenester, maskinpark og prosjektgalleri, med et eget tilbudsskjema for befaring — bygget for å konvertere besøkende til konkrete henvendelser.</p><div class="flex flex-wrap gap-2 mb-8">${[
		"HTML/CSS",
		"Responsivt design",
		"Tilbudsskjema"
	].map((tag) => renderTemplate`<span class="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-md">${tag}</span>`)}</div><a href="/demo-berglund-anlegg.html" target="_blank" rel="noopener" class="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold px-6 py-3 rounded-xl transition-colors">Se live demo →</a></div></div></div></div><div class="max-w-5xl mx-auto mt-10 text-center"><p class="text-gray-500 text-sm">Vil du se mer? Ta kontakt – vi viser deg gjerne mer av arbeidet vårt.</p><a href="/kontakt" class="inline-block mt-4 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">Send en melding →</a></div></section>` })}<script>
  function showTab(tab) {
    const tabs = ['apper', 'nettsider'];
    tabs.forEach(t => {
      const btn = document.getElementById('tab-' + t);
      const content = document.getElementById('content-' + t);
      if (t === tab) {
        btn.classList.add('bg-cyan-500', 'text-gray-950');
        btn.classList.remove('text-gray-400', 'hover:text-white');
        content.classList.remove('hidden');
      } else {
        btn.classList.remove('bg-cyan-500', 'text-gray-950');
        btn.classList.add('text-gray-400', 'hover:text-white');
        content.classList.add('hidden');
      }
    });
  }
<\/script>`;
}, "/Users/kjetil/mhhdigital/src/pages/portfolio.astro", void 0);
var $$file = "/Users/kjetil/mhhdigital/src/pages/portfolio.astro";
var $$url = "/portfolio";
//#endregion
//#region \0virtual:astro:page:src/pages/portfolio@_@astro
var page = () => portfolio_exports;
//#endregion
export { page };
