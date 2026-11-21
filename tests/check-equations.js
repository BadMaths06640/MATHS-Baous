/* Vérification des questions « Résoudre : <équation> » (linéaires) :
   parse chaque membre (a·x + b en rationnels), résout, compare à la réponse déclarée. */
const fs = require("fs"), vm = require("vm");
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of ["data5e.js", "data4e.js", "data3e.js", "data.js"]) {
  vm.runInContext(fs.readFileSync(`${__dirname}/../${f}`, "utf8"), ctx, { filename: f });
}
const BANKS = ctx.window.BANKS;
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
function R(n, d = 1) { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d); return { n: n / g, d: d / g }; }
const add = (x, y) => R(x.n * y.d + y.n * x.d, x.d * y.d);
const sub = (x, y) => R(x.n * y.d - y.n * x.d, x.d * y.d);
const mul = (x, y) => R(x.n * y.n, x.d * y.d);
const div = (x, y) => { if (y.n === 0) throw new Error("div0"); return mul(x, R(y.d, y.n)); };
const toNum = (x) => x.n / x.d;

function tokenizeSide(s) {
  s = s.replace(/−/g, "-").replace(/×/g, "*").replace(/\s+/g, "");
  if (/[^0-9x+\-*/()]/.test(s)) return null;
  const raw = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (/[0-9]/.test(c)) { let j = i; while (j < s.length && /[0-9.]/.test(s[j])) j++; raw.push(s.slice(i, j)); i = j - 1; }
    else raw.push(c);
  }
  const t = [];
  for (let k = 0; k < raw.length; k++) {
    t.push(raw[k]);
    if (k + 1 < raw.length) {
      const c = raw[k], n = raw[k + 1];
      const implicit =
        /^[0-9.]+$/.test(c) && (n === "x" || n === "(") ||
        c === ")" && (n === "(" || n === "x" || /^[0-9.]+$/.test(n)) ||
        c === "x" && (n === "x" || n === "(" || /^[0-9.]+$/.test(n));
      if (implicit) t.push("*");
    }
  }
  return t;
}
function parseSide(toks) {
  let i = 0;
  const peek = () => toks[i];
  function atom() {
    const t = peek();
    if (t === undefined) throw new Error("fin inattendue");
    if (t === "(") { i++; const v = sum(); if (toks[i++] !== ")") throw new Error(") attendu"); return v; }
    if (/^[0-9.]+$/.test(t)) { i++; const [u, d2] = t.split("."); const b = d2 === undefined ? R(Number(u)) : R(Math.round(Number(t) * 10 ** d2.length), 10 ** d2.length); return { a: R(0), b }; }
    if (t === "x") { i++; return { a: R(1), b: R(0) }; }
    throw new Error("inattendu: " + t);
  }
  function unary() {
    if (peek() === "-") { i++; const v = unary(); return { a: mul(R(-1), v.a), b: mul(R(-1), v.b) }; }
    if (peek() === "+") { i++; return unary(); }
    return atom();
  }
  function muldiv() {
    let left = unary();
    while (peek() === "*" || peek() === "/") {
      const op = toks[i++];
      const right = unary();
      if (op === "*") {
        if (left.a.n !== 0 && right.a.n !== 0) throw new Error("quadratique");
        left = { a: add(mul(left.a, right.b), mul(right.a, left.b)), b: mul(left.b, right.b) };
      } else {
        if (right.a.n !== 0) throw new Error("division par x");
        left = { a: div(left.a, right.b), b: div(left.b, right.b) };
      }
    }
    return left;
  }
  function sum() {
    let left = muldiv();
    while (peek() === "+" || peek() === "-") {
      const op = toks[i++];
      const right = muldiv();
      left = op === "+" ? { a: add(left.a, right.a), b: add(left.b, right.b) } : { a: sub(left.a, right.a), b: sub(left.b, right.b) };
    }
    return left;
  }
  const v = sum();
  if (i !== toks.length) throw new Error("tokens restants: " + toks.slice(i));
  return v;
}
function solveEq(q) {
  const m = /^Résoudre\s*:\s*(.+)\s*$/.exec(q.q);
  if (!m) return null;
  const sides = m[1].split("=");
  if (sides.length !== 2) return null;
  const L = tokenizeSide(sides[0]), Rd = tokenizeSide(sides[1]);
  if (!L || !Rd) return null;
  try {
    const a1 = parseSide(L), a2 = parseSide(Rd);
    const den = sub(a1.a, a2.a), num = sub(a2.b, a1.b);
    if (den.n === 0) return null;
    return div(num, den);
  } catch { return null; }
}
function parseAnswer(s0) {
  const t = String(Array.isArray(s0) ? s0[0] : s0).replace(/−/g, "-").replace(/[ ]+/g, "").replace(/,/g, ".").replace(/^x=/i, "").trim();
  if (!/^-?\d+(?:\.\d+)?$/.test(t)) return null;
  const x = Number(t);
  if (Number.isInteger(x)) return R(x);
  const sc = 10 ** (t.split(".")[1] || "").length;
  return R(Math.round(x * sc), sc);
}
const eqR = (a, b) => a.d === b.d && a.n === b.n;

let flags = [], checked = 0;
for (const n of Object.keys(BANKS)) for (const t of BANKS[n].themes) {
  t.qs.forEach((q, i) => {
    const root = solveEq(q);
    if (!root) return;
    checked++;
    const r = parseAnswer(q.c ? q.c[q.a] : q.a);
    if (!r) { flags.push(`${n}/${t.id}[${i}]: réponse non numérique « ${q.c ? q.c[q.a] : q.a} »`); return; }
    if (!eqR(root, r)) flags.push(`${n}/${t.id}[${i}]: « ${q.q} » → x = ${toNum(root)} mais déclarée = ${toNum(r)}`);
  });
  for (const g of Object.keys(t.gen || {})) for (let k = 0; k < 40; k++) {
    let q; try { q = t.gen[g](); } catch { break; }
    const root = solveEq(q);
    if (!root) continue;
    checked++;
    const r = parseAnswer(q.a);
    if (!r) { flags.push(`${n}/${t.id}.gen${g}: réponse non numérique`); continue; }
    if (!eqR(root, r)) flags.push(`${n}/${t.id}.gen${g}: « ${q.q} » → x = ${toNum(root)} mais déclarée = ${toNum(r)}`);
  }
}
console.log(`Équations linéaires vérifiées : ${checked}`);
if (flags.length) { console.log(`\n⚠ ${flags.length} ANOMALIES :`); flags.forEach((f) => console.log(" - " + f)); process.exit(1); }
console.log("✓ Toutes les équations linéaires sont cohérentes");
