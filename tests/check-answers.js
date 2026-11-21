/* Vérification arithmétique automatisée :
   évalue exactement (rationnels) les questions « Calculer : <expression> »
   et contrôle que la réponse déclarée — ou le choix marqué correct en QCM — coïncide.
   Supporte : + − × ÷, ( ), [ ], fractions a/b, ² ³ et exposants ⁰-⁹, √ (carré parfait). */
const fs = require("fs"), vm = require("vm");
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of ["data5e.js", "data4e.js", "data3e.js", "data.js"]) {
  vm.runInContext(fs.readFileSync(`${__dirname}/../${f}`, "utf8"), ctx, { filename: f });
}
const BANKS = ctx.window.BANKS;

/* ---------- rationnels exacts ---------- */
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
function R(n, d = 1) { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d); return { n: n / g, d: d / g }; }
const add = (x, y) => R(x.n * y.d + y.n * x.d, x.d * y.d);
const sub = (x, y) => R(x.n * y.d - y.n * x.d, x.d * y.d);
const mul = (x, y) => R(x.n * y.n, x.d * y.d);
const div = (x, y) => { if (y.n === 0) throw new Error("÷0"); return mul(x, R(y.d, y.n)); };
const pw = (x, k) => { const e = Math.abs(k); let r = R(1); for (let i = 0; i < e; i++) r = mul(r, x); if (k < 0) r = div(R(1), r); return r; };
const toNum = (x) => x.n / x.d;
const SUP = { "⁰": 0, "¹": 1, "²": 2, "³": 3, "⁴": 4, "⁵": 5, "⁶": 6, "⁷": 7, "⁸": 8, "⁹": 9 };

function perfectSqrt(x) {
  const n = x.n, d = x.d;
  if (Math.abs(x.n) > 1e12) return null;
  const rn = Math.round(Math.sqrt(Math.abs(n))) * Math.sign(n), rd = Math.round(Math.sqrt(d));
  if (rn * rn === Math.abs(n) && rd * rd === d) return mul(R(Math.sign(n) * Math.abs(rn), 1), R(1, rd));
  return null;
}
function tokenize(src) {
  let s = src.replace(/−/g, "-").replace(/×/g, "*").replace(/÷/g, "/").replace(/\[/g, "(").replace(/\]/g, ")").replace(/\s+/g, "");
  s = s.replace(/(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)/g, "($1/$2)");
  const t = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/[0-9]/.test(c)) { let j = i; while (j < s.length && /[0-9.]/.test(s[j])) j++; t.push({ t: "num", v: s.slice(i, j) }); i = j; }
    else if (SUP[c] !== undefined) { let j = i, ex = ""; while (j < s.length && (SUP[s[j]] !== undefined || s[j] === "⁻")) { ex += s[j] === "⁻" ? "-" : SUP[s[j]]; j++; } t.push({ t: "exp", v: Number(ex) }); i = j; }
    else if ("√".includes(c)) { t.push({ t: "sqrt" }); i++; }
    else if ("+-*/()".includes(c)) { t.push({ t: c }); i++; }
    else return null;
  }
  return t;
}
function parseExpr(tokens) {
  let i = 0;
  const peek = () => tokens[i];
  function parseAdd() {
    let left = parseMul();
    while (peek() && (peek().t === "+" || peek().t === "-")) { const op = tokens[i++].t; const right = parseMul(); left = op === "+" ? add(left, right) : sub(left, right); }
    return left;
  }
  function parseMul() {
    let left = parseUnary();
    while (peek() && (peek().t === "*" || peek().t === "/")) { const op = tokens[i++].t; const right = parseUnary(); left = op === "*" ? mul(left, right) : div(left, right); }
    return left;
  }
  function parseUnary() {
    if (peek() && peek().t === "-") { i++; return mul(R(-1), parseUnary()); }
    if (peek() && peek().t === "+") { i++; return parseUnary(); }
    if (peek() && peek().t === "sqrt") { i++; return parseSqrt(); }
    return parsePower();
  }
  function parseSqrt() {
    const v = parsePower();
    const r = perfectSqrt(v);
    if (!r) throw new Error("√ non exact");
    return r;
  }
  function parsePower() {
    let base = parseAtom();
    while (peek() && peek().t === "exp") base = pw(base, tokens[i++].v);
    return base;
  }
  function parseAtom() {
    const t = tokens[i];
    if (!t) throw new Error("fin");
    if (t.t === "(") { i++; const v = parseAdd(); if (!tokens[i] || tokens[i].t !== ")") throw new Error(") attendu"); i++; return v; }
    if (t.t === "num") {
      i++;
      const num = parseFloat(t.v);
      if (Number.isInteger(num)) return R(num);
      const pt = t.v.indexOf(".");
      const scale = 10 ** (t.v.length - pt - 1);
      return R(Math.round(num * scale), scale);
    }
    throw new Error(`token inattendu: ${JSON.stringify(t)}`);
  }
  const v = parseAdd();
  if (i !== tokens.length) throw new Error("tokens restants");
  return v;
}
function tryEval(s) {
  const tokens = tokenize(s);
  if (!tokens || !tokens.length) return null;
  try { return parseExpr(tokens); } catch { return null; }
}
function parseAnswer(s) {
  let t = String(s).replace(/−/g, "-").replace(/[ ]+/g, "").replace(/,/g, ".").replace(/(cm|mm|dm|km|g|kg|l|ml|°|€)$/i, "").trim();
  if (/[√=]/.test(t)) return "SKIP";
  let m = /^(-?\d+(?:\.\d+)?\/-?\d+(?:\.\d+)?)$/.exec(t);
  if (m) { const [a, b] = m[1].split("/").map(Number); return div(R(Math.round(a * 1e6), 1e6), R(Math.round(b * 1e6), 1e6)); }
  if (/^-?\d+(?:\.\d+)?$/.test(t)) { const x = Number(t); if (Number.isInteger(x)) return R(x); const pt = t.indexOf("."); return R(Math.round(x * 1e6), 1e6); }
  return null;
}
const eqR = (a, b) => a.d === b.d && a.n === b.n;

let flags = [], checked = 0;
function checkQuestion(tag, q) {
  const m = /^Calculer\s*:\s*(.+)$/.exec(q.q);
  if (!m) return;
  const val = tryEval(m[1]);
  if (!val) return;
  checked++;
  const targets = [];
  if (q.c) targets.push({ kind: "choix correct", txt: String(q.c[q.a]) });
  else targets.push({ kind: "réponse", txt: String(q.a) });
  for (const tgt of targets) {
    const r = parseAnswer(tgt.txt);
    if (r === null) { flags.push(`${tag}: réponse non numérique « ${tgt.txt} » pour « ${m[1]} »`); continue; }
    if (r === "SKIP") continue;
    if (!eqR(val, r)) flags.push(`${tag}: « ${m[1]} » = ${toNum(val)} mais ${tgt.kind} déclarée = ${toNum(r)}`);
  }
  if (q.c) {
    let nbEq = 0, anySkip = false;
    for (const c of q.c) { const r = parseAnswer(c); if (r === "SKIP") { anySkip = true; continue; } if (r && eqR(val, r)) nbEq++; }
    if (!anySkip && nbEq === 0) flags.push(`${tag}: aucun choix ne vaut ${toNum(val)} ← « ${q.q} »`);
    if (nbEq > 1) flags.push(`${tag}: AMBIGUÏTÉ (${nbEq} choix égaux)`);
  }
}
function checkEquivalent(tag, q) {
  const m = /^Quelle expression est égale à (-?\d+(?:[.,]\d+)?) \?/.exec(q.q.replace(/−/g, "-"));
  if (!m) return;
  const target = parseAnswer(m[1]);
  if (!target || target === "SKIP") return;
  let vals = q.c.map((c) => tryEval(c));
  if (vals.some((v) => v === null)) return;
  checked++;
  const good = vals.map((v, i) => (eqR(v, target) ? i : -1)).filter((i) => i >= 0);
  if (good.length === 0) flags.push(`${tag}: aucune expression ne vaut ${m[1]}`);
  else if (!good.includes(q.a)) flags.push(`${tag}: l'index du correct devrait être ${good[0]}`);
  else if (good.length > 1) flags.push(`${tag}: ambiguïté (${good.length} expressions valent ${m[1]})`);
}
for (const n of Object.keys(BANKS)) for (const t of BANKS[n].themes) {
  t.qs.forEach((q, i) => { checkQuestion(`${n}/${t.id}[${i}]`, q); checkEquivalent(`${n}/${t.id}[${i}]`, q); });
  for (const g of Object.keys(t.gen || {})) for (let k = 0; k < 40; k++) {
    let q;
    try { q = t.gen[g](); } catch (e) { flags.push(`${n}/${t.id}.gen${g}: erreur génération (${e.message})`); break; }
    checkQuestion(`${n}/${t.id}.gen${g}`, q); checkEquivalent(`${n}/${t.id}.gen${g}`, q);
  }
}
console.log(`Expressions évaluées exactement : ${checked}`);
if (flags.length) { console.log(`\n⚠ ${flags.length} ANOMALIES :`); flags.forEach((f) => console.log(" - " + f)); process.exit(1); }
console.log("✓ Aucune incohérence arithmétique détectée");
