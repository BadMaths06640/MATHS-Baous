/* ================= BaouMaths — résumés visuels et aides par question (4e)
   resume : cartes { t: titre, f: formule mise en valeur, d: détail }
   qs     : aide par index de question (« Astuce…
Exemple : … »)
   genH   : aide appliquée aux questions générées, par difficulté 1-4 */
window.AIDE_4E = {
  propo4: {
    videos: [
      { u: "https://www.youtube.com/watch?v=mMW0CSC4mVA", t: "Compléter un tableau de proportionnalité (coefficient)" },
      { u: "https://www.youtube.com/watch?v=ZGNJxFTPq4Q", t: "Le produit en croix" },
      { u: "https://www.youtube.com/watch?v=l88QVVAAdhs", t: "Augmenter d'un pourcentage" },
      { u: "https://www.youtube.com/watch?v=lJZ_cQ-hiT8", t: "Diminuer d'un pourcentage" }
    ],
    resume: [
      { t: "Proportionnalité", f: "3 → 6 € : ×2", d: "1 → 2 € puis ×5 → 5 → 10 €\nle coefficient relie toujours deux colonnes" },
      { t: "Pourcentages", f: "+ t % → × (1 + t/100)", d: "− t % → × (1 − t/100)\n60 € HT + TVA 20 % → 60 × 1,2 = 72 €" },
      { t: "Échelle", f: "1/2 000 000 : 1 cm → 20 km", d: "multiplie la mesure par le dénominateur\n3,5 cm → 3,5 × 2 000 000 cm = 70 km" }
    ],
    qs: [
      "Astuce : d = v × t.\nExemple similaire : 80 km/h pendant 3 h → 240 km.",
      "Astuce : + 10 % = multiplier par 1 + 10/100.\nExemple similaire : + 25 % = ×1,25.",
      "Astuce : − 25 % = multiplier par 0,75.\nExemple similaire : 80 € à − 25 % → 60 €.",
      "Astuce : 3,5 cm × 2 000 000 = 7 000 000 cm, puis convertis en km.\nExemple similaire : 1 cm à l'échelle 1/2 000 000 → 20 km.",
      "Astuce : TTC = HT × 1,2 (TVA 20 %).\nExemple similaire : 50 € HT → 60 € TTC.",
      "Astuce : multiplie les deux coefficients : 1,2 × 0,8 = 0,96.\nExemple similaire : + 50 % puis − 50 % → ×1,5 × 0,5 = 0,75.",
      "Astuce : applique les pourcentages dans l'ordre, le deuxième porte sur le RESTE.\nExemple similaire : 100 € ; + 10 % → 110 € ; − 10 % de 110 → 99 €.",
      "Astuce : dans un tableau de proportionnalité, repère le multiplicateur d'une colonne à l'autre.\nExemple similaire : 3 gâteaux coûtent 9 € ; pour 6 gâteaux on double, donc 18 €.",
      "Astuce : cherche d'abord le prix d'1 kg (ou le multiplicateur), puis multiplie.\nExemple similaire : 2 kg pour 8 € → 1 kg = 4 € → 7 kg = 28 €.",
      "Astuce : une baisse de t % revient à multiplier par (1 − t/100), puis on enlève la remise fixe.\nExemple similaire : 80 € soldés à −25 % → 80 × 0,75 = 60 €.",
      "Astuce : hausse = (nouveau − ancien) ÷ ancien, en fraction de 100.\nExemple similaire : de 50 € à 62,5 € → 12,5/50 = 25 %.",
      "Astuce : multiplie par le dénominateur de l'échelle, puis convertis en m.\nExemple similaire : 4,5 cm au 1/200 → 900 cm = 9 m."
    ],
    genH: {
      2: "Astuce : multiplie le nombre par le pourcentage, puis divise par 100.\nExemple similaire : 20 % de 45 = 45 × 20 ÷ 100 = 9.",
      4: "Astuce : multiplie par le dénominateur de l'échelle, puis convertis : 100 000 cm = 1 km.\nExemple similaire : échelle 1/1 000 000, 5 cm → 5 × 1 000 000 cm = 50 km."
    }
  },
  pythagore: {
    videos: [
      { u: "https://www.youtube.com/watch?v=9itzajcpn_I", t: "Le théorème de Pythagore" },
      { u: "https://www.youtube.com/watch?v=CNuIvPTzmsU", t: "Calculer un côté de l'angle droit" }
    ],
    resume: [
      { t: "Théorème (hypoténuse)", f: "BC² = AB² + AC²", d: "valable seulement dans un triangle rectangle\nBC est l'hypoténuse" },
      { t: "Chercher un côté de l'angle droit", f: "AB² = BC² − AC²", d: "hypoténuse au carré, puis on soustrait\nex : BC = 13, AC = 5 → AB² = 169 − 25 = 144, AB = 12" },
      { t: "Erreurs à éviter", f: "√(a² + b²) n'est pas a + b", d: "5 et 7 → √(25 + 49) = √74 ≈ 8,6\npas 5 + 7 = 12" }
    ],
    qs: [
      "Astuce : 3² + 4² = 25 → hypoténuse = √25.\nExemple similaire : 6 et 8 → √100 = 10.",
      "Astuce : l'hypoténuse est le côté OPPOSÉ à l'angle droit : toujours le plus long.\nExemple similaire : dans un triangle rectangle de côtés 5, 12, 13, l'hypoténuse est 13.",
      "Astuce : un carré, c'est le nombre multiplié par lui-même.\nExemple similaire : 7² = 49.",
      "Astuce : BC² = 6² + 8² = 100 → BC = √100.\nExemple similaire : 3 et 4 → BC = 5.",
      "Astuce : on connaît l'hypoténuse → on soustrait : 13² − 5².\nExemple similaire : hypoténuse 10, côté 6 → √64 = 8.",
      "Astuce : hypoténuse au carré = somme des carrés des deux autres côtés, puis touche √.\nExemple similaire : côtés 6 et 8 → 36 + 64 = 100 → √100 = 10.",
      "Astuce : les diagonales d'un rectangle forment deux triangles rectangles avec les côtés.\nExemple similaire : rectangle 3 sur 4 → diagonale √(9 + 16) = 5.",
      "Astuce : 10² − 6² = 64 → racine carrée de 64.\nExemple similaire : hypoténuse 5, côté 3 → 4.",
      "Astuce : le mât est l'hypoténuse : 5² = 3² + h².\nExemple similaire : échelle 10 m à 6 m → h = 8 m.",
      "Astuce : la diagonale forme un triangle rectangle avec deux côtés du rectangle.\nExemple similaire : rectangle 6 × 8 → diagonale 10.",
      "Astuce : les diagonales du losange se coupent en leur milieu, perpendiculairement : moitiés 3 et 4.\nExemple similaire : diagonales 10 et 24 → côté 13.",
      "Astuce : l'échelle est l'hypoténuse : h² = 5² − 1,4² = 25 − 1,96.\nExemple similaire : échelle 10 m, pied à 2 m → h = √96 ≈ 9,8 m."
    ],
    genH: {
      2: "Astuce : hypoténuse au carré = somme des carrés des deux autres côtés, puis racine carrée.\nExemple similaire : 6 et 8 → √(36 + 64) = 10.",
      4: "Astuce : on connaît l'hypoténuse → on soustrait le carré connu, puis racine carrée.\nExemple similaire : hypoténuse 13, côté 5 → √(169 − 25) = 12."
    }
  },
  relatifs4: {
    videos: [
      { u: "https://www.youtube.com/watch?v=MC6ueOgx90U", t: "Additionner deux nombres relatifs" },
      { u: "https://www.youtube.com/watch?v=SxVtlYvvIJY", t: "Soustraire un nombre relatif" },
      { u: "https://www.youtube.com/watch?v=mALMh6TqHuk", t: "Multiplier deux relatifs" },
      { u: "https://www.youtube.com/watch?v=har1B0Q0yL8", t: "Diviser deux relatifs" }
    ],
    resume: [
      { t: "Règle des signes", f: "(−) × (−) = +\n(−) × (+) = −", d: "Même règle pour la division : mêmes signes → positif, signes contraires → négatif." },
      { t: "Plusieurs facteurs", f: "(−2) × 3 × (−4) = +24", d: "Compte les facteurs négatifs : nombre pair → produit positif ; impair → négatif." },
      { t: "Repérage", f: "B(−2 ; 5) : gauche, haut", d: "Abcisse négative → à gauche ; ordonnée négative → en bas. Les priorités de calcul restent valables." }
    ],
    qs: [
      "Astuce : deux signes négatifs → produit positif.\nExemple similaire : (−6) × (−5) = 30.",
      "Astuce : signes contraires → produit négatif.\nExemple similaire : 4 × (−7) = −28.",
      "Astuce : compte les facteurs négatifs : 2 (pair) → positif.\nExemple similaire : (−3) × 2 × (−5) = 30.",
      "Astuce : compte seulement les facteurs NÉGATIFS.\nExemple similaire : (−4) × (−1) × 2 × 5 : 2 négatifs → positif.",
      "Astuce : signes contraires → quotient négatif.\nExemple similaire : (−42) ÷ 7 = −6.",
      "Astuce : division d'abord (mêmes signes → +), puis addition.\nExemple similaire : (−18) ÷ (−6) + 2 = 3 + 2 = 5.",
      "Astuce : le carré d'un négatif est positif, puis on multiplie.\nExemple similaire : (−4)² × (−3) = 16 × (−3) = −48.",
      "Astuce : multiplication prioritaire sur l'addition.\nExemple similaire : −3 + 5 × (−2) = −3 + (−10) = −13.",
      "Astuce : puissance impaire d'un négatif → négatif ; paire → positif.\nExemple similaire : (−2)³ × 3² = −8 × 9 = −72.",
      "Astuce : une descente = nombre négatif, multiplie par le temps.\nExemple similaire : descente de 20 m/min pendant 5 min → −20 × 5 = −100 m.",
      "Astuce : crochets d'abord, puis la division (négatif ÷ négatif = +).\nExemple similaire : [(−3) × 5] ÷ (−5) = (−15) ÷ (−5) = 3.",
      "Astuce : abscisse négative → à gauche ; ordonnée positive → en haut.\nExemple similaire : C(−1 ; −3) est en bas à gauche (3e quadrant)."
    ],
    genH: {
      1: "Astuce : deux signes − tiennent lieu de +.\nExemple similaire : (−6) × (−5) = 30, car 6 × 5 = 30.",
      2: "Astuce : cherche d'abord le signe (signes contraires → −), puis divise.\nExemple similaire : (−24) ÷ 6 = −4, car 24 ÷ 6 = 4."
    }
  },
  sphvol: {
    videos: [
      { u: "https://www.youtube.com/watch?v=-ylcRWcwIGM", t: "Sections d'un cylindre par un plan" },
      { u: "https://www.youtube.com/watch?v=Cu9USzow-_o", t: "Sections d'une pyramide par un plan" },
      { u: "https://www.youtube.com/watch?v=RzIJ5Fq2fiU", t: "Volume d'une pyramide ou d'un cône" }
    ],
    resume: [
      { t: "Pyramide et cône", f: "V = (aire de la base × h) ÷ 3", d: "Cône : base = π × r², donc V = (π × r² × h) ÷ 3. Sections parallèles à la base : réduction de la base (pyramide, cône) ou base identique (cylindre, prisme)." },
      { t: "Prisme et cylindre", f: "V = aire de la base × hauteur\nCylindre : V = π × r² × h", d: "Toujours : aire de la base (disque, rectangle…) × hauteur du solide." },
      { t: "Rayon ou diamètre ?", f: "d = 2 × r\nV = π × (d÷2)² × h", d: "Si l'énoncé donne un DIAMÈTRE, divise-le par 2 avant d'élever au carré !" },
      { t: "Litres et cm³", f: "1 L = 1 dm³ = 1 000 cm³\n1 m³ = 1 000 L", d: "1 mL = 1 cm³. Pour une contenance, convertis le volume en dm³ ou cm³ puis en litres." }
    ],
    qs: [
      "Astuce : V = π × r² × h, avec le RAYON (2 cm).\nExemple similaire : r = 3, h = 10 → π × 9 × 10 ≈ 282,6 cm³.",
      "Astuce : 1 L = 1 dm³ = 1 000 cm³.\nExemple similaire : 1 cL = 10 cm³.",
      "Astuce : aire de la base (carré 4 × 4) × hauteur.\nExemple similaire : base 5 × 5, hauteur 2 → 50 cm³.",
      "Astuce : diamètre 4 → rayon 2 d'abord !\nExemple similaire : diamètre 10, h = 7 → V = π × 25 × 7 ≈ 549,5 cm³.",
      "Astuce : multiplie les 3 dimensions ; 1 cm³ = 1 mL.\nExemple similaire : 6 × 5 × 2 = 60 cm³ = 60 mL.",
      "Astuce : multiplie par 1 000 pour passer du L au cm³.\nExemple similaire : 1,5 L = 1 500 cm³.",
      "Astuce : convertis 3 L en mL puis divise.\nExemple similaire : 1 L en flacons de 200 mL → 5 flacons.",
      "Astuce : V = π × r² × h = π × 9 × 7.\nExemple similaire : r = 2, h = 10 → 40π ≈ 125,6 cm³.",
      "Astuce : divise le volume par la hauteur pour retrouver l'aire de la base.\nExemple similaire : V = 60, h = 3 → base = 20 cm².",
      "Astuce : calcule V en m³ (π × 1² × 2), puis 1 m³ = 1 000 L.\nExemple similaire : r = 1, h = 1 → 3,14 m³ = 3 140 L.",
      "Astuce : la diagonale de la base du pavé doit tenir dans le disque du cylindre.\nExemple similaire : disque de rayon 4 → diamètre 8 : un rectangle 6 × 5 (diagonale ≈ 7,8) passe, pas 8 × 8.",
      "Astuce : h = V ÷ (π × r²).\nExemple similaire : 628 cm³ dans un cylindre de rayon 5 → 628 ÷ 78,5 = 8 cm.",
      "Astuce : aire de la base (carré 6 × 6 = 36), puis V = 36 × 8 ÷ 3.\nExemple similaire : base carrée de côté 4, h = 6 : 16 × 6 ÷ 3 = 32.",
      "Astuce : V = (π × r² × h) ÷ 3.\nExemple similaire : r = 2, h = 6 : π × 4 × 6 ÷ 3 = 8π ≈ 25,1 cm³.",
      "Astuce : plan parallèle à la base d'un cylindre : disque identique à la base.\nExemple similaire : cylindre de rayon 5 coupé au milieu : disque de rayon 5.",
      "Astuce : plan parallèle à la base d'une pyramide : réduction de la base.\nExemple similaire : coupée à mi-hauteur : section = base à l'échelle 1/2."
    ],
    genH: {
      1: "Astuce : volume du prisme = aire de la base × hauteur.\nExemple similaire : base rectangle 4 × 3 cm, hauteur 5 cm → 60 cm³.",
      2: "Astuce : le cylindre suit la même règle : V = aire de la base × hauteur.\nExemple similaire : B = 10 cm², h = 7 cm → 70 cm³.",
      3: "Astuce : volume d'une pyramide = aire de base × hauteur ÷ 3.\nExemple similaire : base 18 cm², hauteur 5 cm → 18 × 5 ÷ 3 = 30 cm³.",
      4: "Astuce : parallèle à la base → section = réduction de la base (pyramide/cône) ou base identique (prisme/cylindre).\nExemple similaire : un cylindre coupé parallèlement à la base donne un disque identique."
    }
  },
  arithmetique4: {
    videos: [
      { u: "https://www.youtube.com/watch?v=g9PLLhnCv88", t: "Reconnaître un nombre premier" },
      { u: "https://www.youtube.com/watch?v=kQJ1dYqA6ZU", t: "Le cours : divisibilité" }
    ],
    resume: [
      { t: "Division euclidienne", f: "702 = 273 × 2 + 156", d: "a = b × q + r avec r < b. Le reste est toujours plus petit que le diviseur." },
      { t: "Critères de divisibilité", f: "par 2 : unités paires\npar 3 ou 9 : somme des chiffres\npar 5 : finit par 0 ou 5\npar 4 : les 2 derniers chiffres", d: "Exemple : 312 → 3 + 1 + 2 = 6 → divisible par 3 ; 312 finit par 12, divisible par 4." },
      { t: "Nombres premiers", f: "2 ; 3 ; 5 ; 7 ; 11 ; 13 ; 17 ; 19 ; 23 ; 29 ; 31 ; 37 ; 41 ; 43 ; 47 ; 53 ; 59 ; 61 ; 67 ; 71 ; 73 ; 79 ; 83 ; 89 ; 97", d: "Exactement 2 diviseurs. 1 n'est pas premier. Il en existe une infinité." }
    ],
    qs: [
      "Astuce : cherche le multiple de 273 juste en dessous de 702.\nExemple similaire : dans 100 = 3 × q + r, q = 33 (car 3 × 34 = 102 dépasse).",
      "Astuce : le reste est ce qui manque pour atteindre le nombre.\nExemple similaire : 702 − 546 = 156, et 156 < 273 ✓.",
      "Astuce : multiplie 17 × 20, puis complète jusqu'à 351.\nExemple similaire : 100 = 6 × 15 + 10 → le trou est 10.",
      "Astuce : cherche le multiple de 7 sous 100.\nExemple similaire : 50 = 7 × 7 + 1 → reste 1.",
      "Astuce : teste 2, 3, 5, 7... un seul doit échouer pour éliminer.\nExemple similaire : 91 = 7 × 13 → pas premier.",
      "Astuce : un nombre premier a exactement 2 diviseurs ; 1 n'en a qu'un seul.\nExemple similaire : la liste commence 2, 3, 5, 7, 11...",
      "Astuce : contrôle d'abord la divisibilité par 3 (somme des chiffres).\nExemple similaire : 27 → 9 → divisible par 3, donc pas premier.",
      "Astuce : quelle que soit la liste, il y a toujours un nouveau nombre premier après.\nExemple similaire : après 97 viennent 101, 103, 107...",
      "Astuce : multiplie 9 × 60, puis complète jusqu'à 546.\nExemple similaire : 100 = 9 × 11 + 1 → reste 1.",
      "Astuce : croise les deux critères : finir par 0, 2, 4, 6, 8 ET par 0 ou 5.\nExemple similaire : 130 finit par 0 → divisible par 2 et 5.",
      "Astuce : isole le multiple de 4, puis divise.\nExemple similaire : 100 = 4 × q + 0 → q = 25.",
      "Astuce : compte les diviseurs : 1, chaque premier, et le produit.\nExemple similaire : 3 × 11 = 33 → diviseurs 1 ; 3 ; 11 ; 33 → 4."
    ],
    genH: {
      1: "Astuce : cherche le multiple du diviseur juste en dessous du nombre, le reste est ce qui manque.\nExemple similaire : 47 = 6 × 7 + 5 → reste 5.",
      2: "Astuce : additionne les chiffres : si la somme est dans la table de 3, le nombre est divisible par 3.\nExemple similaire : 271 → 2 + 7 + 1 = 10 → non ; 273 → 12 → oui."
    }
  },
  rationnels: {
    videos: [
      { u: "https://www.youtube.com/watch?v=IbshJBzzNcs", t: "Nombres en écritures fractionnaires" },
      { u: "https://www.youtube.com/watch?v=XcsbENjMFZo", t: "Additions et soustractions de fractions (avec relatifs)" }
    ],
    resume: [
      { t: "Somme / différence", f: "2/3 + 1/6 = 4/6 + 1/6 = 5/6", d: "On met d'abord au même dénominateur, puis on additionne les numérateurs." },
      { t: "Produit", f: "3/4 × 2/5 = 6/20 = 3/10", d: "Numérateurs entre eux, dénominateurs entre eux, puis on simplifie." },
      { t: "Division et « de »", f: "a/b ÷ c/d = a/b × d/c\n3/5 de 60 = 3/5 × 60 = 36", d: "Diviser par une fraction = multiplier par son inverse. « Prendre les 3/5 de » = multiplier par 3/5." }
    ],
    qs: [
      "Astuce : mets au même dénominateur avant d'additionner.\nExemple similaire : 1/4 + 1/2 = 1/4 + 2/4 = 3/4.",
      "Astuce : multiplie numérateurs ensemble et dénominateurs ensemble, puis simplifie.\nExemple similaire : 1/2 × 2/5 = 2/10 = 1/5.",
      "Astuce : l'inverse de a/b est b/a (le produit vaut 1).\nExemple similaire : l'inverse de 2/7 est 7/2.",
      "Astuce : diviser par une fraction = multiplier par son inverse.\nExemple similaire : 1/2 ÷ 1/4 = 1/2 × 4 = 2.",
      "Astuce : dénominateur commun 12 ici.\nExemple similaire : 1/2 − 1/6 = 3/6 − 1/6 = 2/6 = 1/3.",
      "Astuce : « les 3/5 de » = multiplier par 3/5.\nExemple similaire : 2/5 de 1 000 = 400.",
      "Astuce : mets les trois fractions sur le même dénominateur.\nExemple similaire : 1/2 + 1/6 − 1/3 = 3/6 + 1/6 − 2/6 = 1/3.",
      "Astuce : multiplie en ligne, puis simplifie par le plus grand nombre possible.\nExemple similaire : 3/4 × 8/9 = 24/36 = 2/3.",
      "Astuce : produit d'abord (priorité), puis soustraction.\nExemple similaire : 1/2 − 1/3 × 1/2 = 1/2 − 1/6 = 1/3.",
      "Astuce : parenthèse d'abord, puis multiplie par l'inverse.\nExemple similaire : (1/2 + 1/6) ÷ 1/3 = 2/3 × 3 = 2.",
      "Astuce : calcule la parenthèse, puis divise (diviser par 1 = ne rien changer).\nExemple similaire : 1 ÷ (1/2 + 1/2) = 1 ÷ 1 = 1.",
      "Astuce : raisonne sur le RESTE à chaque étape.\nExemple similaire : dépense 1/2 → reste 1/2 ; puis 1/2 du reste = 1/4 → il reste 1/4."
    ],
    genH: {
      2: "Astuce : dénominateur commun = produit des deux, puis simplifie si possible.\nExemple similaire : 1/2 + 1/3 = 5/6.",
      3: "Astuce : numérateurs × numérateurs, dénominateurs × dénominateurs.\nExemple similaire : 2/3 × 3/4 = 6/12 = 1/2."
    }
  },
  translation4: {
    videos: [
      { u: "https://www.youtube.com/watch?v=O5h2AuM2FWw", t: "Translation sur papier blanc" },
      { u: "https://www.youtube.com/watch?v=YzG5ZP9Kp6k", t: "Image d'un point par une translation" }
    ],
    resume: [
      { t: "Définition", f: "M' : MM' = AB\net (MM') // (AB)", d: "L'image de M par la translation qui transforme A en B : on reporte depuis M la direction, le sens et la longueur de A vers B." },
      { t: "Ce qui est conservé", f: "longueurs · angles · aires\nalignement · parallélisme", d: "Une figure et son image sont identiques, juste déplacées : même périmètre, même aire." },
      { t: "Images usuelles", f: "segment → segment parallèle de même longueur\ncercle → cercle de même rayon", d: "Exemple : [MN] de 6 cm → image [M'N'] de 6 cm, parallèle à [MN]." }
    ],
    qs: [
      "Astuce : depuis M, reporte le déplacement qui va de A vers B (direction, sens, longueur).\nExemple similaire : A(0;0) → B(3;1) : M(1;2) → M'(4;3).",
      "Astuce : la translation glisse le segment sans le retourner ni l'allonger.\nExemple similaire : [MN] de 5 cm → image de 5 cm, parallèle.",
      "Astuce : une translation ne déforme rien.\nExemple similaire : un triangle de 12 cm² → son image a 12 cm².",
      "Astuce : direction, sens et longueur identiques pour tous = translation.\nExemple similaire : un ascenseur qui monte de 10 m translate tous ses points de 10 m vers le haut.",
      "Astuce : les longueurs sont conservées, donc le périmètre aussi.\nExemple similaire : rectangle 3 × 5 → image toujours 3 × 5, périmètre 16.",
      "Astuce : ajoute 3 à l'abscisse et enlève 2 à l'ordonnée.\nExemple similaire : translation de 2 à droite, 1 vers le haut : (1 ; 1) → (3 ; 2).",
      "Astuce : le rayon ne change pas, seul le centre est déplacé.\nExemple similaire : cercle r = 4 centré en O → image : cercle r = 4 centré en O'.",
      "Astuce : dans une translation, chaque point parcourt exactement la même distance, dans le même sens.\nExemple similaire : un train qui avance de 25 m : chaque voyageur avance de 25 m.",
      "Astuce : l'aire est conservée par translation.\nExemple similaire : disque d'aire 20 cm² → image d'aire 20 cm².",
      "Astuce : longueurs conservées : M'N' = MN.\nExemple similaire : MN = 8 cm → M'N' = 8 cm.",
      "Astuce : les angles sont conservés.\nExemple similaire : angle de 30° → image de 30°."
    ],
    genH: {
      2: "Astuce : une translation conserve longueurs, angles, aires et alignement.\nExemple similaire : l'image d'un segment de 5 cm par une translation est un segment de 5 cm.",
      3: "Astuce : l'abscisse de l'image = abscisse de départ + le déplacement horizontal.\nExemple similaire : A(2 ; 5), translation de 4 carreaux vers la droite → x' = 2 + 4 = 6."
    }
  },
  litteral4: {
    videos: [
      { u: "https://www.youtube.com/watch?v=fL88pLLYQ-I", t: "Comment développer et réduire une expression ? (Quatrième)" },
      { u: "https://www.youtube.com/watch?v=R6-mxyhgSmA", t: "Réduire une expression (Quatrième)" }
    ],
    resume: [
      { t: "Simple distributivité", f: "k × (a + b) = k × a + k × b", d: "3 × (x + 2) = 3x + 6\n2 × (x − 5) = 2x − 10" },
      { t: "Réduire une expression", f: "regrouper les termes en x", d: "7x + 3 − 2x = 5x + 3\n9x − 5 + 4x = 13x − 5" },
      { t: "Signes et parenthèses", f: "a − (b − c) = a − b + c", d: "soustraire une parenthèse change tous les signes à l'intérieur\n3(5x + 2) − 2(4x − 1) = 7x + 8" }
    ],
    qs: [
      "Astuce : distribue le 2 aux DEUX termes de la parenthèse.\nExemple similaire : 5(2x + 3) = 10x + 15.",
      "Astuce : le + devant la parenthèse ne change rien, puis réduis.\nExemple similaire : 7 + (2x − 3) = 2x + 4.",
      "Astuce : 3 × 4x = 12x et 3 × 5 = 15, puis réduis les x.\nExemple similaire : 2(5x + 3) − 4x = 10x + 6 − 4x = 6x + 6.",
      "Astuce : multiplie le nombre devant la parenthèse par chaque terme à l'intérieur.\nExemple similaire : 4(x + 3) = 4x + 12.",
      "Astuce : attention au signe « − » : chaque terme de la parenthèse garde son signe.\nExemple similaire : 2(5x − 2) = 10x − 4.",
      "Astuce : regroupe les termes en x ensemble, puis les nombres ensemble.\nExemple similaire : 6x + 5 + 2x = 8x + 5.",
      "Astuce : seuls les termes en x se regroupent entre eux.\nExemple similaire : 3x + 8 + x = 4x + 8.",
      "Astuce : développe d'abord, puis réduis.\nExemple similaire : 2(x + 5) + x = 3x + 10.",
      "Astuce : le résultat peut avoir un coefficient négatif ; soustrais les coefficients.\nExemple similaire : 5x + 9 − 7x = −2x + 9.",
      "Astuce : développe le produit, puis regroupe les x.\nExemple similaire : 3(2x + 1) − x = 5x + 3.",
      "Astuce : quand on soustrait une parenthèse, tous les signes à l'intérieur changent.\nExemple similaire : 4(2x + 1) − 3(x − 2) = 8x + 4 − 3x + 6 = 5x + 10.",
      "Astuce : cherche le plus grand facteur commun des deux termes.\nExemple similaire : 6x + 15 = 3(2x + 5)."
    ],
    genH: {
      1: "Astuce : multiplie le facteur par chaque terme de la parenthèse.\nExemple : 3(4x + 5) = 12x + 15.",
      2: "Astuce : regroupe les termes en x.\nExemple : 7x + 4 − 2x = 5x + 4."
    }
  },
  thales4: {
    videos: [
      { u: "https://www.youtube.com/watch?v=08UEfPADVWs", t: "Le théorème de Thalès" }
    ],
    resume: [
      { t: "Configuration", f: "M ∈ [AB], N ∈ [AC], (MN) // (BC)", d: "deux situations : triangle « emboîté » ou configuration en papillon" },
      { t: "Théorème", f: "AM/AB = AN/AC = MN/BC", d: "les trois rapports sont égaux dès que les droites sont parallèles" },
      { t: "Méthode", f: "produit en croix sur 3 nombres", d: "AM/AB = AN/AC → AM × AC = AB × AN\nex : AM = 2, AB = 6, AN = 3 → AC = 3 × 6 ÷ 2 = 9" }
    ],
    qs: [
      "Astuce : les rapports se font sur chaque côté en partant du point commun.\nExemple similaire : AM/AB = AN/AC = MN/BC.",
      "Astuce : écris AM/AB = AN/AC, remplace, puis produit en croix.\nExemple similaire : AM = 2, AB = 6, AN = 4 → AC = 6 × 4 ÷ 2 = 12.",
      "Astuce : produit en croix : le produit des extrêmes vaut le produit des moyens.\nExemple similaire : 4/5 = ?/20 → 5 × ? = 80 → ? = 16.",
      "Astuce : AM/AB = AN/AC → produit en croix.\nExemple similaire : AM = 4, AB = 10, AN = 2 → AC = 10 × 2 ÷ 4 = 5.",
      "Astuce : longueurs depuis M : MA/MB = MT/MC, puis TC = MC − MT.\nExemple similaire : MA = 4, AB = 4, MT = 5 → 4/8 = 5/MC → MC = 10 → TC = 5.",
      "Astuce : AM/AB = MN/BC quand on connaît MN et BC, puis produit en croix.\nExemple similaire : MN = 3, BC = 9, AM = 5 → AB = 5 × 9 ÷ 3 = 15.",
      "Astuce : AN/AC = MN/BC → AN = rapport × AC.\nExemple similaire : rapport 0,5, AC = 8 → AN = 4.",
      "Astuce : calcule d'abord AC avec l'égalité des rapports, puis NC = AC − AN.\nExemple similaire : AM/AB = 1/3 avec AN = 5 → AC = 15, NC = 10.",
      "Astuce : dans la configuration du papillon, on écrit les rapports vus depuis le point A.\nExemple similaire : BM/BA = 1/2 et MN = 5 → NC = 10.",
      "Astuce : poteau et tour sont proportionnels à leurs ombres (triangles semblables).\nExemple similaire : arbre 3 m pour une ombre de 4 m, ombre 12 m → hauteur = 3 × 12 ÷ 4 = 9 m.",
      "Astuce : MN/BC est égal aux autres rapports ; du produit en croix pour finir.\nExemple similaire : AM/AB = 2/3 et BC = 9 → MN = 6.",
      "Astuce : simplifie d'abord le rapport connu, puis multiplie.\nExemple similaire : AM = 2, AB = 10 → AM/AB = 1/5, AN = 3 → AC = 15."
    ],
    genH: {
      1: "Astuce : AM/AB = AN/AC, remplace par les valeurs, puis produit en croix.\nExemple similaire : AM = 2, AB = 6, AN = 4 → AC = 6 × 4 ÷ 2 = 12.",
      2: "Astuce : quand on connaît MN et BC, utilise AM/AB = MN/BC.\nExemple similaire : MN = 3, BC = 9, AM = 5 → AB = 5 × 9 ÷ 3 = 15."
    }
  },
  cosinus: {
    videos: [
      { u: "https://www.youtube.com/watch?v=YiY0thNvTrQ", t: "Trigonométrie : préparer les chapitres (4e et 3e)" }
    ],
    resume: [
      { t: "La formule", f: "cos(â) = adjacent ÷ hypoténuse", d: "Adjacent = côté de l'angle droit qui touche l'angle â (jamais l'hypoténuse). Mnémo : CAH dans SOH-CAH-TOA." },
      { t: "Chercher une longueur", f: "adjacent = hypoténuse × cos(â)", d: "On isole la longueur cherchée dans la formule, calculatrice en mode DEGRÉS." },
      { t: "Valeurs repères", f: "cos(60°) = 0,5\ncos(45°) ≈ 0,71\ncos(30°) ≈ 0,87", d: "Plus l'angle est PETIT, plus le cosinus est proche de 1 : cos ne dépasse jamais 1." }
    ],
    qs: [
      "Astuce : CAH — Cosinus = Adjacent ÷ Hypoténuse.\nExemple similaire : angle entre adjacent 3 et hypoténuse 5 → cos = 0,6.",
      "Astuce : repère l'hypoténuse (face à l'angle droit) et le côté adjacent de ∠B.\nExemple similaire : adjacent 6, hypoténuse 10 → cos = 0,6.",
      "Astuce : valeur exacte à retenir.\nExemple similaire : cos(45°) ≈ 0,71.",
      "Astuce : juste une division : 8 ÷ 10.\nExemple similaire : adjacent 3, hypoténuse 4 → 0,75.",
      "Astuce : l'hypoténuse est AC = 13 (opposé à l'angle droit en B).\nExemple similaire : rectangle en A, adjacent de ∠A = 8, hypoténuse 10 → 0,8.",
      "Astuce : cos(0°) = 1 et cos diminue quand l'angle grandit (jusqu'à 0 à 90°).\nExemple similaire : cos ≈ 0,5 → angle ≈ 60°.",
      "Astuce : multiplie l'hypoténuse par le cosinus de l'angle.\nExemple similaire : hypoténuse 10, angle 60° → 10 × 0,5 = 5.",
      "Astuce : tape cos de 45 sur la calculatrice (mode degrés).\nExemple similaire : cos(60°) = 0,5.",
      "Astuce : AB = 12 × cos(25°) : multiplie l'hypoténuse par le cos.\nExemple similaire : hypoténuse 10, angle 30° → 10 × 0,866 ≈ 8,7.",
      "Astuce : dans un triangle rectangle, l'adjacent est toujours plus court que l'hypoténuse.\nExemple similaire : adjacent 0,9 × hypoténuse → cos = 0,9.",
      "Astuce : repère à retenir : cos(30°) ≈ 0,87.\nExemple similaire : cos(30°) est plus grand que cos(60°) = 0,5.",
      "Astuce : retiens cos(60°) = 1/2 et sers-t'en « à l'envers ».\nExemple similaire : cos(â) = 0,87 → â ≈ 30°."
    ],
    genH: {
      2: "Astuce : cos(x) = côté adjacent ÷ hypoténuse ; la réponse est la fraction simplifiée.\nExemple similaire : adjacent 3, hypoténuse 4 → cos(x) = 3/4.",
      3: "Astuce : côté adjacent = hypoténuse × cos(x).\nExemple similaire : cos(x) = 3/5 et hypoténuse 15 → adjacent = 15 × 3/5 = 9."
    }
  },
  puissances: {
    videos: [
      { u: "https://www.youtube.com/watch?v=DFthuKo3byw", t: "Puissance d'exposant positif" },
      { u: "https://www.youtube.com/watch?v=6iYBMmT9Uio", t: "Puissances de 10" }
    ],
    resume: [
      { t: "Les règles de base", f: "aᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ ÷ aⁿ = aᵐ⁻ⁿ (m > n)\n(aᵐ)ⁿ = aᵐ×ⁿ", d: "Multiplier → on ADDITIONNE les exposants. Diviser → on SOUSTRAIT. Puissance de puissance → on MULTIPLIE." },
      { t: "Puissances de 10", f: "10ⁿ = 1 suivi de n zéros", d: "10⁵ = 100 000. Chaque zéro de plus correspond à un exposant de plus : 10² = 100 ; 10³ = 1 000 ; 10⁴ = 10 000." },
      { t: "Erreurs à éviter", f: "2⁴ ≠ 2 × 4\n2⁴ = 2 × 2 × 2 × 2 = 16", d: "Une puissance est une multiplication répétée. a⁰ = 1 pour tout a ≠ 0 ; (a × b)ⁿ = aⁿ × bⁿ, mais (a + b)ⁿ ≠ aⁿ + bⁿ." }
    ],
    qs: [
      "Astuce : 2⁴ signifie « 2 multiplié 4 fois par lui-même », pas 2 × 4.\nExemple similaire : 3⁴ = 3 × 3 × 3 × 3 = 81.",
      "Astuce : 10ⁿ = 1 suivi de n zéros. Compte les zéros.\nExemple similaire : 10⁴ = 10 000.",
      "Astuce : tout nombre non nul élevé à la puissance 0 vaut 1.\nExemple similaire : 12⁰ = 1.",
      "Astuce : même base au produit → on additionne les exposants.\nExemple similaire : 2² × 2³ = 2⁵ = 32.",
      "Astuce : même base au quotient → on soustrait les exposants.\nExemple similaire : 7⁵ ÷ 7² = 7³.",
      "Astuce : puissance IMPAIRE d'un négatif → négatif.\nExemple similaire : (−2)³ = −8.",
      "Astuce : même base au quotient → on soustrait les exposants (5 − 3 = 2), puis on écrit la décimale.\nExemple similaire : 10⁶ ÷ 10⁴ = 10² = 100.",
      "Astuce : puissance de puissance → on multiplie les exposants.\nExemple similaire : (3²)² = 3⁴ = 81.",
      "Astuce : enchaîne les règles : +2 puis −4 sur les exposants.\nExemple similaire : 5⁴ × 5² ÷ 5³ = 5³ = 125.",
      "Astuce : écriture scientifique = a × 10ⁿ avec 1 ≤ a < 10.\nExemple similaire : 7 800 = 7,8 × 10³.",
      "Astuce : enchaîne les règles : ÷ (soustraction) puis × (addition) sur les exposants.\nExemple similaire : 3⁴ ÷ 3² × 3 = 3³ = 27.",
      "Astuce : la puissance passe sur chaque FACTEUR d'un produit, jamais sur une somme.\nExemple similaire : (2 × 5)³ = 2³ × 5³ = 8 × 125 = 1000."
    ],
    genH: {
      1: "Astuce : a² = a × a. Décompose puis multiplie.\nExemple similaire : 6² = 6 × 6 = 36.",
      2: "Astuce : produit de puissances de 10 → additionne les exposants.\nExemple similaire : 10 × 10² = 10³ = 1 000."
    }
  },
  pythagorerecip4: {
    videos: [
      { u: "https://www.youtube.com/watch?v=hFXoZbO3KoI", t: "La réciproque du théorème de Pythagore (Quatrième)" },
      { u: "https://www.youtube.com/watch?v=uyfLil7gzak", t: "Exercice : appliquer l'égalité de Pythagore (Quatrième)" }
    ],
    resume: [
      { t: "Réciproque", f: "BC² = AB² + AC² ?", d: "si oui → le triangle est rectangle en A\nBC doit être le plus grand côté" },
      { t: "Méthode", f: "1) plus grand côté   2) deux carrés   3) comparer", d: "ex : 8, 15, 17 → 17² = 289 ; 8² + 15² = 289\négalité → rectangle" },
      { t: "Si ce n'est pas égal", f: "BC² ≠ AB² + AC²", d: "alors le triangle n'est pas rectangle\nex : 8² = 64 ≠ 5² + 6² = 61" }
    ],
    qs: [
      "Astuce : compare le carré du PLUS GRAND côté à la somme des deux autres.\nExemple similaire : 5 ; 12 ; 13 → 169 = 25 + 144 → rectangle.",
      "Astuce : test la réciproque : 8² = 64 contre 5² + 6² = 61.\nExemple similaire : 4 ; 5 ; 6 → 36 ≠ 41 → pas rectangle.",
      "Astuce : théorème → on SAIT rectangle et on calcule une longueur ; réciproque → on DÉMONTRE que le triangle est rectangle.\nExemple similaire : côtés 3, 4, 5 → 5² = 9 + 16 → rectangle.",
      "Astuce : dans la réciproque, on compare le carré du PLUS GRAND côté à la somme des carrés des deux autres.\nExemple similaire : côtés 6, 8, 10 → le plus grand est 10.",
      "Astuce : compare le carré du plus grand côté à la somme des carrés des deux autres.\nExemple similaire : 9, 40, 41 → 41² = 1681 = 81 + 1600.",
      "Astuce : si les carrés ne sont pas égaux, le triangle n'est pas rectangle.\nExemple similaire : 4, 5, 6 → 36 ≠ 16 + 25 = 41.",
      "Astuce : l'angle droit est en face du plus grand côté.\nExemple similaire : AB = 9, BC = 12, AC = 15 → 15² = 225 = 81 + 144, rectangle en B.",
      "Astuce : calcule chaque carré séparément, compare, conclue.\nExemple similaire : 20, 21, 29 → 841 = 400 + 441.",
      "Astuce : écris l'égalité avec le plus grand côté, puis compare les deux nombres.\nExemple similaire : côtés 2, 3, 4 → 16 ≠ 4 + 9.",
      "Astuce : pas d'égalité des carrés → pas d'angle droit.\nExemple similaire : BC² = 25 et AB² + AC² = 29 → pas rectangle.",
      "Astuce : c'est l'application historique de la réciproque (la corde à 13 nœuds).\nExemple similaire : 1,5 m ; 2 m ; 2,5 m → 6,25 = 2,25 + 4.",
      "Astuce : repère d'abord le plus grand côté, puis compare les carrés.\nExemple similaire : 6, 8, 10 → rectangle en face de 10."
    ],
    genH: {
      2: "Astuce : calcule le carré du plus grand côté et la somme des carrés des deux autres ; s'ils sont égaux, le triangle est rectangle.\nExemple : 3, 4, 5 → 25 = 9 + 16 → oui.",
      4: "Astuce : si les deux nombres trouvés sont différents, le triangle n'est pas rectangle.\nExemple : 4, 5, 6 → 36 ≠ 16 + 25 = 41 → non."
    }
  },
  equations4: {
    videos: [
      { u: "https://www.youtube.com/watch?v=6gy3DH19Ifk", t: "Équation x + a = b" },
      { u: "https://www.youtube.com/watch?v=9Y4mCFQ4F-8", t: "Équation ax + b = cx + d" }
    ],
    resume: [
      { t: "Équation somme", f: "x + a = b  →  x = b − a", d: "ex : x + 7 = 12 → x = 5\nx − 5 = −2 → x = 3" },
      { t: "Équation produit", f: "a × x = b  →  x = b ÷ a", d: "ex : 3x = 21 → x = 7\n−4x = 20 → x = −5" },
      { t: "x des deux côtés", f: "ax + b = cx + d", d: "regroupe : (a − c)x = d − b\nex : 5x − 7 = 2x + 8 → 3x = 15 → x = 5" }
    ],
    qs: [
      "Astuce : enlève 7 des deux côtés pour isoler x.\nExemple similaire : x + 3 = 10 → x = 7.",
      "Astuce : divise les deux côtés par 3.\nExemple similaire : 4x = 20 → x = 5.",
      "Astuce : ajoute 5 des deux côtés.\nExemple similaire : x − 7 = −3 → x = 4.",
      "Astuce : divise des deux côtés par −4 (attention au signe !).\nExemple similaire : −2x = 10 → x = −5.",
      "Astuce : enlève d'abord 3, puis divise par 2.\nExemple similaire : 3x + 1 = 10 → 3x = 9 → x = 3.",
      "Astuce : regroupe les x à gauche (−2x) et les nombres à droite (+7).\nExemple similaire : 4x − 1 = x + 8 → 3x = 9 → x = 3.",
      "Astuce : développe d'abord, puis isole x.\nExemple similaire : 2(x − 1) = x + 3 → 2x − 2 = x + 3 → x = 5.",
      "Astuce : pose x la largeur ; P = 2 × (largeur + longueur) = 2 × (x + x + 3).\nExemple similaire : 4x + 6 = 24 → x = 4,5.",
      "Astuce : regroupe les x d'un côté et les nombres de l'autre.\nExemple similaire : 5x + 2 = 2x + 14 → 3x = 12 → x = 4.",
      "Astuce : rassemble les x d'un côté, les nombres de l'autre, puis divise.\nExemple similaire : 5x − 2 = 3x + 8 → 2x = 10 → x = 5.",
      "Astuce : développe d'abord, puis rassemble les x.\nExemple similaire : 3(x + 2) = 4x → 3x + 6 = 4x → x = 6.",
      "Astuce : traduis la phrase en équation avec x, puis résous.\nExemple similaire : le double d'un nombre plus 3 vaut 15 → 2x + 3 = 15 → x = 6."
    ],
    genH: {
      1: "Astuce : enlève le nombre des deux côtés pour isoler x.\nExemple similaire : x + 4 = 9 → x = 5.",
      3: "Astuce : enlève d'abord le nombre, puis divise par le coefficient.\nExemple similaire : 3x + 2 = 11 → 3x = 9 → x = 3."
    }
  },
  stats4: {
    videos: [
      { u: "https://www.youtube.com/watch?v=DtJAwfouGfY", t: "Le cours : statistiques (4e)" },
      { u: "https://www.youtube.com/watch?v=tf9fFDacKAQ", t: "Trouver une médiane dans une liste de valeurs" }
    ],
    resume: [
      { t: "Moyenne pondérée", f: "(10×1 + 14×2) ÷ (1+2) ≈ 12,67", d: "somme (valeur × coefficient) ÷ somme des coefficients" },
      { t: "Médiane", f: "valeur du milieu (série ordonnée)", d: "effectif pair → moyenne des deux centrales\n2 ; 5 ; 7 ; 10 ; 18 ; 20 → (7+10) ÷ 2 = 8,5" },
      { t: "Étendue", f: "max − min", d: "série 3 ; 7 ; 12 ; 15 → 15 − 3 = 12" }
    ],
    qs: [
      "Astuce : multiplie chaque note par son coefficient, divise par la somme des coefficients.\nExemple similaire : 12 (coef 2) et 15 (coef 1) → 39 ÷ 3 = 13.",
      "Astuce : (8 × 2 + 12 × 3) ÷ (2 + 3).\nExemple similaire : 10 (coef 2), 13 (coef 3) → 59 ÷ 5 = 11,8.",
      "Astuce : moyenne = somme des valeurs ÷ nombre de valeurs.\nExemple similaire : (4 + 8 + 12) ÷ 3 = 8.",
      "Astuce : l'étendue se limite à la plus grande valeur moins la plus petite.\nExemple similaire : série 2 ; 5 ; 9 → étendue = 7.",
      "Astuce : additionne tout, divise par l'effectif total.\nExemple similaire : (8 + 8 + 12 + 20) ÷ 4 = 12.",
      "Astuce : classe les valeurs, puis prends celle du milieu.\nExemple similaire : 2 ; 4 ; 9 ; 10 ; 14 → médiane = 9.",
      "Astuce : moyenne pondérée = somme (note × coef) ÷ somme des coefficients.\nExemple similaire : 8 (coef 2) et 12 (coef 2) → (16 + 24) ÷ 4 = 10.",
      "Astuce : quand on connaît le total, divise directement par l'effectif.\nExemple similaire : total 42 pour 4 notes → 10,5.",
      "Astuce : si l'effectif est pair, la médiane est la MOYENNE des deux valeurs centrales.\nExemple similaire : 1 ; 3 ; 6 ; 8 → médiane = 4,5.",
      "Astuce : moyenne visée × effectif total = total voulu, puis compare avec le total actuel.\nExemple similaire : 6, 10, 14 → total 30 ; pour 10 de moyenne, il faut 40 au total → 10 au 4e devoir.",
      "Astuce : (15 × 3 + 10 × 2) ÷ 5.\nExemple similaire : 20 (coef 2), 10 (coef 3) → 70 ÷ 5 = 14.",
      "Astuce : multiplie chaque valeur par son effectif, puis divise par l'effectif total.\nExemple similaire : 8 (3 fois), 12 (2 fois) → (24 + 24) ÷ 5 = 9,6.",
      "Astuce : liste d'abord les nombres premiers de 1 à 10 : 2, 3, 5, 7. Attention : 1 n'est pas premier !\nExemple similaire : nombre pair → 5/10 = 0,5."
    ],
    genH: {
      1: "Astuce : moyenne = somme des valeurs ÷ nombre de valeurs.\nExemple similaire : (8 + 10 + 12 + 14 + 16) ÷ 5 = 60 ÷ 5 = 12.",
      2: "Astuce : moyenne pondérée = (somme des valeur × effectif) ÷ effectif total.\nExemple similaire : 12 (2 fois) et 9 (3 fois) : (24 + 27) ÷ 5 = 51 ÷ 5 = 10,2.",
      3: "Astuce : classe les valeurs ; avec 7 valeurs, la médiane est la 4ᵉ.\nExemple similaire : 1 ; 3 ; 5 ; 7 ; 9 ; 11 ; 13 → médiane 7."
    }
  },
  thalesrecip4: {
    videos: [
      { u: "https://www.youtube.com/watch?v=45w1Kna9Mog", t: "La réciproque du théorème de Thalès (Quatrième)" },
      { u: "https://www.youtube.com/watch?v=uaPicwUSQz0", t: "Appliquer la réciproque du théorème de Thalès" }
    ],
    resume: [
      { t: "Réciproque", f: "AM/AB = AN/AC → (MN) // (BC)", d: "points alignés dans le même ordre\nc'est la configuration de Thalès" },
      { t: "Méthode", f: "1) deux rapports   2) simplifier   3) comparer", d: "ex : AM = 3, AB = 9 → 1/3 ; AN = 2, AC = 6 → 1/3\négaux → parallèles" },
      { t: "Si les rapports sont différents", f: "AM/AB ≠ AN/AC", d: "alors (MN) n'est PAS parallèle à (BC)\nex : 0,42 ≠ 0,50" }
    ],
    qs: [
      "Astuce : la réciproque est le chemin inverse du théorème : égalité des rapports → droites parallèles.\nExemple similaire : AM/AB = AN/AC = 1/2 → (MN) // (BC).",
      "Astuce : théorème → parallèles connues, on calcule ; réciproque → rapports égaux, on prouve le parallélisme.\nExemple similaire : AM/AB = AN/AC = 0,4 → (MN) // (BC).",
      "Astuce : calcule et simplifie d'abord chaque rapport, puis compare.\nExemple similaire : AM/AB = 2/5 et AN/AC = 4/10 = 2/5 → parallèles.",
      "Astuce : simplifie chaque fraction avant de comparer.\nExemple similaire : AM = 2, AB = 6, AN = 1, AC = 3 → 1/3 = 1/3 → oui.",
      "Astuce : calcule les deux rapports ; s'ils sont égaux, conclue avec la réciproque.\nExemple similaire : AM = 3, AB = 12, AN = 2, AC = 8 → 1/4 = 1/4 → parallèles.",
      "Astuce : si les rapports sont différents, (MN) et (BC) ne sont pas parallèles.\nExemple similaire : AM = 2, AB = 5, AN = 3, AC = 9 → 0,4 ≠ 0,33 → non.",
      "Astuce : divise dans le même ordre des deux côtés (petit/grand), puis compare.\nExemple similaire : AM = 1,8 ; AB = 4,5 → 0,4 ; AN = 2 ; AC = 5 → 0,4 → parallèles.",
      "Astuce : la contraposée dit : rapports inégaux → droites non parallèles.\nExemple similaire : AM/AB = 0,3 et AN/AC = 0,5 → (MN) n'est pas parallèle à (BC).",
      "Astuce : convertis chaque rapport en nombre décimal pour comparer.\nExemple similaire : AM/AB = 0,25 et AN/AC = 1/4 → 0,25 → oui.",
      "Astuce : écris la phrase complète : rapports égaux + bonne configuration → droites parallèles.\nExemple similaire : AM = 5, AB = 10 → 0,5 ; AN = 3, AC = 6 → 0,5 → parallèles.",
      "Astuce : les rapports partent toujours du sommet commun (ici P).\nExemple similaire : PT = 2, PR = 8, PU = 3, PS = 12 → 1/4 = 1/4 → parallèles.",
      "Astuce : calcule les deux rapports exactement, sans les confondre.\nExemple similaire : AM/AB = 3/6 = 0,5 et AN/AC = 4/8 = 0,5 → oui."
    ],
    genH: {
      2: "Astuce : calcule et simplifie AM/AB puis AN/AC ; si les deux sont égaux, les droites sont parallèles.\nExemple : 3/9 = 1/3 et 2/6 = 1/3 → oui.",
      4: "Astuce : si les deux rapports sont différents, (MN) n'est pas parallèle à (BC).\nExemple : 4/10 = 0,4 et 3/10 = 0,3 → non."
    }
  },
  proba4: {
    videos: [
      { u: "https://www.youtube.com/watch?v=ithQHSY9Z-E", t: "Comprendre la notion de probabilité (Quatrième)" },
      { u: "https://www.youtube.com/watch?v=242ah8YiUZ4", t: "Comprendre les notions de probabilités (Quatrième)" }
    ],
    resume: [
      { t: "Probabilité", f: "p = cas favorables ÷ cas possibles", d: "résultat entre 0 (impossible) et 1 (certain)" },
      { t: "Fractions ou décimales", f: "3/6 = 0,5 = 50 %", d: "plusieurs écritures possibles du même nombre" },
      { t: "Deux épreuves", f: "arbre : 2 × 2 issues", d: "ex : pile/face 2 fois → PP, PF, FP, FF\np(2 piles) = 1/4" }
    ],
    qs: [
      "Astuce : compte les cas FAVORABLES (2, 4, 6) et divise par 6.\nExemple similaire : nombre > 4 → 2/6 = 1/3.",
      "Astuce : 26 cartes rouges sur 52 → simplifie la fraction.\nExemple similaire : une carte de cœur → 13/52 = 1/4.",
      "Astuce : cas favorables 1 et 2, sur 6 possibles.\nExemple similaire : nombre pair → 3/6 = 1/2.",
      "Astuce : 4 bleues sur 10 billes, fraction ou décimale.\nExemple similaire : une rouge → 6/10 = 0,6.",
      "Astuce : multiples de 3 sur un dé : 3 et 6.\nExemple similaire : nombre premier (2, 3, 5) → 3/6 = 1/2.",
      "Astuce : liste d'abord les nombres premiers de 1 à 10 : 2, 3, 5, 7. Attention : 1 n'est pas premier !\nExemple similaire : nombre pair → 5/10 = 0,5.",
      "Astuce : dénombre les issues (PP, PF, FP, FF) avant de diviser.\nExemple similaire : au moins une face → 3/4.",
      "Astuce : divise le nombre de garçons par l'effectif total, et arrondis.\nExemple similaire : 20 élèves dont 8 filles → 12/28... non : 8/20 = 0,4.",
      "Astuce : p = cas favorables ÷ cas possibles (tout équiprobable).\nExemple similaire : 4 bleues et 1 rouge → p(rouge) = 1/5.",
      "Astuce : liste d'abord les cas favorables, puis divise par le nombre total de cas.\nExemple similaire : multiple de 2 sur 10 faces → 5/10 = 0,5.",
      "Astuce : calcule l'effectif total du sac, puis cas favorables ÷ total.\nExemple similaire : 6 rouges, 4 vertes → p(rouge) = 6/10 = 3/5.",
      "Astuce : utilise l'arbre des issues, puis compte les issues favorables.\nExemple similaire : au moins un pile en 2 lancers → aussi 3/4."
    ],
    genH: {
      2: "Astuce : p = (billes noires) ÷ (total des billes), puis simplifie la fraction.\nExemple : 4 noires et 8 au total → 4/8 = 1/2.",
      4: "Astuce : cas favorables ÷ cas possibles, puis × 100 pour un pourcentage.\nExemple : 3 cas sur 8 → 3/8 = 0,375 → 37,5 %."
    }
  },
  grandeurs4: {
    videos: [
      { u: "https://www.youtube.com/watch?v=5LaL_SJVLoI", t: "Convertir des unités de grandeurs quotients (Quatrième)" },
      { u: "https://www.youtube.com/watch?v=3dYAbDm3jNI", t: "Résoudre un problème de débit (grandeur quotient)" }
    ],
    resume: [
      { t: "La vitesse moyenne", f: "v = d ÷ t", d: "d = v × t   t = d ÷ v\nex : 120 km en 1 h 30 → 120 ÷ 1,5 = 80 km/h" },
      { t: "Conversions de vitesses", f: "km/h → m/s : ÷ 3,6", d: "m/s → km/h : × 3,6\nex : 90 km/h = 25 m/s ; 5 m/s = 18 km/h" },
      { t: "Le débit", f: "Q = V ÷ t", d: "V = Q × t   t = V ÷ Q\nex : 2,5 L en 5 min → 0,5 L/min" }
    ],
    qs: [
      "Astuce : divise par 3,6 pour passer des km/h aux m/s.\nExemple similaire : 36 km/h = 10 m/s.",
      "Astuce : convertis d'abord 1 h 30 en 1,5 h, puis v = d ÷ t.\nExemple similaire : 90 km en 1,5 h → 60 km/h.",
      "Astuce : t = d ÷ v ; 0,5 h = 30 min.\nExemple similaire : 120 km à 60 km/h → 2 h.",
      "Astuce : met le temps en heures (12 min = 0,2 h) avant de diviser.\nExemple similaire : 6 min = 0,1 h.",
      "Astuce : met le temps en heures (1 h 15 = 1,25 h), puis divise.\nExemple similaire : 100 km en 1 h 15 → 80 km/h.",
      "Astuce : convertis tout d'abord dans la même unité (minutes ou heures).\nExemple similaire : 2 h 30 min = 150 min.",
      "Astuce : m/s → km/h : ×3,6 ; km/h → m/s : ÷3,6.\nExemple similaire : 10 m/s = 36 km/h.",
      "Astuce : même unité de temps partout avant d'utiliser V = Q × t.\nExemple similaire : 0,5 L/s pendant 40 s → 20 L.",
      "Astuce : débit = volume ÷ temps (unités cohérentes).\nExemple similaire : 6 L en 4 min → 1,5 L/min.",
      "Astuce : convertis le temps en heures avant de diviser le volume.\nExemple similaire : 20 m³ en 30 min = 0,5 h → 40 m³/h.",
      "Astuce : pour passer de « par minute » à « par heure », multiplie par 60.\nExemple similaire : 5 L/min = 300 L/h."
    ],
    genH: {
      1: "Astuce : distance = vitesse × temps.\nExemple similaire : à 80 km/h pendant 3 h : 240 km.",
      3: "Astuce : convertis les minutes en heures (30 min = 0,5 h) puis v = d ÷ t.\nExemple similaire : 40 km en 30 min → 40 ÷ 0,5 = 80 km/h."
    }
  }
};
