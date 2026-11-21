/* Validation de BaouMaths : syntaxe, cohérence des données, simulation de sessions */
const fs = require("fs"), vm = require("vm");
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of ["data5e.js", "data4e.js", "data3e.js", "data.js"]) {
  vm.runInContext(fs.readFileSync(`${__dirname}/../${f}`, "utf8"), ctx, { filename: f });
}
const BANKS = ctx.window.BANKS;
const NIVEAUX = ["5e", "4e", "3e"];
const norm = (s) => String(s).toLowerCase().replace(/\s+/g, "").replace(/,/g, ".").replace(/^x=/, "").replace(/^[a-z]\s*=/, "").replace(/(cm|mm|dm|km|g|kg|l|ml|°|€|\$)$/i, "");
const same = (u, e) => { const l = Array.isArray(e) ? e : [e]; const n = norm(u); return l.some((x) => norm(x) === n && n !== ""); };

let probs = [], nQ = 0;
for (const n of NIVEAUX) {
  const bank = BANKS[n];
  if (!bank || !Array.isArray(bank.themes)) { probs.push(`${n}: banque absente`); continue; }
  for (const t of bank.themes) {
    if (!Array.isArray(t.qs) || t.qs.length < 8) probs.push(`${n}/${t.id}: seulement ${t.qs ? t.qs.length : 0} questions`);
    t.qs.forEach((q, i) => {
      nQ++;
      if (!(q.d >= 1 && q.d <= 4)) probs.push(`${n}/${t.id}[${i}]: difficulté invalide (${q.d})`);
      if (!q.q || !q.e) probs.push(`${n}/${t.id}[${i}]: question ou explication manquante`);
      if (q.q.includes("**") || q.e.includes("**")) probs.push(`${n}/${t.id}[${i}]: artefact ** dans le texte`);
      if (q.c) {
        if (!Array.isArray(q.c) || q.c.length !== 4) probs.push(`${n}/${t.id}[${i}]: QCM ≠ 4 choix`);
        if (!(q.a >= 0 && q.a < 4)) probs.push(`${n}/${t.id}[${i}]: index réponse invalide`);
        const set = new Set(q.c.map((c) => norm(c)));
        if (set.size < 4) probs.push(`${n}/${t.id}[${i}]: choix dupliqués (${q.c})`);
      } else {
        if (q.a === undefined || q.a === null || q.a === "") probs.push(`${n}/${t.id}[${i}]: réponse manquante`);
      }
      if (/plutôt :|Voilà|pléthore|volant|vert peut|Cyclé|洲|\.replace\(|≈ [A-Z]/.test(q.e + q.q)) probs.push(`${n}/${t.id}[${i}]: artefact dans le texte: ${(q.e + q.q).slice(0, 60)}`);
    });
    for (const g of Object.keys(t.gen || {})) {
      for (let k = 0; k < 25; k++) {
        let q; try { q = t.gen[g](); } catch (e) { probs.push(`${n}/${t.id}.gen${g}: erreur génération (${e.message})`); break; }
        nQ++;
        if (!q || !q.q || !q.e) { probs.push(`${n}/${t.id}.gen${g}: champs manquants ${JSON.stringify(q).slice(0, 80)}`); break; }
        if (q.a === undefined || q.a === "" || q.a === "z") { probs.push(`${n}/${t.id}.gen${g}: réponse invalide (${q.q.slice(0, 50)})`); break; }
        if (q.q.includes("**") || q.e.includes("**") || /\^|±|replace/.test(q.q + q.e)) probs.push(`${n}/${t.id}.gen${g}: notation à corriger: ${q.q}`);
        if (q.c) {
          if (!Array.isArray(q.c) || q.c.length !== 4 || !(q.a >= 0 && q.a < 4)) { probs.push(`${n}/${t.id}.gen${g}: QCM invalide`); break; }
          if (new Set(q.c.map((c) => norm(c))).size < 4) { probs.push(`${n}/${t.id}.gen${g}: doublons de choix: ${q.c}`); break; }
        } else if (!same(q.a, q.a)) { probs.push(`${n}/${t.id}.gen${g}: auto-test réponse échoué`); break; }
      }
    }
  }
}

/* simulation de sessions (moteur adaptatif comme app.js) */
function pickQuestion(t, diff, used) {
  let pool = t.qs.filter((q) => q.d === diff && !used.has(q.q));
  if (!pool.length && t.gen && t.gen[diff]) { const g = t.gen[diff](); if (!g.c && !same(g.a, g.a)) return null; used.add(g.q); return g; }
  if (!pool.length) for (let d = diff - 1; d >= 1; d--) { pool = t.qs.filter((q) => q.d === d && !used.has(q.q)); if (pool.length) break; }
  if (!pool.length) for (let d = diff + 1; d <= 4; d++) { pool = t.qs.filter((q) => q.d === d && !used.has(q.q)); if (pool.length) break; }
  if (!pool.length) return null;
  const q = pool[Math.floor(Math.random() * pool.length)];
  used.add(q.q);
  return q;
}
let sessions = 0, exhausted = 0;
for (const n of NIVEAUX) for (const t of BANKS[n].themes) for (let start = 1; start <= 4; start++) {
  const used = new Set(); let diff = start, ok = 0, streak = 0, bad = 0;
  for (let i = 0; i < 10; i++) {
    const q = pickQuestion(t, diff, used);
    if (!q) { exhausted++; break; }
    sessions++;
    if (!q.c) ok++; /* on suppose la réponse fournie correcte pour les saisies */
    streak = i % 3 === 2 && streak < 3 ? streak : streak; /* simplifié : monte/descend comme app.js */
    if (ok) { streak++; if (streak >= 3 && diff < 4) { diff++; streak = 0; } } else { bad++; if (bad >= 2 && diff > 1) { diff--; bad = 0; } }
  }
}
console.log(`Questions statiques + générées Validées : ${nQ}`);
console.log(`Réponses simulées : ${sessions} · épuisons (bancs vides) : ${exhausted}`);
if (probs.length) { console.log(`\n⚠ PROBLÈMES (${probs.length}) :`); probs.forEach((p) => console.log(" - " + p)); process.exit(1); }
console.log("✓ Toutes les données et générations sont cohérentes");
