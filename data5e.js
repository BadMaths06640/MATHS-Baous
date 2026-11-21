/* ================= BaouMaths — banque de questions 5e =================
   d: niveau de difficulté 1 à 4 (1 = découverte, 4 = expertise)
   Question QCM : { d, q, c:[4 choix], a: indexBonneReponse, e: explication }
   Question à saisir : { d, q, a:'réponse' ou ['réponses','acceptées'], e }
   gen1..gen4 (optionnels) : générateurs de questions infinies par difficulté */
window.BANK_5E = {
  themes: [
    {
      id: "calc", titre: "Calcul et priorités opératoires", icone: "🧮",
      chap: [1],
      notion: "Sans parenthèses : on calcule d'abord × et ÷, puis + et − de gauche à droite.\nAvec des parenthèses : on calcule d'abord l'intérieur des parenthèses (et des crochets).\nUne barre de fraction joue le rôle de parenthèses.",
      qs: [
        { d:1, q:"Calculer : 3 + 5 × 2", c:["16","13","11","10"], a:1, e:"On fait d'abord la multiplication : 5 × 2 = 10, puis l'addition : 3 + 10 = 13." },
        { d:1, q:"Calculer : 20 − 8 ÷ 2", c:["6","14","16","24"], a:2, e:"On fait d'abord la division : 8 ÷ 2 = 4, puis la soustraction : 20 − 4 = 16." },
        { d:1, q:"Calculer : (3 + 5) × 2", c:["11","13","16","10"], a:2, e:"On calcule d'abord la parenthèse : 3 + 5 = 8, puis : 8 × 2 = 16." },
        { d:2, q:"Calculer : 4 + 3 × (7 − 5)", a:"10", e:"Parenthèse d'abord : 7 − 5 = 2. Multiplication : 3 × 2 = 6. Addition : 4 + 6 = 10." },
        { d:2, q:"Calculer : 18 ÷ 3 × 2", c:["3","12","6","2"], a:1, e:"÷ et × ont la même priorité : on calcule de gauche à droite. 18 ÷ 3 = 6, puis 6 × 2 = 12." },
        { d:2, q:"Calculer : 2 + 3 × 4 − 5 × 2", a:"4", e:"On calcule d'abord les produits : 3 × 4 = 12 et 5 × 2 = 10. Puis 2 + 12 − 10 = 4." },
        { d:3, q:"Calculer : 5 × (4 − 7)² + 6", c:["51","21","−69","−39"], a:0, e:"Parenthèse : 4 − 7 = −3. Puissance : (−3)² = 9. Produit : 5 × 9 = 45. Somme : 45 + 6 = 51. Attention : 5 × (−3)² = 5 × 9, pas −15." },
        { d:3, q:"Calculer : 24 − [ 3 × (2 + 5) − 1 ]", a:"4", e:"Parenthèse : 2 + 5 = 7. Crochets : 3 × 7 − 1 = 21 − 1 = 20. Puis 24 − 20 = 4." },
        { d:3, q:"Calculer : 2 × 5 − 4 × 3", a:"−2", e:"Produits d'abord : 2 × 5 = 10 et 4 × 3 = 12. Puis 10 − 12 = −2." },
        { d:4, q:"Calculer : (8 − 2 × 5) × (−3)²", c:["−18","18","−162","54"], a:0, e:"Premier crochet : 2 × 5 = 10, donc 8 − 10 = −2. Puissance : (−3)² = 9. Produit : −2 × 9 = −18." },
        { d:4, q:"Calculer : 7 − 2 × [ 12 ÷ (1 + 5) ]", a:"3", e:"Parenthèse : 1 + 5 = 6. Crochets : 12 ÷ 6 = 2, puis 2 × 2 = 4. Puis 7 − 4 = 3." },
        { d:4, q:"Quelle expression est égale à 15 ?", c:["(2 + 3) × 4 − 5","2 + 3 × (4 − 5)","2 × (3 + 4) − 5","2 + 5 × 3 − 1"], a:0, e:"(2 + 3) × 4 − 5 = 5 × 4 − 5 = 20 − 5 = 15. Vérifie les autres : 2 + 3 × (−1) = −1 ; 2 × 7 − 5 = 9 ; 2 + 15 − 1 = 16." }
      ],
      gen: {
        1: () => { const a = 2 + Math.floor(Math.random()*9), b = 2 + Math.floor(Math.random()*9), c = 2 + Math.floor(Math.random()*6);
          return { q:`Calculer : ${a} + ${b} × ${c}`, a:String(a + b*c), e:`Multiplication d'abord : ${b} × ${c} = ${b*c}. Puis ${a} + ${b*c} = ${a+b*c}.` }; },
        2: () => { const a = 5 + Math.floor(Math.random()*15), b = 2 + Math.floor(Math.random()*4), c = 2 + Math.floor(Math.random()*4);
          return { q:`Calculer : ${a} − ${b} × ${c} + ${b}`, a:String(a - b*c + b), e:`On calcule ${b} × ${c} = ${b*c} d'abord, puis ${a} − ${b*c} + ${b} = ${a - b*c + b}.` }; },
        3: () => { const a = 2 + Math.floor(Math.random()*4); return { q:`Calculer : ${a} × (${a} + ${2*a}) − ${a}²`, a:String(a*3*a - a*a), e:`Parenthèse : ${a} + ${2*a} = ${3*a}. Produit : ${a} × ${3*a} = ${3*a*a}. Carré : ${a}² = ${a*a}. Différence : ${3*a*a} − ${a*a} = ${2*a*a}.` }; },
        4: () => { const n = 1 + Math.floor(Math.random()*4); const x = 2 + Math.floor(Math.random()*5);
          return { q:`Calculer : (${x}² − 4 × ${x}) × (−1) + ${n} × ${x}`, a:String((x*x - 4*x) * (-1) + n*x), e:`Dans la parenthèse : ${x}² − ${4*x} = ${x*x - 4*x}. Multiplié par −1 : ${-(x*x-4*x)}. Puis + ${n} × ${x} = ${n*x} : ${(x*x-4*x)*(-1) + n*x}.` }; }
      }
    },
    {
      id: "arithmetique5", titre: "Arithmétique : diviseurs et nombres premiers", icone: "🧮",
      chap: [1],
      notion: "Division euclidienne de a par b : a = b × q + r avec 0 ≤ r < b (q quotient entier, r reste).\nb est un diviseur de a quand le reste est nul (alors a est un multiple de b).\nCritères : par 2 (chiffre des unités pair) · par 5 (finit par 0 ou 5) · par 4 (la moitié du nombre est paire) · par 3 et 9 (somme des chiffres multiple de 3 ou 9).\nNombre premier : exactement deux diviseurs (1 et lui-même). 1 n'est pas premier ; 2 est le seul premier pair.",
      qs: [
        { d:1, q:"Dans la division euclidienne de 23 par 5, le reste vaut...", c:["3","2","4","0"], a:0, e:"23 = 5 × 4 + 3 avec 3 < 5 : le quotient est 4 et le reste est 3." },
        { d:1, q:"Parmi ces nombres, lequel est un multiple de 7 ?", c:["42","50","45","64"], a:0, e:"42 = 7 × 6 : c'est un multiple de 7. 50 = 2 × 25, 64 = 2 × 32, et 45 n'est pas 7 × entier." },
        { d:2, q:"4 est-il un diviseur de 34 ?", c:["Non, car 34 = 4 × 8 + 2","Oui, car 34 = 4 × 8","Oui, car 34 est pair","Non, car 34 est impair"], a:0, e:"34 = 4 × 8 + 2 : le reste est 2 (non nul), donc 4 n'est pas un diviseur de 34." },
        { d:2, q:"147 est-il divisible par 3 ?", c:["Oui, car 1 + 4 + 7 = 12","Non, car il finit par 7","Oui, car il est impair","Non, aucun critère ne s'applique"], a:0, e:"1 + 4 + 7 = 12 est multiple de 3 : 147 = 3 × 49." },
        { d:2, q:"Parmi ces nombres, lequel est divisible par 9 ?", c:["531","124","322","451"], a:0, e:"5 + 3 + 1 = 9 : 531 est divisible par 9 (531 = 9 × 59). Pour 124, 322 et 451, la somme des chiffres n'est ni 9 ni 18." },
        { d:2, q:"Combien un nombre entier admet-il de diviseurs « évidents » au minimum ?", c:["2","1","0","4"], a:0, e:"Tout entier admet au moins deux diviseurs : 1 et lui-même." },
        { d:3, q:"Parmi ces nombres, lequel est premier ?", c:["31","27","33","39"], a:0, e:"27 = 3 × 9 ; 33 = 3 × 11 ; 39 = 3 × 13 (somme des chiffres multiple de 3). 31 n'a que 1 et 31 comme diviseurs." },
        { d:3, q:"Laquelle de ces divisions a un reste nul ?", c:["546 ÷ 7","546 ÷ 9","487 ÷ 7","926 ÷ 7"], a:0, e:"546 = 7 × 78 (reste 0). 546 ÷ 9 : 5 + 4 + 6 = 15, pas multiple de 9. 487 = 7 × 69 + 4 ; 926 = 7 × 132 + 2." },
        { d:3, q:"Simplifier : 45/60 (répondre sous la forme a/b)", a:"3/4", e:"On simplifie par des nombres premiers, autant de fois que possible : par 5 → 9/12, puis par 3 → 3/4." },
        { d:4, q:"Un nombre est divisible par 4 quand...", c:["la moitié du nombre est un nombre pair","il se termine par 0","la somme de ses chiffres vaut 4","il est impair"], a:0, e:"Exemple : 116 ÷ 2 = 58, qui est pair, donc 116 est divisible par 4 (116 = 4 × 29)." },
        { d:4, q:"z est entier et 362 = 11 × z + 10. Que vaut z ?", a:"32", e:"362 − 10 = 352, et 352 = 11 × 32. Le quotient est 32 (reste 10 < 11)." },
        { d:4, q:"Le produit de deux nombres premiers (autres que 2) est...", c:["toujours impair","toujours pair","toujours premier","toujours nul"], a:0, e:"Les nombres premiers sont impairs sauf 2 : le produit de deux impairs est impair. Exemple : 3 × 7 = 21." }
      ],
      gen: {
        1: () => { const q = 2 + Math.floor(Math.random()*8), r = Math.floor(Math.random()*7), b = 7 + Math.floor(Math.random()*4), a = b*q + r;
          return { q:`Quel est le reste de la division euclidienne de ${a} par ${b} ?`, a:String(r), e:`${a} = ${b} × ${q} + ${r} avec ${r} < ${b} : le quotient est ${q} et le reste est ${r}.` }; },
        2: () => { const ok = Math.random() < 0.5, t = 100 + Math.floor(Math.random()*300), n = ok ? t*3 : t*3 + 1;
          const s = String(n).split("").reduce((u, c) => u + Number(c), 0);
          return { q:`${n} est-il divisible par 3 ? (répondre oui ou non)`, a: ok ? "oui" : "non", e:`La somme des chiffres de ${n} est ${s}, qui ${ok ? "est" : "n'est pas"} multiple de 3 : réponse ${ok ? "oui" : "non"}.` }; }
      }
    },
    {
      id: "symetrie5", titre: "Symétrie centrale", icone: "🧭",
      chap: [2],
      notion: "Symétrie de centre O : le symétrique de M est M' tel que O soit le MILIEU de [MM'].\nL'image d'un segment est un segment de même longueur ; l'image d'une droite (ne passant pas par O) est une droite parallèle.\nLa symétrie centrale conserve les longueurs, les angles et les aires.\nUne figure a un centre de symétrie si un demi-tour (180°) autour de ce point la laisse invariante (cercle → son centre ; parallélogramme → intersection des diagonales).",
      qs: [
        { d:1, q:"Le symétrique du point M par rapport à O est le point M' tel que...", c:["O est le milieu de [MM']","OM = MM'","(OM') perpendiculaire à (OM)","O est le symétrique de M"], a:0, e:"O, centre de la symétrie, est exactement le milieu du segment [MM']." },
        { d:1, q:"L'image du segment [AB] par une symétrie de centre O est...", c:["un segment [A'B'] de même longueur","un cercle","un point","un segment [A'B'] deux fois plus long"], a:0, e:"La symétrie centrale transforme un segment en un segment de même longueur : l'image de [AB] est [A'B'] avec A'B' = AB." },
        { d:1, q:"Parmi ces figures, laquelle possède un centre de symétrie ?", c:["un cercle","un triangle quelconque","un angle aigu","un demi-cercle"], a:0, e:"Le cercle est invariant par un demi-tour autour de son centre. Un triangle quelconque, un angle ou un demi-cercle n'ont aucun centre de symétrie." },
        { d:2, q:"M' est le symétrique de M par rapport à O et MO = 4 cm. Que vaut OM' ?", a:"4", e:"O est le milieu de [MM'] : OM' = MO = 4 cm." },
        { d:2, q:"M' est le symétrique de M par rapport à O et MO = 9 cm. Que vaut MM' ?", a:"18", e:"O est le milieu de [MM'] : MM' = MO + OM' = 9 + 9 = 18 cm." },
        { d:2, q:"La symétrie centrale conserve...", c:["les longueurs, les angles et les aires","seulement les longueurs","les angles mais pas les aires","l'orientation de la figure"], a:0, e:"Une symétrie centrale conserve les longueurs, les angles et les aires ; seule la position change (la figure fait un demi-tour autour de O)." },
        { d:3, q:"[AB] mesure 12 cm et [A'B'] est son image par une symétrie de centre O. Que vaut A'B' ?", a:"12", e:"La symétrie centrale conserve les longueurs : A'B' = AB = 12 cm." },
        { d:3, q:"Quel est le centre de symétrie d'un parallélogramme ?", c:["le point d'intersection de ses diagonales","le milieu d'un côté","un des sommets","un parallélogramme n'a pas de centre de symétrie"], a:0, e:"Chaque sommet a pour symétrique le sommet opposé : le centre est l'intersection des diagonales." },
        { d:3, q:"L'image d'une droite (d) ne passant pas par le centre O est...", c:["une droite parallèle à (d)","un cercle","un point","un segment plus court que (d)"], a:0, e:"L'image d'une droite ne passant pas par O est une droite parallèle à (d) ; si (d) passe par O, son image est (d) elle-même." },
        { d:4, q:"Sur une droite graduée, le symétrique du point d'abscisse 5 par rapport au point d'abscisse 9 est le point d'abscisse...", a:"13", e:"9 doit être le milieu : (5 + x') ÷ 2 = 9, donc 5 + x' = 18 et x' = 18 − 5 = 13." },
        { d:4, q:"Un triangle quelconque et son image par une symétrie de centre O...", c:["sont superposables après un demi-tour autour de O","ont des périmètres différents","ont des aires différentes","n'ont aucun point commun possible"], a:0, e:"La symétrie centrale conserve tout : l'image se superpose à la figure d'origine après un demi-tour autour de O." },
        { d:4, q:"Un rectangle de 7 cm sur 3 cm a pour image, par une symétrie de centre O, un rectangle d'aire...", a:"21", e:"La symétrie centrale conserve les dimensions : l'image est un rectangle 7 × 3, d'aire 7 × 3 = 21 cm²." }
      ],
      gen: {
        1: () => { const a = 2 + Math.floor(Math.random() * 8);
          return { q: `M' est le symétrique de M par rapport à O et OM = ${a} cm. Que vaut OM' ?`, a: String(a), e: `O est le milieu de [MM'] : OM' = OM = ${a} cm.` }; },
        2: () => { const a = 2 + Math.floor(Math.random() * 8);
          return { q: `M' est le symétrique de M par rapport à O et OM = ${a} cm. Que vaut MM' ?`, a: String(2 * a), e: `O est le milieu de [MM'] : MM' = OM + OM' = ${a} + ${a} = ${2 * a} cm.` }; },
        3: () => { const L = 3 + Math.floor(Math.random() * 8), w = 2 + Math.floor(Math.random() * 6);
          return { q: `Un rectangle de ${L} cm sur ${w} cm a pour image, par une symétrie de centre O, un rectangle de périmètre...`, a: String(2 * (L + w)), e: `La symétrie conserve les dimensions. Périmètre conservé : 2 × (${L} + ${w}) = ${2 * (L + w)} cm.` }; },
        4: () => ({ q: "Une figure F a pour image F' par une symétrie de centre O. On peut affirmer que F et F'...", c: ["ont exactement les mêmes longueurs, angles et aires","ont des périmètres différents","sont de tailles différentes","ont des angles différents"], a: 0, e: "La symétrie centrale conserve longueurs, angles et aires : F' est identique à F, juste tournée d'un demi-tour autour de O." })
      }
    },
    {
      id: "litteral5", titre: "Calcul littéral : distributivité", icone: "✖️",
      chap: [3, 9],
      notion: "k × (a + b) = k × a + k × b (simple distributivité).\nRéduire une expression : regrouper les termes « semblables » : 3x + 5x = 8x, mais 3x + 5 ne se réduit pas.",
      qs: [
        { d:1, q:"Développer : 3 × (x + 2)", c:["3x + 2","3x + 6","x + 6","3x × 6"], a:1, e:"On distribue le 3 : 3 × x + 3 × 2 = 3x + 6." },
        { d:1, q:"Réduire : 4x + 3 + 5x", c:["9x + 3","12x","9x","4x + 8x"], a:0, e:"On regroupe les x : 4x + 5x = 9x, on garde le + 3." },
        { d:1, q:"Développer : 5 × (2 + a)", c:["10 + 5a","7 + 5a","10 + a","5 × 2 × a"], a:0, e:"5 × 2 = 10 et 5 × a = 5a, donc 10 + 5a." },
        { d:2, q:"Réduire : 7a + 2 + 3a + 8", c:["10a + 10","21a + 10","10a + 16","4a + 10"], a:0, e:"7a + 3a = 10a et 2 + 8 = 10, donc 10a + 10." },
        { d:2, q:"Développer puis réduire : 2(3x + 4) + 5x", a:"11x+8", e:"2 × 3x = 6x ; 2 × 4 = 8. Puis 6x + 5x = 11x, donc 11x + 8." },
        { d:2, q:"Quelle expression est égale à 4 × (7 − 3) ?", c:["4 × 7 − 3","4 × 7 − 4 × 3","4 × 7 × 3","7 × 4 − 3"], a:1, e:"Distributivité : 4 × 7 − 4 × 3 = 28 − 12 = 16 = 4 × 4." },
        { d:3, q:"Factoriser : 5x + 25", c:["5(x + 5)","x(5 + 25)","5(x + 25)","5 × x + 5 × 5"], a:0, e:"5 est un facteur commun : 5x + 25 = 5 × x + 5 × 5 = 5(x + 5)." },
        { d:3, q:"Développer puis réduire : 3(2x + 5) − 4x", c:["2x + 15","10x + 15","6x + 15","10x + 5"], a:0, e:"3 × 2x = 6x ; 3 × 5 = 15. Puis 6x + 15 − 4x = 2x + 15." },
        { d:3, q:"Tester l'expression : que vaut 2x + 5 pour x = 3 ?", a:"11", e:"On remplace x par sa valeur puis on calcule : 2 × 3 + 5 = 6 + 5 = 11." },
        { d:4, q:"L'égalité 2 × (x + 5) = 2x + 5 est-elle vraie pour tout x ?", c:["Non, car 2 × (x + 5) = 2x + 10","Oui, par distributivité","Oui, seulement si x = 0","Non, car 2x + 5 = 7x"], a:0, e:"Par distributivité, 2 × (x + 5) = 2x + 10, qui n'est pas 2x + 5 : l'égalité est fausse (exemple : x = 3 → 16 ≠ 11)." },
        { d:4, q:"Développer puis réduire : 5(2x + 1) + 3(x + 4)", a:"13x+17", e:"5 × 2x = 10x ; 5 × 1 = 5 ; 3 × x = 3x ; 3 × 4 = 12. Puis 10x + 3x = 13x et 5 + 12 = 17 : 13x + 17." },
        { d:4, q:"Un rectangle a pour largeur x et pour longueur x + 7. Son périmètre (réduit) ?", c:["2x + 7","4x + 14","2x + 14","x + 7"], a:1, e:"P = 2 × (x + x + 7) = 2 × (2x + 7) = 4x + 14." }
      ],
      gen: {
        2: () => { const k = 2 + Math.floor(Math.random()*6), a = 2 + Math.floor(Math.random()*6), b = 1 + Math.floor(Math.random()*9);
          return { q:`Développer : ${k} × (x + ${b})`, a:`${k}x+${k*b}`, e:`On distribue ${k} : ${k}x + ${k*b}.` }; },
        3: () => { const k = 2 + Math.floor(Math.random()*5), a = 1 + Math.floor(Math.random()*4), b = 2 + Math.floor(Math.random()*4);
          return { q:`Développer puis réduire : ${k}(${a}x + ${b}) − ${k-1}x`, a:`${k*a-(k-1)}x+${k*b}`, e:`${k} × ${a}x = ${k*a}x et ${k} × ${b} = ${k*b}. Puis ${k*a}x − ${k-1}x = ${k*a-(k-1)}x. Résultat : ${k*a-(k-1)}x + ${k*b}.` }; }
      }
    },
    {
      id: "angles5", titre: "Angles et droites parallèles", icone: "📐",
      chap: [4],
      notion: "Angles opposés par le sommet : même sommet, côtés dans le prolongement l'un de l'autre → toujours ÉGAUX.\nAngles adjacents : même sommet, un côté commun ; complémentaires = somme 90°, supplémentaires = somme 180°.\nDeux droites parallèles coupées par une sécante : les angles alternes-internes (en Z) et les angles correspondants (en F) sont égaux.\nRéciproque : si des angles alternes-internes (ou correspondants) sont égaux, alors les deux droites sont parallèles.",
      qs: [
        { d:1, q:"Deux angles opposés par le sommet (côtés dans le prolongement l'un de l'autre) sont...", c:["toujours égaux","toujours complémentaires","toujours supplémentaires","parfois égaux, parfois non"], a:0, e:"Deux angles opposés par le sommet (même sommet, côtés dans le prolongement l'un de l'autre) sont toujours égaux." },
        { d:1, q:"Deux angles sont opposés par le sommet : le premier mesure 43°. Que mesure le second ?", a:"43", e:"Des angles opposés par le sommet sont égaux : le second mesure 43°." },
        { d:1, q:"Dans une figure en Z (deux droites et une sécante), les angles alternes-internes se trouvent...", c:["entre les deux droites, de part et d'autre de la sécante","du même côté de la sécante","tout les deux à l'extérieur","toujours à 90°"], a:0, e:"Alternes-internes : situés entre les deux droites (en interne), de part et d'autre de la sécante (alternés) — figure en Z." },
        { d:2, q:"(d1) ∥ (d2) sont coupées par une sécante. Un angle alternes-interne mesure 63°. Que mesure l'autre ?", a:"63", e:"Avec deux droites parallèles, les angles alternes-internes (en Z) sont égaux : 63°." },
        { d:2, q:"(d1) ∥ (d2) sont coupées par une sécante. Un angle correspondant (situation en F) mesure 115°. Que mesure son correspondant ?", a:"115", e:"Avec deux droites parallèles, les angles correspondants (en F) sont égaux : 115°." },
        { d:2, q:"Deux angles alternes-internes (situation en Z) sont égaux. Alors les deux droites coupées par la sécante sont...", c:["parallèles","perpendiculaires","sécantes","confondues"], a:0, e:"C'est la réciproque : si des angles alternes-internes (situation en Z) sont égaux, alors les deux droites sont parallèles." },
        { d:3, q:"(d1) ∥ (d2) sont coupées par une sécante : un angle mesure 70°. Que mesure l'angle adjacent à celui-ci sur la même droite (les deux forment un angle plat) ?", a:"110", e:"Sur une même droite, les angles adjacents forment un angle plat : 180 − 70 = 110°." },
        { d:3, q:"Deux angles complémentaires : l'un mesure 25°. Que mesure l'autre ?", a:"65", e:"Complémentaires : somme = 90°. 90 − 25 = 65°." },
        { d:3, q:"Deux angles du même côté de la sécante, l'un entre les deux droites, l'autre à l'extérieur (schéma en F) sont dits...", c:["correspondants","alternes-internes","opposés par le sommet","adjacents"], a:0, e:"Angles du même côté de la sécante, même position relative aux droites : ce sont les angles correspondants (figure en F)." },
        { d:4, q:"(d1) ∥ (d2) sont coupées par une sécante : un angle mesure 34°. Que mesure l'angle alternes-interne de son supplémentaire ?", a:"146", e:"Supplémentaire : 180 − 34 = 146°. Puis alternes-internes (droites parallèles) : même mesure, 146°." },
        { d:4, q:"Deux angles supplémentaires : l'un mesure 78°, l'autre vaut x. Que vaut x ?", a:"102", e:"Supplémentaires : somme = 180°. x = 180 − 78 = 102°." },
        { d:4, q:"x et y sont complémentaires et y = 2x. Que vaut x ?", c:["30°","45°","60°","15°"], a:0, e:"x + 2x = 90° : 3x = 90°, donc x = 30°." }
      ],
      gen: {
        1: () => { const a = 25 + Math.floor(Math.random() * 111);
          return { q: `Deux angles sont opposés par le sommet : le premier mesure ${a}\u00b0. Que mesure le second ?`, a: String(a), e: `Des angles opposés par le sommet sont égaux : le second mesure ${a}\u00b0.` }; },
        2: () => { const a = 15 + Math.floor(Math.random() * 156); const alt = Math.random() < 0.5;
          return alt
            ? { q: `(d1) \u2225 (d2) sont coup\u00e9es par une s\u00e9cante. Un angle alternes-interne (en Z) mesure ${a}\u00b0. Que mesure l'autre ?`, a: String(a), e: `Droites parallèles : les angles alternes-internes (en Z) sont égaux : ${a}\u00b0.` }
            : { q: `(d1) \u2225 (d2) sont coup\u00e9es par une s\u00e9cante. Un angle correspondant (en F) mesure ${a}\u00b0. Que mesure son correspondant ?`, a: String(a), e: `Droites parallèles : les angles correspondants (en F) sont égaux : ${a}\u00b0.` }; },
        3: () => { const a = 35 + Math.floor(Math.random() * 106); const s = 180 - a;
          return { q: `Deux angles supplémentaires : le premier mesure ${a}\u00b0. Que mesure le second ?`, a: String(s), e: `Supplémentaires : somme = 180\u00b0. ${s} = 180 \u2212 ${a}.` }; },
        4: () => { const a = 10 + Math.floor(Math.random() * 71); const c = 90 - a;
          return { q: `Deux angles complémentaires : le premier mesure ${a}\u00b0. Que mesure le second ?`, a: String(c), e: `Complémentaires : somme = 90\u00b0. ${c} = 90 \u2212 ${a}.` }; }
      }
    },
    {
      id: "relatifs", titre: "Nombres relatifs : repérage et calcul", icone: "🌡️",
      chap: [5, 13],
      notion: "Repérage : sur une droite graduée, chaque point est repéré par un nombre relatif ; dans le plan, un point A se repère par ses coordonnées (abscisse ; ordonnée).\nOpposé : deux nombres opposés sont de part et d'autre de 0 à la même distance ; l'opposé de 6 est −6, l'opposé de −5 est 5.\nComparer : tout nombre négatif est plus petit qu'un nombre positif ; entre deux négatifs, le plus petit est celui qui est le plus loin de 0.\nSomme : même signe → on garde le signe et on ajoute. Signes différents → on soustrait et on garde le signe du plus proche de 0.\nDifférence : soustraire, c'est ajouter l'opposé : a − b = a + (−b).",
      qs: [
        { d: 1, q: "Calculer : (−3) + (−5)", c: ["−8", "−2", "2", "8"], a: 0, e: "Même signe (négatif) : on ajoute les valeurs 3 + 5 = 8 et on garde le signe − : −8." },
        { d: 1, q: "Calculer : (−7) + 4", c: ["−3", "3", "−11", "11"], a: 0, e: "Signes différents : on calcule 7 − 4 = 3, et on garde le signe du nombre le plus loin de 0, ici −7 : résultat −3." },
        { d: 1, q: "Calculer : 6 − 10", c: ["−4", "4", "−16", "16"], a: 0, e: "Soustraire 10 à 6 : on arrive à −4 sur la droite graduée (6 − 10 = −4)." },
        { d: 1, q: "Quel est l'opposé de 6 ?", c: ["−6", "6", "1/6", "0"], a: 0, e: "L'opposé de 6 est −6 : ils sont à la même distance de 0, de part et d'autre." },
        { d: 2, q: "Calculer : (−10) − (−4)", a: "−6", e: "Soustraire, c'est ajouter l'opposé : (−10) − (−4) = −10 + 4 = −6." },
        { d: 2, q: "Parmi −7 ; −2 ; 0 ; 3, quel est le plus petit ?", c: ["−7", "−2", "0", "3"], a: 0, e: "Sur la droite graduée, −7 est le plus à gauche : c'est le plus petit." },
        { d: 2, q: "Dans un repère du plan, le point A(3 ; −2) se trouve...", c: ["3 unités à droite et 2 unités en dessous de l'origine", "3 unités à gauche et 2 unités au-dessus", "3 unités à droite et 2 unités au-dessus", "3 unités à gauche et 2 unités en dessous"], a: 0, e: "Abcisse 3 > 0 : à droite. Ordonnée −2 < 0 : en dessous de l'origine." },
        { d: 3, q: "Calculer : −5 + 8 − 9", a: "−6", e: "On procède de gauche à droite : −5 + 8 = 3, puis 3 − 9 = −6." },
        { d: 3, q: "À quelle distance de 0 se trouve le nombre −5 ?", a: "5", e: "La distance à zéro de −5 est sa partie numérique : 5. L'opposé est à la même distance." },
        { d: 4, q: "Il fait −7 °C le matin. La température monte de 12 °C puis baisse de 9 °C. Quelle température fait-il ?", a: "−4", e: "−7 + 12 = 5, puis 5 − 9 = −4 : il fait −4 °C." },
        { d: 4, q: "Calculer : 4 − 9 + 7 − 6", a: "−4", e: "De gauche à droite : 4 − 9 = −5 ; −5 + 7 = 2 ; 2 − 6 = −4." },
        { d: 4, q: "Comment compare-t-on −2 et −8 ?", c: ["−2 > −8, car −2 est plus proche de 0", "−2 < −8, car 2 < 8", "−2 = −8, car les deux sont négatifs", "On ne peut pas comparer des négatifs"], a: 0, e: "Sur la droite graduée, −2 est à droite de −8 : −2 > −8." }
      ],
      gen: {
        1: () => { const a = -1 - Math.floor(Math.random()*12), b = Math.floor(Math.random()*12);
          return { q:`Calculer : (${a}) + ${b}`, a:String(a+b), e:`On part de ${a} et on avance de ${b} : ${a+b}.` }; },
        2: () => { const a = 1 + Math.floor(Math.random()*12); let b2 = 1 + Math.floor(Math.random()*12); if (b2 === a) b2 = b2 + 1;
          return { q:`Quel est le plus grand : −${a} ou −${b2} ? (répondre avec le signe −, ex. −5)`, a:`−${Math.min(a, b2)}`, e:`Les deux sont négatifs : le plus grand est celui qui est le plus proche de 0, c'est −${Math.min(a, b2)}.` }; }
      },
      genH: {
        1: "Astuce : sur la droite graduée, part du premier nombre et avance/recule.\nExemple similaire : (−8) + 5 = −3.",
        2: "Astuce : entre deux négatifs, le plus grand est le plus proche de 0.\nExemple similaire : entre −9 et −4, le plus grand est −4."
      }
    },
    {
      id: "triangles5", titre: "Triangles et droites remarquables", icone: "🔺",
      chap: [6, 12],
      notion: "Somme des angles d'un triangle : toujours 180°.\nInégalité triangulaire : un triangle existe seulement si le plus grand côté est plus petit que la somme des deux autres.\nIsocèle : 2 côtés (donc 2 angles) égaux ; équilatéral : 3 côtés égaux, 3 angles de 60° ; rectangle : un angle droit.\nMédiatrice : droite passant par le milieu d'un côté, perpendiculairement (les 3 se coupent au centre du cercle circonscrit).\nHauteur : du sommet, perpendiculaire au côté opposé (les 3 se coupent à l'orthocentre).\nMédiane : du sommet au milieu du côté opposé (les 3 se coupent au centre de gravité).",
      qs: [
        { d:1, q:"Dans un triangle, un des angles mesure 60°, un autre 40°. Que mesure le troisième ?", c:["80°","100°","60°","90°"], a:0, e:"La somme vaut 180° : 180 − (60 + 40) = 80°." },
        { d:1, q:"Combien de médiatrices dans un triangle ?", c:["3","1","2","6"], a:0, e:"Trois côtés, donc trois médiatrices ; elles se coupent au centre du cercle circonscrit." },
        { d:1, q:"Un triangle avec deux côtés égaux est...", c:["isocèle","équilatéral (forcément)","rectangle","scalène"], a:0, e:"Deux côtés égaux = triangle isocèle (il a aussi ses deux angles à la base égaux). Équilatéral = les trois côtés égaux." },
        { d:2, q:"Triangle isocèle : les angles à la base mesurent 55° chacun. Que mesure l'angle au sommet ?", a:"70", e:"180 − 55 − 55 = 70°." },
        { d:2, q:"ABC est rectangle en A. L'angle en B mesure 37°. Que mesure l'angle en C ?", c:["53°","63°","90°","143°"], a:0, e:"Angle droit en A = 90° : 180 − 90 − 37 = 53°." },
        { d:2, q:"Peut-on construire un triangle ABC avec AB = 5 cm, AC = 2,4 cm et BC = 1,8 cm ?", c:["Non, car 5 > 2,4 + 1,8","Oui, car 5 < 2,4 + 1,8","Oui, tout triplet fonctionne","Non, car 2,4 + 1,8 > 5"], a:0, e:"2,4 + 1,8 = 4,2 < 5 : le plus grand côté dépasse la somme des deux autres, l'inégalité triangulaire n'est pas respectée." },
        { d:3, q:"Un triangle a deux angles qui mesurent 40° et 70°. Il est...", c:["isocèle","équilatéral","rectangle","quelconque, jamais isocèle"], a:0, e:"Troisième angle : 180 − 110 = 70°. Deux angles égaux (70°) → triangle isocèle." },
        { d:3, q:"Quelle droite passe par un sommet et est perpendiculaire au côté opposé ?", c:["la hauteur","la médiatrice","la médiane","la bissectrice"], a:0, e:"C'est la hauteur (les 3 se coupent à l'orthocentre). La médiatrice passe par le MILIEU d'un côté ; la médiane aussi, mais sans être perpendiculaire." },
        { d:3, q:"Un triangle rectangle a un angle de 25° et un angle droit. Que mesure le troisième angle ?", a:"65", e:"180 − 90 − 25 = 65°." },
        { d:4, q:"Dans le triangle ABC, la médiatrice de [AB] passe par C. Que peut-on affirmer ?", c:["CA = CB","l'angle en C est droit","AB = BC","l'angle en A mesure 60°"], a:0, e:"Tout point d'une médiatrice est à égale distance des extrémités : CA = CB." },
        { d:4, q:"Les médianes d'un triangle se coupent en un point appelé...", c:["centre de gravité","orthocentre","centre du cercle circonscrit","point de Gergonne"], a:0, e:"Médiane = du sommet au milieu du côté opposé ; les 3 se coupent au centre de gravité. (Orthocentre = hauteurs ; cercle circonscrit = médiatrices.)" },
        { d:4, q:"Un triangle isocèle a un angle au sommet de 44°. Que mesure un angle à la base ?", a:"68", e:"Angles à la base égaux : (180 − 44) ÷ 2 = 68°." }
      ],
      gen: {
        1: () => { const a = 35 + Math.floor(Math.random() * 50); const b = 30 + Math.floor(Math.random() * (145 - a - 25)); const c = 180 - a - b;
          return { q: `Deux angles d'un triangle mesurent ${a}\u00b0 et ${b}\u00b0. Que mesure le troisième ?`, a: String(c), e: `Somme des angles = 180\u00b0 : 180 \u2212 ${a} \u2212 ${b} = ${c}\u00b0.` }; },
        2: () => { const a = 30 + Math.floor(Math.random() * 46); const s = 180 - 2 * a;
          return { q: `Un triangle isocèle a ses deux angles à la base qui mesurent ${a}\u00b0. Que mesure l'angle au sommet ?`, a: String(s), e: `Somme = 180\u00b0 : 180 \u2212 ${a} \u2212 ${a} = ${s}\u00b0.` }; },
        3: () => { const a = 10 + Math.floor(Math.random() * 79);
          return { q: `Un triangle rectangle a un angle de ${a}\u00b0 et un angle droit. Que mesure le troisième angle ?`, a: String(90 - a), e: `Somme = 180\u00b0 : 180 \u2212 90 \u2212 ${a} = ${90 - a}\u00b0.` }; },
        4: () => { const S = (4 + Math.floor(Math.random() * 40)) * 2; const b = (180 - S) / 2;
          return { q: `Un triangle isocèle a un angle au sommet de ${S}\u00b0. Que mesure un angle à la base ?`, a: String(b), e: `Les deux angles à la base sont égaux : (180 \u2212 ${S}) \u00f7 2 = ${b}\u00b0.` }; }
      }
    },
    {
      id: "fractions", titre: "Fractions : comparer, additionner, soustraire", icone: "🍰",
      chap: [7, 16],
      notion: "Comparaison : on met les fractions au même dénominateur.\nAddition / soustraction : même dénominateur puis on opère sur les numérateurs.\nSimplifier : on divise numérateur et dénominateur par le même nombre. Fraction d'une quantité : « 2/3 de 60 » = 60 × 2 ÷ 3.",
      qs: [
        { d:1, q:"Simplifier la fraction : 12/18", c:["2/3","3/4","6/9","4/6"], a:0, e:"12 = 2 × 6 et 18 = 3 × 6 → 12/18 = 2/3 (on divise par 6). 4/6 et 6/9 ne sont pas simplifiées." },
        { d:1, q:"Calculer : 1/4 + 2/4", c:["3/8","3/4","2/16","1/2"], a:1, e:"Même dénominateur : on additionne les numérateurs : 1 + 2 = 3, donc 3/4." },
        { d:1, q:"Quelle fraction est égale à 1/2 ?", c:["3/6","2/5","4/6","5/8"], a:0, e:"3/6 = (3 ÷ 3)/(6 ÷ 3) = 1/2." },
        { d:2, q:"Calculer : 2/3 + 1/6", c:["3/9","5/6","3/6","5/9"], a:1, e:"Dénominateur commun 6 : 2/3 = 4/6. Somme : 4/6 + 1/6 = 5/6." },
        { d:2, q:"Calculer : 3/4 + 3/8", c:["9/8","3/12","3/8","1/2"], a:0, e:"Même dénominateur : 3/4 = 6/8. Somme : 6/8 + 3/8 = 9/8." },
        { d:2, q:"Comparer : quel est le plus grand nombre ?", c:["3/4","2/3","5/8","7/12"], a:0, e:"Mise au dénominateur 12 : 3/4 = 9/12, 2/3 = 8/12, 5/8 = 7,5/12, 7/12. Le plus grand est 9/12 = 3/4." },
        { d:3, q:"Calculer : 5/6 − 2/9", c:["3/3","11/18","23/18","1/3"], a:1, e:"Dénominateur commun 18 : 5/6 = 15/18 et 2/9 = 4/18. Différence : 15/18 − 4/18 = 11/18." },
        { d:3, q:"Calculer : 4/5 de 60", a:"48", e:"« de » signifie × : 4/5 × 60 = 240/5 = 48." },
        { d:3, q:"Calculer : 5/6 − 1/3", c:["1/2","1/3","2/3","7/6"], a:0, e:"Même dénominateur : 5/6 − 2/6 = 3/6, simplifié en 1/2." },
        { d:4, q:"Calculer : 1 − 3/8", a:"5/8", e:"1 = 8/8. Différence : 8/8 − 3/8 = 5/8." },
        { d:4, q:"Calculer : 7/10 + 1/5", c:["9/10","8/15","3/5","7/50"], a:0, e:"Même dénominateur : 1/5 = 2/10. Somme : 7/10 + 2/10 = 9/10." },
        { d:4, q:"Un gâteau est partagé en 8. Léa en mange 3/8, Tom en mange 1/4. Quelle fraction du gâteau reste-t-il ?", c:["3/8","1/2","5/8","1/4"], a:0, e:"1/4 = 2/8. Manger : 3/8 + 2/8 = 5/8. Reste : 8/8 − 5/8 = 3/8." }
      ],
      gen: {
        1: () => { const n = 2 + Math.floor(Math.random()*6), d = n + 1 + Math.floor(Math.random()*6);
          return { q:`Simplifier au maximum : ${n*d}/${d*d}`, a:`${n}/${d}`, e:`On divise numérateur et dénominateur par ${d} : ${n*d} ÷ ${d} = ${n} et ${d*d} ÷ ${d} = ${d}.` }; }
      }
    },
    {
      id: "parallelogrammes5", titre: "Parallélogrammes et quadrilatères", icone: "🔶",
      chap: [8, 18],
      notion: "Parallélogramme : côtés opposés parallèles (donc égaux) ; diagonales qui se coupent en leur milieu ; angles opposés égaux ; 2 centres-style : centre de symétrie = intersection des diagonales.\nRectangle : parallélogramme avec un angle droit ; diagonales de MÊME longueur.\nLosange : parallélogramme avec 4 côtés égaux ; diagonales PERPENDICULAIRES.\nCarré : rectangle et losange à la fois (4 côtés égaux ET 4 angles droits).\nAire d'un parallélogramme = base × hauteur ; aire d'un losange = (diagonale × diagonale) ÷ 2.",
      qs: [
        { d:1, q:"Dans tout parallélogramme, les diagonales...", c:["se coupent en leur milieu","sont de même longueur","sont perpendiculaires","sont des axes de symétrie"], a:0, e:"Dans tout parallélogramme, les diagonales se coupent en leur milieu (c'est son centre de symétrie). Diagonales égales = rectangle ; perpendiculaires = losange." },
        { d:1, q:"Un quadrilatère avec 4 côtés égaux ET 4 angles droits est un...", c:["carré","rectangle","losange","parallélogramme quelconque"], a:0, e:"4 angles droits = rectangle ; 4 côtés égaux = losange ; les deux à la fois = carré." },
        { d:1, q:"Dans un parallélogramme, les côtés opposés sont...", c:["parallèles et de même longueur","perpendiculaires","de longueurs différentes","des diagonales"], a:0, e:"Par définition, les côtés opposés d'un parallélogramme sont parallèles ; ils sont aussi de même longueur." },
        { d:2, q:"Quelle est la propriété d'un losange (parallélogramme particulier) ?", c:["4 côtés égaux et diagonales perpendiculaires","4 angles droits (toujours)","diagonales de même longueur","un seul axe de symétrie"], a:0, e:"Le losange a ses 4 côtés de même longueur et ses diagonales perpendiculaires. Les angles droits sont réservés au carré." },
        { d:2, q:"Un parallélogramme a des côtés consécutifs de 7 cm et 4 cm. Que vaut son périmètre ?", a:"22", e:"Côtés opposés égaux : deux côtés de 7 et deux de 4 → 2 × (7 + 4) = 22 cm." },
        { d:2, q:"Dans un parallélogramme, les angles opposés sont...", c:["égaux","complémentaires","supplémentaires","obligatoirement droits"], a:0, e:"Les angles opposés d'un parallélogramme sont égaux ; deux angles consécutifs sont supplémentaires (somme 180°)." },
        { d:3, q:"Un angle d'un parallélogramme mesure 65°. Que mesure l'angle opposé ?", a:"65", e:"Les angles opposés sont égaux : 65°." },
        { d:3, q:"Un parallélogramme qui a un angle droit est...", c:["un rectangle","un losange","un trapèze","un simple parallélogramme"], a:0, e:"Un parallélogramme avec un angle droit a ses 4 angles droits : c'est un rectangle." },
        { d:3, q:"Un parallélogramme a une base de 8 cm et une hauteur associée de 5 cm. Que vaut son aire ?", a:"40", e:"Aire = base × hauteur = 8 × 5 = 40 cm²." },
        { d:4, q:"Un angle d'un parallélogramme mesure 65°. Que mesure un angle consécutif (à côté de lui) ?", a:"115", e:"Deux angles consécutifs sont supplémentaires : 180 − 65 = 115°." },
        { d:4, q:"Un parallélogramme dont les diagonales sont perpendiculaires est un...", c:["losange","rectangle","carré (forcément)","trapèze"], a:0, e:"Diagonales perpendiculaires = losange. (Si de plus les diagonales sont de même longueur, c'est un carré.)" },
        { d:4, q:"Un losange a des diagonales de 6 cm et 8 cm. Que vaut son aire ?", a:"24", e:"Aire du losange = d₁ × d₂ ÷ 2 = 6 × 8 ÷ 2 = 24 cm²." }
      ],
      gen: {
        1: () => { const a = 35 + Math.floor(Math.random() * 116);
          return { q: `Un angle d'un parallélogramme mesure ${a}\u00b0. Que mesure l'angle opposé ?`, a: String(a), e: `Dans un parallélogramme, les angles opposés sont égaux : ${a}\u00b0.` }; },
        2: () => { const a = 35 + Math.floor(Math.random() * 116); const s = 180 - a;
          return { q: `Un angle d'un parallélogramme mesure ${a}\u00b0. Que mesure un angle consécutif (à côté de lui) ?`, a: String(s), e: `Deux angles consécutifs sont supplémentaires : 180 \u2212 ${a} = ${s}\u00b0.` }; },
        3: () => { const b = 2 + Math.floor(Math.random() * 14), h = 2 + Math.floor(Math.random() * 11);
          return { q: `Un parallélogramme a une base de ${b} cm et une hauteur associée de ${h} cm. Que vaut son aire ?`, a: String(b * h), e: `Aire = base \u00d7 hauteur = ${b} \u00d7 ${h} = ${b * h} cm\u00b2.` }; },
        4: () => { const d1 = 2 * (2 + Math.floor(Math.random() * 8)), d2 = 2 + Math.floor(Math.random() * 11);
          return { q: `Un losange a des diagonales de ${d1} cm et ${d2} cm. Que vaut son aire ?`, a: String(d1 * d2 / 2), e: `Aire = d\u2081 \u00d7 d\u2082 \u00f7 2 = ${d1} \u00d7 ${d2} \u00f7 2 = ${d1 * d2 / 2} cm\u00b2.` }; }
      }
    },
    {
      id: "aires5", titre: "Périmètres, aires et volumes", icone: "📏",
      chap: [10, 15, 20],
      notion: "Périmètre d'un disque : 2 × π × r. Aire du disque : π × r².\nAire du parallélogramme : base × hauteur. Aire du triangle : (base × hauteur) ÷ 2.\nVolume du prisme : aire de la base × hauteur.\nUnités : 1 m² = 100 dm² ; 1 m³ = 1 000 L ; 1 cm³ = 1 mL.",
      qs: [
        { d:1, q:"Périmètre d'un rectangle de 8 cm sur 3 cm ?", c:["11 cm","22 cm","24 cm","16 cm"], a:1, e:"P = 2 × (8 + 3) = 2 × 11 = 22 cm." },
        { d:1, q:"Aire d'un rectangle de 8 cm sur 3 cm ?", c:["11 cm²","22 cm²","24 cm²","16 cm²"], a:2, e:"Aire = longueur × largeur = 8 × 3 = 24 cm²." },
        { d:1, q:"Aire d'un triangle de base 10 cm et hauteur 6 cm ?", c:["60 cm²","30 cm²","16 cm²","15 cm²"], a:1, e:"Aire = (10 × 6) ÷ 2 = 30 cm²." },
        { d:2, q:"Aire d'un disque de rayon 5 cm (π ≈ 3,14) ?", c:["31,4 cm²","78,5 cm²","15,7 cm²","25 cm²"], a:1, e:"π × r² = 3,14 × 25 = 78,5 cm². Attention : 2πr donne le périmètre (31,4 cm), pas l'aire." },
        { d:2, q:"Volume d'un pavé droit de 4 cm × 3 cm × 5 cm ?", c:["12 cm³","60 cm³","9 cm³","75 cm³"], a:1, e:"V = 4 × 3 × 5 = 60 cm³." },
        { d:2, q:"1 m² = ...", c:["10 dm²","100 cm²","100 dm²","1 000 cm²"], a:2, e:"1 m = 10 dm, donc 1 m² = 10 × 10 = 100 dm² (les unités d'aire vont de 100 en 100)." },
        { d:3, q:"Périmètre d'un disque de diamètre 10 cm (π ≈ 3,14) ?", a:"31.4", e:"Périmètre = π × d = 3,14 × 10 = 31,4 cm. Espace accepté, virgule ou point, en cm : 31,4." },
        { d:3, q:"Volume d'un prisme dont la base est un disque de rayon 3 cm, hauteur 10 cm (π ≈ 3,14) ?", a:"282.6", e:"Aire de base : π × 9 = 28,26 cm². Volume : 28,26 × 10 = 282,6 cm³." },
        { d:3, q:"Un cube a un volume de 216 cm³. Son arête ?", c:["6 cm","36 cm","72 cm","12 cm"], a:0, e:"216 = 6 × 6 × 6 : l'arête est 6 cm." },
        { d:4, q:"Aire d'un parallélogramme de base 7 cm et hauteur 4 cm ?", a:"28", e:"Aire = base × hauteur = 7 × 4 = 28 cm²." },
        { d:4, q:"Combien de litres dans 2,5 m³ ?", a:"2500", e:"1 m³ = 1 000 L, donc 2,5 m³ = 2 500 L." },
        { d:4, q:"Un triangle a une aire de 24 cm² pour une base de 8 cm. Sa hauteur ?", a:"6", e:"Aire = (base × h) ÷ 2 → 24 = 8 × h ÷ 2 = 4 × h → h = 6 cm." }
      ],
      gen: {
        1: () => { const L = 2 + Math.floor(Math.random()*12), l = 1 + Math.floor(Math.random()*(L-1));
          return { q:`Périmètre d'un rectangle de ${L} cm sur ${l} cm ?`, a:String(2*(L+l)), e:`P = 2 × (${L} + ${l}) = 2 × ${L+l} = ${2*(L+l)} cm.` }; },
        2: () => { const L = 2 + Math.floor(Math.random()*12), l = 1 + Math.floor(Math.random()*12), h = 2 + Math.floor(Math.random()*9);
          return { q:`Volume d'un pavé droit de ${L} cm × ${l} cm × ${h} cm ?`, a:String(L*l*h), e:`V = ${L} × ${l} × ${h} = ${L*l*h} cm³.` }; }
      }
    },
    {
      id: "propo", titre: "Proportionnalité et pourcentages", icone: "📊",
      chap: [11, 17],
      notion: "Tableau de proportionnalité : les quotients de chaque colonne sont égaux (coefficient de proportionnalité).\nPourcentage : t % d'une quantité = t/100 × quantité.\nÉchelle : distance sur le dessin ÷ distance réelle (avec la même unité).",
      qs: [
        { d:1, q:"3 stylos coûtent 6 €. Prix de 5 stylos (prix proportionnel) ?", c:["9 €","10 €","12 €","15 €"], a:1, e:"Un stylo coûte 6 ÷ 3 = 2 €. Donc 5 stylos : 5 × 2 = 10 €." },
        { d:1, q:"Calculer 10 % de 80", c:["8","0,8","80","18"], a:0, e:"10 % = ÷10 : 80 ÷ 10 = 8." },
        { d:1, q:"Calculer 50 % de 34", a:"17", e:"50 % = la moitié : 34 ÷ 2 = 17." },
        { d:2, q:"Calculer 25 % de 240", c:["6","60","24","48"], a:1, e:"25 % = un quart : 240 ÷ 4 = 60. Ou 240 × 25 ÷ 100 = 60." },
        { d:2, q:"Une écharpe à 30 € augmente de 20 %. Nouveau prix ?", c:["36 €","32 €","50 €","24 €"], a:0, e:"Augmentation : 30 × 20 ÷ 100 = 6 €. Nouveau prix : 30 + 6 = 36 €." },
        { d:2, q:"Sur une carte à l'échelle 1/100 000, deux villages sont à 4 cm. Distance réelle ?", c:["400 m","4 km","40 km","40 m"], a:1, e:"1 cm sur la carte = 100 000 cm réels = 1 km. Donc 4 cm = 4 km." },
        { d:3, q:"Un robinet laisse couler 3 litres en 2 minutes. Quantité d'eau en 10 minutes ?", a:"15", e:"3 L en 2 min → 1,5 L par minute. En 10 min : 10 × 1,5 = 15 L." },
        { d:3, q:"15 litres d'essence coûtent 24 € ; prix de 40 litres (proportionnel) ?", a:"64", e:"Coefficient : 24 ÷ 15 = 1,6 €/L. Donc 40 × 1,6 = 64 €." },
        { d:3, q:"Un paquet de 6 yaourts coûte 4,20 €. Prix (en euros) de 9 yaourts ?", a:"6.3", e:"Un yaourt : 4,20 ÷ 6 = 0,70 €. Pour 9 : 9 × 0,70 = 6,30 €." },
        { d:4, q:"Une école compte 480 élèves ; 55 % sont des filles. Combien de garçons ?", a:"216", e:"Filles : 480 × 55 ÷ 100 = 264. Garçons : 480 − 264 = 216." },
        { d:4, q:"Dans une classe de 25 élèves, 10 sont externes. Quel est le pourcentage d'externes ?", c:["40 %","50 %","25 %","60 %"], a:0, e:"10/25 = 40/100 = 40 %." },
        { d:4, q:"Une maquette à l'échelle 1/50 : une tour de 35 m de hauteur mesure combien sur la maquette ?", c:["70 cm","7 cm","35 cm","1,75 m"], a:0, e:"35 m = 3 500 cm ; 3 500 ÷ 50 = 70 cm." }
      ],
      gen: {
        2: () => { const q = [10,20,25,50][Math.floor(Math.random()*4)]; const n = (2+Math.floor(Math.random()*40))*4;
          return { q:`Calculer ${q} % de ${n}`, a:String(n*q/100), e:`${q} % de ${n} = ${n} × ${q} ÷ 100 = ${n*q}/100 = ${n*q/100}.` }; },
        3: () => { const p = 20 + Math.floor(Math.random()*40)*5, t = [10,20,25,50][Math.floor(Math.random()*4)];
          return { q:`Que valent ${t} % de ${p} € ?`, a:String(p*t/100), e:`${t} % de ${p} = ${p} × ${t} ÷ 100 = ${p*t/100} €.` }; }
      }
    },
    {
      id: "stats5", titre: "Statistiques : effectifs et moyenne", icone: "📈",
      chap: [14],
      notion: "Effectif : nombre de fois où une valeur apparaît.\nÉtendue : plus grande valeur − plus petite valeur.\nMoyenne simple : somme des valeurs ÷ nombre de valeurs (en 5e, chaque valeur compte une fois ou on divise par l'effectif total).\nFréquence : effectif de la valeur ÷ effectif total (souvent en %) ; la somme des fréquences vaut 1 (100 %).\nMédiane : on ordonne les valeurs ; c'est la valeur qui partage la série ordonnée en deux groupes de même effectif.\nDiagramme en rectangles (histogramme) : la hauteur de chaque rectangle est proportionnelle à l'effectif.",
      qs: [
        { d:1, q:"Notes : 8 ; 12 ; 12 ; 15. Quelle est la moyenne ?", c:["12","11,75","11,5","12,5"], a:1, e:"Somme : 8 + 12 + 12 + 15 = 47. Nombre de notes : 4. Moyenne : 47 ÷ 4 = 11,75." },
        { d:1, q:"9 ; 3 ; 12 ; 14 ; 12 ; 14; 12 quel est l'effectif de la valeur 12 ?", c:["3","1","12","2"], a:0, e:"12 apparaît trois fois : son effectif est 3." },
        { d:1, q:"Températures : 3 °C ; 9 °C ; 12 °C ; 1 °C. Étendue ?", c:["11 °C","12 °C","9 °C","25 °C"], a:0, e:"Maximum − minimum : 12 − 1 = 11 °C." },
        { d:2, q:"Moyenne de : 6 ; 10 ; 14 ?", a:"10", e:"6 + 10 + 14 = 30 ; 30 ÷ 3 = 10." },
        { d:2, q:"Sur 10 jours, il a plu : 3 − 1 − 0 − 0 − 2 − 1 − 0 − 4 − 1 − 0 (mm). Quelle est l'étendue ?", c:["4 mm","3 mm","1 mm","12 mm"], a:0, e:"Max : 4, min : 0 → étendue 4 mm." },
        { d:2, q:"Moyenne de 5 notes valant au total 42 ?", c:["8,4","8,5","42","37"], a:0, e:"42 ÷ 5 = 8,4." },
        { d:3, q:"Âges : 12 ans (4 fois) ; 13 ans (6 fois). Âge moyen ?", c:["12,6 ans","13 ans","12,8 ans","12,5 ans"], a:0, e:"Total âges : 4 × 12 + 6 × 13 = 48 + 78 = 126. Effectif 10 (4+6). Moyenne : 126 ÷ 10 = 12,6 ans." },
        { d:3, q:"Nombre de frères et sœurs : 1 (7 élèves), 0 (5 élèves), 2 (8 élèves). Moyenne, arrondie au dixième ?", c:["1,2","1","2","1,1"], a:0, e:"1 × 7 + 0 × 5 + 2 × 8 = 23. Effectif : 20. Moyenne : 23 ÷ 20 = 1,15 → arrondie au dixième : 1,2." },
        { d:3, q:"Après le contrôle, la moyenne de la classe est 12,5. Tous les élèves ont-ils 12,5 ?", c:["Non, la moyenne ne donne pas chaque note","Oui, toujours","On ne peut pas savoir du tout","Seulement si l'effectif est pair"], a:0, e:"La moyenne est une valeur « centrale » : des notes autour d'elle (par ex. 8, 12, 17,5) peuvent donner 12,5." },
        { d:4, q:"7 valeurs ont une moyenne de 9. On ajoute une valeur 20. Nouvelle moyenne ?", c:["10,375","10,5","10","11"], a:0, e:"Somme initiale : 7 × 9 = 63. Nouvelle somme : 63 + 20 = 83, pour 8 valeurs : 83 ÷ 8 = 10,375." },
        { d:4, q:"Quelle série a la plus grande étendue ?", c:["2 ; 5 ; 9","1 ; 3 ; 7 ; 8","4 ; 6 ; 8","0 ; 5 ; 10"], a:3, e:"Étendues respectives : 7 ; 7 ; 4 ; 10. La plus grande est 10 pour 0 ; 5 ; 10." },
        { d:4, q:"Une série de 4 notes a une moyenne de 13. On veut une moyenne de 14 après une 5e note. Combien faut-il obtenir ?", a:"18", e:"Somme visée : 5 × 14 = 70. Somme actuelle : 4 × 13 = 52. Note nécessaire : 70 − 52 = 18." },
        { d: 3, q: "Dans une série statistique, la fréquence d'une valeur est...", c: ["l'effectif de la valeur divisé par l'effectif total", "l'effectif total divisé par l'effectif de la valeur", "la somme de tous les effectifs", "la plus grande valeur de la série"], a: 0, e: "Fréquence = effectif de la valeur ÷ effectif total ; souvent donnée en pourcentage." },
        { d: 3, q: "Série : 2 ; 5 ; 3 ; 5 ; 7. Quelle est la fréquence de la valeur 5 ?", c: ["40 %", "20 %", "25 %", "50 %"], a: 0, e: "5 apparaît 2 fois sur 5 valeurs : fréquence = 2 ÷ 5 = 0,4 = 40 %." },
        { d: 4, q: "Série : 4 ; 8 ; 2 ; 10 ; 6. Quelle est la médiane ?", c: ["6", "2", "4", "10"], a: 0, e: "On ordonne : 2 ; 4 ; 6 ; 8 ; 10. La valeur centrale est 6 : la médiane est 6." },
      ],
      gen: {
        1: () => { const a = 5 + Math.floor(Math.random() * 11), b = 5 + Math.floor(Math.random() * 11), c = 5 + Math.floor(Math.random() * 11);
          return { q: `${a} \u00e9l\u00e8ves pr\u00e9f\u00e8rent le foot, ${b} le basket et ${c} le tennis. Effectif total de la s\u00e9rie ?`, a: String(a + b + c), e: `Effectif total = ${a} + ${b} + ${c} = ${a + b + c}.` }; },
        2: () => { const m = 8 + Math.floor(Math.random() * 9); const vals = [-4, -2, 0, 2, 4].sort(() => Math.random() - 0.5).map(o => m + o);
          return { q: `S\u00e9rie : ${vals.join(" ; ")}. Quelle est la moyenne ?`, a: String(m), e: `Somme = ${vals.join(" + ")} = ${5 * m}. Moyenne = ${5 * m} \u00f7 5 = ${m}.` }; },
        3: () => { const set = new Set(); while (set.size < 5) set.add(2 + Math.floor(Math.random() * 29)); const s = [...set].sort((x, y) => x - y);
          return { q: `S\u00e9rie : ${s.join(" ; ")}. Quelle est la m\u00e9diane ?`, a: String(s[2]), e: `5 valeurs : apr\u00e8s classement, la m\u00e9diane est la 3\u1d49 valeur : ${s[2]}.` }; },
        4: () => { const P = [[4, 25], [4, 50], [4, 75], [5, 20], [5, 40], [5, 60], [5, 80], [10, 30], [10, 40], [10, 60], [10, 70]]; const p = P[Math.floor(Math.random() * P.length)]; const D = { 20: "0,2", 25: "0,25", 30: "0,3", 40: "0,4", 50: "0,5", 60: "0,6", 70: "0,7", 75: "0,75", 80: "0,8" };
          return { q: `${p[0] * p[1] / 100} \u00e9l\u00e8ves sur ${p[0]} prennent le bus. Fr\u00e9quence (en %) ?`, a: [`${p[1]} %`, String(p[1])], e: `Fr\u00e9quence = ${p[0] * p[1] / 100} \u00f7 ${p[0]} = ${D[p[1]]} = ${p[1]} %.` }; }
      },
    },
    {
      id: "equations5", titre: "Équations et problèmes", icone: "❓",
      chap: [19],
      notion: "Résoudre une équation, c'est trouver la valeur de la lettre qui rend l'égalité vraie.\nLa lettre (l'inconnue) désigne un nombre : elle garde la même valeur dans toute l'égalité.\nÉquation somme : x + a = b → x = b − a. Équation produit : a × x = b → x = b ÷ a.\nPour tester une solution, on remplace la lettre par sa valeur dans les deux membres et on compare.",
      qs: [
        { d:1, q:"Dans l'équation x + 5 = 12, que vaut x ?", c:["7","17","60","12"], a:0, e:"x + 5 = 12 → x = 12 − 5 = 7. Vérification : 7 + 5 = 12." },
        { d:1, q:"Résoudre : x + 9 = 17", a:"8", e:"x = 17 − 9 = 8. Vérification : 8 + 9 = 17." },
        { d:2, q:"Résoudre : 6 × x = 42", a:"7", e:"x = 42 ÷ 6 = 7. Vérification : 6 × 7 = 42." },
        { d:2, q:"x = 4 est-il solution de 3 × x + 2 = 14 ?", c:["Oui, car 3 × 4 + 2 = 14","Non, car 14 n'est pas multiple de 4","Oui, car x est pair","Non, car 3 × 4 = 12 seulement"], a:0, e:"On teste : 3 × 4 + 2 = 12 + 2 = 14. Les deux membres sont égaux : x = 4 est bien solution." },
        { d:2, q:"Résoudre : 12 + x = 30", a:"18", e:"x = 30 − 12 = 18. Vérification : 12 + 18 = 30." },
        { d:3, q:"Résoudre : 5 × x − 6 = 24", a:"6", e:"On isole le produit : 5 × x = 24 + 6 = 30, donc x = 30 ÷ 5 = 6." },
        { d:3, q:"x − 12 = 5 : que vaut x ?", c:["17","7","60","8"], a:0, e:"x = 5 + 12 = 17. Vérification : 17 − 12 = 5." },
        { d:3, q:"Résoudre : x + 3 = 3 × 7", a:"18", e:"On calcule d'abord le membre de droite : 3 × 7 = 21. Puis x = 21 − 3 = 18." },
        { d:4, q:"Résoudre : 36 = 4 × x + 8", a:"7", e:"4 × x = 36 − 8 = 28, donc x = 28 ÷ 4 = 7." },
        { d:4, q:"Léa avait n images. Elle en reçoit 23 de plus et en a maintenant 51. Combien avait-elle d'images ?", a:"28", e:"On modélise : n + 23 = 51, donc n = 51 − 23 = 28." },
        { d:4, q:"Le triple d'un nombre diminué de 4 vaut 17. Ce nombre vaut :", c:["7","5","21","13"], a:0, e:"3 × x − 4 = 17, donc 3 × x = 21, et x = 21 ÷ 3 = 7." },
        { d:4, q:"Résoudre : 2 × x + 5 × 3 = 31", a:"8", e:"5 × 3 = 15, puis 2 × x = 31 − 15 = 16, donc x = 16 ÷ 2 = 8." }
      ],
      gen: {
        1: () => { const a = 3 + Math.floor(Math.random()*9), b = a + 3 + Math.floor(Math.random()*12);
          return { q:`Résoudre : x + ${a} = ${b}`, a:String(b - a), e:`x = ${b} − ${a} = ${b - a}. Vérification : ${b - a} + ${a} = ${b}.` }; },
        2: () => { const k = 2 + Math.floor(Math.random()*9), a = 2 + Math.floor(Math.random()*6); const b = a*k;
          return { q:`Résoudre : ${a} × x = ${b}`, a:String(k), e:`x = ${b} ÷ ${a} = ${k}. Vérification : ${a} × ${k} = ${b}.` }; },
        3: () => { const b = 2 + Math.floor(Math.random()*5), c = 2 + Math.floor(Math.random()*5), a = 2 + Math.floor(Math.random()*15);
          return { q:`Résoudre : x + ${a} = ${b} × ${c}`, a:String(b*c - a), e:`${b} × ${c} = ${b*c}, puis x = ${b*c} − ${a} = ${b*c - a}.` }; },
        4: () => { const x = 2 + Math.floor(Math.random()*8), a = 2 + Math.floor(Math.random()*5), b = 1 + Math.floor(Math.random()*(a*x - 1)); const c = a*x - b;
          return { q:`Résoudre : ${a} × x − ${b} = ${c}`, a:String(x), e:`${a} × x = ${c} + ${b} = ${a*x}, donc x = ${a*x} ÷ ${a} = ${x}.` }; }
      },
    },
    {
      id: "informatique5", titre: "Pensée informatique (Scratch)", icone: "🤖",
      chap: [22],
      notion: "Une variable est une boîte qui garde une valeur : « n ← 3 » met 3 dans n.\nLes instructions s'exécutent dans l'ordre, l'une après l'autre.\nUne boucle « répéter k fois » exécute la même instruction k fois de suite.\nUne boucle conditionnelle (« tant que … ») s'exécute tant que la condition est vraie : on compte les passages.",
      qs: [
        { d:1, q:"Programme de calcul : choisir 4 ; ajouter 5 ; doubler le résultat. Quel est le résultat final ?", a:"18", e:"4 + 5 = 9, puis on double : 9 × 2 = 18." },
        { d:1, q:"Dans un programme, « n ← 3 » signifie que...", c:["la variable n prend la valeur 3","on teste si n vaut 3","3 devient la lettre n","on efface la valeur 3"], a:0, e:"La flèche ← est une affectation : on range 3 dans la variable n." },
        { d:2, q:"On exécute : n ← 3 ; n ← n + 5 ; n ← n × 2. Que vaut n à la fin ?", a:"16", e:"n ← 3 + 5 = 8, puis n ← 8 × 2 = 16." },
        { d:2, q:"n ← 5, puis on répète 4 fois l'instruction « ajouter 3 à n ». Que vaut n ?", a:"17", e:"On ajoute 4 fois 3 : 5 + 4 × 3 = 5 + 12 = 17." },
        { d:2, q:"Que fait la boucle « répéter 6 fois : ajouter 2 à n » quand n démarre à 10 ?", c:["elle ajoute 12 à n : n = 22","elle ajoute 2 à n : n = 12","elle multiplie n par 12","elle ne change pas n"], a:0, e:"6 ajouts de 2 : n = 10 + 6 × 2 = 22." },
        { d:3, q:"Programme de calcul : choisir 6 ; ajouter 3 ; multiplier par 2 ; soustraire 5. Résultat final ?", a:"13", e:"6 + 3 = 9 ; 9 × 2 = 18 ; 18 − 5 = 13." },
        { d:3, q:"n ← 2, puis on répète 3 fois « multiplier n par 3 ». Que vaut n ?", a:"54", e:"n ← 2 × 3 = 6 ; puis 6 × 3 = 18 ; puis 18 × 3 = 54." },
        { d:3, q:"Un compteur démarre à 2 et un programme ajoute 1 tant que compteur < 7. Combien d'ajouts sont effectués ?", c:["5","7","3","6"], a:0, e:"Le compteur passe à 3, 4, 5, 6, 7 : c'est 5 ajouts (il s'arrête quand la condition devient fausse)." },
        { d:3, q:"Programme de calcul : choisir 8 ; soustraire 2 ; multiplier par 3. Résultat final ?", a:"18", e:"8 − 2 = 6 ; 6 × 3 = 18." },
        { d:4, q:"On exécute : x ← 5 ; x ← x + a ; x ← x × 3. Le résultat final est 24. Que vaut a ?", a:"3", e:"(5 + a) × 3 = 24, donc 5 + a = 24 ÷ 3 = 8, et a = 3." },
        { d:4, q:"n ← 20, puis on répète k fois « retirer 3 à n » et le résultat final est 8. Combien de passages ?", a:"4", e:"20 − 8 = 12 ont été retirés, et 12 ÷ 3 = 4 passages." },
        { d:4, q:"On exécute : x ← 4 ; x ← x × 2 ; x ← x + a. Le résultat final est 100. Que vaut a ?", c:["92","96","88","100"], a:0, e:"x ← 4 × 2 = 8, puis 8 + a = 100, donc a = 92." }
      ],
      gen: {
        1: () => { const a = 2 + Math.floor(Math.random()*20), b = 2 + Math.floor(Math.random()*15);
          return { q:`Programme de calcul : choisir ${a} ; ajouter ${b}. Quel est le résultat final ?`, a:String(a + b), e:`${a} + ${b} = ${a + b}.` }; },
        2: () => { const a = 2 + Math.floor(Math.random()*15), b = 2 + Math.floor(Math.random()*6), k = 2 + Math.floor(Math.random()*4);
          return { q:`n ← ${a}, puis on répète ${k} fois l'instruction « ajouter ${b} à n ». Que vaut n ?`, a:String(a + k*b), e:`On ajoute ${k} fois ${b} : ${a} + ${k} × ${b} = ${a + k*b}.` }; },
        3: () => { const a = 1 + Math.floor(Math.random()*15), k = 2 + Math.floor(Math.random()*3); const steps = [a]; for (let i = 1; i <= k; i++) steps.push(steps[i-1]*2);
          return { q:`n ← ${a}, puis on répète ${k} fois l'instruction « multiplier n par 2 ». Que vaut n ?`, a:String(steps[k]), e:`Chaque passage double n : ${steps.slice(1).map((v,i) => `${steps[i]} × 2 = ${v}`).join(" ; puis ")}.` }; },
        4: () => { const n = 2 + Math.floor(Math.random()*12), b = 2 + Math.floor(Math.random()*10), k = 2 + Math.floor(Math.random()*6);
          return { q:`Programme de calcul : choisir ${n} ; ajouter ${b} ; multiplier par ${k}. Quel est le résultat final ?`, a:String((n + b) * k), e:`${n} + ${b} = ${n + b}, puis ${n + b} × ${k} = ${(n + b) * k}.` }; }
      },
    },
    {
      id: "proba5", titre: "Probabilités", icone: "🎲",
      chap: [21],
      notion: "Expérience aléatoire : on ne peut pas prédire le résultat. Issues : les résultats possibles ; univers Ω : l'ensemble de toutes les issues.\nÉvénement : une partie de l'univers ; événement élémentaire : une seule issue.\nProbabilité d'un événement (cas équiprobables) : nombre de cas favorables ÷ nombre de cas possibles — un nombre entre 0 et 1.",
      qs: [
        { d:1, q:"Un lancer de pièce équilibrée comporte combien d'issues ?", c:["2","1","4","6"], a:0, e:"Pile ou Face : deux issues possibles." },
        { d:1, q:"L'univers d'un lancer de dé à 6 faces, c'est...", c:["l'ensemble {1 ; 2 ; 3 ; 4 ; 5 ; 6}","seulement la face 6","les chiffres pairs uniquement","l'ensemble des nombres premiers"], a:0, e:"L'univers réunit TOUTES les issues possibles : 1, 2, 3, 4, 5 et 6." },
        { d:2, q:"« Obtenir un nombre pair » avec un dé à 6 faces : combien de cas favorables ?", c:["3","2","6","1"], a:0, e:"Pairs : 2, 4 et 6 → 3 cas favorables." },
        { d:2, q:"P(obtenir un nombre pair) avec un dé équilibré ?", c:["1/2","1/3","2/3","1/6"], a:0, e:"3 cas favorables sur 6 équiprobables : 3/6 = 1/2." },
        { d:2, q:"Une probabilité est toujours comprise entre...", c:["0 et 1","0 et 100","−1 et 1","1 et 2"], a:0, e:"P = 0 pour un événement impossible ; P = 1 pour un événement certain." },
        { d:2, q:"Un sac contient 5 billes rouges et 3 billes bleues identiques au toucher. P(tirer une bleue) ?", c:["3/8","5/8","3/5","1/2"], a:0, e:"8 billes au total, 3 bleues : P = 3/8." },
        { d:3, q:"P(obtenir un 1 ou un 6) avec un dé équilibré ?", c:["1/3","1/6","1/2","2/3"], a:0, e:"2 cas favorables sur 6 : 2/6 = 1/3." },
        { d:3, q:"Un événement élémentaire est un événement qui...", c:["contient une seule issue","n'a aucune chance de se produire","est certain","contient tout l'univers"], a:0, e:"Exemple : « obtenir 4 » avec un dé : une seule issue." },
        { d:3, q:"Dans une classe de 22 élèves, 11 ont les yeux bruns. P(yeux bruns) ?", c:["1/2","1/4","3/4","1/11"], a:0, e:"11 cas favorables sur 22 : 11/22 = 1/2." },
        { d:4, q:"On tire une carte au hasard parmi 32 cartes identiques (4 rois). P(tirer un roi) ? (forme a/b)", a:"1/8", e:"4 cas favorables sur 32 : 4/32 = 1/8." },
        { d:4, q:"On lance deux pièces équilibrées. P(obtenir exactement un Face) ?", c:["1/2","1/4","2/3","1/3"], a:0, e:"Issues : PP, PF, FP, FF — toutes équiprobables. Exactement un Face : PF et FP → 2/4 = 1/2." },
        { d:4, q:"Un événement a une probabilité de 0. Il est...", c:["impossible","certain","peu probable mais possible","élémentaire"], a:0, e:"Probabilité 0 : l'événement ne peut pas se produire (pour des issues équiprobables finies)." }
      ],
      gen: {
        1: () => { const k = 1 + Math.floor(Math.random()*6);
          return { q:`Un dé équilibré à 6 faces est lancé. P(obtenir exactement la face ${k}) ? (forme a/b)`, a:"1/6", e:`Un seul cas favorable (la face ${k}) sur 6 issues équiprobables : 1/6.` }; },
        2: () => { const r = 2 + Math.floor(Math.random()*8), b = 2 + Math.floor(Math.random()*8), t = r + b, g = (a, c) => c ? g(c, a % c) : a, d = g(r, t);
          return { q:`Un sac contient ${r} billes rouges et ${b} billes bleues identiques au toucher. P(tirer une rouge) ? (forme a/b, simplifiée)`, a:`${r/d}/${t/d}`, e:`${r} rouges sur ${t} billes : P = ${r}/${t} = ${r/d}/${t/d}.` }; }
      }
    }
  ]
};
