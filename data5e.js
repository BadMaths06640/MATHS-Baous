/* ================= BaouMaths — banque de questions 5e =================
   d: niveau de difficulté 1 à 4 (1 = découverte, 4 = expertise)
   Question QCM : { d, q, c:[4 choix], a: indexBonneReponse, e: explication }
   Question à saisir : { d, q, a:'réponse' ou ['réponses','acceptées'], e }
   gen1..gen4 (optionnels) : générateurs de questions infinies par difficulté */
window.BANK_5E = {
  themes: [
    {
      id: "calc", titre: "Calcul et priorités opératoires", icone: "🧮",
      notion: "Sans parenthèses : on calcule d'abord × et ÷, puis + et − de gauche à droite.\nAvec des parenthèses : on calcule d'abord l'intérieur des parenthèses (et des crochets).\nUne barre de fraction joue le rôle de parenthèses.",
      qs: [
        { d:1, q:"Calculer : 3 + 5 × 2", c:["16","13","11","10"], a:1, e:"On fait d'abord la multiplication : 5 × 2 = 10, puis l'addition : 3 + 10 = 13." },
        { d:1, q:"Calculer : 20 − 8 ÷ 2", c:["6","14","16","24"], a:1, e:"On fait d'abord la division : 8 ÷ 2 = 4, puis la soustraction : 20 − 4 = 16." },
        { d:1, q:"Calculer : (3 + 5) × 2", c:["11","13","16","10"], a:2, e:"On calcule d'abord la parenthèse : 3 + 5 = 8, puis : 8 × 2 = 16." },
        { d:2, q:"Calculer : 4 + 3 × (7 − 5)", a:"10", e:"Parenthèse d'abord : 7 − 5 = 2. Multiplication : 3 × 2 = 6. Addition : 4 + 6 = 10." },
        { d:2, q:"Calculer : 18 ÷ 3 × 2", c:["3","12","6","2"], a:1, e:"÷ et × ont la même priorité : on calcule de gauche à droite. 18 ÷ 3 = 6, puis 6 × 2 = 12." },
        { d:2, q:"Calculer : 2 + 3 × 4 − 5 × 2", a:"4", e:"On calcule d'abord les produits : 3 × 4 = 12 et 5 × 2 = 10. Puis 2 + 12 − 10 = 4." },
        { d:3, q:"Calculer : 5 × (4 − 7)² + 6", c:["−39","21","−69","51"], a:0, e:"Parenthèse : 4 − 7 = −3. Puissance : (−3)² = 9. Produit : 5 × 9 = 45. Somme : 45 + 6 = 51. Attention : 5 × (−3)² = 5 × 9, pas −15." },
        { d:3, q:"Calculer : 24 − [ 3 × (2 + 5) − 1 ]", a:"2", e:"Parenthèse : 2 + 5 = 7. Crochets : 3 × 7 − 1 = 21 − 1 = 20. Puis 24 − 20 = 4." },
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
          return { q:`Calculer : (${x}² − 4 × ${x}) × (−1)${"⁻"}${n === 1 ? "" : ""} + ${n} × ${x}`, a:String((x*x - 4*x) * (-1) + n*x), e:`Dans la parenthèse : ${x}² − ${4*x} = ${x*x - 4*x}. Multiplié par −1 : ${-(x*x-4*x)}. Puis + ${n*x} : ${(x*x-4*x)*(-1) + n*x}.` }; }
      }
    },
    {
      id: "relatifs", titre: "Nombres relatifs", icone: "🌡️",
      notion: "Somme : deux nombres de même signe → on garde le signe et on ajoute. Signes différents → on retire le plus petit au plus grand et on garde le signe du plus grand.\nProduit et quotient : le produit de deux nombres de même signe est positif ; de signes contraires, il est négatif.\n(−a)² = a × (−a) × (−a)... non ! (−a)² = (−a) × (−a) = a²  (positif), tandis que −a² = −(a × a) (négatif).",
      qs: [
        { d:1, q:"Calculer : (−3) + (−5)", c:["−8","8","−2","2"], a:0, e:"Même signe (−) : on ajoute les distances à zéro : 3 + 5 = 8, et on garde le signe −." },
        { d:1, q:"Calculer : (−7) + 4", c:["−3","3","−11","11"], a:0, e:"Signes différents : 7 − 4 = 3, et on garde le signe du plus grand (7, négatif) : −3." },
        { d:1, q:"Calculer : 6 − 10", c:["4","−4","16","−16"], a:1, e:"Soustraire 10 revient à ajouter −10 : 6 + (−10) = −4." },
        { d:2, q:"Calculer : (−4) × (−5)", c:["−20","−9","20","9"], a:2, e:"Deux facteurs de même signe (−) : le produit est positif : 4 × 5 = 20." },
        { d:2, q:"Calculer : (−2) × 3 × (−4)", a:"24", e:"(−2) × 3 = −6, puis (−6) × (−4) = 24. Deux signes − « s'annulent »." },
        { d:2, q:"Calculer : (−10) − (−4)", a:"−6", e:"Soustraire (−4) revient à ajouter 4 : −10 + 4 = −6." },
        { d:3, q:"Calculer : (−3)² × (−2)", c:["−18","18","−36","12"], a:0, e:"(−3)² = (−3) × (−3) = 9 (positif !), puis 9 × (−2) = −18." },
        { d:3, q:"Calculer : −5 + 2 × (−3)", a:"−11", e:"Multiplication d'abord : 2 × (−3) = −6, puis −5 + (−6) = −11." },
        { d:3, q:"Calculer : (−12) ÷ (−3) + 1", a:"5", e:"Deux signes identiques : (−12) ÷ (−3) = 4, puis 4 + 1 = 5." },
        { d:4, q:"Températures : il fait −7 °C le matin. La température monte de 12 °C puis baisse de 9 °C. Température finale ?", c:["−4 °C","10 °C","−10 °C","4 °C"], a:0, e:"−7 + 12 = 5, puis 5 − 9 = −4. Il fait −4 °C." },
        { d:4, q:"Calculer : (−2)³ + 3 × (−1)⁴", a:"−4", e:"(−2)³ = −8 (négatif : trois facteurs négatifs). (−1)⁴ = 1 (puissance paire). Donc −8 + 3 × 1 = −5." },
        { d:4, q:"Calculer : 8 − (−3) × (−2)²", a:"20", e:"Puissance d'abord : (−2)² = 4. Produit : (−3) × 4 = −12. On ajoute « inversé » : 8 − (−12) = 8 + 12 = 20." }
      ],
      gen: {
        1: () => { const a = -1 - Math.floor(Math.random()*12), b = Math.floor(Math.random()*12);
          return { q:`Calculer : (${a}) + ${b}`, a:String(a+b), e:`On part de ${a} et on avance de ${b} : ${a+b}.` }; },
        2: () => { const a = -9 + Math.floor(Math.random()*19); const b = -9 + Math.floor(Math.random()*19);
          return { q:`Calculer : (${a}) × (${b})`, a:String(a*b), e:`Le produit ${(a<0&&b<0)? "de deux nombres négatifs est positif" : "de deux nombres de signes contraires est négatif"} : ${a} × ${b} = ${a*b}.` }; },
        3: () => { const a = -8 + Math.floor(Math.random()*17), b = 2 + Math.floor(Math.random()*6);
          return { q:`Calculer : ${a} − 2 × (${b})`, a:String(a - 2*b), e:`Le produit 2 × (${b}) = ${2*b}, donc ${a} − ${2*b} = ${a-2*b}.` }; },
        4: () => { const a = -4 + Math.floor(Math.random()*9), n = 2;
          return { q:`Calculer : (${a})² − ${a} × 2`, a:String(a*a - 2*a), e:`Le carré est positif : (${a})² = ${a*a}. Puis ${a} × 2 = ${2*a}. Donc ${a*a} − ${2*a} = ${a*a - 2*a}.` }; }
      }
    },
    {
      id: "fractions", titre: "Écriture fractionnaire", icone: "🍰",
      notion: "Addition / soustraction : mettre au même dénominateur, puis additionner les numérateurs.\nProduit : on multiplie les numérateurs entre eux et les dénominateurs entre eux.\nSimplifier : on divise numérateur et dénominateur par le même nombre.",
      qs: [
        { d:1, q:"Simplifier la fraction : 12/18", c:["2/3","3/4","6/9","4/6"], a:0, e:"12 = 2 × 6 et 18 = 3 × 6 → 12/18 = 2/3 (on divise par 6). 4/6 et 6/9 ne sont pas simplifiées." },
        { d:1, q:"Calculer : 1/4 + 2/4", c:["3/8","3/4","2/16","1/2"], a:1, e:"Même dénominateur : on additionne les numérateurs : 1 + 2 = 3, donc 3/4." },
        { d:1, q:"Quelle fraction est égale à 1/2 ?", c:["3/6","2/5","4/6","5/8"], a:0, e:"3/6 = (3 ÷ 3)/(6 ÷ 3) = 1/2." },
        { d:2, q:"Calculer : 2/3 + 1/6", c:["3/9","5/6","3/6","5/9"], a:1, e:"Dénominateur commun 6 : 2/3 = 4/6. Somme : 4/6 + 1/6 = 5/6." },
        { d:2, q:"Calculer : 3/4 × 2/5", c:["6/20 = 3/10","5/9","6/9","3/10... c'est pareil !"], a:0, e:"3 × 2 = 6 et 4 × 5 = 20 → 6/20, qu'on simplifie par 2 : 3/10." },
        { d:2, q:"Comparer : quel est le plus grand nombre ?", c:["3/4","2/3","5/8","7/12"], a:0, e:"Mise au dénominateur 12 : 3/4 = 9/12, 2/3 = 8/12, 5/8 = 7,5/12, 7/12. Le plus grand est 9/12 = 3/4." },
        { d:3, q:"Calculer : 5/6 − 2/9", c:["3/3","11/18","23/18","1/3"], a:1, e:"Dénominateur commun 18 : 5/6 = 15/18 et 2/9 = 4/18. Différence : 15/18 − 4/18 = 11/18." },
        { d:3, q:"Calculer : 4/5 de 60", a:"48", e:"« de » signifie × : 4/5 × 60 = 240/5 = 48." },
        { d:3, q:"Calculer : 2/3 + 1/2 × 3/4", c:["25/24","11/12","7/8","5/4"], a:0, e:"Produit d'abord : 1/2 × 3/4 = 3/8. Somme avec 2/3 (dénominateur 24) : 16/24 + 9/24 = 25/24." },
        { d:4, q:"Calculer : (3/5 − 1/5) × 5/2", a:"1", e:"Parenthèse : 3/5 − 1/5 = 2/5. Produit : 2/5 × 5/2 = 10/10 = 1." },
        { d:4, q:"Calculer : 1 + 3/4 × 2/3", c:["3/2","1/2","5/3","7/4"], a:0, e:"Produit d'abord : 3/4 × 2/3 = 6/12 = 1/2. Puis 1 + 1/2 = 3/2." },
        { d:4, q:"Un gâteau est partagé en 8. Léa en mange 3/8, Tom en mange 1/4. Quelle fraction du gâteau reste-t-il ?", c:["3/8","1/2","5/8","1/4"], a:0, e:"1/4 = 2/8. Manger : 3/8 + 2/8 = 5/8. Reste : 8/8 − 5/8 = 3/8." }
      ],
      gen: {
        1: () => { const n = 2 + Math.floor(Math.random()*6), d = n + 1 + Math.floor(Math.random()*6);
          return { q:`Simplifier au maximum : ${n*d}/${d*d}`, a:`${n}/${d}`, e:`On divise numérateur et dénominateur par ${d} : ${n*d} ÷ ${d} = ${n} et ${d*d} ÷ ${d} = ${d}.` }; }
      }
    },
    {
      id: "propo", titre: "Proportionnalité et pourcentages", icone: "📊",
      notion: "Tableau de proportionnalité : les quotients de chaque colonne sont égaux (coefficient de proportionnalité).\nPourcentage : t % d'une quantité = t/100 × quantité.\nÉchelle : distance sur le dessin ÷ distance réelle (avec la même unité).",
      qs: [
        { d:1, q:"3 stylos coûtent 6 €. Prix de 5 stylos (prix proportionnel) ?", c:["9 €","10 €","12 €","15 €"], a:1, e:"Un stylo coûte 6 ÷ 3 = 2 €. Donc 5 stylos : 5 × 2 = 10 €." },
        { d:1, q:"Calculer 10 % de 80", c:["8","0,8","80","18"], a:0, e:"10 % = ÷10 : 80 ÷ 10 = 8." },
        { d:1, q:"Calculer 50 % de 34", a:"17", e:"50 % = la moitié : 34 ÷ 2 = 17." },
        { d:2, q:"Calculer 25 % de 240", c:["6","60","24","48"], a:1, e:"25 % = un quart : 240 ÷ 4 = 60. Ou 240 × 25 ÷ 100 = 60." },
        { d:2, q:"Une écharpe à 30 € augmente de 20 %. Nouveau prix ?", c:["36 €","32 €","50 €","24 €"], a:0, e:"Augmentation : 30 × 20 ÷ 100 = 6 €. Nouveau prix : 30 + 6 = 36 €." },
        { d:2, q:"Sur une carte à l'échelle 1/100 000, deux villages sont à 4 cm. Distance réelle ?", c:["400 m","4 km","40 km","40 m"], a:1, e:"1 cm sur la carte = 100 000 cm réels = 1 km. Donc 4 cm = 4 km." },
        { d:3, q:"Un article à 80 € est soldé à −25 %. Prix soldé ?", c:["55 €","60 €","65 €","20 €"], a:1, e:"Réduction : 80 × 25 ÷ 100 = 20 €. Prix soldé : 80 − 20 = 60 €." },
        { d:3, q:"15 litres d'essence coûtent 24 € ; prix de 40 litres (proportionnel) ?", a:"64", e:"Coefficient : 24 ÷ 15 = 1,6 €/L. Donc 40 × 1,6 = 64 €." },
        { d:3, q:"Après une hausse de 10 %, un abonnement coûte 44 €. Prix avant hausse ?", c:["39,60 €","34 €","40 €","44,10 €"], a:2, e:"Après hausse de 10 %, le prix vaut 110 % de l'ancien : 44 = 1,1 × p, donc p = 44 ÷ 1,1 = 40 €." },
        { d:4, q:"Une école compte 480 élèves ; 55 % sont des filles. Combien de garçons ?", a:"216", e:"Filles : 480 × 55 ÷ 100 = 264. Garçons : 480 − 264 = 216." },
        { d:4, q:"Le prix d'un vélo passe de 150 € à 120 €. Quelle est la baisse en % ?", c:["30 %","20 %","25 %","80 %"], a:1, e:"Baisse : 30 €. Pourcentage : 30/150 = 1/5 = 20 %." },
        { d:4, q:"Une maquette à l'échelle 1/50 : une tour de 35 m de hauteur mesure combien sur la maquette ?", c:["70 cm","7 cm","35 cm","1,75 m"], a:0, e:"35 m = 3 500 cm ; 3 500 ÷ 50 = 70 cm." }
      ],
      gen: {
        2: () => { const q = [10,20,25,50][Math.floor(Math.random()*4)]; const n = (2+Math.floor(Math.random()*40))*4;
          return { q:`Calculer ${q} % de ${n}`, a:String(n*q/100), e:`${q} % de ${n} = ${n} × ${q} ÷ 100 = ${n*q}/100 = ${n*q/100}.` }; },
        3: () => { const p = 20 + Math.floor(Math.random()*40)*5, t = [10,20,25,50][Math.floor(Math.random()*4)];
          return { q:`Un article à ${p} € est soldé à −${t} %. Prix soldé ?`, a:String(p*(100-t)/100), e:`Réduction : ${p} × ${t} ÷ 100 = ${p*t/100}. Prix soldé : ${p} − ${p*t/100} = ${p*(100-t)/100} €.` }; }
      }
    },
    {
      id: "litteral5", titre: "Calcul littéral : distributivité", icone: "✖️",
      notion: "k × (a + b) = k × a + k × b (simple distributivité).\nRéduire une expression : regrouper les termes « semblables » : 3x + 5x = 8x, mais 3x + 5 ne se réduit pas.",
      qs: [
        { d:1, q:"Développer : 3 × (x + 2)", c:["3x + 2","3x + 6","x + 6","3x × 6"], a:1, e:"On distribue le 3 : 3 × x + 3 × 2 = 3x + 6." },
        { d:1, q:"Réduire : 4x + 3 + 5x", c:["9x + 3","12x","9x","4x + 8x"], a:0, e:"On regroupe les x : 4x + 5x = 9x, on garde le + 3." },
        { d:1, q:"Développer : 5 × (2 − a)", c:["10 − 5a","7 − 5a","10 − a","5 × 2 × a"], a:0, e:"5 × 2 = 10 et 5 × (−a) = −5a, donc 10 − 5a." },
        { d:2, q:"Réduire : 7a − 2 + 3a − 8", c:["10a − 10","10a + 6","4a − 10","21a − 6"], a:0, e:"7a + 3a = 10a et −2 − 8 = −10, donc 10a − 10." },
        { d:2, q:"Développer puis réduire : 2(3x + 4) + 5x", a:"11x+8", e:"2 × 3x = 6x ; 2 × 4 = 8. Puis 6x + 5x = 11x, donc 11x + 8." },
        { d:2, q:"Quelle expression est égale à 4 × (7 − 3) ?", c:["4 × 7 − 3","4 × 7 − 4 × 3","4 × 7 × 3","7 × 4 − 3"], a:1, e:"Distributivité : 4 × 7 − 4 × 3 = 28 − 12 = 16 = 4 × 4." },
        { d:3, q:"Factoriser : 5x + 25", c:["5(x + 5)","x(5 + 25)","5(x + 25)","5 × x + 5 × 5"], a:0, e:"5 est un facteur commun : 5x + 25 = 5 × x + 5 × 5 = 5(x + 5)." },
        { d:3, q:"Développer puis réduire : 3(2x − 5) − 4x", c:["2x − 15","6x − 15","10x − 15","2x + 15"], a:0, e:"3 × 2x = 6x ; 3 × (−5) = −15. Puis 6x − 15 − 4x = 2x − 15." },
        { d:3, q:"Tester l'expression : que vaut 2x + 5 pour x = 3 ?", a:"11", e:"On remplace x par sa valeur puis on calcule : 2 × 3 + 5 = 6 + 5 = 11." },
        { d:4, q:"Pour quelle(s) valeur(s) de x a-t-on 4(x + 3) = 3x + 10 ?", c:["x = −2","x = 2","x = 1","x = 7"], a:0, e:"4(x + 3) = 4x + 12. On cherche 4x + 12 = 3x + 10, donc 4x − 3x = 10 − 12 → x = −2. Vérification : 4 × 1 = 4 et 3 × (−2) + 10 = 4." },
        { d:4, q:"Développer puis réduire : −2(3 − x) + 4x", a:"6x-6", e:"−2 × 3 = −6 ; −2 × (−x) = +2x. Puis −6 + 2x + 4x = 6x − 6." },
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
      id: "stats5", titre: "Statistiques : effectifs et moyenne", icone: "📈",
      notion: "Effectif : nombre de fois où une valeur apparaît.\nÉtendue : plus grande valeur − plus petite valeur.\nMoyenne simple : somme des valeurs ÷ nombre de valeurs (en 5e, chaque valeur compte une fois ou on divise par l'effectif total).",
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
        { d:4, q:"Une série de 4 notes a une moyenne de 13. On veut une moyenne de 14 après une 5e note. Combien faut-il obtenir ?", a:"18", e:"Somme visée : 5 × 14 = 70. Somme actuelle : 4 × 13 = 52. Note nécessaire : 70 − 52 = 18." }
      ]
    },
    {
      id: "geom5", titre: "Symétrie et triangles", icone: "📐",
      notion: "Symétrie centrale : le symétrique de M par rapport à O est M’ tel que O soit le milieu de [MM’] ; la figure symétrique a les mêmes longueurs et angles.\nParallélogramme : côtés opposés parallèles et de même longueur ; diagonales qui se coupent en leur milieu.\nDroites remarquables : médiatrice, médiane, hauteur ; un triangle a 3 de chacune.\nSomme des angles d'un triangle = 180°.",
      qs: [
        { d:1, q:"Dans un triangle, un des angles mesure 60°, un autre 40°. Le troisième ?", c:["60°","80°","100°","90°"], a:1, e:"La somme vaut 180° : 180 − (60 + 40) = 80°." },
        { d:1, q:"Le symétrique d'un point M par rapport à un point O : où est O ?", c:["Au milieu de [MM’]","Sur la perpendiculaire","Au-delà de M’","N'importe où"], a:0, e:"O est exactement le milieu du segment [MM’]." },
        { d:1, q:"Un parallélogramme a ses diagonales qui...", c:["se coupent en leur milieu","sont de même longueur","sont perpendiculaires (toujours)","sont des axes de symétrie"], a:0, e:"Dans tout parallélogramme, les diagonales se coupent en leur milieu. Être de même longueur ou perpendiculaires n'est vrai que pour certains cas particuliers." },
        { d:2, q:"Triangle isocèle : angles à la base = 55° chacun. Angle au sommet ?", a:"70", e:"180 − 55 − 55 = 70°." },
        { d:2, q:"Triangle rectangle en A : les côtés... L'angle en B mesure 37°. Angle en C ?", c:["63°","53°","90°","143°"], a:1, e:"Angle droit en A = 90°, donc 180 − 90 − 37 = 53°." },
        { d:2, q:"Propriété d'un losange (qui est un parallélogramme particulier) :", c:["4 côtés égaux","4 angles droits (toujours)","diagonales de même longueur","un seul axe de symétrie"], a:0, e:"Le losange a ses 4 côtés de même longueur et ses diagonales perpendiculaires. Les angles droits sont réservés au carré." },
        { d:3, q:"Triangle : 2 angles mesurent 40° et 70°. Ce triangle est...", c:["isocèle","équilatéral","rectangle","plat"], a:0, e:"Troisième angle : 180 − 110 = 70°. Deux angles égaux (70°) → triangle isocèle." },
        { d:3, q:"Quelle droite passe par un sommet et est perpendiculaire au côté opposé ?", c:["la hauteur","la médiatrice","la médiane","la bissectrice"], a:0, e:"C'est la hauteur du triangle." },
        { d:3, q:"Un triangle a des côtés de 6 cm ; 6 cm ; 6 cm. Nature et angles ?", c:["équilatéral, trois angles de 60°","équilatéral, trois angles de 30°","isocèle rectangle","rectangle isocèle"], a:0, e:"Trois côtés égaux → équilatéral, et ses trois angles mesurent 60° (somme 180°). Le point de concours des médiatrices est le centre du cercle circonscrit." },
        { d:4, q:"Par symétrie de centre O, l'image d'un segment [AB] de 7 cm est un segment [A’B’] de longueur...", c:["7 cm","3,5 cm","14 cm","Longueur quelconque"], a:0, e:"La symétrie centrale conserve les longueurs : 7 cm." },
        { d:4, q:"Si ABC est un triangle dont la médiatrice de [AB] passe par C, alors...", c:["CA = CB","l'angle C est droit","AB = BC","l'angle A = 60°"], a:0, e:"C appartient à la médiatrice de [AB] → C est à égale distance de A et B : CA = CB." },
        { d:4, q:"Un parallélogramme qui a un angle droit est...", c:["un rectangle","un losange","un trapèze","un simple parallélogramme"], a:0, e:"Un parallélogramme avec un angle droit est un rectangle (ses 4 angles sont droits)." }
      ]
    },
    {
      id: "aires5", titre: "Périmètres, aires et volumes", icone: "📏",
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
    }
  ]
};
