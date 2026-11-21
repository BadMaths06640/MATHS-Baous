/* ================= BaouMaths — banque de questions 3e ================= */
window.BANK_3E = {
  themes: [
{
      id: "fractions3", titre: "Fractions et nombres relatifs", icone: "➗",
      chap: [1],
      notion: "Relatifs : multiplier ou diviser — on effectue le calcul et on applique la règle des signes (pair de signes − : positif ; impair : négatif).\nAdditionner ou soustraire des fractions : les ramener au même dénominateur, puis opérer sur les numérateurs.\nMultiplier des fractions : numérateurs entre eux, dénominateurs entre eux.\nDiviser par une fraction : multiplier par son inverse (l'inverse de a/b est b/a).",
      qs: [
        { d:1, q:"Le produit de trois nombres négatifs est...", c:["négatif","positif","ça dépend des valeurs","nul"], a:0, e:"Nombre impair (3) de facteurs négatifs : le produit est négatif." },
        { d:1, q:"Calculer : (−2/3) × (6/5)", c:["−4/5","4/5","−12/5","−2/5"], a:0, e:"Signes : (−) × (+) = −. Valeur : (2 × 6)/(3 × 5) = 12/15 = 4/5. Résultat : −4/5." },
        { d:2, q:"Calculer : 2/3 − 1/6", c:["1/2","1/6","1/3","5/6"], a:0, e:"Même dénominateur 6 : 2/3 = 4/6, puis 4/6 − 1/6 = 3/6 = 1/2." },
        { d:2, q:"Calculer : 3/4 + 5/6 (répondre sous la forme a/b, simplifiée)", a:"19/12", e:"Dénominateur commun 12 : 3/4 = 9/12 et 5/6 = 10/12. Somme : 19/12 (irréductible : 19 est premier et ne divise pas 12)." },
        { d:2, q:"Diviser par une fraction, c'est...", c:["multiplier par son inverse","multiplier par son contraire","soustraire son inverse","inverser la première fraction"], a:0, e:"a ÷ (b/c) = a × (c/b). Exemple : 2 ÷ (1/3) = 2 × 3 = 6." },
        { d:3, q:"Calculer : (−3/4) ÷ (−1/2)", c:["3/2","3/8","−3/8","1/2"], a:0, e:"(−) ÷ (−) = +. Diviser par −1/2 : multiplier par −2. Donc (−3/4) × (−2) = 6/4 = 3/2." },
        { d:3, q:"Calculer : (−1/2 + 1/3) × 6 (répondre un entier)", a:["−1","-1"], e:"−1/2 + 1/3 = −1/6 (dénominateur 6). Puis (−1/6) × 6 = −1." },
        { d:3, q:"L'inverse de −2/7 est...", c:["−7/2","7/2","2/7","−2/7"], a:0, e:"Inverser la fraction sans changer le signe : l'inverse de −2/7 est −7/2 (car (−2/7) × (−7/2) = 1)." },
        { d:4, q:"Calculer : (2 − 1/2) ÷ (1 + 1/4) (répondre sous la forme a/b, simplifiée)", a:"6/5", e:"2 − 1/2 = 3/2 et 1 + 1/4 = 5/4. Division : (3/2) × (4/5) = 12/10 = 6/5." },
        { d:4, q:"Que vaut x si x/3 = 5/6 ?", c:["2,5","1,5","10/3","0,6"], a:0, e:"Produit en croix : x = (3 × 5) ÷ 6 = 15/6 = 2,5." },
        { d:4, q:"Que vaut la somme des inverses de 2 et de 4 ? (répondre sous la forme a/b, simplifiée)", a:"3/4", e:"Inverses : 1/2 et 1/4. Somme avec dénominateur 4 : 2/4 + 1/4 = 3/4." },
        { d:4, q:"Que vaut x si 2x/5 = 6 ?", a:"15", e:"2x/5 = 6, donc 2x = 30 et x = 15. Vérification : 2 × 15/5 = 6." }
      ],
      gen: {
        1: () => { let p = 1 + Math.floor(Math.random()*5), s = 1 + Math.floor(Math.random()*5); while (p+s === 7) { p = 1 + Math.floor(Math.random()*5); s = 1 + Math.floor(Math.random()*5); }
          return { q:`Calculer : ${p}/7 + ${s}/7 (répondre sous la forme a/b, simplifiée)`, a:`${p+s}/7`, e:`Même dénominateur 7 : (${p} + ${s})/7 = ${p+s}/7, déjà simplifiée (7 est premier et ne divise pas ${p+s}).` }; },
        2: () => { let n = 1 + Math.floor(Math.random()*6), d = 2 + Math.floor(Math.random()*6); while (n > 1 && (2*d) % n === 0) { n = 1 + Math.floor(Math.random()*6); d = 2 + Math.floor(Math.random()*6); }
          let g = n, b2 = 2*d; while (b2) { const r = g % b2; g = b2; b2 = r; }
          return { q:`Calculer : ${n}/2 ÷ ${d} (répondre sous la forme a/b, simplifiée)`, a:`${n/g}/${2*d/g}`, e:`Diviser par ${d} : multiplier par 1/${d}. Donc ${n}/(2 × ${d}) = ${n}/${2*d} = ${n/g}/${2*d/g}.` }; }
      }
    },
    {
      id: "puissances3", titre: "Puissances et notation scientifique", icone: "🔟",
      chap: [2],
      notion: "Règles : aᵐ × aⁿ = aᵐ⁺ⁿ ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ ; (aᵐ)ⁿ = aᵐ×ⁿ ; a⁰ = 1 ; a⁻ⁿ = 1/aⁿ (avec a non nul).\nÉcriture scientifique : a × 10ⁿ avec 1 ≤ a < 10 (un seul chiffre non nul avant la virgule).\nOrdre de grandeur : la puissance de 10 la plus proche du nombre.",
      qs: [
        { d:1, q:"10⁴ est égal à...", c:["10 000","1 000","100","40"], a:0, e:"10⁴ = 10 × 10 × 10 × 10 = 10 000 (le 4 compte les zéros)." },
        { d:1, q:"a⁰ vaut (a non nul)...", c:["1","0","a","−1"], a:0, e:"Par convention, tout nombre non nul élevé à la puissance 0 vaut 1." },
        { d:2, q:"Simplifier : 7² × 7⁵", c:["7⁷","7¹⁰","49⁵","7³"], a:0, e:"Même base : on additionne les exposants. 7² × 7⁵ = 7⁷." },
        { d:2, q:"Simplifier : (5³)²", c:["5⁶","5⁵","5⁹","25³"], a:0, e:"Puissance de puissance : on multiplie les exposants. (5³)² = 5⁶." },
        { d:2, q:"Calculer : 3⁷ ÷ 3⁵", c:["9","3¹²","3⁵","81"], a:0, e:"Même base : on soustrait les exposants. 3⁷ ÷ 3⁵ = 3² = 9." },
        { d:3, q:"Calculer : 10⁻² (répondre en décimal)", a:"0.01", e:"10⁻² = 1/(10²) = 1/100 = 0,01." },
        { d:3, q:"Simplifier : 5a⁴ × 3a³", c:["15a⁷","15a¹²","8a⁷","15a⁴"], a:0, e:"Coefficients : 5 × 3 = 15. Puissances : a⁴ × a³ = a⁷. Résultat : 15a⁷." },
        { d:3, q:"Écriture scientifique de 45 000 ?", c:["4,5 × 10⁴","45 × 10³","4,5 × 10³","0,45 × 10⁵"], a:0, e:"Scientifique : un seul chiffre non nul avant la virgule. 45 000 = 4,5 × 10⁴." },
        { d:3, q:"Écriture scientifique de 0,0025 ?", c:["2,5 × 10⁻³","25 × 10⁻³","2,5 × 10⁻²","2,5 × 10³"], a:0, e:"On décale la virgule de 3 rangs vers la droite : 0,0025 = 2,5 × 10⁻³." },
        { d:4, q:"Calculer : 2⁻³ (répondre en décimal)", a:"0.125", e:"2⁻³ = 1/(2³) = 1/8 = 0,125." },
        { d:4, q:"Calculer : (3 × 10³) × (4 × 10²) puis donner l'écriture scientifique", c:["1,2 × 10⁶","12 × 10⁵","1,2 × 10⁵","7 × 10⁵"], a:0, e:"Le produit : 3 × 4 = 12 et 10³ × 10² = 10⁵, donc 12 × 10⁵ = 1,2 × 10⁶ (on ramène 12 à 1,2 × 10)." },
        { d:4, q:"Calculer : 5⁰ + 5¹ + 5²", a:"31", e:"5⁰ = 1, 5¹ = 5, 5² = 25. Somme : 1 + 5 + 25 = 31." }
      ],
      gen: {
        1: () => { const a = 2 + Math.floor(Math.random()*5), k = 2 + Math.floor(Math.random()*3), SUP = ["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹"];
          return { q:`Calculer : ${a}${SUP[k]}`, a:String(a**k), e:`${a}${SUP[k]} = ${Array(k).fill(String(a)).join(" × ")} = ${a**k}.` }; },
        2: () => { const a = 2 + Math.floor(Math.random()*4), p = 2 + Math.floor(Math.random()*3), k = 1 + Math.floor(Math.random()*(p-1)), SUP = ["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹"];
          return { q:`Simplifier : ${a}${SUP[p]} ÷ ${a}${SUP[k]}`, a:`${a}${SUP[p-k]}`, e:`Même base : on soustrait les exposants. ${a}${SUP[p]} ÷ ${a}${SUP[k]} = ${a}${SUP[p-k]}.` }; }
      }
    },
        {
      id: "racines", titre: "Racines carrées", icone: "√",
      chap: [3],
      notion: "√a est le nombre positif dont le carré est a : (√a)² = a, et √(a²) = a (si a ≥ 0).\n√25 = 5 ; √(a × b) = √a × √b ; on ne peut pas dire √(a + b) = √a + √b !\nSimplifier : √50 = √(25 × 2) = 5√2.",
      qs: [
        { d:1, q:"Calculer : √49", c:["7","−7","24,5","14"], a:0, e:"7 × 7 = 49, donc √49 = 7 (on prend toujours le résultat positif)." },
        { d:1, q:"Calculer : (√5)²", c:["5","10","25","√25"], a:0, e:"Le carré « annule » la racine : (√5)² = 5." },
        { d:1, q:"9 est-il le carré de 3 ou la racine carrée de 81 ?", c:["Les deux","Seulement le carré de 3","Seulement la racine de 81","Ni l'un ni l'autre"], a:0, e:"3² = 9 et √81 = 9 : les deux affirmations sont vraies." },
        { d:2, q:"Simplifier : √50", c:["5√2","2√5","25√2","10√5"], a:0, e:"50 = 25 × 2 → √50 = √25 × √2 = 5√2." },
        { d:2, q:"Calculer : √4 + √9", c:["√13","5","6","√36"], a:1, e:"√4 = 2 et √9 = 3, donc 2 + 3 = 5. La racine d'une somme n'est PAS la somme des racines." },
        { d:2, q:"Calculer : 2√18 × √2", a:"12", e:"√18 × √2 = √36 = 6, puis 2 × 6 = 12." },
        { d:3, q:"Simplifier : √72", a:"6√2", e:"72 = 36 × 2 → √72 = 6√2." },
        { d:3, q:"Calculer : 3√5 − √20", c:["√5","−√5","3√15","2√5"], a:0, e:"√20 = 2√5, donc 3√5 − 2√5 = √5." },
        { d:3, q:"Encadrer √30 entre deux entiers consécutifs :", c:["5 et 6","4 et 5","6 et 7","3 et 4"], a:0, e:"5² = 25 < 30 < 36 = 6², donc 5 < √30 < 6." },
        { d:4, q:"Calculer : (1 + √2)²", c:["3 + 2√2","3 + √2","2 + 2√2","1 + 2√2"], a:0, e:"1 + 2√2 + 2 = 3 + 2√2 (identité remarquable (a+b)² = a² + 2ab + b²)." },
        { d:4, q:"Calculer : √12 × √27 ÷ √9", a:"6", e:"√12 × √27 ÷ √9 = √(12 × 27 ÷ 9) = √36 = 6. On peut tout mettre sous une seule racine car ce sont des produits et quotients." },
        { d:4, q:"Que vaut l'aire d'un carré de côté √8 cm (simplifiée) ?", c:["8 cm²","16 cm²","64 cm²","4√2 cm²"], a:0, e:"Aire = (√8)² = 8 cm²." }
      ],
      gen: {
        2: () => { const pairs = [[2,3],[2,5],[3,2],[3,5],[3,7],[5,2],[5,3],[5,6],[7,2],[7,3],[7,6],[6,5],[10,3],[11,2]];
          const p = pairs[Math.floor(Math.random()*pairs.length)];
          return { q:`≈ Simplifier : √${p[0]*p[0]*p[1]}`, c:[`${p[0]}√${p[1]}`,`${p[1]}√${p[0]}`,`${p[0]*p[0]}√${p[1]}`,`${p[0]+1}√${p[1]}`], a:0, e:`${p[0]*p[0]*p[1]} = ${p[0]*p[0]} × ${p[1]} → √${p[0]*p[0]*p[1]} = ${p[0]}√${p[1]}.` }; },
        3: () => { const n = 12 + Math.floor(Math.random()*88);
          const s = Math.floor(Math.sqrt(n));
          if (s*s === n) return { q:`Calculer : √${n}`, a:String(s), e:`${s}² = ${n}, donc √${n} = ${s}.` };
          return { q:`Entre quels entiers consécutifs se situe √${n} ?`, c:[`${s} et ${s+1}`,`${s-1} et ${s}`,`${s+1} et ${s+2}`,`${s+2} et ${s+3}`], a:0, e:`${s}² = ${s*s} < ${n} < ${(s+1)*(s+1)} = ${s+1}², donc ${s} < √${n} < ${s+1}.` }; }
      }
    },
        {
      id: "thales", titre: "Théorème de Thalès", icone: "🔺",
      chap: [3, 6, 19],
      notion: "Si (BC) ∥ (MN) avec M sur (AB) et N sur (AC), alors AM/AB = AN/AC = MN/BC.\nAgrandissement-réduction de rapport k : longueurs multipliées par k, aires par k², volumes par k³.\nSi k < 1, c'est une réduction ; si k > 1, un agrandissement.",
      qs: [
        { d:1, q:"Triangle ABC, M sur [AB], N sur [AC], (MN) ∥ (BC). AM/AB = 1/3 et AB = 12. AM = ?", a:"4", e:"AM = 12 × 1/3 = 4." },
        { d:1, q:"Un agrandissement de rapport 3 multiplie les longueurs par...", a:"3", e:"Rapport 3 = longueurs × 3." },
        { d:1, q:"Une réduction de rapport 1/2 multiplie une aire par...", c:["1/2","1/4","2","1/8"], a:1, e:"Les aires sont multipliées par k² = (1/2)² = 1/4." },
        { d:2, q:"Triangle ABC, (MN) ∥ (BC) : AM = 4, AB = 6, AC = 9. AN = ?", a:"6", e:"AN = AC × AM/AB = 9 × 4/6 = 6." },
        { d:2, q:"(MN) ∥ (BC) : AM/AB = 2/3 et MN = 6. BC = ?", a:"9", e:"MN/BC = 2/3 → BC = 6 × 3/2 = 9." },
        { d:2, q:"Un cube est réduit à l'échelle 1/2. Son volume est multiplié par...", c:["1/2","1/4","1/8","c'est une réduction donc rien ne change"], a:2, e:"Les volumes sont multipliés par k³ = (1/2)³ = 1/8." },
        { d:3, q:"(MN) ∥ (BC) : AM = 5, MB = 3, AN = 10. NC = ?", a:"6", e:"AM/AB = AN/AC → 5/8 = 10/AC → AC = 16 → NC = AC − AN = 6." },
        { d:3, q:"Une pyramide est agrandie d'un rapport 2. Le volume devient...", c:["2 fois plus grand","4 fois plus grand","8 fois plus grand","16 fois plus grand"], a:2, e:"Volume × k³ = × 8." },
        { d:3, q:"AM/AB = AN/AC = 0,6 ; BC = 15. MN = ?", a:"9", e:"MN = BC × 0,6 = 9." },
        { d:4, q:"Une sphère est agrandie d'un rapport 3. Son volume est multiplié par...", a:"27", e:"V × k³ = 27." },
        { d:4, q:"(MN) ∥ (BC) : AB = 9, AM = 6, BC = 12, MN = ?", a:"8", e:"MN = BC × AM/AB = 12 × 6/9 = 8." },
        { d:4, q:"Une figure a une aire de 24 cm². Après réduction de rapport 1/2, son aire est de...", a:"6", e:"24 × (1/2)² = 24 × 0,25 = 6 cm²." }
      ]
    },
        {
      id: "equations3", titre: "Équations et problèmes", icone: "⚖️",
      chap: [4, 15],
      notion: "ax + b = cx + d → on regroupe les x d'un côté, les nombres de l'autre.\nÉquation produit A × B = 0 → A = 0 ou B = 0.\nPour les problèmes : poser x l'inconnue, mettre en équation, résoudre, vérifier.",
      qs: [
        { d:1, q:"Résoudre : 2x + 5 = 13", a:"4", e:"2x = 13 − 5 = 8, donc x = 4." },
        { d:1, q:"Résoudre : 3x = 2x + 7", a:"7", e:"3x − 2x = 7, donc x = 7." },
        { d:1, q:"Résoudre : x/2 = 6", a:"12", e:"x = 6 × 2 = 12." },
        { d:2, q:"Résoudre : 5x − 3 = 2x + 12", a:"5", e:"5x − 2x = 12 + 3 → 3x = 15 → x = 5." },
        { d:2, q:"Résoudre (produit nul) : (x − 3)(x + 5) = 0", c:["x = 3 ou x = −5","x = −3 ou x = 5","x = 3 ou x = 5","x = 15 ou −15"], a:0, e:"Chaque facteur peut être nul : x − 3 = 0 ou x + 5 = 0." },
        { d:2, q:"Résoudre : 4(x + 1) = 12", a:"2", e:"4x + 4 = 12 → 4x = 8 → x = 2." },
        { d:3, q:"Résoudre : 7 − 2x = 3x + 2", a:"1", e:"−2x − 3x = 2 − 7 → −5x = −5 → x = 1." },
        { d:3, q:"Résoudre : (2x + 1)(x − 4) = 0", c:["x = −1/2 ou x = 4","x = 1/2 ou x = −4","x = −1 ou x = 4","x = 2 ou x = 4"], a:0, e:"2x + 1 = 0 → x = −1/2 ; ou x − 4 = 0 → x = 4." },
        { d:3, q:"J'ai pensé à un nombre, je le multiplie par 3, j'ajoute 2, et je trouve 17. Mon nombre ?", a:"5", e:"3x + 2 = 17 → 3x = 15 → x = 5." },
        { d:4, q:"La somme de trois entiers consécutifs vaut 51 (soit x, x+1, x+2). Le plus petit est...", a:"16", e:"x + (x+1) + (x+2) = 51 → 3x + 3 = 51 → 3x = 48 → x = 16." },
        { d:4, q:"Résoudre : (x − 3)² = 25", c:["x = 8 ou x = −2","x = 8 seulement","x = −8 ou x = 2","x = 22"], a:0, e:"x − 3 = 5 ou x − 3 = −5 → x = 8 ou x = −2." },
        { d:4, q:"Un rectangle a un périmètre de 24 cm et une longueur de 3 cm supérieure à sa largeur. Son aire est...", a:"33.75", e:"Largeur x, longueur x + 3 : 4x + 6 = 24 → x = 4,5 et longueur 7,5. Aire : 33,75 cm²." }
      ]
    },
        {
      id: "fonctions", titre: "Fonctions : image et antécédent", icone: "📈",
      chap: [5, 7, 12],
      notion: "Une fonction f associe à chaque nombre x un unique nombre f(x), appelé image de x.\nSi f(3) = 12, alors 12 est l'image de 3, et 3 est un antécédent de 12.\nOn peut représenter f par un graphique, un tableau ou une formule.",
      qs: [
        { d:1, q:"f(x) = 2x + 3. L'image de 4 est...", a:"11", e:"f(4) = 2 × 4 + 3 = 8 + 3 = 11." },
        { d:1, q:"f(x) = x². f(5) = ?", a:"25", e:"f(5) = 5² = 25." },
        { d:1, q:"Si g(3) = 12, alors...", c:["12 est l'image de 3","3 est l'image de 12","g(12) = 3","12 est un antécédent de 3"], a:0, e:"g(3) = 12 : 12 est l'image de 3, et 3 est un antécédent de 12." },
        { d:2, q:"f(x) = 3x − 2. Un antécédent de 10 est...", a:"4", e:"On cherche x tel que 3x − 2 = 10 : 3x = 12, x = 4." },
        { d:2, q:"f(x) = 2x². Quelle est l'image de −3 ?", c:["−6","9","18","−9"], a:2, e:"f(−3) = 2 × (−3)² = 2 × 9 = 18. Le carré d'un négatif est positif !" },
        { d:2, q:"f(x) = x + 5. Un antécédent de −1 est...", a:"-6", e:"x + 5 = −1 → x = −6." },
        { d:3, q:"f(x) = 5 − 2x. Quelle est l'image de 7 ?", a:"-9", e:"f(7) = 5 − 14 = −9." },
        { d:3, q:"f(x) = x² − 3. Les antécédents de 6 sont...", c:["−3 et 3","3 seulement","6 et −6","9"], a:0, e:"x² − 3 = 6 → x² = 9 → x = 3 ou x = −3." },
        { d:3, q:"Sur une courbe, l'image de 2 se lit...", c:["la hauteur du point d'abscisse 2","l'abscisse du point d'ordonnée 2","l'axe des abscisses","toujours 2"], a:0, e:"On lit : abscisse 2 → on monte sur la courbe → on lit l'ordonnée, qui est l'image." },
        { d:4, q:"f(x) = (x + 1)². Quelle est l'image de −4 ?", a:"9", e:"f(−4) = (−4 + 1)² = (−3)² = 9." },
        { d:4, q:"g(x) = 2x + 1. Que vaut g(g(2)) ?", a:"11", e:"g(2) = 5 ; puis g(5) = 2 × 5 + 1 = 11." },
        { d:4, q:"g(x) = 3x. Un antécédent de 15 est...", a:"5", e:"Il faut résoudre 3x = 15 → x = 5. (Pour une fonction affine 3x − 4, un antécédent de y est (y + 4)/3 : tout nombre de l'image a un antécédent.)" }
      ]
    },
    {
      id: "faffine3", titre: "Fonctions linéaires et affines", icone: "↗️",
      chap: [7,12],
      notion: "Fonction linéaire : f(x) = ax (modélise une proportionnalité) ; sa droite passe par l'origine du repère.\nFonction affine : f(x) = ax + b ; a est le coefficient directeur, b l'ordonnée à l'origine (f(0) = b).\nCoefficient : a = (f(x₂) − f(x₁)) ÷ (x₂ − x₁) à partir de deux points.",
      qs: [
        { d:1, q:"Une fonction linéaire s'écrit...", c:["f(x) = ax","f(x) = ax + b","f(x) = x²","f(x) = 1/x"], a:0, e:"Linéaire : multiplier par le coefficient a, sans constante. Exemples : f(x) = 3x, f(x) = −2x." },
        { d:1, q:"Le nombre a dans f(x) = ax s'appelle...", c:["le coefficient directeur (ou de proportionnalité)","l'ordonnée à l'origine","l'antécédent de 0","la racine"], a:0, e:"a est le coefficient directeur de la droite (et le coefficient de proportionnalité de la fonction linéaire)." },
        { d:2, q:"La représentation graphique d'une fonction affine est...", c:["une droite","une parabole","une courbe en escalier","un cercle"], a:0, e:"Linéaire et affine ont pour représentation graphique une droite ; celle de la linéaire passe par l'origine." },
        { d:2, q:"f(x) = 3x + 2. Que vaut f(4) ?", a:"14", e:"f(4) = 3 × 4 + 2 = 12 + 2 = 14." },
        { d:2, q:"f(x) = 5x. Que vaut f(0) ?", c:["0","5","1","x"], a:0, e:"f(0) = 5 × 0 = 0 : toute fonction linéaire s'annule en 0 (droite passant par l'origine)." },
        { d:2, q:"Une situation de proportionnalité est modélisée par une fonction...", c:["linéaire","affine quelconque","carrée","constante"], a:0, e:"Proportionnalité : image = coefficient × valeur, c'est f(x) = ax, une fonction linéaire." },
        { d:3, q:"Une droite passe par l'origine O et par le point (2 ; 6). Son coefficient directeur ?", c:["3","1/3","6","2"], a:0, e:"Linéaire : f(2) = 6, donc a = 6 ÷ 2 = 3 (f(x) = 3x)." },
        { d:3, q:"f est affine : f(1) = 5 et f(3) = 11. Que vaut f(0) ?", a:"2", e:"a = (11 − 5) ÷ (3 − 1) = 3. Puis f(1) = 5 : 3 × 1 + b = 5, donc b = 2. f(0) = 2 (ordonnée à l'origine)." },
        { d:3, q:"Dans f(x) = ax + b, le nombre b s'appelle...", c:["l'ordonnée à l'origine","le coefficient directeur","la variable","l'antécédent"], a:0, e:"b = f(0) : c'est l'ordonnée du point où la droite coupe l'axe des ordonnées." },
        { d:4, q:"f est affine : f(2) = 7 et f(5) = 16. Que vaut le coefficient a ?", a:"3", e:"a = (f(5) − f(2)) ÷ (5 − 2) = (16 − 7) ÷ 3 = 9 ÷ 3 = 3." },
        { d:4, q:"g(x) = −2x + 8. Pour quelle valeur de x a-t-on g(x) = 0 ?", c:["4","2","−4","8"], a:0, e:"−2x + 8 = 0, donc −2x = −8 et x = 4. La droite coupe l'axe des abscisses en (4 ; 0)." },
        { d:4, q:"f(x) = 2x − 1. Que vaut f(0) ?", a:["−1","-1"], e:"f(0) = 2 × 0 − 1 = −1 : l'ordonnée à l'origine est −1 (la droite passe par le point (0 ; −1))." }
      ],
      gen: {
        1: () => { const a = 2 + Math.floor(Math.random()*8), x = 1 + Math.floor(Math.random()*9);
          return { q:`f(x) = ${a}x. Que vaut f(${x}) ?`, a:String(a*x), e:`Linéaire : f(${x}) = ${a} × ${x} = ${a*x}.` }; },
        2: () => { const a = 2 + Math.floor(Math.random()*5), b = (Math.random() < 0.5 ? -1 : 1) * (1 + Math.floor(Math.random()*5)), x = 1 + Math.floor(Math.random()*6);
          return { q:`f(x) = ${a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)}. Que vaut f(${x}) ?`, a:String(a*x+b), e:`f(${x}) = ${a} × ${x} ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${a*x} ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${a*x+b}.` }; }
      }
    },
    {
      id: "arithmetique3", titre: "Arithmétique : multiples et diviseurs", icone: "🧮",
      chap: [8],
      notion: "b est un diviseur de a (et a un multiple de b) quand a = b × k avec k entier. Exemple : 3 et 5 sont des diviseurs de 15.\nDécomposition en facteurs premiers : 60 = 2 × 2 × 3 × 5 (chaque facteur est premier).\nPGCD de deux nombres : produit des facteurs premiers communs pris avec le plus petit exposant.\nFraction irréductible : le PGCD du numérateur et du dénominateur vaut 1.",
      qs: [
        { d:1, q:"Parmi ces nombres, lequel est un multiple de 7 ?", c:["91","93","95","97"], a:0, e:"7 × 13 = 91 : 91 est un multiple de 7. Les autres ne le sont pas (93 = 3 × 31, 95 = 5 × 19, 97 premier)." },
        { d:1, q:"Décomposition de 12 en facteurs premiers ?", c:["2 × 2 × 3","2 × 6","3 × 4","1 × 12"], a:0, e:"Tous ces produits valent 12, mais seuls 2 et 3 sont premiers : la décomposition correcte est 2 × 2 × 3." },
        { d:2, q:"Que vaut le PGCD (8 ; 12) ?", c:["4","2","8","24"], a:0, e:"Diviseurs de 8 : 1, 2, 4, 8. De 12 : 1, 2, 3, 4, 6, 12. Le plus grand commun est 4 (8 = 2 × 2 × 2 ; 12 = 2 × 2 × 3 ; facteurs communs 2 × 2)." },
        { d:2, q:"Combien de diviseurs compte 20 ?", a:"6", e:"1, 2, 4, 5, 10 et 20 : six diviseurs (20 = 2 × 2 × 5)." },
        { d:2, q:"Que vaut le PGCD (24 ; 36) ?", c:["12","6","8","4"], a:0, e:"24 = 2 × 2 × 2 × 3 ; 36 = 2 × 2 × 3 × 3. Facteurs communs : 2 × 2 × 3 = 12." },
        { d:3, q:"A = 2 × 2 × 3 × 5 et B = 2 × 5 × 5. Que vaut le PGCD (A ; B) ?", c:["10","100","2","20"], a:0, e:"Facteurs premiers communs avec le plus petit exposant : 2 (une fois) et 5 (une fois). PGCD = 2 × 5 = 10." },
        { d:3, q:"84 = 2 × 2 × 3 × 7 et 105 = 3 × 5 × 7. Que vaut le PGCD (84 ; 105) ?", a:"21", e:"Facteurs communs : 3 et 7. PGCD = 3 × 7 = 21." },
        { d:3, q:"Parmi ces nombres, lequel est premier ?", c:["61","51","57","91"], a:0, e:"51 = 3 × 17 et 57 = 3 × 19 sont divisibles par 3 (somme des chiffres 6), 91 = 7 × 13. 61 n'est divisible ni par 2, ni par 3, ni par 5, ni par 7 : il est premier." },
        { d:4, q:"Combien de diviseurs compte 18 ?", c:["6","4","8","9"], a:0, e:"1, 2, 3, 6, 9 et 18 : six diviseurs (18 = 2 × 3 × 3)." },
        { d:4, q:"Deux nombres premiers entre eux ont...", c:["un seul diviseur commun : 1","tous les deux un unique diviseur","le même nombre de diviseurs","un PGCD égal à leur produit"], a:0, e:"« Premiers entre eux » : leur seul diviseur commun est 1 (exemples : 8 et 9, 4 et 15). Chacun peut avoir plusieurs diviseurs." },
        { d:4, q:"Réduire en fraction irréductible : 84/126 (répondre sous la forme a/b)", a:"2/3", e:"PGCD (84 ; 126) = 42 (2 × 3 × 7 en commun). 84/126 = 2/3." },
        { d:4, q:"Deux bus partent ensemble d'un arrêt : l'un toutes les 12 minutes, l'autre toutes les 18. Dans combien de minutes repartiront-ils ensemble ? (répondre en minutes)", a:"36", e:"On cherche le plus petit multiple commun : multiples de 12 (12, 24, 36...) et de 18 (18, 36...) : le premier commun est 36 minutes." }
      ],
      gen: {
        1: () => { const pairs = [[2,3],[2,5],[3,4],[3,5],[4,5],[5,6],[2,7],[3,7],[4,7],[5,7],[6,7]]; const pr = pairs[Math.floor(Math.random()*pairs.length)]; const g = 2 + Math.floor(Math.random()*6);
          return { q:`Que vaut le PGCD (${g*pr[0]} ; ${g*pr[1]}) ?`, a:String(g), e:`${g*pr[0]} et ${g*pr[1]} sont tous deux des multiples de ${g} : leur plus grand diviseur commun est ${g}.` }; },
        2: () => { const p = [2,3,5,7][Math.floor(Math.random()*4)], k = 1 + Math.floor(Math.random()*3), n = Math.pow(p, k);
          const divs = [String(1)]; for (let u = 1; u <= k; u++) divs.push(String(p**u));
          return { q:`Combien de diviseurs compte le nombre ${n} ?`, a:String(k+1), e:`${n} = ${Array(k).fill(String(p)).join(" × ")} (${p} est premier) : ses diviseurs sont ${divs.join(", ")}, soit ${k+1} diviseurs.` }; }
      }
    },
        {
      id: "identites", titre: "Identités remarquables & factorisation", icone: "🧩",
      chap: [9, 15],
      notion: "(a + b)² = a² + 2ab + b² ; (a − b)² = a² − 2ab + b² ; (a + b)(a − b) = a² − b².\nFactoriser = transformer une somme en produit, en repérant le facteur commun ou une identité.",
      qs: [
        { d:1, q:"Factoriser : x² + 7x (= x × ... + × ...)", c:["x(x + 7)","7(x + x)","x(x + 1)","x²(x + 7)"], a:0, e:"Facteur commun x : x² + 7x = x × x + x × 7 = x(x + 7)." },
        { d:1, q:"Développer : (x + 3)²", c:["x² + 9","x² + 6x + 9","x² + 3x + 9","x² + 6x + 6"], a:1, e:"(a + b)² = a² + 2ab + b² ici : x² + 2 × 3 × x + 9 = x² + 6x + 9." },
        { d:1, q:"Développer : (x − 1)(x + 1)", c:["x² − 1","x² + 1","x² − 2x + 1","x² + 2x"], a:0, e:"(a + b)(a − b) = a² − b² : x² − 1." },
        { d:2, q:"Factoriser : x² − 16", c:["(x − 4)(x + 4)","(x − 4)²","(x − 8)(x + 2)","x² − 4² n'est pas factorisable ici"], a:0, e:"Différence de deux carrés : x² − 4² = (x − 4)(x + 4)." },
        { d:2, q:"Développer : (2x + 1)²", c:["4x² + 1","4x² + 4x + 1","4x² + 2x + 1","2x² + 4x + 1"], a:1, e:"(2x)² + 2 × 2x × 1 + 1² = 4x² + 4x + 1." },
        { d:2, q:"Factoriser : 5x + 10", a:"5(x+2)", e:"Le facteur commun est 5 : 5x + 10 = 5(x + 2)." },
        { d:3, q:"Factoriser : x² − 10x + 25", c:["(x − 5)²","(x + 5)²","(x − 5)(x + 5)","x (x − 10) + 25 ne se factorise pas"], a:0, e:"a² − 2ab + b² = (a − b)² ici : x² − 10x + 25 = (x − 5)²." },
        { d:3, q:"Développer : (3 − x)(3 + x)", a:"9-x²", e:"(a + b)(a − b) = a² − b² : 9 − x²." },
        { d:3, q:"Factoriser : 4x² + 12x + 9", c:["(2x + 3)²","(4x + 3)²","(2x + 9)²","(2x + 3)(2x − 3)"], a:0, e:"4x² = (2x)² ; 9 = 3² ; 12x = 2 × 2x × 3 → identité (a + b)² : (2x + 3)²." },
        { d:4, q:"Factoriser : (2x + 1)² − 9", c:["(2x − 2)(2x + 4)","(2x + 1 − 3)²","(2x + 1)² − 3² = 4x² − 8","(2x + 4)(2x − 2) seulement"], a:0, e:"Différence de deux carrés : [(2x + 1) − 3][(2x + 1) + 3] = (2x − 2)(2x + 4)." },
        { d:4, q:"Que vaut 101² − 99² sans calculatrice (produit remarquable) ?", a:"400", e:"(101 − 99)(101 + 99) = 2 × 200 = 400." },
        { d:4, q:"Si (x + 2)² = 49, un des nombres possible pour x est...", a:"5", e:"x + 2 = 7 ou x + 2 = −7 → x = 5 ou x = −9. Une des valeurs possibles est 5 (l'autre est −9)." }
      ],
      gen: {
        2: () => { const a = 1 + Math.floor(Math.random()*4), b = 1 + Math.floor(Math.random()*6);
          return { q:`Développer : (x + ${a})(x − ${a})`, c:[`x² − ${a*a}`,`x² + ${a*a}`,`x² − ${2*a}x + ${a*a}`,`x² + ${2*a}x − ${a*a}`], a:0, e:`(a + b)(a − b) = a² − b² : x² − ${a*a}.` }; },
        3: () => { const signe = Math.random() < 0.5 ? "−" : "+"; const b = 2 + Math.floor(Math.random()*5);
          const plus = signe === "+";
          return { q:`Développer : (x ${signe} ${b})²`, c:[`x² ${signe} ${2*b}x + ${b*b}`,`x² ${plus ? "−" : "+"} ${2*b}x + ${b*b}`,`x² ${signe} ${b}x + ${b*b}`,`x² + ${b*b}`], a:0, e:`(a ${signe} b)² = a² ${signe} 2ab + b² : x² ${signe} ${2*b}x + ${b*b}.` }; }
      }
    },
        {
      id: "stats3", titre: "Statistiques : médiane et quartiles", icone: "📊",
      chap: [10],
      notion: "Médiane : valeur qui partage la série ordonnée en deux moitiés égales : la moitié des valeurs en dessous, la moitié au-dessus.\nQuartiles : Q1 (au moins 25 % en dessous), Q3 (au moins 75 % en dessous).\nMédiane ≠ moyenne ! Quatre notes très basses ne changent pas forcément la médiane.",
      qs: [
        { d:1, q:"Série ordonnée : 2 ; 5 ; 8 ; 10 ; 20. Médiane ?", c:["8","10","9","5"], a:0, e:"5 valeurs : la médiane est la 3e valeur (celle du milieu) : 8." },
        { d:1, q:"9 ; 12 ; 14 la médiane vaut...", a:"12", e:"3 valeurs : la valeur du milieu est 12." },
        { d:1, q:"Série : 19 ; 8 ; 12 ; 24 ; 15. Étendue ?", a:"16", e:"On trie : 8 ; 12 ; 15 ; 19 ; 24. Étendue = max − min = 24 − 8 = 16." },
        { d:2, q:"Série ordonnée : 3 ; 5 ; 7 ; 9 ; 11 ; 13. Médiane ?", c:["7","8","10","9"], a:1, e:"Effectif pair : médiane = (7 + 9)/2 = 8 (la moyenne des 2 valeurs centrales)." },
        { d:2, q:"Série : 1 ; 2 ; 3 ; 4 ; 100. Quelle valeur est la plus influencée par la valeur extrême, la moyenne ou la médiane ?", c:["La moyenne","La médiane","Aucune des deux","Les deux autant l'une que l'autre"], a:0, e:"Moyenne = 110 ÷ 5 = 22 (tronquée par le 100) ; médiane = 3 (quasi inchangée)." },
        { d:2, q:"Notes de 7 élèves dans l'ordre : 6;8;9;10;12;13;18. La médiane est :", a:"10", e:"7 valeurs : la 4e de la liste ordonnée est la médiane : 10." },
        { d:3, q:"Série ordonnée : 2 ; 4 ; 6 ; 8 ; 10 ; 12 ; 14. Q1 ?", c:["4","6","8","3"], a:0, e:"Q1 = 2e valeur ? Le quart de 7 est 1,75 → Q1 est la 2e petite valeur : 4 (au moins 25 % des valeurs ≤ Q1)." },
        { d:3, q:"Série : 5 ; 7 ; 8 ; 10 ; 12 ; 14. Q3 ?", c:["12","8","14","13"], a:0, e:"Médiane à (8+10)/2 = 9. Q3 = 12 (la moitié supérieure ordonnée 10, 12, 14 prend sa médiane 12 ; au moins 75 % ≤ Q3)." },
        { d:3, q:"âges d'un club : 13 (6 fois), 14 (4 fois), 15 (2 fois). L'effectif total est...", a:"12", e:"6 + 4 + 2 = 12." },
        { d:4, q:"7 valeurs ; la moyenne est 13 et la médiane 12. Si la plus grande valeur (20) passe à 40 :", c:["la moyenne augmente, la médiane ne bouge pas","la médiane augmente, la moyenne non","les deux augmentent de 20","rien ne change"], a:0, e:"Une valeur extrême fait bouger la moyenne (plus de somme pour le même effectif), mais la médiane — 4e valeur sur 7 — reste identique." },
        { d:4, q:"Série de 20 valeurs ordonnées : la médiane est la moyenne des valeurs numéro :", c:["10 et 11","9 et 10","11 et 12","5 et 15"], a:0, e:"20 valeurs : les positions centrales sont 10 et 11 → médiane = moyenne des valeurs 10 et 11." },
        { d:4, q:"Série ordonnée : 8 ; 9 ; 10 ; 11 ; 15 ; x avec x ≥ 15. La médiane des 6 valeurs est :", c:["10,5","11","15","9"], a:0, e:"6 valeurs : la médiane est la moyenne des 3e et 4e valeurs, soit (10 + 11)/2 = 10,5, quelle que soit la 6e valeur (elle est loin du centre)." }
      ]
    },
    {
      id: "rotation3", titre: "Rotation", icone: "🌀",
      chap: [11],
      notion: "Une rotation est définie par son centre, son angle et son sens (trigonométrique = anti-horaire).\nLa figure image est superposable à l'originale : longueurs, angles, alignement et parallélisme sont conservés.\nRotation de 180° autour d'un point O : c'est la symétrie centrale de centre O.",
      qs: [
        { d:1, q:"Une rotation est définie par...", c:["un centre, un angle et un sens","un centre et un axe","un axe et un angle","deux points uniquement"], a:0, e:"Trois éléments : le point où « pivote » la figure, l'angle de virage et le sens du virage." },
        { d:1, q:"Une figure et son image par une rotation sont...", c:["superposables","de longueurs différentes","inversées comme dans un miroir","agrandies"], a:0, e:"La rotation fait pivoter la figure sans la déformer : image superposable." },
        { d:2, q:"Une rotation de 180° autour d'un point O est exactement...", c:["la symétrie centrale de centre O","la projection sur O","la translation de centre O","la symétrie axiale d'axe passant par O"], a:0, e:"Demi-tour autour de O : c'est la définition de la symétrie centrale." },
        { d:2, q:"M' est l'image de M par une rotation de centre O et d'angle 90°. OM = 3 cm. Que vaut OM' (en cm) ?", a:"3", e:"La rotation conserve les longueurs : OM' = OM = 3 cm, mais la direction de [OM] a tourné de 90°." },
        { d:2, q:"Une figure et son image par une rotation ont...", c:["même périmètre et même aire","des aires différentes","des périmètres différents","des angles doublés"], a:0, e:"Figures superposables : mêmes mesures de longueurs et d'angles, donc même périmètre et même aire." },
        { d:3, q:"Quel polygone régulier est invariant par une rotation de 60° autour de son centre ?", c:["l'hexagone régulier","le Carré","le pentagone régulier","le triangle équilatéral"], a:0, e:"Sommet suivant à 360° ÷ 6 = 60° : une rotation de 60° redonne le même hexagone." },
        { d:3, q:"M' est l'image de M par une rotation d'angle 45° et de centre O. Que vaut l'angle MOM' (en degrés) ?", a:"45", e:"L'angle de la rotation est exactement l'angle entre un point et son image vu du centre : 45°." },
        { d:3, q:"Quelle rotation laisse invariant le triangle équilatéral ?", c:["120° (ou 240°)","90°","45°","60°"], a:0, e:"Sommet suivant à 360° ÷ 3 = 120° : les rotations de 120° et 240° redonnent le triangle." },
        { d:4, q:"Une figure à 4 branches identiques régulièrement espacées est invariante pour toute rotation d'angle...", c:["90° (ou un multiple de 90°)","45°","180° uniquement","60°"], a:0, e:"Branche suivante tous les 360° ÷ 4 = 90° : les rotations de 90°, 180° et 270° redonnent la figure." },
        { d:4, q:"Quel est le plus petit polygone régulier invariant par une rotation de 30° autour de son centre ? (répondre son nombre de côtés)", a:"12", e:"360° ÷ n = 30° donne n = 12. Un dodécagone convient (mais aussi 24, 36... côtés : 12 est le plus petit)." },
        { d:4, q:"Une rotation de −90° (sens horaire) équivaut à une rotation de...", c:["270° dans le sens trigonométrique (anti-horaire)","90° dans le sens trigonométrique","180° dans le sens trigonométrique","90° sans importance de sens"], a:0, e:"Tourner 90° dans un sens, c'est tourner 360 − 90 = 270° dans l'autre sens : le résultat est identique." },
        { d:4, q:"Dans un pavage engendré par rotations autour d'un même centre, l'angle des rotations utilisées...", c:["doit diviser 360°","doit valoir exactement 90°","est libre","doit être supérieur à 180°"], a:0, e:"Après un nombre entier de virages de même angle, on doit retrouver l'orientation de départ : l'angle doit diviser 360°." }
      ]
    },
        {
      id: "trigo", titre: "Trigonométrie (sinus, tangente)", icone: "📐",
      chap: [13, 16],
      notion: "Dans un triangle rectangle : sin(â) = opposé ÷ hypoténuse ; cos(â) = adjacent ÷ hypoténuse ; tan(â) = opposé ÷ adjacent.\nValeurs utiles : sin(30°) = 0,5 ; tan(45°) = 1 ; sin(90°) = 1.",
      qs: [
        { d:1, q:"sin(â) se calcule avec...", c:["opposé ÷ hypoténuse","adjacent ÷ hypoténuse","opposé ÷ adjacent","hypoténuse ÷ opposé"], a:0, e:"sin signifie Sinus = Opposé / Hypoténuse (SOH-CAH-TOA : SOH = Sinus, Opposé, Hypoténuse)." },
        { d:1, q:"sin(30°) = ?", c:["0,5","0,87","1","2"], a:0, e:"sin(30°) = 0,5 exactement." },
        { d:1, q:"tan(45°) = ?", c:["1","0,5","2","0"], a:0, e:"tan(45°) = 1 exactement." },
        { d:2, q:"Triangle rectangle : hypoténuse 10, opposé à â = 6. sin(â) ?", c:["0,6","0,8","1,66","6"], a:0, e:"6 ÷ 10 = 0,6." },
        { d:2, q:"Triangle rectangle en B : AB = 3 (adjacent de ∠C), BC = 4 (opposé à ∠C), AC = 5. tan(∠C) ?", c:["3/4","4/3","3/5","4/5"], a:1, e:"tan = opposé ÷ adjacent = BC ÷ AB = 4/3." },
        { d:2, q:"Si sin(â) ≈ 0,98, l'angle â est...", c:["grand (≈ 80°)","petit (≈ 10°)","droit","obtus"], a:0, e:"sin(90°) = 1 ; plus l'angle est grand, plus le sinus est proche de 1 (pour un angle aigu)." },
        { d:3, q:"Un fil de 8 m part du sol et touche un arbre en formant un angle de 35° avec le sol. À quelle hauteur le fil touche-t-il l'arbre (dixième) ?", a:"4.6", e:"Hauteur = 8 × sin(35°) ≈ 8 × 0,574 ≈ 4,6 m." },
        { d:3, q:"Triangle rectangle : hypoténuse = 5, angle â = 37°. Côté opposé (dixième) ?", a:"3", e:"opposé = 5 × sin(37°) ≈ 5 × 0,602 ≈ 3,0." },
        { d:3, q:"Triangle rectangle : opposé = 5, adjacent = 2. tan(â) = ?", c:["0,4","2,5","1,15","0,36"], a:1, e:"5 ÷ 2 = 2,5." },
        { d:4, q:"Une rampe de 5 m de long monte à 1,2 m de haut. L'angle entre la rampe et le sol est d'environ combien de degrés ?", a:"14", e:"sin(â) = 1,2/5 = 0,24 → â ≈ 14°." },
        { d:4, q:"Compléter : cos²(â) + sin²(â) = ...", a:"1", e:"C'est une identité fondamentale : cos² + sin² = 1 pour tout angle â." },
        { d:4, q:"Un mât de 6 m est retenu par un câble fixé à 2 m du pied du mât et au sommet. L'angle du câble avec le sol est d'environ (degré) : ...°", a:"72", e:"Hypoténuse = √(6² + 2²) = √40 ≈ 6,32 m. sin(â) = 6/6,32 ≈ 0,95 → â ≈ 72°." }
      ]
    },
        {
      id: "sph3", titre: "Solides : sphères, cônes, pyramides", icone: "🔮",
      chap: [14, 17],
      notion: "Sphère : V = (4/3) × π × r³ ; aire = 4 × π × r².\nCône de révolution : V = (1/3) × π × r² × h.\nPyramide : V = (1/3) × aire de la base × hauteur.",
      qs: [
        { d:1, q:"Volume d'une pyramide de base 12 cm² et hauteur 5 cm ?", a:"20", e:"V = (1/3) × 12 × 5 = 20 cm³." },
        { d:1, q:"Le volume d'un cône est ... du volume du cylindre de même base et même hauteur ?", c:["un tiers","la moitié","le double","le triple"], a:0, e:"V cône = (1/3) × π r² h, soit un tiers du cylindre correspondant." },
        { d:1, q:"Une boule de rayon 3 cm : son volume est (π ≈ 3,14, entier) :", a:"113", e:"(4/3) × π × 27 ≈ 113 cm³." },
        { d:2, q:"Cône : rayon 3 cm, hauteur 7 cm. Volume (π ≈ 3,14, dixièmes) ?", a:"65.9", e:"(1/3) × π × 9 × 7 = 21π ≈ 65,94 → ≈ 65,9 cm³." },
        { d:2, q:"Pyramide de base carrée 6 cm de côté, de hauteur 10 cm. Volume ?", a:"120", e:"Base : 36 cm². V = (1/3) × 36 × 10 = 120 cm³." },
        { d:2, q:"Une boule a un volume de 36π cm³. Son rayon vaut...", a:"3", e:"(4/3)πr³ = 36π → r³ = 27 → r = 3 cm." },
        { d:3, q:"Cône : rayon 2 cm, hauteur 9 cm. Volume (π ≈ 3,14, dixièmes) ?", a:"37.7", e:"(1/3) × π × 4 × 9 = 12π ≈ 37,68 → ≈ 37,7 cm³." },
        { d:3, q:"Pyramide : base rectangle 8 × 5 cm, hauteur 6 cm. Volume ?", a:"80", e:"Base : 40 cm² ; V = (1/3) × 40 × 6 = 80 cm³." },
        { d:3, q:"Une boule est réduite à l'échelle 1/2 : son volume est multiplié par...", c:["1/8","c'est une réduction donc rien ne change","1/4","1/2"], a:0, e:"Volume × k³ = (1/2)³ = 1/8." },
        { d:4, q:"Un cône a V = 100 cm³ pour h = 5 cm. Aire de sa base (entier) ?", a:"60", e:"(1/3) × B × 5 = 100 → B = 100 × 3 ÷ 5 = 60 cm²." },
        { d:4, q:"Comparons : une boule de rayon 2 et une boule de rayon 4. Le rapport des volumes est...", c:["1/8","8 fois plus grand","1/4","2"], a:1, e:"Volumes proportionnels au cube du rayon : (4/2)³ = 8." },
        { d:4, q:"Pyramide : V = 60 cm³ ; base : triangle de 6 cm de base. Quelle hauteur (entier) si l'autre côté de la base est 5 cm ?", a:"6", e:"Base : (6×5)/2 = 15 cm² ; (1/3) × 15 × h = 60 → 15h = 180 → h = 6 cm." }
      ]
    },
        {
      id: "proba3", titre: "Probabilités", icone: "🎲",
      chap: [18],
      notion: "Probabilité d'un événement = cas favorables ÷ cas possibles (expérience équiprobable).\n0 ≤ p ≤ 1. p = 1 : événement certain ; p = 0 : impossible.\nSomme des probabilités de tous les événements élémentaires = 1.",
      qs: [
        { d:1, q:"Probabilité d'obtenir « pile » en lançant une pièce équilibrée ?", c:["0,5","1","0,25","0"], a:0, e:"1 cas favorable sur 2 cas possibles → 0,5." },
        { d:1, q:"Un événement certain a une probabilité de...", a:"1", e:"p = 1 : il arrive toujours." },
        { d:1, q:"Probabilité d'obtenir 7 avec un dé à 6 faces ?", c:["0","1/6","1","7/6"], a:0, e:"Aucune face n'affiche 7 : événement impossible, p = 0." },
        { d:2, q:"Probabilité d'obtenir un multiple de 5 avec un dé à 6 faces ?", c:["1/3","1/6","1/2","5/6"], a:1, e:"Un seul cas favorable (5) sur 6 → 1/6." },
        { d:2, q:"Un sac contient 3 vertes, 5 rouges, 2 noires. Probabilité d'une rouge ?", c:["0,5","0,3","0,2","0,1"], a:0, e:"5 cas sur 10 → 5/10 = 0,5." },
        { d:2, q:"p = 0,25 signifie...", c:["1 chance sur 4","1 chance sur 100","impossible","certain"], a:0, e:"0,25 = 25 % = 1/4." },
        { d:3, q:"Probabilité d'obtenir un nombre ≤ 4 avec un dé à 6 faces ?", c:["2/3","1/3","1/6","5/6"], a:0, e:"4 cas favorables (1 ; 2 ; 3 ; 4) sur 6 → 4/6 = 2/3." },
        { d:3, q:"Un sac contient 3 billes vertes, 5 rouges et 2 noires. Probabilité de tirer une verte OU une noire ?", c:["0,5","0,5 ≈ 0,3","0,2","0,1"], a:0, e:"3 + 2 = 5 cas favorables sur 10 → 5/10 = 0,5." },
        { d:3, q:"Un dé à 6 faces : p(nombre ≤ 2) + p(nombre ≥ 3) = ?", a:"1", e:"Les deux événements sont contraires (toutes les issues couvertes) : leurs probabilités s'ajoutent à 1." },
        { d:4, q:"On lance deux dés à 6 faces. Probabilité d'obtenir une somme égale à 2 ?", c:["1/36","1/12","1/18","1/6"], a:0, e:"Une seule issue (1 puis 1) sur 6 × 6 = 36 issues équiprobables → 1/36." },
        { d:4, q:"On lance 3 fois une pièce équilibrée. Probabilité d'obtenir au moins une fois pile ?", c:["7/8","1/2","5/8","2/3"], a:0, e:"8 issues possibles ; une seule (FF) sans pile → p = 1 − 1/8 = 7/8." }
      ],
      gen: {
        2: () => { const n = 2 + Math.floor(Math.random()*4);
          return { q:`Probabilité (en %, arrondie) d'obtenir un nombre ≤ ${n} avec un dé à 6 faces ?`, a:String(Math.round(n/6*100)), e:`${n} cas favorables sur 6 → ${n}/6 ≈ ${(n/6*100).toFixed(0)} % de chances.` }; }
      }
    }
  ]
};
