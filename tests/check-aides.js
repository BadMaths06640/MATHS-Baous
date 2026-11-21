/* Vérification des résumés de cours, des aides par question et des liens vidéo */
const ALLOWED_HOSTS = ["youtube.com", "youtu.be", "www.youtube.com", "lumni.fr", "www.lumni.fr", "france.tv", "www.france.tv"];
const fs = require("fs"), vm = require("vm");
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of ["data5e.js", "data4e.js", "data3e.js", "data.js", "aide5e.js", "aide4e.js", "aide3e.js", "aides.js"]) {
  vm.runInContext(fs.readFileSync(`${__dirname}/../${f}`, "utf8"), ctx, { filename: f });
}
const BANKS = ctx.window.BANKS;
const probs = [];
let nRes = 0, nResCards = 0, nH = 0, nQs = 0, nGen = 0, nGenCouv = 0, nGenTotal = 0, nVid = 0;
for (const n of ["5e", "4e", "3e"]) {
  for (const t of BANKS[n].themes) {
    if (!Array.isArray(t.resume) || !t.resume.length) {
      probs.push(`${n}/${t.id}: résumé de cours absent`);
    } else {
      nRes++;
      t.resume.forEach((c, i) => {
        nResCards++;
        if (!c.t || !c.d) probs.push(`${n}/${t.id}.resume[${i}]: carte incomplète (t/d requis)`);
        if (!c.f) probs.push(`${n}/${t.id}.resume[${i}]: pas de formule f`);
        if (/\\n(?!\\)/.test(JSON.stringify(c.f))) { /* ok : vrai \n */ }
      });
    }
    nQs += t.qs.length;
    const nbH = t.qs.filter((q) => typeof q.h === "string" && q.h.includes("Astuce") && q.h.includes("Exemple")).length;
    if (nbH !== t.qs.length) probs.push(`${n}/${t.id}: ${t.qs.length - nbH} question(s) sans aide complète`);
    nH += nbH;
    for (const g of Object.keys(t.gen || {})) {
      nGenTotal++;
      if (!t.genH || typeof t.genH[g] !== "string" || !t.genH[g].includes("Exemple")) {
        probs.push(`${n}/${t.id}: genH manquant pour difficulté ${g}`);
      } else { nGenCouv++; }
    }
    for (const g of Object.keys(t.genH || {})) {
      if (!t.gen[g]) probs.push(`${n}/${t.id}: genH orphelin pour difficulté ${g}`);
    }
    if (!Array.isArray(t.videos) || !t.videos.length) {
      probs.push(`${n}/${t.id}: aucune vidéo`);
    } else {
      t.videos.forEach((v, i) => {
        nVid++;
        if (!v || !/^https:\/\//.test(v.u || "")) probs.push(`${n}/${t.id}.videos[${i}]: URL non https`);
        else {
          const host = (v.u.match(/^https:\/\/([^/?#]+)/) || [])[1] || "";
          if (!ALLOWED_HOSTS.includes(host)) probs.push(`${n}/${t.id}.videos[${i}]: hôte non autorisé ${host}`);
        }
        if (!v || !String(v.t || "").trim()) probs.push(`${n}/${t.id}.videos[${i}]: titre absent`);
      });
    }
  }
}
const NTH = ["5e", "4e", "3e"].reduce((a, n) => a + BANKS[n].themes.length, 0);
console.log(`Résumés de cours : ${nRes}/${NTH} thèmes (${nResCards} cartes)`);
console.log(`Aides par question : ${nH}/${nQs} | aides générées : ${nGenCouv}/${nGenTotal}`);
console.log(`Vidéos : ${nVid} liens sur les ${NTH} thèmes`);
if (probs.length) { console.log(`\n⚠ PROBLÈMES (${probs.length}) :`); probs.forEach((p) => console.log(" - " + p)); process.exit(1); }
console.log("✓ Résumés et aides couvrent tous les thèmes et toutes les questions");
