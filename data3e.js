/* ================= BaouMaths — banque de questions 3e ================= */
window.BANK_3E = {
  themes: [
    {
      id: "racines", titre: "Racines carrées", icone: "√",
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
      id: "identites", titre: "Identités remarquables & factorisation", icone: "🧩",
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
      id: "fonctions", titre: "Fonctions : image et antécédent", icone: "📈",
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
      id: "equations3", titre: "Équations et problèmes", icone: "⚖️",
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
      id: "thales", titre: "Théorème de Thalès", icone: "🔺",
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
      id: "trigo", titre: "Trigonométrie (sinus, tangente)", icone: "📐",
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
      id: "stats3", titre: "Statistiques : médiane et quartiles", icone: "📊",
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
      id: "proba3", titre: "Probabilités", icone: "🎲",
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
    },
    {
      id: "sph3", titre: "Solides : sphères, cônes, pyramides", icone: "🔮",
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
    }
  ]
};
