/* ================= BaouMaths — banque de questions 4e ================= */
window.BANK_4E = {
  themes: [
    {
      id: "propo4", titre: "Proportionnalité et pourcentages", icone: "⚖️",
      chap: [1],
      notion: "Tableau de proportionnalité, produit en croix, pourcentages de hausse et de baisse.",
      qs: [
        { d: 1, q: "Une voiture roule à 60 km/h pendant 2 h. Distance parcourue ?", c: ["30 km","120 km","62 km","240 km"], a: 1, e: "d = v × t = 60 × 2 = 120 km." },
        { d: 1, q: "Augmenter un prix de 10 % revient à le multiplier par...", c: ["1,10","0,10","1,01","10"], a: 0, e: "Multiplier par 1 + 10/100 = 1,10." },
        { d: 2, q: "Une console de jeu à 40 € baisse de 25 %. Nouveau prix ?", c: ["30 €","32 €","25 €","15 €"], a: 0, e: "Baisse de 25 % : 40 × 0,75 = 30 € (ou 40 − 10)." },
        { d: 3, q: "Sur une carte à l'échelle 1/2 000 000, 3,5 cm représentent :", c: ["7 km","70 km","700 km","3,5 km"], a: 1, e: "3,5 × 2 000 000 = 7 000 000 cm = 70 km." },
        { d: 3, q: "Un article coûte 60 € HT, TVA à 20 % (rappel : TTC = HT × 1,2). Prix TTC ?", a: "72", e: "60 × 1,2 = 72 €." },
        { d: 4, q: "Après une hausse de 20 % puis une baisse de 20 %, le prix final par rapport au prix initial...", c: ["est environ 4 % plus bas","est identique","est environ 4 % plus haut","a doublé"], a: 0, e: "Multiplier par 1,2 puis par 0,8 donne 0,96 : le prix final est 4 % plus bas que le prix initial (jamais identique)." },
        { d: 4, q: "Une école de 600 élèves : 60 % sont en 6e ou 5e, et 25 % des élèves restants sont en 4e. Combien d'élèves en 4e ?", a: "60", e: "6e-5e : 600 × 0,6 = 360 (restent 240). 25 % de 240 = 60 élèves en 4e." },
        { d: 1, q: "4 pains au chocolat coûtent 6 €. Prix (€) de 8 pains au chocolat ?", a: "12", e: "De 4 à 8, on double la quantité, donc on double le prix : 6 × 2 = 12 €." },
        { d: 2, q: "3 kg de fraises coûtent 12 €. Prix (€) de 5 kg ?", a: "20", e: "Prix au kg : 12 ÷ 3 = 4 €, donc 5 × 4 = 20 €." },
        { d: 3, q: "Un pull à 50 € est soldé à −30 %, puis une carte fidélité enlève encore 10 €. Prix final (€) ?", a: "25", e: "Soldes : 50 × (1 − 30/100) = 35 €, puis 35 − 10 = 25 €." },
        { d: 4, q: "Un prix passe de 80 € à 92 €. Pourcentage de hausse ?", c: ["15 %","12 %","10 %","16 %"], a: 0, e: "Hausse : 12 € pour 80 € → 12/80 = 0,15 = 15 %." },
        { d: 4, q: "Une longueur de 7,2 cm sur un plan à l'échelle 1/200 représente (m) ?", a: "14.4", e: "7,2 × 200 = 1 440 cm = 14,4 m." }
      ],
      gen: {
        2: () => { const P = [[10, 150], [10, 240], [20, 60], [20, 80], [20, 150], [20, 200], [25, 40], [25, 80], [25, 120], [25, 200], [50, 40], [50, 70], [50, 90], [50, 150], [75, 40], [75, 60], [75, 120]]; const p = P[Math.floor(Math.random() * P.length)]; const r = p[0] * p[1] / 100;
          return { q: `Calculer ${p[0]} % de ${p[1]}.`, a: String(r), e: `${p[0]} % de ${p[1]} = ${p[1]} \u00d7 ${p[0]}/100 = ${r}.` }; },
        4: () => { const P = [[100000, 1], [500000, 5], [2000000, 20]]; const p = P[Math.floor(Math.random() * 3)]; const cm = 2 + Math.floor(Math.random() * 4); const km = cm * p[1];
          return { q: `Sur une carte \u00e0 l'\u00e9chelle 1/${p[0]}, une distance de ${cm} cm repr\u00e9sente combien de km en r\u00e9alit\u00e9 ?`, a: String(km), e: `${cm} \u00d7 ${p[0]} = ${cm * p[0]} cm = ${km} km (1 km = 100 000 cm).` }; }
      }
    },
    {
      id: "pythagore", titre: "Théorème de Pythagore", icone: "📐",
      chap: [2],
      notion: "Calculer l'hypoténuse ou un côté de l'angle droit dans un triangle rectangle.",
      qs: [
        { d: 1, q: "Triangle rectangle, côtés de l'angle droit : 3 cm et 4 cm. Hypoténuse ?", c: ["5 cm","7 cm","6 cm","25 cm"], a: 0, e: "3² + 4² = 9 + 16 = 25 → hypoténuse = √25 = 5 cm." },
        { d: 1, q: "Dans un triangle rectangle, l'hypoténuse est...", c: ["le plus long côté","le plus court côté","toujours de 5 cm","n'importe quel côté"], a: 0, e: "L'hypoténuse est le côté opposé à l'angle droit : c'est le plus long." },
        { d: 1, q: "9² = ?", a: "81", e: "9 × 9 = 81." },
        { d: 2, q: "Triangle rectangle en A : AB = 6, AC = 8, BC = ?", a: "10", e: "BC² = 6² + 8² = 36 + 64 = 100 → BC = 10." },
        { d: 2, q: "Triangle rectangle : hypoténuse 13, un côté 5. Autre côté du triangle ?", a: "12", e: "a² = 13² − 5² = 169 − 25 = 144 → 12." },
        { d: 2, q: "Les côtés de l'angle droit d'un triangle rectangle mesurent 5 cm et 7 cm. Hypoténuse (dixième) ?", a: "8.6", e: "5² + 7² = 25 + 49 = 74 ; hypoténuse = √74 ≈ 8,6 cm." },
        { d: 3, q: "Une piscine rectangulaire fait 10 m sur 24 m. La diagonale du bassin mesure (m) ?", a: "26", e: "10² + 24² = 100 + 576 = 676 = 26² : la diagonale mesure 26 m." },
        { d: 3, q: "Triangle rectangle : hypoténuse 10, un côté 6. Autre côté ?", a: "8", e: "a² = 100 − 36 = 64 → a = 8." },
        { d: 3, q: "Un mât de 5 m est planté à 3 m d'un mur ; son sommet touche le mur. Hauteur du point de contact ?", c: ["4 m","6 m","8 m","2 m"], a: 0, e: "√(5² − 3²) = √16 = 4 m." },
        { d: 4, q: "Diagonale d'un rectangle de 9 sur 12 (arrondi au dixième) ?", a: "15", e: "√(9² + 12²) = √225 = 15." },
        { d: 4, q: "Un losange a des diagonales de 6 cm et 8 cm. Son côté ?", a: "5", e: "Les diagonales se coupent perpendiculairement en leur milieu : côté = √(3² + 4²) = 5 cm." },
        { d: 4, q: "Une échelle de 5 m est appuyée à 1,4 m d'un mur. À quelle hauteur (dixième) touche-t-elle ?", a: "4.8", e: "√(25 − 1,96) = √23,04 = 4,8 m." }
      ],
      gen: {
        2: () => { const triple = [[3,4,5],[6,8,10],[5,12,13],[9,12,15],[8,15,17],[12,16,20]][Math.floor(Math.random()*6)];
          return { q:`Triangle rectangle : côtés de l'angle droit ${triple[0]} et ${triple[1]}. Hypoténuse ?`, a:String(triple[2]), e:`${triple[0]}² + ${triple[1]}² = ${triple[0]**2} + ${triple[1]**2} = ${triple[2]**2} → hypoténuse = ${triple[2]}.` }; },
        4: () => { const triple = [[6,8,10],[5,12,13],[8,15,17],[9,12,15]][Math.floor(Math.random()*4)];
          return { q:`Triangle rectangle : hypoténuse ${triple[2]}, un côté ${triple[0]}. Autre côté de l'angle droit ?`, a:String(triple[1]), e:`a² = ${triple[2]}² − ${triple[0]}² = ${triple[2]**2} − ${triple[0]**2} = ${triple[1]**2} → a = ${triple[1]}.` }; }
      }
    },
    {
      id: "relatifs4", titre: "Multiplication et division de nombres relatifs", icone: "×÷",
      chap: [3],
      notion: "Produit de relatifs : le produit de deux nombres de même signe est positif, le produit de deux nombres de signes contraires est négatif.\nNombre de facteurs négatifs : un produit est positif si le nombre de facteurs négatifs est pair, négatif s'il est impair.\nDivision : la règle des signes est la même pour le quotient ; le quotient de deux nombres de même signe est positif.\nPriorités : on calcule les puissances, puis les multiplications et divisions, puis les additions et soustractions.",
      qs: [
        { d: 1, q: "Calculer : (-8) × (-7)", c: ["56","-56","15","-15"], a: 0, e: "Le produit de deux nombres négatifs est positif : 8 × 7 = 56, donc (-8) × (-7) = 56." },
        { d: 1, q: "Calculer : 8 × (-7)", c: ["-56","56","-48","15"], a: 0, e: "Les signes sont contraires, donc le produit est négatif : 8 × 7 = 56, donc 8 × (-7) = -56." },
        { d: 2, q: "Calculer : (-2) × 3 × (-4)", a: "24", e: "Deux facteurs négatifs : le nombre de facteurs négatifs est pair, donc le produit est positif. 2 × 3 × 4 = 24." },
        { d: 2, q: "Sans calculer, donner le signe de (-5) × 2 × (-1) × 7", c: ["Positif, car il y a 2 facteurs négatifs","Négatif, car il y a 2 facteurs négatifs","Positif, car il y a 3 facteurs négatifs","Impossible à savoir"], a: 0, e: "Le produit est positif quand le nombre de facteurs négatifs est pair : ici (-5) et (-1), soit 2 facteurs, donc positif." },
        { d: 2, q: "Calculer : (-36) ÷ 9", c: ["-4","4","-324","-27"], a: 0, e: "Signes contraires, donc quotient négatif : 36 ÷ 9 = 4, donc (-36) ÷ 9 = -4." },
        { d: 3, q: "Calculer : (-12) ÷ (-3) + 1", a: "5", e: "On fait d'abord la division : (-12) ÷ (-3) = 4 (même signe), puis 4 + 1 = 5." },
        { d: 3, q: "Calculer : (-3)² × (-2)", a: "-18", e: "(-3)² = 9 (le carré d'un négatif est positif), puis 9 × (-2) = -18." },
        { d: 3, q: "Calculer : -5 + 2 × (-6)", a: "-17", e: "Priorité à la multiplication : 2 × (-6) = -12, puis -5 + (-12) = -17." },
        { d: 4, q: "Calculer : (-1)⁵ × 2⁴", a: "-16", e: "(-1)⁵ = -1 (puissance impaire d'un négatif : négatif) et 2⁴ = 16, donc -1 × 16 = -16." },
        { d: 3, q: "Un sous-marin descend de 40 m par minute. Quelle est sa position après 3 minutes, s'il part de la surface ?", a: "-120", e: "Une descente de 40 m par minute correspond à -40 × 3 = -120 : le sous-marin est à 120 m sous la mer." },
        { d: 4, q: "Calculer : [(-6) × 4] ÷ (-8)", a: "3", e: "On calcule d'abord les crochets : (-6) × 4 = -24, puis (-24) ÷ (-8) = 3 (même signe, quotient positif)." },
        { d: 4, q: "Dans quel quadrant se trouve le point B(-2 ; 5) (abscisse négative, ordonnée positive) ?", c: ["Le 2ᵉ quadrant (en haut à gauche)","Le 1ᵉᵏ quadrant (en haut à droite)","Le 3ᵉ quadrant (en bas à gauche)","Le 4ᵉ quadrant (en bas à droite)"], a: 0, e: "Abcisse négative = à gauche, ordonnée positive = en haut : c'est le 2ᵉ quadrant." }
      ],
      gen: {
        1: () => {
          const a = 2 + Math.floor(Math.random() * 9);
          const b = 2 + Math.floor(Math.random() * 9);
          return { q: "Calculer : (-" + a + ") \u00d7 (-" + b + ")", a: String(a * b), e: "Produit de deux n\u00e9gatifs = positif : " + a + " \u00d7 " + b + " = " + (a * b) + "." };
        },
        2: () => {
          const a = 2 + Math.floor(Math.random() * 12);
          const b = 2 + Math.floor(Math.random() * 9);
          return { q: "Calculer : (-" + (a * b) + ") \u00f7 " + b, a: String(-a), e: "Signes contraires : quotient n\u00e9gatif, et " + (a * b) + " \u00f7 " + b + " = " + a + ", donc le r\u00e9sultat est -" + a + "." };
        }
      }
    },
    {
      id: "sphvol", titre: "Solides : volumes", icone: "🥫",
      chap: [4],
      notion: "Prisme droit : V = aire de la base × hauteur.\nCylindre : V = π × r² × h.\nLitres : 1 L = 1 dm³ = 1 000 cm³.\nPyramide : V = (aire de la base × hauteur) ÷ 3. Cône de révolution : V = (π × r² × hauteur) ÷ 3.\nSections planes : un plan parallèle à la base d'une pyramide ou d'un cône donne une réduction de la base ; dans un cylindre ou un prisme, elle est identique à la base.",
      qs: [
        { d: 1, q: "Volume d'un cylindre de rayon 2 cm et hauteur 5 cm (π ≈ 3,14) ?", a: "62.8", e: "V = π × 4 × 5 = 20π ≈ 62,8 cm³." },
        { d: 1, q: "1 L = ... cm³ ?", c: ["100","1 000","10","10 000"], a: 1, e: "1 L = 1 dm³ = 1 000 cm³." },
        { d: 1, q: "Volume d'un prisme à base carrée de côté 4 cm, hauteur 3 cm ?", a: "48", e: "Base : 4 × 4 = 16 cm². V = 16 × 3 = 48 cm³." },
        { d: 2, q: "Volume d'un cylindre de diamètre 4 cm, hauteur 10 cm (π ≈ 3,14) ?", a: "125.6", e: "Rayon = 2 cm → V = π × 4 × 10 ≈ 125,6 cm³." },
        { d: 2, q: "Une boîte de 8 cm × 5 cm × 4 cm contient...", c: ["160 cm³ = 160 mL","160 L","17 cm³","40 cm³"], a: 0, e: "V = 8 × 5 × 4 = 160 cm³ = 160 mL." },
        { d: 2, q: "Volume de 2,5 L en cm³ ?", a: "2500", e: "1 L = 1000 cm³ → 2,5 L = 2500 cm³." },
        { d: 3, q: "Combien de flacons de 250 mL peut-on remplir avec 3 L ?", a: "12", e: "3 L = 3000 mL ; 3000 ÷ 250 = 12 flacons." },
        { d: 3, q: "Volume d'un cylindre de rayon 3 cm et hauteur 7 cm : formule et valeur (π ≈ 3,14, dixièmes) ?", a: "197.8", e: "V = π × 9 × 7 = 63π ≈ 197,82 → 197,8 cm³." },
        { d: 3, q: "Un cylindre a un volume de 100 cm³ et une hauteur de 4 cm. Aire de sa base ?", a: "25", e: "Base = V ÷ h = 100 ÷ 4 = 25 cm²." },
        { d: 4, q: "Une citerne cylindrique : rayon 1 m, hauteur 2 m. Capacité en L (π ≈ 3,14) ?", a: "6280", e: "V = π × 1² × 2 ≈ 6,28 m³ = 6 280 L." },
        { d: 4, q: "Un pavé de 10 cm × 8 cm × 6 cm peut-il tenir dans une boîte cylindrique de rayon 5 cm et hauteur 12 cm ?", c: ["Non","Oui","Impossible à savoir","Seulement si l'orientation change"], a: 0, e: "Il faut que la diagonale de la base (10 × 8) tienne dans le disque : √(10² + 8²) ≈ 12,8 cm > 10 cm de diamètre → impossible (et la diagonale du pavé ≈ 14,7 cm > 12 cm de hauteur)." },
        { d: 4, q: "On verse 500 cm³ d'eau dans un cylindre de rayon 5 cm. Hauteur de l'eau (π ≈ 3,14, dixième) ?", a: "6.4", e: "h = V ÷ (πr²) = 500 ÷ 78,5 ≈ 6,37 → ≈ 6,4 cm." },
        { d: 2, q: "Volume d'une pyramide à base carrée de côté 6 cm et de hauteur 8 cm ?", a: "96", e: "Aire de la base : 6 × 6 = 36 cm². V = (36 × 8) ÷ 3 = 96 cm³." },
        { d: 3, q: "Volume d'un cône de rayon 3 cm et de hauteur 7 cm (à l'unité près, π ≈ 3,14) ?", c: ["≈ 66 cm³","≈ 22 cm³","≈ 44 cm³","≈ 198 cm³"], a: 0, e: "V = (π × 3² × 7) ÷ 3 = 21 π ≈ 65,9, soit environ 66 cm³." },
        { d: 3, q: "Un cylindre est coupé par un plan parallèle à sa base. La section est...", c: ["un disque de même rayon que la base","un rectangle","un disque plus petit que la base","une ellipse"], a: 0, e: "Dans un cylindre (comme dans un prisme), la section parallèle à la base est identique à la base." },
        { d: 4, q: "Une pyramide est coupée par un plan parallèle à sa base. La section est...", c: ["une réduction de la base","un agrandissement de la base","un triangle","un disque"], a: 0, e: "Un plan parallèle à la base d'une pyramide (ou d'un cône) donne une section qui est une réduction de la base." }
      ],
      gen: {
        1: () => { const L = 2 + Math.floor(Math.random() * 8), w = 2 + Math.floor(Math.random() * 6), h = 2 + Math.floor(Math.random() * 5);
          return { q: `Un prisme a pour base un rectangle de ${L} cm sur ${w} cm et pour hauteur ${h} cm. Volume ?`, a: String(L * w * h), e: `V = B \u00d7 h = (${L} \u00d7 ${w}) \u00d7 ${h} = ${L * w * h} cm\u00b3.` }; },
        2: () => { const B = 3 + Math.floor(Math.random() * 18), h = 2 + Math.floor(Math.random() * 8);
          return { q: `Un cylindre a une aire de base de ${B} cm\u00b2 et une hauteur de ${h} cm. Volume ?`, a: String(B * h), e: `V = B \u00d7 h = ${B} \u00d7 ${h} = ${B * h} cm\u00b3.` }; },
        3: () => { const B = 3 * (2 + Math.floor(Math.random() * 9)), h = 2 + Math.floor(Math.random() * 7);
          return { q: `Une pyramide a une base d'aire ${B} cm\u00b2 et une hauteur de ${h} cm. Volume ?`, a: String(B * h / 3), e: `V = B \u00d7 h \u00f7 3 = ${B} \u00d7 ${h} \u00f7 3 = ${B * h / 3} cm\u00b3.` }; },
        4: () => Math.random() < 0.5
          ? { q: "Un c\u00f4ne de r\u00e9volution est coup\u00e9 par un plan parall\u00e8le \u00e0 sa base. La section est...", c: ["une r\u00e9duction du disque de base", "un rectangle", "un disque identique \u00e0 la base", "un triangle"], a: 0, e: "Un plan parall\u00e8le \u00e0 la base d'un c\u00f4ne (ou d'une pyramide) donne une section qui est une r\u00e9duction de la base." }
          : { q: "Un prisme est coup\u00e9 par un plan parall\u00e8le \u00e0 sa base. La section est...", c: ["un polygone identique \u00e0 la base", "un disque", "une r\u00e9duction de la base", "toujours un triangle"], a: 0, e: "Dans un prisme (comme dans un cylindre), la section parall\u00e8le \u00e0 la base est identique \u00e0 la base." }
      }
    },
    {
      id: "arithmetique4", titre: "Divisibilité et nombres premiers", icone: "ℹ",
      chap: [5],
      notion: "Division euclidienne : diviser a par b, c'est trouver le quotient q et le reste r tels que a = b × q + r avec r < b.\nCritères de divisibilité : un nombre est divisible par 2 s'il se termine par 0, 2, 4, 6 ou 8 ; par 5 s'il se termine par 0 ou 5 ; par 3 (ou 9) si la somme de ses chiffres est divisible par 3 (ou 9) ; par 4 si ses deux derniers chiffres forment un nombre divisible par 4.\nNombre premier : nombre entier qui a exactement 2 diviseurs, 1 et lui-même. 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47... sont premiers. 1 et 0 ne sont pas premiers.",
      qs: [
        { d: 1, q: "Dans la division euclidienne de 702 par 273, quel est le quotient ?", c: ["2","3","258","975"], a: 0, e: "273 × 2 = 546 et 273 × 3 = 819 > 702 : le quotient est 2." },
        { d: 2, q: "Dans la division euclidienne de 702 par 273, quel est le reste ?", a: "156", e: "702 = 273 × 2 + 156, et 156 < 273 : le reste est 156." },
        { d: 2, q: "Compléter : 351 = 17 × 20 + ...", a: "11", e: "17 × 20 = 340, et 351 - 340 = 11. On vérifie que 11 < 17 : c'est bien le reste." },
        { d: 2, q: "Quel est le reste de la division euclidienne de 100 par 7 ?", c: ["2","1","3","14"], a: 0, e: "7 × 14 = 98, donc 100 = 7 × 14 + 2 : le reste est 2." },
        { d: 2, q: "Parmi ces nombres, lequel est premier ?", c: ["97","91","87","51"], a: 0, e: "91 = 7 × 13, 87 = 3 × 29 et 51 = 3 × 17 ne sont pas premiers. 97 n'est divisible que par 1 et 97 : il est premier." },
        { d: 1, q: "Quel est le plus petit nombre premier ?", c: ["2","1","3","0"], a: 0, e: "1 n'a qu'un seul diviseur : ce n'est pas un nombre premier. Le plus petit nombre premier est 2 (le seul pair)." },
        { d: 3, q: "Parmi ces nombres, lequel est premier ?", c: ["31","27","33","39"], a: 0, e: "27 = 3³, 33 = 3 × 11 et 39 = 3 × 13 sont divisibles par 3. 31 n'a pas d'autre diviseur que 1 et 31." },
        { d: 3, q: "Combien y a-t-il de nombres premiers ?", c: ["Une infinité","25","100","On ne sait pas"], a: 0, e: "Il existe une infinité de nombres premiers : dès qu'on en a une liste, on peut toujours en trouver un nouveau." },
        { d: 3, q: "Dans l'égalité 546 = 9 × 60 + r, quel est le reste r ?", c: ["6","4","0","9"], a: 0, e: "9 × 60 = 540, et 546 - 540 = 6, avec 6 < 9 : le reste est 6." },
        { d: 3, q: "Un nombre entier est divisible à la fois par 2 et par 5. Par quel nombre se termine-t-il forcément ?", c: ["0","5","2","1"], a: 0, e: "Divisible par 2 : il finit par 0, 2, 4, 6 ou 8. Divisible par 5 : il finit par 0 ou 5. Seul 0 convient aux deux." },
        { d: 4, q: "Quel est le reste de la division euclidienne de 2003 par 4 ?", a: "3", e: "4 × 500 = 2000, donc 2003 = 4 × 500 + 3 : le reste est 3." },
        { d: 4, q: "On multiplie deux nombres premiers distincts, par exemple 3 × 7. Combien le résultat a-t-il de diviseurs ?", c: ["4 (1, 3, 7 et le produit)","2","3","6"], a: 0, e: "Pour 3 × 7 = 21 : les diviseurs sont 1, 3, 7 et 21, soit 4 diviseurs. C'est vrai pour tout produit de deux premiers distincts." }
      ],
      gen: {
        1: () => {
          const b = 2 + Math.floor(Math.random() * 9);
          const q = 5 + Math.floor(Math.random() * 15);
          const r = Math.floor(Math.random() * b);
          const a = b * q + r;
          return { q: "Quel est le reste de la division euclidienne de " + a + " par " + b + " ?", a: String(r), e: a + " = " + b + " \u00d7 " + q + " + " + r + " et " + r + " < " + b + " : le reste est " + r + "." };
        },
        2: () => {
          const n1 = 100 + Math.floor(Math.random() * 500);
          const r0 = n1 % 3;
          const n = Math.random() < 0.5 ? n1 + ((3 - r0) % 3) : n1;
          const isDiv = n % 3 === 0;
          return { q: "Le nombre " + n + " est-il divisible par 3 ?", a: isDiv ? "oui" : "non", e: "Somme des chiffres de " + n + " : " + String(n).split("").map(Number).join(" + ") + " = " + String(n).split("").reduce((s, c) => s + Number(c), 0) + (isDiv ? ", divisible par 3 : oui." : ", non divisible par 3 : non.") };
        }
      }
    },
    {
      id: "rationnels", titre: "Nombres rationnels : les 4 opérations", icone: "🍕",
      chap: [6,10],
      notion: "Somme : dénominateur commun. Produit : numérateurs × numérateurs, dénominateurs × dénominateurs.\nDiviser par a/b = multiplier par b/a (l'inverse).\nPrendre a/b d'une quantité : multiplier par a/b.",
      qs: [
        { d: 1, q: "Calculer : 1/3 + 1/6", c: ["2/9","1/2","1/4","2/6"], a: 1, e: "1/3 = 2/6, donc 2/6 + 1/6 = 3/6 = 1/2." },
        { d: 1, q: "Calculer : 2/5 × 3/4", c: ["3/10","6/9","5/20","2/3"], a: 0, e: "2 × 3 = 6 et 5 × 4 = 20 : 6/20 simplifié en 3/10." },
        { d: 1, q: "L'inverse de 3/4 est...", c: ["4/3","−3/4","1/4","12/3"], a: 0, e: "L'inverse de a/b est b/a : 4/3." },
        { d: 2, q: "Calculer : 3/4 ÷ 1/2", c: ["3/8","3/2","6/8 = 3/4","1/2"], a: 1, e: "Diviser par 1/2 = multiplier par 2 : 3/4 × 2 = 6/4 = 3/2." },
        { d: 2, q: "Calculer : 5/6 − 1/4", c: ["4/2","7/12","4/12","1/6"], a: 1, e: "Dénominateur commun 12 : 10/12 − 3/12 = 7/12." },
        { d: 2, q: "Les 3/5 d'un terrain de 2 500 m², c'est :", a: "1500", e: "3/5 × 2500 = 7500/5 = 1500 m²." },
        { d: 3, q: "Calculer : 2/3 + 5/6 − 1/2", a: "1", e: "Dénominateur 6 : 4/6 + 5/6 − 3/6 = 6/6 = 1." },
        { d: 3, q: "Calculer : (2/3) × (9/4)", c: ["3/2","2/12","11/7","3/4"], a: 0, e: "2 × 9 = 18, 3 × 4 = 12 → 18/12 = 3/2 (simplifié par 6)." },
        { d: 3, q: "Calculer : 4/7 − 1/7 × 2", c: ["2/7","6/7","7/7","−6/7"], a: 0, e: "Produit d'abord : 1/7 × 2 = 2/7. Puis 4/7 − 2/7 = 2/7." },
        { d: 4, q: "Calculer : (1/2 + 1/3) ÷ 5/6", a: "1", e: "Parenthèse : 3/6 + 2/6 = 5/6. Division : 5/6 ÷ 5/6 = 5/6 × 6/5 = 1." },
        { d: 4, q: "Calculer : 3/4 ÷ (1/2 + 1/4)", c: ["1","3/4","3/8","9/16"], a: 0, e: "Parenthèse : 1/2 + 1/4 = 3/4. Division : 3/4 ÷ 3/4 = 1." },
        { d: 4, q: "Après avoir dépensé 1/4 de son argent puis 1/3 du reste, quelle fraction de l'argent de départ reste-t-il ?", c: ["1/2","5/12","1/3","7/12"], a: 0, e: "1/4 dépensé → reste 3/4. On dépense 1/3 de 3/4 = 1/4. Reste : 3/4 − 1/4 = 1/2." }
      ],
      gen: {
        2: () => { const a = 1 + Math.floor(Math.random()*4), b = a + 1 + Math.floor(Math.random()*4), c = 1 + Math.floor(Math.random()*6), d2 = c + 1 + Math.floor(Math.random()*6);
          const num = a*d2 + c*b, den = b*d2;
          return { q:`Calculer : ${a}/${b} + ${c}/${d2} (simplifiée)`, a:`${num}/${den}`, e:`Dénominateur commun ${b}×${d2} = ${den} : (${a}×${d2} + ${c}×${b})/${den} = ${num}/${den}.` }; },
        3: () => { const a = 1 + Math.floor(Math.random()*5), b = 2 + Math.floor(Math.random()*4), c = 1 + Math.floor(Math.random()*4), d2 = 2 + Math.floor(Math.random()*4);
          return { q:`Calculer : ${a}/${b} × ${c}/${d2}`, a:`${a*c}/${b*d2}`, e:`Numérateurs : ${a} × ${c} = ${a*c}. Dénominateurs : ${b} × ${d2} = ${b*d2}. Résultat : ${a*c}/${b*d2}.` }; }
      }
    },
    {
      id: "translation4", titre: "La translation", icone: "→",
      chap: [7],
      notion: "Définition : M' est l'image de M par la translation qui transforme A en B signifie que MM' = AB et que [MM'] est parallèle `a (AB) et de même sens que [AB].\nConservation : la translation conserve les longueurs, les angles, les aires, l'alignement et le parallélisme.\nImage d'une figure : l'image d'un segment est un segment parallèle et de même longueur ; l'image d'un cercle est un cercle de même rayon.",
      qs: [
        { d: 1, q: "Comment construire l'image M' de M par la translation qui transforme A en B ?", c: ["On reporte le vecteur AB à partir de M","On trace le symétrique de M par rapport à A","On trace le symétrique de M par rapport à B","On place M' n'importe où sur la droite (AB)"], a: 0, e: "On reporte à partir de M la même direction, le même sens et la même longueur que de A vers B." },
        { d: 2, q: "Que peut-on dire du segment [M'N'], image de [MN] par une translation ?", c: ["Il est parallèle à [MN] et de même longueur","Il est perpendiculaire à [MN]","Il est deux fois plus long","Il est symétrique par rapport à M"], a: 0, e: "La translation conserve longueurs et parallélisme : M'N' = MN et (M'N') est parallèle à (MN)." },
        { d: 2, q: "Une translation conserve-t-elle les aires des figures ?", c: ["Oui, toujours","Non, jamais","Seulement pour les rectangles","Seulement pour les cercles"], a: 0, e: "La translation conserve longueurs, angles et aires : une figure et son image ont la même aire." },
        { d: 2, q: "Un téléphérique se déplace en ligne droite du bas vers le haut d'une pente. Quel type de transformation décrit son mouvement ?", c: ["Une translation","Une rotation","Une symétrie centrale","Une homothétie"], a: 0, e: "Tous les points se déplacent dans la même direction, le même sens et la même distance : c'est une translation." },
        { d: 2, q: "Une figure et son image par une translation ont-elles le même périmètre ?", c: ["Oui, car la translation conserve les longueurs","Non, le périmètre augmente","Non, le périmètre diminue","Cela dépend de la translation"], a: 0, e: "La translation conserve les longueurs, donc le périmètre est conservé." },
        { d: 3, q: "A a pour coordonnées (2 ; 5). Quelle est l'image de A par la translation de 3 vers la droite et 2 vers le bas ?", c: ["(5 ; 3)","(-1 ; 7)","(5 ; 7)","(-1 ; 3)"], a: 0, e: "3 vers la droite : 2 + 3 = 5. 2 vers le bas : 5 - 2 = 3. L'image est (5 ; 3)." },
        { d: 2, q: "Quelle est l'image d'un cercle par une translation ?", c: ["Un cercle de même rayon","Un cercle de rayon double","Une droite","Un ovale"], a: 0, e: "La translation conserve les longueurs : le rayon est inchangé, l'image est un cercle de même rayon." },
        { d: 3, q: "Un train avance de 40 m. Chaque point du train s'est déplacé de ...", c: ["40 m, dans la même direction et le même sens","40 m, dans des directions différentes","moins de 40 m à l'avant","plus de 40 m à l'arrière"], a: 0, e: "Dans une translation, tous les points se déplacent de la même distance dans la même direction et le même sens." },
        { d: 3, q: "Un rectangle d'aire 12 cm² est translaté. Quelle est l'aire de son image ?", c: ["12 cm²","24 cm²","6 cm²","On ne peut pas savoir"], a: 0, e: "La translation conserve les aires : l'image a la même aire, 12 cm²." },
        { d: 3, q: "MN = 6 cm. Quelle est la longueur de M'N', où M' et N' sont les images de M et N par une translation ?", a: "6", e: "La translation conserve les longueurs : M'N' = MN = 6 cm." },
        { d: 3, q: "Un angle de 45° est translaté. Quelle est la mesure de l'angle image ?", a: "45", e: "La translation conserve les angles : l'angle image mesure aussi 45°." }
      ],
      gen: {
        2: () => ({ q: "La translation transforme une figure en une figure image. Elle conserve...", c: ["les longueurs, les angles et les aires", "les longueurs mais pas les angles", "les angles mais pas les aires", "ni les longueurs ni les angles"], a: 0, e: "Une translation conserve les longueurs, les angles, les aires, l'alignement et le parall\u00e9lisme : l'image d'une figure est une figure identique, d\u00e9plac\u00e9e." }),
        3: () => { let ax = -5 + Math.floor(Math.random() * 11), ay = -5 + Math.floor(Math.random() * 11); let dx = -4 + Math.floor(Math.random() * 9), dy = -4 + Math.floor(Math.random() * 9); if (dx === 0) dx = 3; if (dy === 0) dy = -2;
          const dirx = dx < 0 ? `${-dx} carreaux vers la gauche` : `${dx} carreaux vers la droite`; const diry = dy < 0 ? `${-dy} carreaux vers le bas` : `${dy} carreaux vers le haut`;
          return { q: `Dans un rep\u00e8re, A(${ax} ; ${ay}). On applique \u00e0 A la translation de ${dirx} et ${diry}. Quelle est l'abscisse du point A' image de A ?`, a: String(ax + dx), e: `Une translation ajoute le d\u00e9placement aux coordonn\u00e9es : abscisse = ${ax} ${dx < 0 ? "\u2212 " + (-dx) : "+ " + dx} = ${ax + dx}.` }; }
      }
    },
    {
      id: "litteral4", titre: "Calcul littéral : développer et réduire", icone: "✍️",
      chap: [8],
      notion: "Distributivité simple, suppression de parenthèses, réduction d'expressions.",
      qs: [
        { d: 1, q: "Développer : 2(3x + 1)", c: ["6x + 1","6x + 2","5x + 3","3x + 2"], a: 1, e: "2 × 3x = 6x et 2 × 1 = 2 → 6x + 2." },
        { d: 2, q: "Supprimer les parenthèses puis réduire : 5 + (3x − 2)", c: ["3x + 3","3x + 7","8x + 3","3x − 7"], a: 0, e: "Le + devant la parenthèse ne change rien : 5 + 3x − 2 = 3x + 3." },
        { d: 3, q: "Développer puis réduire : 3(4x + 5) − 2x", c: ["10x + 15","10x + 5","7x + 15","12x + 5"], a: 0, e: "3 × 4x = 12x et 3 × 5 = 15. Puis 12x − 2x = 10x, donc 10x + 15." },
        { d: 1, q: "Développer : 5(x + 4)", a: "5x + 20", e: "5(x + 4) = 5 × x + 5 × 4 = 5x + 20." },
        { d: 1, q: "Développer : 3(2x − 1)", a: "6x - 3", e: "3(2x − 1) = 6x − 3." },
        { d: 2, q: "Réduire : 7x + 3 − 2x", a: "5x + 3", e: "7x − 2x = 5x, donc l'expression devient 5x + 3." },
        { d: 2, q: "Réduire : 9x − 5 + 4x", a: "13x - 5", e: "9x + 4x = 13x, donc l'expression devient 13x − 5." },
        { d: 2, q: "Développer puis réduire : 4(x − 3) + 2x", a: "6x - 12", e: "4(x − 3) + 2x = 4x − 12 + 2x = 6x − 12." },
        { d: 3, q: "Réduire : 8x + 7 − 10x", a: "-2x + 7", e: "8x − 10x = −2x, donc l'expression devient −2x + 7." },
        { d: 3, q: "Développer puis réduire : 5(2x − 3) − 4x", a: "6x - 15", e: "10x − 15 − 4x = 6x − 15." },
        { d: 4, q: "Développer puis réduire : 3(5x + 2) − 2(4x − 1)", a: "7x + 8", e: "15x + 6 − 8x + 2 = 7x + 8." },
        { d: 4, q: "Factoriser : 12x + 8", a: "4(3x + 2)", e: "12x + 8 = 4 × 3x + 4 × 2 = 4(3x + 2)." }
      ],
      gen: {
        1: () => { const k = 2 + Math.floor(Math.random() * 4), a = 2 + Math.floor(Math.random() * 6), b = 1 + Math.floor(Math.random() * 9);
        return { q: `Développer : ${k}(${a}x + ${b})`, a: `${k * a}x + ${k * b}`, e: `${k} × ${a}x = ${k * a}x et ${k} × ${b} = ${k * b}.` }; },
        2: () => { let a = 6 + Math.floor(Math.random() * 8), c = 1 + Math.floor(Math.random() * 3), b = 1 + Math.floor(Math.random() * 9);
        if (a - c <= 0) a = c + 3;
        return { q: `Réduire : ${a}x + ${b} − ${c}x`, a: `${a - c}x + ${b}`, e: `${a}x − ${c}x = ${a - c}x.` }; }
      }
    },
    {
      id: "thales4", titre: "Théorème de Thalès", icone: "📏",
      chap: [9],
      notion: "Configuration de Thalès, égalité des rapports, calcul d'une longueur.",
      qs: [
        { d: 1, q: "M ∈ [AB], N ∈ [AC] et (MN) // (BC). Quelle est l'égalité de Thalès ?", c: ["AM/AB = AN/AC = MN/BC","AM/AB = AN/BC = MN/AC","AB/AM = AC/AN = BC/MN","AM/AB = AC/AN = MN/BC"], a: 0, e: "Les rapports se font sur chaque côté en partant du sommet A : AM/AB = AN/AC = MN/BC." },
        { d: 2, q: "AM = 2, AB = 6, AN = 3 et (MN) // (BC). Calculer AC.", a: "9", e: "AM/AB = AN/AC, donc 2/6 = 3/AC. Produit en croix : AC = 6 × 3 ÷ 2 = 9." },
        { d: 2, q: "Compléter le produit en croix : 3/5 = ?/15", c: ["9","6","12","8"], a: 0, e: "3/5 = 9/15, car on multiplie numérateur et dénominateur par 3 (ou 5 × ? = 3 × 15 = 45, donc ? = 9)." },
        { d: 3, q: "AM = 3, AB = 5, AN = 6 et (MN) // (BC). Calculer AC.", a: "10", e: "AM/AB = AN/AC, donc 3/5 = 6/AC. Produit en croix : AC = 5 × 6 ÷ 3 = 10." },
        { d: 3, q: "Configuration papillon : M, A, B alignés et M, T, C alignés, avec (BT) // (AC), MA = 6, AB = 2 et MT = 9. Calculer TC.", a: "3", e: "Thalès en M : MA/MB = MT/MC, donc 6/8 = 9/MC. Produit en croix : MC = 8 × 9 ÷ 6 = 12, donc TC = MC - MT = 12 - 9 = 3." },
        { d: 3, q: "MN = 4, BC = 12, AM = 3 et (MN) // (BC). Calculer AB.", a: "9", e: "AM/AB = MN/BC, donc 3/AB = 4/12. Produit en croix : AB = 3 × 12 ÷ 4 = 9." },
        { d: 4, q: "MN/BC = 0,6 et AC = 10, avec (MN) // (BC). Calculer AN.", a: "6", e: "AN/AC = MN/BC = 0,6, donc AN = 0,6 × 10 = 6." },
        { d: 1, q: "AM = 1, AB = 2 et AN = 4, avec M ∈ [AB], N ∈ [AC] et (MN) // (BC). NC = ?", a: "4", e: "AM/AB = 1/2, donc AC = 4 × 2 = 8 et NC = 8 − 4 = 4." },
        { d: 2, q: "M ∈ [BA] avec BM = 3 et BA = 6 ; N ∈ [BC] avec MN = 2 et (MN) // (AC). NC = ?", a: "4", e: "BM/BA = MN/NC : 3/6 = 2/NC, donc NC = 4 (produit en croix)." },
        { d: 3, q: "Un poteau vertical de 2 m projette une ombre de 3 m. Une tour projette au même moment une ombre de 45 m. Hauteur (m) de la tour ?", a: "30", e: "Les hauteurs et les ombres sont proportionnelles : 2 × 45 ÷ 3 = 30 m." },
        { d: 4, q: "AM/AB = 3/5 et BC = 15, avec (MN) // (BC). MN = ?", a: "9", e: "MN/BC = 3/5, donc MN = 15 × 3 ÷ 5 = 9." },
        { d: 4, q: "AB = 12, AM = 4 et AN = 3, avec (MN) // (BC). AC = ?", a: "9", e: "AM/AB = 4/12 = 1/3, donc AC = 3 × 3 = 9." }
      ],
      gen: {
        1: () => {
          const a = 2 + Math.floor(Math.random() * 5);
          const f = 2 + Math.floor(Math.random() * 3);
          const an = 2 + Math.floor(Math.random() * 8);
          const ac = an * f;
          return { q: "AM = " + a + ", AB = " + (a * f) + ", AN = " + an + " et (MN) // (BC). Calculer AC.", a: String(ac), e: "AM/AB = AN/AC, donc " + a + "/" + (a * f) + " = " + an + "/" + ac + ". Produit en croix : AC = " + (a * f) + " \u00d7 " + an + " \u00f7 " + a + " = " + ac + "." };
        },
        2: () => {
          const m = 2 + Math.floor(Math.random() * 4);
          const t = 3 + Math.floor(Math.random() * 3);
          const x = 2 + Math.floor(Math.random() * 3);
          return { q: "MN = " + m + ", BC = " + (m * t) + ", AM = " + x + " et (MN) // (BC). Calculer AB.", a: String(x * t), e: "AM/AB = MN/BC, donc " + x + "/AB = " + m + "/" + (m * t) + ". Produit en croix : AB = " + x + " \u00d7 " + (m * t) + " \u00f7 " + m + " = " + (x * t) + "." };
        }
      }
    },
    {
      id: "cosinus", titre: "Cosinus d'un angle aigu", icone: "🎯",
      chap: [11],
      notion: "Dans un triangle rectangle : cos(â) = côté adjacent ÷ hypoténuse.\nSurvient aussi : cos(60°) = 0,5 ; cos(45°) ≈ 0,71 ; cos(30°) ≈ 0,87.",
      qs: [
        { d: 1, q: "cos(â) se calcule comme...", c: ["adjacent ÷ hypoténuse","opposé ÷ hypoténuse","opposé ÷ adjacent","hypoténuse ÷ adjacent"], a: 0, e: "cos = adjacent ÷ hypoténuse (CAH/sohcahtoa : SOH-CAH-TOA : Cos = Adjacent/Hypoténuse)." },
        { d: 1, q: "Triangle rectangle en A : AB = 4, AC = 3, BC = 5. cos(∠B) ?", c: ["4/5","3/5","3/4","5/4"], a: 0, e: "∠B : côté adjacent = AB = 4, hypoténuse = BC = 5 → cos = 4/5 = 0,8." },
        { d: 1, q: "cos(60°) vaut environ...", c: ["0,5","0,87","0,71","1"], a: 0, e: "cos(60°) = 0,5 exactement." },
        { d: 2, q: "Triangle rectangle : hypoténuse = 10, côté adjacent à l'angle â = 8. cos(â) ?", c: ["0,8","1,25","0,6","8"], a: 0, e: "cos = 8/10 = 0,8." },
        { d: 2, q: "Triangle ABC rectangle en B : BC = 12, AB = 5, AC = 13. cos(∠C) ?", c: ["12/13","5/13","13/12","5/12"], a: 0, e: "L'hypoténuse est AC = 13 ; le côté adjacent de ∠C est BC = 12 → cos(∠C) = 12/13." },
        { d: 2, q: "Si cos(â) ≈ 0,98, l'angle â est...", c: ["petit (≈ 10°)","droit (90°)","grand (≈ 80°)","obtus (>90°)"], a: 0, e: "cos(0°) = 1 ; plus l'angle est petit, plus le cosinus est proche de 1." },
        { d: 3, q: "Triangle rectangle : hypoténuse 8, angle de 30° au sommet. Longueur du côté adjacent (juste) ?", a: "6.9", e: "adjacent = hypoténuse × cos = 8 × cos(30°) ≈ 8 × 0,866 ≈ 6,93 (≈ 6,9)." },
        { d: 3, q: "cos(45°) arrondi au centième ?", a: "0.71", e: "cos(45°) ≈ 0,707 → 0,71." },
        { d: 3, q: "Triangle rectangle : BC = 12 (hypoténuse), angle ∠B = 25°. Longueur AB (adjacent), au dixième ?", a: "10.9", e: "AB = 12 × cos(25°) ≈ 12 × 0,906 ≈ 10,9." },
        { d: 4, q: "Le cosinus d'un angle aigu est toujours compris entre...", c: ["0 et 1","0 et 90","−1 et 1","1 et 2"], a: 0, e: "Dans un triangle rectangle, le côté adjacent est toujours plus court que l'hypoténuse : le cosinus est strictement entre 0 et 1." },
        { d: 4, q: "Quelle égalité est vraie ?", c: ["cos(30°) ≈ 0,87","cos(30°) ≈ 0,5","cos(30°) ≈ 0","cos(30°) ≈ 1,73"], a: 0, e: "cos(30°) ≈ 0,866." },
        { d: 4, q: "Si cos(â) = 1/2 alors l'angle â mesure...", a: "60", e: "On sait que cos(60°) = 1/2 → â = 60°." }
      ],
      gen: {
        2: () => { const T = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29], [9, 40, 41]]; const t = T[Math.floor(Math.random() * T.length)];
          return { q: `Triangle rectangle : l'hypot\u00e9nuse mesure ${t[2]} et le c\u00f4t\u00e9 adjacent \u00e0 l'angle x mesure ${t[1]}. Cosinus de x ? (fraction)`, a: [`${t[1]}/${t[2]}`], e: `cos(x) = c\u00f4t\u00e9 adjacent \u00f7 hypot\u00e9nuse = ${t[1]}/${t[2]}.` }; },
        3: () => { const P = [[1, 2], [2, 3], [3, 4], [4, 5], [2, 5], [3, 5], [5, 6], [3, 8]]; const p = P[Math.floor(Math.random() * P.length)]; const w = 2 + Math.floor(Math.random() * 8); const hyp = p[1] * w, adj = p[0] * w;
          return { q: `cos(x) = ${p[0]}/${p[1]} et l'hypot\u00e9nuse mesure ${hyp}. Longueur du c\u00f4t\u00e9 adjacent ?`, a: String(adj), e: `Adjacent = hypot\u00e9nuse \u00d7 cos(x) = ${hyp} \u00d7 ${p[0]}/${p[1]} = ${adj}.` }; }
      }
    },
    {
      id: "puissances", titre: "Puissances", icone: "⚡",
      chap: [12],
      notion: "aⁿ = a × a × ... × a (n facteurs) ; a¹ = a ; a⁰ = 1 (a ≠ 0).\n10ⁿ = 1 suivi de n zéros.\nRègles : aᵐ × aⁿ = aᵐ⁺ⁿ ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ (avec m > n) ; (aᵐ)ⁿ = aᵐˣⁿ ; (a×b)ⁿ = aⁿ × bⁿ.",
      qs: [
        { d: 1, q: "Calculer : 2⁴", c: ["8","16","6","4"], a: 1, e: "2⁴ = 2 × 2 × 2 × 2 = 16 (pas 2 × 4 = 8 !)." },
        { d: 1, q: "Calculer : 10⁵", c: ["50 000","1 000 000","100 000","10 000"], a: 2, e: "10⁵ = 1 suivi de 5 zéros = 100 000." },
        { d: 1, q: "Calculer : 7⁰ ... 3⁰ ?", a: "1", e: "Tout nombre non nul à la puissance 0 vaut 1." },
        { d: 2, q: "Simplifier : 5³ × 5⁴", c: ["5¹²","5⁷","25⁷","10⁷"], a: 1, e: "On additionne les exposants : 5³ × 5⁴ = 5³⁺⁴ = 5⁷." },
        { d: 2, q: "Simplifier : 7⁹ ÷ 7⁶", c: ["7³","7¹⁵","7⁵⁴","7⁶"], a: 0, e: "On soustrait les exposants : 9 − 6 = 3, donc 7⁹ ÷ 7⁶ = 7³." },
        { d: 2, q: "Calculer : (−3)³", c: ["9","−27","27","−9"], a: 1, e: "(−3)³ = (−3) × (−3) × (−3) = −27. Puissance impaire d'un négatif → négatif." },
        { d: 3, q: "Écriture décimale de : 10⁵ ÷ 10³", c: ["100","1 000","10","0,01"], a: 0, e: "On soustrait les exposants (5 − 3 = 2) : 10⁵ ÷ 10³ = 10² = 100." },
        { d: 3, q: "Simplifier : (2³)²", a: "64", e: "(2³)² = 2⁽³ˣ²⁾ = 2⁶ = 64." },
        { d: 3, q: "Simplifier : 3⁵ × 3² ÷ 3⁴", c: ["27","3¹¹","3","9"], a: 0, e: "5 + 2 = 7, puis 7 − 4 = 3, donc 3⁵ × 3² ÷ 3⁴ = 3³ = 27." },
        { d: 4, q: "Écriture scientifique de 45 200", c: ["4,52 × 10⁴","45,2 × 10³","4,52 × 10⁵","4,52 × 10³"], a: 0, e: "Scientifique = a × 10ⁿ avec 1 ≤ a < 10 : 45 200 = 4,52 × 10⁴." },
        { d: 4, q: "Calculer : 3⁴ ÷ 3² × 3", a: "27", e: "3⁴ ÷ 3² = 3² = 9, puis 3² × 3 = 3³ = 27." },
        { d: 4, q: "Quelle égalité est vraie pour tous nombres a et b (a, b ≠ 0) ?", c: ["(a × b)ⁿ = aⁿ × bⁿ","(a + b)ⁿ = aⁿ + bⁿ","aⁿ + aᵐ = aⁿ⁺ᵐ","aⁿ ÷ aᵐ = aⁿᵐ"], a: 0, e: "La puissance « passe » sur chaque facteur d'un produit : (a × b)ⁿ = aⁿ × bⁿ. Elle ne s'applique pas aux sommes !" }
      ],
      gen: {
        1: () => { const a = 2 + Math.floor(Math.random()*12);
          return { q:`Calculer : ${a}²`, a:String(a*a), e:`${a}² = ${a} × ${a} = ${a*a}.` }; },
        2: () => { const n = 1 + Math.floor(Math.random()*2);
          return { q:`Calculer : 10${n === 1 ? "" : "²"} × 10²`, a:String(Math.pow(10, n) * 100), e:`10${n === 1 ? "" : "²"} × 10² = 10${n === 1 ? "³" : "⁴"} = ${Math.pow(10, n) * 100} (1 suivi de ${n+2} zéros).` }; }
      }
    },
    {
      id: "pythagorerecip4", titre: "Réciproque de Pythagore : rectangle ?", icone: "❓",
      chap: [13],
      notion: "Démontrer qu'un triangle est rectangle ou non avec la réciproque du théorème de Pythagore.",
      qs: [
        { d: 2, q: "Un triangle a des côtés de 7, 24, 25. Est-il rectangle ?", c: ["Oui","Non","On ne peut pas savoir","Seulement si l'angle fait 60°"], a: 0, e: "25² = 625 et 7² + 24² = 49 + 576 = 625 : égalité → rectangle (réciproque)." },
        { d: 3, q: "Triangle avec côtés 5, 6, 8. Est-il rectangle ?", c: ["Non","Oui","Impossible de dire","Seulement si l'angle fait 90°"], a: 0, e: "8² = 64 ≠ 5² + 6² = 61 → pas rectangle." },
        { d: 1, q: "Pour montrer qu'un triangle est rectangle, on peut utiliser...", c: ["la réciproque du théorème de Pythagore","le théorème de Thalès","la règle des produits en croix","la règle des signes"], a: 0, e: "La réciproque de Pythagore permet de prouver qu'un triangle est rectangle si l'égalité des carrés est vérifiée." },
        { d: 1, q: "Dans un triangle rectangle, le côté opposé à l'angle droit s'appelle...", c: ["l'hypoténuse","la médiane","la médiatrice","la bissectrice"], a: 0, e: "C'est toujours le côté le plus long : l'hypoténuse." },
        { d: 2, q: "Un triangle a des côtés de 8, 15, 17. Est-il rectangle ?", c: ["Oui","Non","On ne peut pas savoir","Seulement s'il est isocèle"], a: 0, e: "17² = 289 et 8² + 15² = 64 + 225 = 289 : égalité → rectangle." },
        { d: 2, q: "Un triangle a des côtés de 6, 8, 11. Est-il rectangle ?", c: ["Non","Oui","On ne peut pas savoir","Seulement si un angle est de 45°"], a: 0, e: "11² = 121 et 6² + 8² = 36 + 64 = 100 : pas d'égalité → pas rectangle." },
        { d: 3, q: "ABC est tel que AB = 5, BC = 12 et AC = 13. Le triangle est-il rectangle ?", c: ["Oui, rectangle en B","Oui, rectangle en A","Non","On ne peut pas savoir"], a: 0, e: "Le plus grand côté est AC = 13 ; 13² = 169 et 5² + 12² = 25 + 144 = 169 → rectangle en B." },
        { d: 3, q: "Un triangle a des côtés de 9, 40, 41. Est-il rectangle ?", c: ["Oui","Non","On ne peut pas savoir","Seulement si un angle est de 30°"], a: 0, e: "41² = 1681 et 9² + 40² = 81 + 1600 = 1681 → rectangle." },
        { d: 4, q: "ABC tel que AB = 4, BC = 5 et AC = 6. Que dit la réciproque de Pythagore ?", c: ["AC² ≠ AB² + BC², donc pas rectangle","AC² = AB² + BC², donc rectangle","le triangle est équilatéral","l'angle en A mesure 90°"], a: 0, e: "AC² = 36 et AB² + BC² = 16 + 25 = 41 : pas d'égalité, donc pas rectangle." },
        { d: 4, q: "BC² = 100 et AB² + AC² = 144. Le triangle ABC est...", c: ["pas rectangle","rectangle en A","rectangle en B","équilatéral"], a: 0, e: "100 ≠ 144 : l'égalité de Pythagore n'est pas vérifiée, donc pas rectangle." },
        { d: 4, q: "Un charpentier vérifie un angle droit avec trois tasseaux de 30 cm, 40 cm et 50 cm. Que constate-t-il ?", c: ["50² = 30² + 40² : l'angle est droit","50² ≠ 30² + 40² : l'angle n'est pas droit","les tasseaux forment un triangle équilatéral","on ne peut pas vérifier"], a: 0, e: "2500 = 900 + 1600 = 2500 : la réciproque de Pythagore garantit l'angle droit." },
        { d: 4, q: "ABC tel que AB = 7, BC = 24, AC = 25. Rectangle ?", c: ["Oui, en B","Non","Seulement si AB = BC","On ne peut pas savoir"], a: 0, e: "25² = 625 et 7² + 24² = 49 + 576 = 625 → rectangle en B." }
      ],
      gen: {
        2: () => { const T = [["3", "4", "5"], ["6", "8", "10"], ["8", "15", "17"], ["7", "24", "25"], ["9", "12", "15"], ["5", "12", "13"]];
        const [a, b, c] = T[Math.floor(Math.random() * T.length)];
        return { q: `Un triangle a des côtés de ${a}, ${b}, ${c}. Est-il rectangle ?`, a: "Oui", e: `${c}² = ${c * c} et ${a}² + ${b}² = ${a * a + b * b} : égalité → rectangle.` }; },
        4: () => { const T = [["4", "5", "6"], ["6", "8", "11"], ["5", "6", "8"], ["2", "3", "4"], ["5", "7", "9"], ["10", "11", "13"]];
        const [a, b, c] = T[Math.floor(Math.random() * T.length)];
        return { q: `Un triangle a des côtés de ${a}, ${b}, ${c}. Est-il rectangle ?`, a: "Non", e: `${c}² = ${c * c} et ${a}² + ${b}² = ${a * a + b * b} : pas d'égalité → pas rectangle.` }; }
      }
    },
    {
      id: "equations4", titre: "Équations : résoudre", icone: "🧮",
      chap: [14],
      notion: "Isoler x dans x + a = b, ax = b, ax + b = cx + d.",
      qs: [
        { d: 1, q: "Résoudre : x + 7 = 12", a: "5", e: "x = 12 − 7 = 5." },
        { d: 1, q: "Résoudre : 3x = 21", a: "7", e: "x = 21 ÷ 3 = 7." },
        { d: 2, q: "Résoudre : x − 5 = −2", a: "3", e: "x = −2 + 5 = 3." },
        { d: 2, q: "Résoudre : −4x = 20", a: "-5", e: "x = 20 ÷ (−4) = −5." },
        { d: 3, q: "Résoudre : 2x + 3 = 11", a: "4", e: "2x = 11 − 3 = 8 (on enlève 3 des deux côtés), puis x = 8 ÷ 2 = 4." },
        { d: 3, q: "Résoudre : 5x − 7 = 2x + 8", c: ["x = 1","x = 5","x = 15","x = −5"], a: 1, e: "5x − 2x = 8 + 7 (on regroupe) → 3x = 15 → x = 5." },
        { d: 4, q: "Résoudre : 3(x − 2) = 4x + 1", a: "-7", e: "3x − 6 = 4x + 1 → −6 − 1 = 4x − 3x → x = −7." },
        { d: 4, q: "Un rectangle a un périmètre de 24 cm et une longueur de 3 cm de plus que sa largeur. Sa largeur ?", a: "4.5", e: "Largeur x, longueur x + 3 : 2 × (x + x + 3) = 24 → 4x + 6 = 24 → 4x = 18 → x = 4,5 cm." },
        { d: 4, q: "Résoudre : 7x + 4 = 3x + 20", a: "4", e: "7x − 3x = 20 − 4 (on regroupe) → 4x = 16 → x = 4. Vérification : 7 × 4 + 4 = 32 et 3 × 4 + 20 = 32." },
        { d: 2, q: "Résoudre : 4x − 5 = 2x + 1", a: "3", e: "4x − 2x = 1 + 5, donc 2x = 6 et x = 3." },
        { d: 3, q: "Résoudre : 2(x + 3) = 5x", a: "2", e: "2x + 6 = 5x, donc 6 = 3x et x = 2." },
        { d: 4, q: "Le triple d'un nombre diminué de 4 vaut 17. Ce nombre est...", a: "7", e: "3x − 4 = 17, donc 3x = 21 et x = 7." }
      ],
      gen: {
        1: () => { const a = 1 + Math.floor(Math.random()*9), b = 1 + Math.floor(Math.random()*9);
          return { q:`Résoudre : x + ${a} = ${a + b}`, a:String(b), e:`x = ${a+b} − ${a} = ${b}.` }; },
        3: () => { const a = 2 + Math.floor(Math.random()*4), x = 1 + Math.floor(Math.random()*9), b = Math.floor(Math.random()*12);
          return { q:`Résoudre : ${a}x + ${b} = ${a*x + b}`, a:String(x), e:`${a}x = ${a*x+b} − ${b} = ${a*x}, donc x = ${a*x} ÷ ${a} = ${x}.` }; }
      }
    },
    {
      id: "stats4", titre: "Statistiques : moyenne et médiane", icone: "📊",
      chap: [15],
      notion: "Moyenne simple et pondérée, médiane, étendue.",
      qs: [
        { d: 1, q: "Moyenne pondérée : notes 10 (coef 1) et 14 (coef 2) ?", c: ["12,67","12","12,5","13"], a: 0, e: "(10 × 1 + 14 × 2) ÷ 3 = (10 + 28) ÷ 3 = 38 ÷ 3 ≈ 12,67 ≈ 12,7." },
        { d: 2, q: "Notes : 8 (coef 2), 12 (coef 3). Moyenne ?", a: "10.4", e: "(8 × 2 + 12 × 3) ÷ 5 = (16 + 36) ÷ 5 = 52 ÷ 5 = 10,4." },
        { d: 1, q: "Moyenne de 6 ; 8 ; 10 ?", a: "8", e: "(6 + 8 + 10) ÷ 3 = 24 ÷ 3 = 8." },
        { d: 1, q: "Étendue de la série 3 ; 7 ; 12 ; 15 ?", a: "12", e: "Étendue = max − min = 15 − 3 = 12." },
        { d: 2, q: "Moyenne de 10 ; 10 ; 12 ; 20 ?", a: "13", e: "(10 + 10 + 12 + 20) ÷ 4 = 52 ÷ 4 = 13." },
        { d: 2, q: "Dans la série 5 ; 8 ; 12 ; 12 ; 15, la médiane est...", a: "12", e: "Valeurs ordonnées : 5, 8, 12, 12, 15. La valeur du milieu (3e sur 5) est 12." },
        { d: 3, q: "Notes : 6 (coef 1), 11 (coef 2), 15 (coef 1). Moyenne ?", a: "10.75", e: "(6 × 1 + 11 × 2 + 15 × 1) ÷ 4 = 43 ÷ 4 = 10,75." },
        { d: 3, q: "Une série de 5 notes a pour total 57. Moyenne (dixième) ?", a: "11.4", e: "57 ÷ 5 = 11,4." },
        { d: 4, q: "Médiane de 2 ; 5 ; 7 ; 10 ; 18 ; 20 ?", a: "8.5", e: "Valeurs centrales 7 et 10 → médiane = (7 + 10) ÷ 2 = 8,5." },
        { d: 4, q: "Après des notes de 8, 10 et 13, quelle note (sur 20) au 4e devoir pour atteindre 11 de moyenne ?", a: "13", e: "Il faut un total de 44 ; 8 + 10 + 13 = 31, donc 44 − 31 = 13." },
        { d: 3, q: "Moyenne pondérée : 15 (coef 3), 10 (coef 2) ?", a: "13", e: "(15 × 3 + 10 × 2) ÷ 5 = 55 ÷ 5 = 13." },
        { d: 4, q: "Une série : 12 (3 fois), 15 (2 fois), 10. Moyenne ?", a: "12.67", e: "(36 + 30 + 10) ÷ 6 = 76 ÷ 6 ≈ 12,67." },
        { d: 3, q: "Probabilité d'obtenir un nombre premier en tirant une carte de 1 à 10 ?", c: ["0,4","0,5","0,3","0,2"], a: 0, e: "Premiers : 2, 3, 5, 7 → 4/10 = 0,4." }
      ],
      gen: {
        1: () => { const m = 10 + Math.floor(Math.random() * 9); const vals = [-3, -1, 0, 1, 3].sort(() => Math.random() - 0.5).map(o => m + o);
          return { q: `Temp\u00e9ratures relev\u00e9es : ${vals.join(" ; ")}. Moyenne ?`, a: String(m), e: `Somme = ${vals.join(" + ")} = ${5 * m}. Moyenne = ${5 * m} \u00f7 5 = ${m}.` }; },
        2: () => { const m = 10 + Math.floor(Math.random() * 7); const O = [[3, -2, 0], [-1, -2, 2], [5, -2, -1]]; const o = O[Math.floor(Math.random() * 3)]; const E = [[2, 3, 4], [4, 3, 2], [2, 4, 3], [3, 2, 4]]; const e = E[Math.floor(Math.random() * 4)];
          const v = [m + o[0], m + o[1], m + o[2]], tot = e[0] + e[1] + e[2], somme = v[0] * e[0] + v[1] * e[1] + v[2] * e[2];
          return { q: `Notes obtenues : ${v[0]} (${e[0]} fois), ${v[1]} (${e[1]} fois), ${v[2]} (${e[2]} fois). Moyenne de la s\u00e9rie ?`, a: String(m), e: `Somme pond\u00e9r\u00e9e = ${v[0]}\u00d7${e[0]} + ${v[1]}\u00d7${e[1]} + ${v[2]}\u00d7${e[2]} = ${somme}. Moyenne = ${somme} \u00f7 ${tot} = ${m}.` }; },
        3: () => { const t = new Set(); while (t.size < 7) t.add(2 + Math.floor(Math.random() * 39)); const s = [...t].sort((x, y) => x - y);
          return { q: `S\u00e9rie : ${s.join(" ; ")}. M\u00e9diane ?`, a: String(s[3]), e: `7 valeurs : apr\u00e8s classement, la m\u00e9diane est la 4\u1d49 valeur : ${s[3]}.` }; }
      }
    },
    {
      id: "thalesrecip4", titre: "Réciproque de Thalès : droites parallèles ?", icone: "🔁",
      chap: [16],
      notion: "Démontrer que deux droites sont parallèles (réciproque) ou ne le sont pas.",
      qs: [
        { d: 1, q: "Pour montrer que les droites (MN) et (BC) sont parallèles (configuration de Thalès), on montre...", c: ["que les rapports AM/AB et AN/AC sont égaux","que les triangles ont même aire","que les angles sont droits","que AB = BC"], a: 0, e: "Si AM/AB = AN/AC avec les points bien placés, alors (MN) // (BC) (réciproque de Thalès)." },
        { d: 1, q: "Si AM/AB = AN/AC et M, N placés comme dans la configuration de Thalès, alors (MN) est...", c: ["parallèle à (BC)","perpendiculaire à (BC)","la médiatrice de [AB]","confondue avec (BC)"], a: 0, e: "C'est exactement la réciproque du théorème de Thalès." },
        { d: 2, q: "AM/AB = AN/AC = 0,4. Que peut-on conclure (configuration de Thalès) ?", c: ["(MN) est parallèle à (BC)","(MN) est perpendiculaire à (BC)","AM = MN","l'aire de AMN est égale à celle de ABC"], a: 0, e: "Les rapports sont égaux, donc les droites sont parallèles." },
        { d: 2, q: "AM = 3, AB = 9, AN = 2 et AC = 6. (MN) est-elle parallèle à (BC) ?", c: ["Oui, car 3/9 = 2/6 = 1/3","Non, car 3 ≠ 9","Oui, car les deux mesures sont paires","On ne peut pas savoir"], a: 0, e: "AM/AB = 3/9 = 1/3 et AN/AC = 2/6 = 1/3 : les rapports sont égaux → parallèles." },
        { d: 3, q: "AM = 4, AB = 10, AN = 2 et AC = 5. Les droites (MN) et (BC) sont...", c: ["parallèles","perpendiculaires","confondues","sécantes en B"], a: 0, e: "AM/AB = 4/10 = 0,4 et AN/AC = 2/5 = 0,4 → d'après la réciproque de Thalès, (MN) // (BC)." },
        { d: 3, q: "AM = 5, AB = 12, AN = 3 et AC = 6. (MN) // (BC) ?", c: ["Non, car 5/12 ≠ 1/2","Oui, car 5/12 = 3/6","Oui, car les points sont alignés","On ne peut pas savoir"], a: 0, e: "AM/AB = 5/12 ≈ 0,42 et AN/AC = 3/6 = 0,5 : les rapports sont différents → pas parallèles." },
        { d: 3, q: "Dans une figure, AM = 2,8 ; AB = 7 ; AN = 1,6 ; AC = 4. Montrer que (MN) // (BC).", c: ["Oui, car 2,8/7 = 1,6/4 = 0,4","Non, car 2,8 ≠ 1,6","Oui, car les aires sont égales","On ne peut pas savoir"], a: 0, e: "2,8 ÷ 7 = 0,4 et 1,6 ÷ 4 = 0,4 : les rapports sont égaux, donc (MN) // (BC) (réciproque de Thalès)." },
        { d: 4, q: "Si AM/AB ≠ AN/AC (et les points sont bien alignés comme dans la configuration), alors...", c: ["(MN) n'est pas parallèle à (BC)","(MN) est parallèle à (BC)","les triangles sont égaux","l'aire est multipliée par 2"], a: 0, e: "Sans égalité des rapports, pas de parallélisme : c'est la contraposée de la réciproque de Thalès." },
        { d: 4, q: "M ∈ [AB] avec AM = 4,5, AB = 9 ; N ∈ [AC] avec AN/AC = 0,5. La droite (MN) est-elle parallèle à (BC) ?", c: ["Oui, car AM/AB = 0,5 = AN/AC","Non, car 4,5 ≠ 0,5","Oui, uniquement si AC = 9","On ne peut pas savoir"], a: 0, e: "AM/AB = 4,5/9 = 0,5 et AN/AC = 0,5 : rapports égaux → (MN) // (BC)." },
        { d: 4, q: "M ∈ [AB] et N ∈ [AC] ; AM = 6, AB = 15, AN = 4, AC = 10. Que peut-on affirmer ?", c: ["(MN) // (BC) car 6/15 = 4/10","(MN) // (BC) car 6 = 4 + 2","(MN) est perpendiculaire à (BC)","le triangle est isocèle"], a: 0, e: "6/15 = 0,4 et 4/10 = 0,4 : par la réciproque de Thalès, (MN) // (BC)." },
        { d: 4, q: "T ∈ [PR] et U ∈ [PS]. Pour montrer que (TU) // (RS), il faut vérifier...", c: ["PT/PR = PU/PS","PT = PU","TR = RS","que les aires de PTU et PRS sont égales"], a: 0, e: "Les rapports se font depuis le sommet commun P : PT/PR = PU/PS égaux → (TU) // (RS)." },
        { d: 4, q: "M ∈ [AB] et N ∈ [AC] ; AM = 7, AB = 14, AN = 5, AC = 9. (MN) // (BC) ?", c: ["Non, car 1/2 ≠ 5/9","Oui, car 7 = 5 + 2","Oui, car 14 = 9 + 5","On ne peut pas savoir"], a: 0, e: "AM/AB = 7/14 = 0,5 et AN/AC = 5/9 ≈ 0,56 : rapports différents → pas parallèles." }
      ],
      gen: {
        2: () => { const T = [["3", "9", "2", "6"], ["4", "8", "3", "6"], ["2", "10", "1", "5"], ["5", "15", "3", "9"], ["4", "12", "1", "3"]];
        const [am, ab, an, ac] = T[Math.floor(Math.random() * T.length)];
        return { q: `M ∈ [AB], N ∈ [AC] : AM = ${am}, AB = ${ab}, AN = ${an}, AC = ${ac}. (MN) est-elle parallèle à (BC) ?`, a: "Oui", e: `AM/AB = ${am}/${ab} et AN/AC = ${an}/${ac} : les deux rapports sont égaux, donc (MN) // (BC) (réciproque de Thalès).` }; },
        4: () => { const T = [["5", "12", "3", "6"], ["4", "10", "3", "10"], ["6", "15", "3", "10"], ["2", "5", "3", "9"], ["4", "14", "2", "8"]];
        const [am, ab, an, ac] = T[Math.floor(Math.random() * T.length)];
        return { q: `M ∈ [AB], N ∈ [AC] : AM = ${am}, AB = ${ab}, AN = ${an}, AC = ${ac}. (MN) est-elle parallèle à (BC) ?`, a: "Non", e: `AM/AB = ${am}/${ab} et AN/AC = ${an}/${ac} : les rapports sont différents, donc (MN) n'est pas parallèle à (BC).` }; }
      }
    },
    {
      id: "proba4", titre: "Probabilités", icone: "🎲",
      chap: [17],
      notion: "Expériences aléatoires, réponse en fraction ou en décimal.",
      qs: [
        { d: 1, q: "Probabilité d'obtenir un nombre pair en lançant un dé à 6 faces ?", c: ["1/2","1/4","1/3","2/3"], a: 0, e: "3 faces paires (2, 4, 6) sur 6 → 3/6 = 1/2." },
        { d: 1, q: "Probabilité de tirer une carte rouge dans un jeu de 52 cartes...", c: ["1/2","1/4","1/26","2/13"], a: 0, e: "26 rouges sur 52 → 1/2." },
        { d: 2, q: "Probabilité d'obtenir un nombre ≤ 2 avec un dé à 6 faces ?", c: ["1/3","1/6","1/2","2/3"], a: 0, e: "2 cas (1, 2) sur 6 → 2/6 = 1/3." },
        { d: 2, q: "Un sac a 4 billes bleues et 6 rouges. Probabilité de tirer une bleue ?", c: ["0,4","0,6","1/4","2/3"], a: 0, e: "4/10 = 0,4." },
        { d: 3, q: "Probabilité d'obtenir un multiple de 3 avec un dé à 6 faces ?", a: "0.33", e: "Cas favorables : 3 et 6 → 2/6 = 1/3 ≈ 0,33." },
        { d: 3, q: "Probabilité d'obtenir un nombre premier en tirant une carte de 1 à 10 ?", c: ["0,4","0,5","0,3","0,2"], a: 0, e: "Premiers : 2, 3, 5, 7 → 4/10 = 0,4." },
        { d: 4, q: "On joue 2 fois au pile ou face (équiprobable). Probabilité de 2 piles ?", c: ["1/4","1/2","1/3","2/4"], a: 0, e: "4 issues (PP, PF, FP, FF) équiprobables → 1/4." },
        { d: 4, q: "Dans une classe de 28 élèves : 16 filles. Un élève tiré au hasard ; probabilité que ce soit un garçon (décimales 2 chiffres) ?", a: "0.43", e: "12 garçons → 12/28 ≈ 0,4286 ≈ 0,43." },
        { d: 2, q: "Dans une urne : 3 billes blanches et 2 billes noires. Probabilité de tirer une noire ?", a: "2/5", e: "2 noires sur 5 billes au total → 2/5." },
        { d: 3, q: "On lance un dé à 10 faces (1 à 10, équiprobable). Probabilité d'obtenir un multiple de 4 ?", a: "0.2", e: "Favorables : 4 et 8, soit 2 cas ; 2/10 = 0,2." },
        { d: 3, q: "Un sac contient 5 boules rouges, 3 vertes et 2 jaunes. Probabilité de tirer une rouge ?", a: "1/2", e: "5 rouges sur 10 boules → 5/10 = 1/2." },
        { d: 4, q: "On lance deux fois une pièce équilibrée. Probabilité d'obtenir au moins un face ?", c: ["3/4","1/4","1/2","2/3"], a: 0, e: "4 issues (PP, PF, FP, FF) ; 3 donnent au moins un face (PF, FP, FF) → 3/4." }
      ],
      gen: {
        2: () => { const b = 2 + Math.floor(Math.random() * 8), w2 = 2 + Math.floor(Math.random() * 8);
        const tot = b + w2; let g = tot; let bb = b; while (bb) { [g, bb] = [bb, g % bb]; } g = g || 1;
        return { q: `Une urne contient ${b} billes noires et ${w2} billes blanches. Probabilité de tirer une bille noire ?`, a: `${b / g}/${tot / g}`, e: `${b} noires sur ${tot} billes → ${b}/${tot} = ${b / g}/${tot / g}.` }; },
        4: () => { const n = 2 + Math.floor(Math.random() * 9) + 1, k = 1 + Math.floor(Math.random() * n);
        const p = Math.round(k / n * 100) / 1;
        return { q: `Un sac contient ${n} jetons numérotés de 1 à ${n}. Probabilité de tirer un jeton inférieur ou égal à ${k} (en pourcentage, arrondi à l'unité) ?`, a: `${p}%`, e: `${k} jetons favorables sur ${n} → ${k}/${n} ≈ ${p} %.` }; }
      }
    },
    {
      id: "grandeurs4", titre: "Grandeurs : vitesses et débits", icone: "⏱️",
      chap: [18],
      notion: "Grandeurs quotients : vitesse moyenne, débit, conversions d'unités.",
      qs: [
        { d: 1, q: "90 km/h en m/s ?", c: ["9 m/s","25 m/s","90 m/s","0,25 m/s"], a: 1, e: "90 ÷ 3,6 = 25 m/s." },
        { d: 2, q: "120 km en 1 h 30. Vitesse moyenne ?", c: ["80 km/h","90 km/h","60 km/h","40 km/h"], a: 0, e: "1 h 30 = 1,5 h. v = 120 ÷ 1,5 = 80 km/h." },
        { d: 2, q: "à 80 km/h, durée pour 200 km ?", c: ["2 h 30","2 h","2 h 40","1 h 30"], a: 0, e: "t = 200 ÷ 80 = 2,5 h = 2 h 30 min." },
        { d: 3, q: "15 km en 12 min en vélo. Vitesse moyenne en km/h ?", a: "75", e: "12 min = 0,2 h. v = 15 ÷ 0,2 = 75 km/h." },
        { d: 4, q: "Un train fait 150 km en 1 h 15 min en moyenne. Vitesse moyenne en km/h ?", a: "120", e: "1 h 15 = 1,25 h. v = 150 ÷ 1,25 = 120 km/h." },
        { d: 1, q: "1 h 15 min en minutes ?", a: "75", e: "1 h = 60 min, donc 60 + 15 = 75 min." },
        { d: 2, q: "Convertir 5 m/s en km/h ?", a: "18", e: "On multiplie par 3,6 : 5 × 3,6 = 18 km/h." },
        { d: 3, q: "Une pompe débite 0,8 L/s. Volume (L) en 2 min 30 ?", a: "120", e: "2 min 30 = 150 s, puis 0,8 × 150 = 120 L." },
        { d: 3, q: "2,5 L d'eau coulent en 5 min. Débit en L/min ?", a: "0.5", e: "2,5 ÷ 5 = 0,5 L/min." },
        { d: 4, q: "Une cuve de 30 m³ se remplit en 45 min. Débit en m³/h ?", a: "40", e: "45 min = 0,75 h, puis 30 ÷ 0,75 = 40 m³/h." },
        { d: 4, q: "Convertir 12 L/min en L/h ?", a: "720", e: "1 h = 60 min, donc 12 × 60 = 720 L/h." }
      ],
      gen: {
        1: () => { const v = [40, 50, 60, 70, 80, 90][Math.floor(Math.random() * 6)]; const t = 2 + Math.floor(Math.random() * 4); const d = v * t;
          return { q: `Un v\u00e9hicule roule \u00e0 ${v} km/h pendant ${t} h. Distance parcourue ?`, a: String(d), e: `d = v \u00d7 t = ${v} \u00d7 ${t} = ${d} km.` }; },
        3: () => { const P = [[15, 40], [15, 60], [24, 50], [24, 75], [30, 50], [30, 80], [45, 60], [45, 80], [36, 50], [36, 100]]; const p = P[Math.floor(Math.random() * P.length)]; const H = { 15: "0,25", 24: "0,4", 30: "0,5", 45: "0,75", 36: "0,6" };
          return { q: `${p[0] * p[1] / 60} km parcourus en ${p[0]} min. Vitesse moyenne en km/h ?`, a: String(p[1]), e: `${p[0]} min = ${H[p[0]]} h. v = ${p[0] * p[1] / 60} \u00f7 ${H[p[0]]} = ${p[1]} km/h.` }; }
      }
    }
  ]
};
