/* ================= BaouMaths — fusion des aides et résumés dans les banques ================= */
window.AIDES = { "5e": window.AIDE_5E, "4e": window.AIDE_4E, "3e": window.AIDE_3E };
(function () {
  for (const n of Object.keys(window.AIDES)) {
    const bank = window.BANKS[n];
    if (!bank) continue;
    for (const [tid, aid] of Object.entries(window.AIDES[n])) {
      const t = bank.themes.find((x) => x.id === tid);
      if (!t) continue;
      if (Array.isArray(aid.resume) && aid.resume.length) t.resume = aid.resume;
      (aid.qs || []).forEach((h, i) => { if (h) t.qs[i].h = h; });
      if (aid.genH) t.genH = aid.genH;
    }
  }
})();
