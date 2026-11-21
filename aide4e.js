/* ================= BaouMaths — résumés visuels et aides par question (4e)
   resume : cartes { t: titre, f: formule mise en valeur, d: détail }
   qs     : aide par index de question (« Astuce…\nExemple : … »)
   genH   : aide appliquée aux questions générées, par difficulté 1-4 */
window.AIDE_4E = {
  propo4: {
    resume: [
      { t: "Vitesses", f: "v = d ÷ t\nd = v × t\nt = d ÷ v", d: "Attention aux unités : 1 h 30 = 1,5 h ; km/h ÷ 3,6 ≈ m/s." },
      { t: "Pourcentages", f: "+ t % → multiplier par (1 + t/100)\n− t % → multiplier par (1 − t/100)", d: "Augmenter de 20 % = ×1,2 ; diminuer de 25 % = ×0,75. Deux variations successives se multiplient." },
      { t: "Échelles", f: "1/2 000 000 : 1 cm → 20 km", d: "Multiplie la longueur mesurée par le dénominateur, puis convertis (2 000 000 cm = 20 km)." }
    ],
    qs: [
      "Astuce : d = v × t.\nExemple similaire : 80 km/h pendant 3 h → 240 km.",
      "Astuce : divise par 3,6 pour passer des km/h aux m/s.\nExemple similaire : 36 km/h = 10 m/s.",
      "Astuce : + 10 % = multiplier par 1 + 10/100.\nExemple similaire : + 25 % = ×1,25.",
      "Astuce : convertis d'abord 1 h 30 en 1,5 h, puis v = d ÷ t.\nExemple similaire : 90 km en 1,5 h → 60 km/h.",
      "Astuce : t = d ÷ v ; 0,5 h = 30 min.\nExemple similaire : 120 km à 60 km/h → 2 h.",
      "Astuce : − 25 % = multiplier par 0,75.\nExemple similaire : 80 € à − 25 % → 60 €.",
      "Astuce : met le temps en heures (12 min = 0,2 h) avant de diviser.\nExemple similaire : 6 min = 0,1 h.",
      "Astuce : 3,5 cm × 2 000 000 = 7 000 000 cm, puis convertis en km.\nExemple similaire : 1 cm à l'échelle 1/2 000 000 → 20 km.",
      "Astuce : TTC = HT × 1,2 (TVA 20 %).\nExemple similaire : 50 € HT → 60 € TTC.",
      "Astuce : multiplie les deux coefficients : 1,2 × 0,8 = 0,96.\nExemple similaire : + 50 % puis − 50 % → ×1,5 × 0,5 = 0,75.",
      "Astuce : met le temps en heures (1 h 15 = 1,25 h), puis divise.\nExemple similaire : 100 km en 1 h 15 → 80 km/h.",
      "Astuce : applique les pourcentages dans l'ordre, le deuxième porte sur le RESTE.\nExemple similaire : 100 € ; + 10 % → 110 € ; − 10 % de 110 → 99 €."
    ]
  },
  pythagore: {
    resume: [
      { t: "Théorème (hypoténuse)", f: "BC² = AB² + AC²", d: "Si le triangle est rectangle en A, l'hypoténuse est [BC] : le côté opposé à l'angle droit, le plus long." },
      { t: "Chercher un côté de l'angle droit", f: "AB² = BC² − AC²", d: "Quand on connaît l'hypoténuse, on SOUSTRAIT (jamais additionner). Puis on prend la racine carrée." },
      { t: "Réciproque", f: "BC² = AB² + AC² ?\n→ oui : rectangle en A", d: "Pour montrer qu'un triangle EST rectangle : on calcule séparément le carré du plus grand côté et la somme des deux autres carrés, puis on compare." }
    ],
    qs: [
      "Astuce : 3² + 4² = 25 → hypoténuse = √25.\nExemple similaire : 6 et 8 → √100 = 10.",
      "Astuce : l'hypoténuse est le côté OPPOSÉ à l'angle droit : toujours le plus long.\nExemple similaire : dans un triangle rectangle de côtés 5, 12, 13, l'hypoténuse est 13.",
      "Astuce : un carré, c'est le nombre multiplié par lui-même.\nExemple similaire : 7² = 49.",
      "Astuce : BC² = 6² + 8² = 100 → BC = √100.\nExemple similaire : 3 et 4 → BC = 5.",
      "Astuce : on connaît l'hypoténuse → on soustrait : 13² − 5².\nExemple similaire : hypoténuse 10, côté 6 → √64 = 8.",
      "Astuce : compare le carré du PLUS GRAND côté à la somme des deux autres.\nExemple similaire : 5 ; 12 ; 13 → 169 = 25 + 144 → rectangle.",
      "Astuce : 10² − 6² = 64 → racine carrée de 64.\nExemple similaire : hypoténuse 5, côté 3 → 4.",
      "Astuce : le mât est l'hypoténuse : 5² = 3² + h².\nExemple similaire : échelle 10 m à 6 m → h = 8 m.",
      "Astuce : test la réciproque : 8² = 64 contre 5² + 6² = 61.\nExemple similaire : 4 ; 5 ; 6 → 36 ≠ 41 → pas rectangle.",
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
      "Astuce : plan parallèle à la base d'une pyramide : réduction de la base.\nExemple similaire : coupée à mi-hauteur : section = base à l'échelle 1/2.",
    ]
  },
  arithmetique4: {
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
    genH: {}
  },
  litteral4: {
    resume: [
      { t: "Double distributivité", f: "(a + b)(c + d) = ac + ad + bc + bd\n(x + 2)(x + 3) = x² + 5x + 6", d: "Chaque terme de la 1re parenthèse multiplie chaque terme de la 2e (4 produits, attention aux signes)." },
      { t: "Résoudre une équation", f: "x + a = b → x = b − a\nax = b → x = b ÷ a", d: "On applique la MÊME opération des deux côtés pour isoler x (égalité conservée)." },
      { t: "Valeur de l'inconnue", f: "2x + 3 = 11 → 2x = 8 → x = 4", d: "D'abord on « déplace » les nombres, ensuite on divise. Toujours vérifier en remplaçant x dans l'équation de départ." }
    ],
    qs: [
      "Astuce : distribue le 2 aux DEUX termes de la parenthèse.\nExemple similaire : 5(2x + 3) = 10x + 15.",
      "Astuce : enlève 7 des deux côtés pour isoler x.\nExemple similaire : x + 3 = 10 → x = 7.",
      "Astuce : divise les deux côtés par 3.\nExemple similaire : 4x = 20 → x = 5.",
      "Astuce : ajoute 5 des deux côtés.\nExemple similaire : x − 7 = −3 → x = 4.",
      "Astuce : 4 produits : x², 3x, 2x, 6, puis réduire.\nExemple similaire : (x + 1)(x + 2) = x² + 3x + 2.",
      "Astuce : divise des deux côtés par −4 (attention au signe !).\nExemple similaire : −2x = 10 → x = −5.",
      "Astuce : enlève d'abord 3, puis divise par 2.\nExemple similaire : 3x + 1 = 10 → 3x = 9 → x = 3.",
      "Astuce : 4 produits : 2x², 8x, −x, −4, puis réduire.\nExemple similaire : (2x + 1)(x + 2) = 2x² + 5x + 2.",
      "Astuce : regroupe les x à gauche (−2x) et les nombres à droite (+7).\nExemple similaire : 4x − 1 = x + 8 → 3x = 9 → x = 3.",
      "Astuce : développe d'abord, puis isole x.\nExemple similaire : 2(x − 1) = x + 3 → 2x − 2 = x + 3 → x = 5.",
      "Astuce : pose x la largeur ; P = 2 × (largeur + longueur) = 2 × (x + x + 3).\nExemple similaire : 4x + 6 = 24 → x = 4,5.",
      "Astuce : produit nul → chaque facteur peut valoir 0, un par un.\nExemple similaire : (x − 2)(x + 7) = 0 → x = 2 ou x = −7."
    ],
    genH: {
      1: "Astuce : enlève le nombre des deux côtés pour isoler x.\nExemple similaire : x + 4 = 9 → x = 5.",
      3: "Astuce : enlève d'abord le nombre, puis divise par le coefficient.\nExemple similaire : 3x + 2 = 11 → 3x = 9 → x = 3."
    }
  },
  thales4: {
    resume: [
      { t: "Configuration", f: "M ∈ [AB], N ∈ [AC]\n(MN) // (BC)", d: "Idem en « papillon » : M entre A et B de l'autre côté, les rapports se font toujours à partir du point commun A... ou M." },
      { t: "Théorème", f: "AM/AB = AN/AC = MN/BC", d: "On écrit les rapports sur chaque côté en partant du point commun, puis on calcule par produit en croix." },
      { t: "Triangles égaux", f: "3 cas d'égalité", d: "1) trois côtés égaux deux à deux ; 2) un angle égal compris entre deux côtés égaux ; 3) deux angles égaux et le côté compris égal." }
    ],
    qs: [
      "Astuce : les rapports se font sur chaque côté en partant du point commun.\nExemple similaire : AM/AB = AN/AC = MN/BC.",
      "Astuce : égaux = superposables : mêmes longueurs, mêmes angles.\nExemple similaire : triangle 3-4-5 et triangle 3-4-5 sont égaux.",
      "Astuce : écris AM/AB = AN/AC, remplace, puis produit en croix.\nExemple similaire : AM = 2, AB = 6, AN = 4 → AC = 6 × 4 ÷ 2 = 12.",
      "Astuce : produit en croix : le produit des extrêmes vaut le produit des moyens.\nExemple similaire : 4/5 = ?/20 → 5 × ? = 80 → ? = 16.",
      "Astuce : mêmes angles, longueurs multipliées par un même nombre : semblables.\nExemple similaire : AMN côtés 2-3-4 → ABC côtés 4-6-8 (×2).",
      "Astuce : AM/AB = AN/AC → produit en croix.\nExemple similaire : AM = 4, AB = 10, AN = 2 → AC = 10 × 2 ÷ 4 = 5.",
      "Astuce : longueurs depuis M : MA/MB = MT/MC, puis TC = MC − MT.\nExemple similaire : MA = 4, AB = 4, MT = 5 → 4/8 = 5/MC → MC = 10 → TC = 5.",
      "Astuce : le 2e cas : un angle égal compris entre deux côtés égaux deux à deux suffit.\nExemple similaire : AB = DE = 5, AC = DF = 7 et angle A = angle D → triangles égaux.",
      "Astuce : AM/AB = MN/BC quand on connaît MN et BC, puis produit en croix.\nExemple similaire : MN = 3, BC = 9, AM = 5 → AB = 5 × 9 ÷ 3 = 15.",
      "Astuce :longueurs multipliées par k → aires multipliées par k², pas k.\nExemple similaire : rapport 3 → aires ×9.",
      "Astuce : des triangles égaux ont le même périmètre.\nExemple similaire : triangle 6-8-10 → périmètre 24 pour les deux.",
      "Astuce : AN/AC = MN/BC → AN = rapport × AC.\nExemple similaire : rapport 0,5, AC = 8 → AN = 4."
    ],
    genH: {
      1: "Astuce : AM/AB = AN/AC, remplace par les valeurs, puis produit en croix.\nExemple similaire : AM = 2, AB = 6, AN = 4 → AC = 6 × 4 ÷ 2 = 12.",
      2: "Astuce : quand on connaît MN et BC, utilise AM/AB = MN/BC.\nExemple similaire : MN = 3, BC = 9, AM = 5 → AB = 5 × 9 ÷ 3 = 15."
    }
  },
  cosinus: {
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
    ]
  },
  puissances: {
    resume: [
      { t: "Les règles de base", f: "aᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ ÷ aⁿ = aᵐ⁻ⁿ\n(aᵐ)ⁿ = aᵐ×ⁿ", d: "Multiplier → on ADDITIONNE les exposants. Diviser → on SOUSTRAIT. Puissance de puissance → on MULTIPLIE." },
      { t: "Puissances de 10", f: "10ⁿ = 1 suivi de n zéros\n10⁻ⁿ = 1/10ⁿ", d: "10⁵ = 100 000 et 10⁻³ = 0,001. Exposant positif → grand nombre ; négatif → petit nombre." },
      { t: "Erreurs à éviter", f: "2⁴ ≠ 2 × 4\n2⁴ = 2 × 2 × 2 × 2 = 16", d: "Une puissance est une multiplication répétée. a⁰ = 1 pour tout a ≠ 0 ; (a × b)ⁿ = aⁿ × bⁿ, mais (a + b)ⁿ ≠ aⁿ + bⁿ." }
    ],
    qs: [
      "Astuce : 2⁴ signifie « 2 multiplié 4 fois par lui-même », pas 2 × 4.\nExemple similaire : 3⁴ = 3 × 3 × 3 × 3 = 81.",
      "Astuce : 10ⁿ = 1 suivi de n zéros. Compte les zéros.\nExemple similaire : 10⁴ = 10 000.",
      "Astuce : tout nombre non nul élevé à la puissance 0 vaut 1.\nExemple similaire : 12⁰ = 1.",
      "Astuce : même base au produit → on additionne les exposants.\nExemple similaire : 2² × 2³ = 2⁵ = 32.",
      "Astuce : même base au quotient → on soustrait les exposants.\nExemple similaire : 7⁵ ÷ 7² = 7³.",
      "Astuce : puissance IMPAIRE d'un négatif → négatif.\nExemple similaire : (−2)³ = −8.",
      "Astuce : exposant négatif = inverse : 10⁻³ = 1/1000.\nExemple similaire : 10⁻² = 0,01.",
      "Astuce : puissance de puissance → on multiplie les exposants.\nExemple similaire : (3²)² = 3⁴ = 81.",
      "Astuce : enchaîne les règles : +2 puis −4 sur les exposants.\nExemple similaire : 5⁴ × 5² ÷ 5³ = 5³ = 125.",
      "Astuce : écriture scientifique = a × 10ⁿ avec 1 ≤ a < 10.\nExemple similaire : 7 800 = 7,8 × 10³.",
      "Astuce : additionne les exposants, y compris le −1 du « ÷ 2 ».\nExemple similaire : 3⁻¹ × 3² ÷ 3 = 3⁰ = 1.",
      "Astuce : la puissance passe sur chaque FACTEUR d'un produit, jamais sur une somme.\nExemple similaire : (2 × 5)³ = 2³ × 5³ = 8 × 125 = 1000."
    ],
    genH: {
      1: "Astuce : a² = a × a. Décompose puis multiplie.\nExemple similaire : 6² = 6 × 6 = 36.",
      2: "Astuce : produit de puissances de 10 → additionne les exposants.\nExemple similaire : 10 × 10² = 10³ = 1 000."
    }
  },
  stats4: {
    resume: [
      { t: "Moyenne pondérée", f: "(10×1 + 14×2) ÷ (1+2) ≈ 12,67", d: "On multiplie chaque valeur par son coefficient (ou effectif), on divise par la somme des coefficients." },
      { t: "Probabilité", f: "p = (cas favorables) ÷ (cas possibles)", d: "Valable pour des issues équiprobables. La proba se donne en fraction, décimale ou pourcentage." },
      { t: "Encadrement", f: "0 ≤ p ≤ 1", d: "p = 0 : impossible ; p = 1 : certain ; p = 1/2 : autant de chances. La somme des probabilités de toutes les issues vaut 1." }
    ],
    qs: [
      "Astuce : compte les cas FAVORABLES (2, 4, 6) et divise par 6.\nExemple similaire : nombre > 4 → 2/6 = 1/3.",
      "Astuce : 26 cartes rouges sur 52 → simplifie la fraction.\nExemple similaire : une carte de cœur → 13/52 = 1/4.",
      "Astuce : multiplie chaque note par son coefficient, divise par la somme des coefficients.\nExemple similaire : 12 (coef 2) et 15 (coef 1) → 39 ÷ 3 = 13.",
      "Astuce : cas favorables 1 et 2, sur 6 possibles.\nExemple similaire : nombre pair → 3/6 = 1/2.",
      "Astuce : (8 × 2 + 12 × 3) ÷ (2 + 3).\nExemple similaire : 10 (coef 2), 13 (coef 3) → 59 ÷ 5 = 11,8.",
      "Astuce : 4 bleues sur 10 billes, fraction ou décimale.\nExemple similaire : une rouge → 6/10 = 0,6.",
      "Astuce : multiples de 3 sur un dé : 3 et 6.\nExemple similaire : nombre premier (2, 3, 5) → 3/6 = 1/2.",
      "Astuce : (15 × 3 + 10 × 2) ÷ 5.\nExemple similaire : 20 (coef 2), 10 (coef 3) → 70 ÷ 5 = 14.",
      "Astuce : liste d'abord les nombres premiers de 1 à 10 : 2, 3, 5, 7. Attention : 1 n'est pas premier !\nExemple similaire : nombre pair → 5/10 = 0,5.",
      "Astuce : dénombre les issues (PP, PF, FP, FF) avant de diviser.\nExemple similaire : au moins une face → 3/4.",
      "Astuce : multiplie chaque valeur par son effectif, puis divise par l'effectif total.\nExemple similaire : 8 (3 fois), 12 (2 fois) → (24 + 24) ÷ 5 = 9,6.",
      "Astuce : divise le nombre de garçons par l'effectif total, et arrondis.\nExemple similaire : 20 élèves dont 8 filles → 12/28... non : 8/20 = 0,4."
    ]
  }
};
