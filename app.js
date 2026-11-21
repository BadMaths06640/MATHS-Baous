/* ================= BaouMaths — moteur de l'application =================
   100 % local : aucune requête réseau, aucun cookie, aucune donnée personnelle. */

"use strict";

/* ---------- utilitaires ---------- */
const $ = (id) => document.getElementById(id);
const BANKS = { "5e": window.BANK_5E, "4e": window.BANK_4E, "3e": window.BANK_3E };
const NIVEAUX = ["5e", "4e", "3e"];
const MASTERY_LABELS = ["", "maîtrise fragile", "maîtrise satisfaite", "bonne maîtrise", "très bonne maîtrise"];
const DIFF_LABELS = ["", "Découverte", "Application", "Maîtrise", "Expertise"];
const SETUP_LABELS = ["", "Je débute", "J'ai les bases", "Je maîtrise bien", "Je veux des défis"];
const SETUP_DESC = ["",
  "Je découvre le thème : questions simples avec rappels de cours.",
  "J'ai compris le cours : questions d'application directes.",
  "Je suis à l'aise : questions de synthèse et pièges classiques.",
  "Expert : calculs en plusieurs étapes et questions de concours."
];
const SESSION_LEN = 10;
const STORE_KEY = "baoumaths_v1";

function starsHTML(n) {
  let s = "";
  for (let i = 1; i <= 3; i++) s += `<span class="${i <= n ? "on" : ""}">★</span>`;
  return s;
}
function norm(s) {
  return String(s).toLowerCase()
    .replace(/\s+/g, "")
    .replace(/,/g, ".")
    .replace(/^x=/, "")
    .replace(/^[a-z]\s*=/, "")
    .replace(/(cm|mm|dm|km|g|kg|l|ml|°|€|\$)$/i, "")
    .replace(/\./g, ".");
}
function sameAnswer(user, expected) {
  const list = Array.isArray(expected) ? expected : [expected];
  const u = norm(user);
  return list.some((e) => norm(e) === u && u !== "");
}

/* ---------- progression locale (RGPD : rien ailleurs) ---------- */
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
  catch { return {}; }
}
let PROGRESS = loadProgress();
function saveProgress() { localStorage.setItem(STORE_KEY, JSON.stringify(PROGRESS)); }
function themeProgress(niveau, themeId) {
  PROGRESS[niveau] = PROGRESS[niveau] || {};
  PROGRESS[niveau][themeId] = PROGRESS[niveau][themeId] || { stars: 0, mastery: 0, done: 0 };
  return PROGRESS[niveau][themeId];
}
function exportCode() {
  try { return btoa(unescape(encodeURIComponent(JSON.stringify({ v: 1, p: PROGRESS })))); }
  catch { return ""; }
}
function importCode(code) {
  const data = JSON.parse(decodeURIComponent(escape(atob(code.trim()))));
  if (!data || data.v !== 1 || typeof data.p !== "object") throw new Error("format");
  for (const n of NIVEAUX) {
    if (!data.p[n]) continue;
    PROGRESS[n] = PROGRESS[n] || {};
    for (const t of Object.keys(data.p[n])) {
      const cur = themeProgress(n, t), src = data.p[n][t];
      cur.stars = Math.max(cur.stars || 0, src.stars || 0);
      cur.mastery = Math.max(cur.mastery || 0, src.mastery || 0);
      cur.done += src.done || 0;
    }
  }
  saveProgress();
}
function wipeAll() { localStorage.removeItem(STORE_KEY); PROGRESS = {}; }

/* ---------- navigation ---------- */
let STATE = { niveau: null, theme: null, mastery: 1, session: null };
function showView(id) {
  document.querySelectorAll(".view").forEach((v) => v.classList.add("hidden"));
  $(id).classList.remove("hidden");
  window.scrollTo({ top: 0 });
}

function home() {
  NIVEAUX.forEach((n) => {
    const done = BANKS[n].themes.filter((t) => (PROGRESS[n] || {})[t.id]).length;
    $(`sub-${n}`).textContent = `${BANKS[n].themes.length} thèmes · ${done} travaillé${done > 1 ? "s" : ""}`;
  });
  showView("view-level");
}

function renderThemes() {
  const bank = BANKS[STATE.niveau];
  $("themes-title").innerHTML = `Thèmes de ${STATE.niveau === "5e" ? "5<sup>e</sup>" : STATE.niveau === "4e" ? "4<sup>e</sup>" : "3<sup>e</sup>"}`;
  const list = $("themes-list");
  list.innerHTML = "";
  bank.themes.forEach((t) => {
    const p = (PROGRESS[STATE.niveau] || {})[t.id];
    const btn = document.createElement("button");
    btn.className = "theme-card";
    const chapLabel = Array.isArray(t.chap) && t.chap.length
      ? `<div class="theme-chap">Chap. ${t.chap.join(" · ")} — progression annuelle</div>` : "";
    btn.innerHTML = `
      <div class="theme-head"><span class="theme-icon">${t.icone}</span><span class="theme-title">${t.titre}</span></div>
      ${chapLabel}
      <div class="theme-stars">${starsHTML(p ? p.stars : 0)}</div>
      <div class="theme-mastery">${p && p.mastery ? MASTERY_LABELS[p.mastery] : "pas encore évalué"}</div>`;
    btn.addEventListener("click", () => { STATE.theme = t; renderSetup(); });
    list.appendChild(btn);
  });
  showView("view-themes");
}

function renderSetup() {
  const t = STATE.theme;
  const blocCours = t.resume && t.resume.length
    ? `<div class="resume-grid">${t.resume.map((c) =>
        `<div class="resume-card"><div class="res-t">${c.t}</div>${c.f ? `<div class="res-f">${c.f}</div>` : ""}${c.d ? `<div class="res-d">${c.d}</div>` : ""}</div>`
      ).join("")}</div>`
    : `<div class="notion">${t.notion}</div>`;
  const chapLabel = Array.isArray(t.chap) && t.chap.length
    ? `<p class="theme-chap">Chapitres ${t.chap.join(" · ")} de la progression annuelle</p>` : "";
  let inner = `<h2>${t.icone} ${t.titre}</h2>${chapLabel}${blocCours}
  <p><b>Quel est ton niveau actuel sur ce thème ?</b></p><div class="mastery-grid">`;
  for (let m = 1; m <= 4; m++) {
    const saved = (PROGRESS[STATE.niveau] || {})[t.id];
    inner += `<button class="mastery-opt m${m} ${saved && saved.mastery === m ? "sel" : ""}" data-m="${m}">
      <span class="dot"></span><b>${SETUP_LABELS[m]}</b><span>${SETUP_DESC[m]}</span></button>`;
  }
  inner += `</div><button class="btn primary" id="btn-start">🚀 Commencer (10 questions)</button>`;
  $("setup-card").innerHTML = inner;
  document.querySelectorAll(".mastery-opt").forEach((b) =>
    b.addEventListener("click", () => {
      document.querySelectorAll(".mastery-opt").forEach((x) => x.classList.remove("sel"));
      b.classList.add("sel");
      STATE.mastery = Number(b.dataset.m);
    })
  );
  const saved = (PROGRESS[STATE.niveau] || {})[t.id];
  STATE.mastery = (saved && saved.mastery) || 1;
  document.querySelectorAll(".mastery-opt")[STATE.mastery - 1].classList.add("sel");
  $("btn-start").addEventListener("click", startSession);
  showView("view-setup");
}

/* ---------- moteur adaptatif ---------- */
function pickQuestion(diff, used) {
  const t = STATE.theme;
  let pool = t.qs.filter((q) => q.d === diff && !used.has(q.q));
  if (!pool.length && t.gen && t.gen[diff]) pool = [null];
  if (!pool.length) {
    for (let d2 = diff - 1; d2 >= 1 && !pool.length; d2--) pool = t.qs.filter((q) => q.d === d2 && !used.has(q.q));
    for (let d2 = diff + 1; d2 <= 4 && !pool.length; d2++) pool = t.qs.filter((q) => q.d === d2 && !used.has(q.q));
  }
  if (!pool.length) pool = t.qs.filter((q) => !used.has(q.q));
  if (!pool.length) return null;
  if (pool.length === 1 && pool[0] === null) {
    const g = t.gen[diff]();
    if (!g.h && t.genH && t.genH[diff]) g.h = t.genH[diff];
    used.add(g.q);
    return g;
  }
  const q = pool[Math.floor(Math.random() * pool.length)];
  used.add(q.q);
  return { ...q };
}

function startSession() {
  STATE.session = {
    i: 0, correct: 0, answers: [], diff: STATE.mastery,
    goodStreak: 0, badStreak: 0, maxDiff: STATE.mastery, used: new Set()
  };
  showView("view-quiz");
  nextQuestion();
}

function nextQuestion() {
  const s = STATE.session;
  if (s.i >= SESSION_LEN) return endSession();
  const q = pickQuestion(s.diff, s.used);
  if (!q) return endSession();
  s.current = q; s.answered = false;
  s.i++;
  $("quiz-title").textContent = `${STATE.theme.icone} ${STATE.theme.titre}`;
  $("quiz-counter").textContent = `Question ${s.i} / ${SESSION_LEN}`;
  $("quiz-diff").textContent = `Niveau ${s.diff} · ${DIFF_LABELS[s.diff]}`;
  $("quiz-diff").className = `diff-pill d${s.diff}`;
  $("quiz-progress").style.width = `${((s.i - 1) / SESSION_LEN) * 100}%`;
  $("question-text").textContent = q.q;
  $("feedback").className = "feedback hidden";
  $("feedback").innerHTML = "";
  document.querySelectorAll(".hint-toggle").forEach((b) => b.remove());
  const hz = $("hint-zone");
  hz.classList.add("hidden"); hz.innerHTML = "";
  const hintBtn = document.createElement("button");
  hintBtn.className = "btn-ghost hint-toggle";
  hintBtn.id = "btn-hint";
  hintBtn.textContent = "💡 Aide (astuce + exemple)";
  hintBtn.addEventListener("click", () => {
    if (!hz.classList.contains("hidden")) { hz.classList.add("hidden"); return; }
    hz.innerHTML = "<b class=\"hint-label\">💡 Astuce & exemple</b>\n" + (typeof q.h === "string" && q.h.trim()
      ? q.h
      : `Revois ces repères du cours : ${STATE.theme.resume ? STATE.theme.resume.map((c) => c.f || c.d).filter(Boolean).join(" · ") : STATE.theme.notion}`);
    hz.classList.remove("hidden");
  });
  $("answer-zone").before(hintBtn);
  const z = $("answer-zone");
  z.innerHTML = "";
  $("quiz-actions").innerHTML = "";

  if (q.c) {
    const wrap = document.createElement("div");
    wrap.className = "choices";
    const order = [...q.c.keys()];
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]];
    }
    order.forEach((idx, pos) => {
      const b = document.createElement("button");
      b.className = "choice";
      b.textContent = q.c[idx];
      b.addEventListener("click", () => answer(pos));
      wrap.appendChild(b);
    });
    z.appendChild(wrap);
    s.orderMap = order;
  } else {
    const wrap = document.createElement("div");
    wrap.className = "input-answer";
    wrap.innerHTML = `<input id="ans-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Ta réponse…">
      <button class="check-btn" id="btn-check">Vérifier ✓</button>`;
    z.appendChild(wrap);
    $("btn-check").addEventListener("click", () => answerInput());
    $("ans-input").addEventListener("keydown", (e) => { if (e.key === "Enter") answerInput(); });
    $("ans-input").focus();
  }
}

function answer(pos) {
  const s = STATE.session;
  if (s.answered) return;
  const q = s.current;
  document.querySelectorAll(".choice").forEach((b, k) => {
    b.disabled = true;
    if (s.orderMap[k] === q.a) b.classList.add("correct");
    else if (k === pos) b.classList.add("wrong");
  });
  finishAnswer(s.orderMap[pos] === q.a, q.e || "");
}

function answerInput() {
  const s = STATE.session;
  if (s.answered) return;
  const val = $("ans-input").value;
  if (!val.trim()) return;
  finishAnswer(sameAnswer(val, s.current.a), s.current.e || "");
}

function finishAnswer(ok, explanation) {
  const s = STATE.session;
  s.answered = true;
  if (ok) { s.correct++; s.goodStreak++; s.badStreak = 0; }
  else { s.badStreak++; s.goodStreak = 0; }
  const prev = s.diff;
  if (s.goodStreak >= 3 && s.diff < 4) { s.diff++; s.goodStreak = 0; }
  if (s.badStreak >= 2 && s.diff > 1) { s.diff--; s.badStreak = 0; }
  s.maxDiff = Math.max(s.maxDiff, s.diff);
  s.answers.push(ok);
  const fb = $("feedback");
  fb.className = `feedback ${ok ? "ok" : "ko"}`;
  fb.innerHTML = `<span class="verdict ${ok ? "ok" : "ko"}">${ok ? "✅ Bravo, c'est correct !" : "❌ Pas tout à fait…"}</span>
    ${explanation ? `<span class="exp">${explanation}</span>` : ""}
    ${s.diff !== prev && s.i < SESSION_LEN ? `<span class="exp">Niveau suivant : <b>${DIFF_LABELS[s.diff]}</b></span>` : ""}`;
  $("quiz-progress").style.width = `${(s.i / SESSION_LEN) * 100}%`;
  const act = $("quiz-actions");
  act.innerHTML = `<button class="btn primary" id="btn-next">${s.i >= SESSION_LEN ? "Voir mon bilan →" : "Question suivante →"}</button>`;
  $("btn-next").focus();
  $("btn-next").addEventListener("click", nextQuestion);
}

function endSession() {
  const s = STATE.session;
  const pct = Math.round((s.correct / SESSION_LEN) * 100);
  const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0;
  const p = themeProgress(STATE.niveau, STATE.theme.id);
  p.stars = Math.max(p.stars, stars);
  p.done++;
  p.mastery = pct >= 70 ? Math.max(p.mastery, s.maxDiff) : Math.max(1, Math.max(p.mastery - 1, Math.min(s.maxDiff, 2)));
  saveProgress();
  $("result-stars").innerHTML = starsHTML(stars);
  $("result-title").textContent = pct >= 90 ? "Excellent travail ! 🏆" : pct >= 70 ? "Bien joué ! 👍" : pct >= 50 ? "C'est un début, continue ! 💪" : "Courage, ça va venir ! 🌱";
  $("result-sub").textContent = `${pct} % de réussite sur ce thème.`;
  $("result-stats").innerHTML = `
    <div class="result-stat"><b>${s.correct}/${SESSION_LEN}</b><span>réponses justes</span></div>
    <div class="result-stat"><b>${DIFF_LABELS[s.maxDiff]}</b><span>niveau atteint</span></div>
    <div class="result-stat"><b>${MASTERY_LABELS[p.mastery]}</b><span>maîtrise estimée</span></div>`;
  showView("view-result");
}

/* ---------- tableau de bord ---------- */
function renderProgress() {
  let html = "";
  NIVEAUX.forEach((n) => {
    const bank = BANKS[n];
    let totalStars = 0, maxStars = bank.themes.length * 3, done = 0;
    html += `<h3 style="margin:1.2rem 0 .5rem">Niveau ${n === "5e" ? "5e" : n === "4e" ? "4e" : "3e"} — ${bank.themes.length} thèmes</h3><div class="dash-grid">`;
    bank.themes.forEach((t) => {
      const p = (PROGRESS[n] || {})[t.id];
      const st = p ? p.stars : 0;
      totalStars += st; done += p ? 1 : 0;
      html += `<div class="dash-item">
        <div class="dt"><span>${t.icone}</span><span>${t.titre}</span></div>
        <div class="dm"><span>${starsHTML(st)}</span><span>${p ? MASTERY_LABELS[p.mastery] : "—"} · ${p ? p.done : 0} session${p && p.done > 1 ? "s" : ""}</span></div>
      </div>`;
    });
    html += `</div><p class="hint" style="margin-top:.5rem">${done} thème${done > 1 ? "s" : ""} travaillé${done > 1 ? "s" : ""} sur ${bank.themes.length} · ${totalStars} étoiles sur ${maxStars}</p>`;
  });
  $("progress-content").innerHTML = html;
  ["io-zone", "btn-io-save"].forEach((id) => $(id).classList.add("hidden"));
  showView("view-progress");
}

/* ---------- branchements ---------- */
document.querySelectorAll(".level-card").forEach((c) =>
  c.addEventListener("click", () => { STATE.niveau = c.dataset.niveau; renderThemes(); })
);
$("btn-home").addEventListener("click", home);
$("btn-back-level").addEventListener("click", home);
$("btn-back-themes").addEventListener("click", () => { STATE.theme = null; renderThemes(); });
$("btn-back-progress").addEventListener("click", home);
$("btn-back-about").addEventListener("click", () => (STATE.niveau ? renderThemes() : home()));
$("btn-progress").addEventListener("click", renderProgress);
$("btn-about").addEventListener("click", () => showView("view-about"));
document.querySelectorAll("[data-open-about]").forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); showView("view-about"); }));
$("btn-again").addEventListener("click", startSession);
$("btn-other-theme").addEventListener("click", () => renderThemes());
$("btn-home-2").addEventListener("click", home);
$("btn-export").addEventListener("click", () => {
  $("io-zone").value = exportCode();
  $("io-zone").classList.remove("hidden");
  $("io-zone").value = exportCode();
  $("io-zone").select();
  $("btn-io-save").classList.add("hidden");
});
$("btn-import").addEventListener("click", () => {
  $("io-zone").value = "";
  $("io-zone").classList.remove("hidden");
  $("btn-io-save").classList.remove("hidden");
  $("io-zone").placeholder = "Colle ici le code de progression reçu, puis clique sur Enregistrer.";
  $("io-zone").focus();
});
$("btn-io-save").addEventListener("click", () => {
  try { importCode($("io-zone").value); renderProgress(); }
  catch { alert("Code invalide. Vérifie que tu as bien copié le code complet."); }
});
$("btn-wipe").addEventListener("click", () => {
  if (confirm("Effacer définitivement toute ta progression enregistrée sur cet appareil ?")) {
    wipeAll();
    renderProgress();
  }
});

home();
