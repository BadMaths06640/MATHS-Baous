/* ================= BaouMaths — résumés visuels et aides par question (5e)
   resume : cartes { t: titre, f: formule mise en valeur, d: détail }
   qs     : aide par index de question (« Astuce…
Exemple : … »)
   genH   : aide appliquée aux questions générées, par difficulté 1-4 */
window.AIDE_5E = {
  calc: {
    videos: [
      { u: "https://www.youtube.com/watch?v=xsv49X48RvE", t: "Enchaîner des opérations sans parenthèses" },
      { u: "https://www.youtube.com/watch?v=zi17rpzxsC8", t: "Enchaîner des opérations avec parenthèses" }
    ],
    resume: [
      { t: "L'ordre de calcul", f: "1) ( )    2) × ÷    3) + −", d: "D'abord les parenthèses, puis les multiplications et divisions de gauche à droite, enfin les additions et soustractions." },
      { t: "Exemple guide", f: "3 + 5 × 2 = 3 + 10 = 13", d: "La multiplication passe avant l'addition, même si elle vient après dans l'écriture." },
      { t: "Crochets", f: "24 − [3 × (2 + 5) − 1] = 24 − 20 = 4", d: "Les crochets jouent le rôle de parenthèses : on calcule du plus intérieur (la parenthèse) au plus extérieur, puis on termine l'expression." }
    ],
    qs: [
      "Astuce : la multiplication est prioritaire sur l'addition.\nExemple similaire : 4 + 6 × 3 = 4 + 18 = 22.",
      "Astuce : fais d'abord la division, ensuite la soustraction.\nExemple similaire : 15 − 9 ÷ 3 = 15 − 3 = 12.",
      "Astuce : avec des parenthèses, on les calcule d'abord, même si × vient après.\nExemple similaire : (6 + 2) × 3 = 8 × 3 = 24.",
      "Astuce : trois étapes — parenthèse, puis produit, puis addition.\nExemple similaire : 5 + 2 × (9 − 6) = 5 + 2 × 3 = 5 + 6 = 11.",
      "Astuce : ÷ et × ont le même rang : on calcule de gauche à droite.\nExemple similaire : 20 ÷ 4 × 5 = 5 × 5 = 25.",
      "Astuce : calcule les deux produits d'abord, puis enchaîne + et −.\nExemple similaire : 1 + 4 × 5 − 2 × 3 = 1 + 20 − 6 = 15.",
      "Astuce : ordre complet — parenthèse, produit, addition. Dans la parenthèse, la multiplication passe avant l'addition.\nExemple similaire : 2 × (3 + 4 × 2) + 1 = 2 × 11 + 1 = 23.",
      "Astuce : va du plus intérieur au plus extérieur (parenthèse → crochets → soustraction).\nExemple similaire : 30 − [2 × (1 + 3) − 2] = 30 − 6 = 24.",
      "Astuce : calcule chaque produit séparément, puis soustrais.\nExemple similaire : 6 × 3 − 2 × 5 = 18 − 10 = 8.",
      "Astuce : traite chaque parenthèse séparément avant le produit final.\nExemple similaire : (10 − 2 × 4) × (3 + 5) = 2 × 8 = 16.",
      "Astuce : commence par la parenthèse la plus intérieure.\nExemple similaire : 9 − 3 × [8 ÷ (2 + 2)] = 9 − 3 × 2 = 3.",
      "Astuce : teste chaque choix jusqu'au bout, en respectant l'ordre des opérations.\nExemple similaire : 4 × 6 − 4 × 3 = 24 − 12 = 12."
    ],
    genH: {
      1: "Astuce : la multiplication est prioritaire sur l'addition.\nExemple similaire : 6 + 5 × 3 = 6 + 15 = 21.",
      2: "Astuce : produit d'abord, puis chaîne de + et −.\nExemple similaire : 12 − 3 × 2 + 3 = 12 − 6 + 3 = 9.",
      3: "Astuce : parenthèse d'abord, puis les deux produits, et enfin la différence.\nExemple similaire : 4 × (4 + 3) − 4 × 3 = 28 − 12 = 16.",
      4: "Astuce : va du plus intérieur au plus extérieur : parenthèse, crochets, puis soustraction finale.\nExemple similaire : 20 − [3 × (2 + 4) − 2] = 20 − 16 = 4."
    }
  },
  arithmetique5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=phQY4ybQrUI", t: "Poser une division euclidienne" },
      { u: "https://www.youtube.com/watch?v=y3nU79nBMpw", t: "Divisibilité par 2" },
      { u: "https://www.youtube.com/watch?v=d0JC5Ar_Jzc", t: "Divisibilité par 3 et 9" },
      { u: "https://www.youtube.com/watch?v=kWMh9eZJIxQ", t: "Nombres premiers : définition" }
    ],
    resume: [
      { t: "Division euclidienne", f: "23 = 5 × 4 + 3", d: "a = b × q + r avec 0 ≤ r < b. Le reste est toujours plus petit que le diviseur." },
      { t: "Divisibilité", f: "par 3 ou 9 : la somme des chiffres\npar 2 : finit par 0, 2, 4, 6, 8\npar 5 : finit par 0 ou 5", d: "Si le reste est nul, le diviseur divise le nombre (il en est un diviseur, le nombre en est un multiple)." },
      { t: "Nombres premiers", f: "2 ; 3 ; 5 ; 7 ; 11 ; 13 ; 17 ; 19 ; 23 ; 29 ; 31...", d: "Exactement deux diviseurs : 1 et lui-même. 1 n'est pas premier ; 2 est le seul pair." }
    ],
    qs: [
      "Astuce : cherche le multiple de 5 juste en dessous de 23, ce qui manque est le reste.\nExemple similaire : 17 = 5 × 3 + 2 → reste 2.",
      "Astuce : défile la table de 7.\nExemple similaire : 7 × 6 = 42, donc 42 est un multiple de 7 ; 43 ne l'est pas.",
      "Astuce : cherche le reste de la division par 4 : s'il n'est pas nul, 4 n'est pas un diviseur.\nExemple similaire : 30 = 4 × 7 + 2 → 4 n'est pas un diviseur de 30.",
      "Astuce : additionne les chiffres : si la somme est multiple de 3, le nombre aussi.\nExemple similaire : 273 → 2 + 7 + 3 = 12 → divisible par 3.",
      "Astuce : additionne les chiffres : si la somme est 9, 18, 27..., le nombre est divisible par 9.\nExemple similaire : 729 → 7 + 2 + 9 = 18 → divisible par 9.",
      "Astuce : tout nombre entier a au moins 1 et lui-même comme diviseurs.\nExemple similaire : 12 a au moins deux diviseurs : 1 et 12.",
      "Astuce : teste la division par 2, 3, 5, 7... si aucun ne marche, le nombre est premier.\nExemple similaire : 29 n'est divisible ni par 2, ni par 3, ni par 5 → premier.",
      "Astuce : cherche dans la table une multiplication exacte (reste nul).\nExemple similaire : 7 × 78 = 546 → 546 est divisible par 7,",
      "Astuce : cherche le plus grand multiple du diviseur en dessous du nombre, le reste complète.\nExemple similaire : 100 = 9 × ... + 1 → 9 × 11 = 99 : le quotient est 11.",
      "Astuce : divise par 2 une première fois : si le résultat est encore pair, le nombre est divisible par 4.\nExemple similaire : 132 ÷ 2 = 66, pair → 132 est divisible par 4.",
      "Astuce : isole 11 × z = 362 − 10, puis divise.\nExemple similaire : 100 = 9 × z + 10 → 9 × z = 90 → z = 10.",
      "Astuce : sauf 2, tous les nombres premiers sont impairs, et le produit de deux impairs est impair.\nExemple similaire : 3 × 5 = 15, impair."
    ],
    genH: {
      1: "Astuce : cherche le multiple du diviseur juste en dessous du nombre, le reste est ce qui manque.\nExemple similaire : 47 = 6 × 7 + 5 → reste 5.",
      2: "Astuce : additionne les chiffres : si la somme est dans la table de 3, le nombre est divisible par 3.\nExemple similaire : 271 → 2 + 7 + 1 = 10 → non ; 273 → 12 → oui."
    }
  },
  symetrie5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=o-LXjfesIxw", t: "La symétrie centrale" },
      { u: "https://www.youtube.com/watch?v=EBEiFNLxm9s", t: "Utiliser les propriétés de la symétrie centrale" }
    ],
    resume: [
      { t: "Image d'un point", f: "O = milieu de [MM']", d: "On prolonge [MO] d'autant de l'autre côté : OM' = OM, et M, O, M' sont alignés (demi-tour)." },
      { t: "Figure image", f: "mêmes longueurs, angles, aires", d: "L'image est identique, tournée d'un demi-tour autour de O : seul le sens de parcours s'inverse." },
      { t: "Centre de symétrie", f: "parallélogramme → diagonales\nsecteur du cercle → centre", d: "Test : un demi-tour (180°) autour du point supposé centre laisse la figure invariante (cercle, parallélogramme, hexagone régulier...)." }
    ],
    qs: [
      "Astuce : par symétrie centrale, le centre O est toujours au MILIEU entre le point et son image.\nExemple similaire : M et son image M' avec MO = 3 cm → OM' = 3 cm.",
      "Astuce : l'image d'un segment est un segment de MÊME longueur.\nExemple similaire : [AB] de 5 cm → [A'B'] de 5 cm.",
      "Astuce : test du demi-tour : tourne la figure de 180° autour du point supposé centre → elle doit se recouvrir exactement.\nExemple similaire : le carré se superpose après un demi-tour autour de son centre → centre de symétrie.",
      "Astuce : O milieu de [MM'] → OM = OM'.\nExemple similaire : MO = 6 cm → OM' = 6 cm.",
      "Astuce : MM' = MO + OM' = 2 × MO.\nExemple similaire : MO = 5 cm → MM' = 10 cm.",
      "Astuce : par symétrie centrale, tout est conservé : longueurs, angles, aires. Seul le sens de parcours s'inverse.\nExemple similaire : un rectangle 6 × 4 cm a une image de même taille et même forme.",
      "Astuce : une symétrie centrale conserve les longueurs.\nExemple similaire : [AB] = 7 cm → [A'B'] = 7 cm.",
      "Astuce : cherche le point d'où chaque sommet a pour image le sommet opposé.\nExemple similaire : dans un parallélogramme, l'intersection des diagonales est le centre de symétrie.",
      "Astuce : l'image d'une droite est une droite PARALLÈLE (si elle passe par O, elle reste invariante).\nExemple similaire : la droite (d) et son image (d') sont parallèles.",
      "Astuce : le centre doit être le milieu : (x + x') ÷ 2 = abscisse du centre.\nExemple similaire : symétrique de 7 par rapport à 9 : (7 + x') ÷ 2 = 9 → 7 + x' = 18 et x' = 11.",
      "Astuce : l'image est IDENTIQUE : périmètre, aire et angles inchangés.\nExemple similaire : un triangle de côtés 3 ; 4 ; 5 cm a une image de côtés 3 ; 4 ; 5 cm.",
      "Astuce : dimensions conservées → même aire.\nExemple similaire : rectangle 5 × 2 cm → image : rectangle 5 × 2 cm, aire 10 cm²."
    ],
    genH: {
      1: "Astuce : O est le milieu de [MM'] : OM' = OM.\nExemple similaire : OM = 5 cm → OM' = 5 cm.",
      2: "Astuce : MM' = MO + OM' = 2 × MO.\nExemple similaire : OM = 6 cm → MM' = 12 cm.",
      3: "Astuce : dimensions conservées : le rectangle image est identique ; périmètre = 2 × (L + l).\nExemple similaire : 6 × 4 cm → périmètre 2 × (6 + 4) = 20 cm.",
      4: "Astuce : la symétrie centrale conserve longueurs, angles et aires (juste un demi-tour autour de O).\nExemple similaire : un triangle de côtés 3 ; 4 ; 5 cm a une image aux mêmes côtés."
    }
  },
  litteral1: {
    videos: [
      { u: "https://www.youtube.com/watch?v=eBPOd0bTBro", t: "Simplifier une expression" },
      { u: "https://www.youtube.com/watch?v=DFthuKo3byw", t: "Puissance d'exposant positif" }
    ],
    resume: [
      { t: "Écritures", f: "3 × x = 3x    5 × (a + 2) = 5(a + 2)", d: "Le signe × peut être caché devant une lettre ou une parenthèse." },
      { t: "Valeur d'une expression", f: "4x + 3 pour x = 5 → 4×5 + 3 = 23", d: "On remplace la lettre par sa valeur, puis on calcule en respectant les priorités." },
      { t: "Puissances", f: "x² = x × x    x³ = x × x × x", d: "Le carré multiplie deux fois (7² = 49), le cube trois fois (2³ = 8)." }
    ],
    qs: [
      "Astuce : multiplie x par 2 et cache le signe ×.\nExemple similaire : le double de a → 2a.",
      "Astuce : supprime le × devant la lettre.\nExemple similaire : 7 × b = 7b.",
      "Astuce : remplace la lettre par sa valeur, puis respecte les priorités.\nExemple similaire : 5x + 2 pour x = 3 → 5×3 + 2 = 17.",
      "Astuce : triple = 3 × n et « diminué de » = −.\nExemple similaire : le triple de n diminué de 2 → 3n − 2.",
      "Astuce : 2x = 2 × x : multiplie d'abord, puis soustrais.\nExemple similaire : 9 − 2y pour y = 4 → 9 − 8 = 1.",
      "Astuce : suivant = + 1, précédent = − 1.\nExemple similaire : l'entier précédant n est n − 1.",
      "Astuce : carré = le nombre multiplié par lui-même.\nExemple similaire : 6² = 6 × 6 = 36.",
      "Astuce : cube = multiplie le nombre trois fois.\nExemple similaire : 3³ = 3 × 3 × 3 = 27.",
      "Astuce : multiplie le prix par le nombre de tickets, puis ajoute la partie fixe.\nExemple similaire : 4 tickets à p € + 1 € → 4p + 1.",
      "Astuce : calcule d'abord le carré, puis multiplie.\nExemple similaire : 3x² pour x = 4 → x² = 16, puis 3 × 16 = 48.",
      "Astuce : l'aire du carré = côté × côté = c².\nExemple similaire : côté 5 → aire 25 (4 × 5 = 20 donne le périmètre).",
      "Astuce : écris la longueur en fonction de x, puis P = 2 × (L + l).\nExemple similaire : largeur x, longueur x + 3 → P = 2 × (2x + 3) = 4x + 6."
    ],
    genH: {
      1: "Astuce : remplace la lettre par sa valeur.\nExemple similaire : 3x + 2 pour x = 4 → 14.",
      2: "Astuce : multiplie d'abord, puis soustrais.\nExemple similaire : 5x − 2 pour x = 3 → 13.",
      3: "Astuce : carré = nombre × lui-même.\nExemple similaire : 9² = 81.",
      4: "Astuce : carré d'abord, multiplication ensuite.\nExemple similaire : 2x² pour x = 3 → 2 × 9 = 18."
    }

  },
  angles5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=H2m_XYGgFwc", t: "Propriétés des angles (5ème)" },
      { u: "https://www.youtube.com/watch?v=L9mP1DwXTDg", t: "Angles et droites parallèles" },
      { u: "https://www.youtube.com/watch?v=3h5x2gSIr-c", t: "Les angles en 5ème" }
    ],
    resume: [
      { t: "Angles opposés par le sommet", f: "égaux (toujours)", d: "Même sommet, côtés dans le prolongement l'un de l'autre, en vis-à-vis : égaux, sans condition de parallélisme." },
      { t: "Angles alternes-internes (Z)", f: "figure en Z → égaux si ∥", d: "Situés entre les deux droites, de part et d'autre de la sécante." },
      { t: "Angles correspondants (F)", f: "figure en F → égaux si ∥", d: "Du même côté de la sécante, l'un entre les droites, l'autre à l'extérieur." },
      { t: "Angles autour d'une droite", f: "angle plat = 180°", d: "Deux angles adjacents le long d'une même droite : somme 180° (supplémentaires). Complémentaires = somme 90°." }
    ],
    qs: [
      "Astuce : opposés par le sommet = angles en vis-à-vis, toujours égaux, sans condition.\nExemple similaire : deux angles opposés par le sommet de 55° chacun.",
      "Astuce : des angles opposés par le sommet sont toujours ÉGAUX.\nExemple similaire : l'un mesure 60° → l'autre 60°.",
      "Astuce : en Z, les deux angles sont ENTRE les droites, de part et d'autre de la sécante.\nExemple similaire : dessine un Z : les deux angles dans les creux du Z sont alternes-internes.",
      "Astuce : droites parallèles → angles alternes-internes (Z) ÉGAUX.\nExemple similaire : l'un 52° → l'autre 52°.",
      "Astuce : droites parallèles → angles correspondants (F) ÉGAUX.\nExemple similaire : l'un 132° → le correspondant 132°.",
      "Astuce : c'est la RÉCIPROQUE : angles en Z égaux → droites parallèles.\nExemple similaire : si les angles en Z sont égaux sur ta figure, les deux côtés sont parallèles.",
      "Astuce : sur la même droite, les deux angles forment un angle plat : somme 180°.\nExemple similaire : angle de 65° → l'adjacent vaut 180 − 65 = 115°.",
      "Astuce : complémentaires = somme 90°.\nExemple similaire : 30° et 60° sont complémentaires.",
      "Astuce : la lettre F = même côté de la sécante, même position relative aux droites.\nExemple similaire : deux angles chacun en haut à droite → correspondants.",
      "Astuce : d'abord le supplémentaire (180 − 34 = 146°), puis l'alternes-interne : même mesure avec des droites parallèles.\nExemple similaire : angle 40° → supplémentaire 140° → alternes-interne 140°.",
      "Astuce : supplémentaires = somme 180°.\nExemple similaire : 100° et 80°.",
      "Astuce : traduis l'énoncé : x + 2x = 90 → 3x = 90.\nExemple similaire : si y = 3x : x + 3x = 90 → x = 22,5°."
    ],
    genH: {
      1: "Astuce : des angles opposés par le sommet sont toujours ÉGAUX.\nExemple similaire : l'un 58° → l'autre 58°.",
      2: "Astuce : droites parallèles → alternes-internes (Z) et correspondants (F) égaux.\nExemple similaire : un angle de 72° a son alternes-interne à 72° aussi.",
      3: "Astuce : supplémentaires = somme 180°.\nExemple similaire : l'un 105° → l'autre 180 − 105 = 75°.",
      4: "Astuce : complémentaires = somme 90°.\nExemple similaire : l'un 18° → l'autre 90 − 18 = 72°."
    }
  },
  relatifs1: {
    videos: [
      { u: "https://www.youtube.com/watch?v=WauL1kM2lmQ", t: "Repérer un nombre relatif" }
    ],
    resume: [
      { t: "Positifs et négatifs", f: "3,2 > 0 (positif)    −3,2 < 0 (négatif)", d: "Les nombres relatifs regroupent les positifs et les négatifs ; 0 est à la frontière." },
      { t: "Opposé", f: "opposé de 6 : −6    opposé de −7 : 7", d: "Deux nombres opposés sont à la même distance de 0, de part et d'autre." },
      { t: "Repérage", f: "A(3 ; −2) → 3 à droite, 2 en dessous", d: "Abscisse = horizontal (droite si positif), ordonnée = vertical (haut si positif)." }
    ],
    qs: [
      "Astuce : sous 0 = négatif, au-dessus de 0 = positif.\nExemple similaire : −8 est un nombre négatif.",
      "Astuce : regarde le signe devant le nombre.\nExemple similaire : +5,1 est positif, −5,1 est négatif.",
      "Astuce : à gauche de l'origine = négatif.\nExemple similaire : 6 unités à gauche → −6.",
      "Astuce : l'opposé est à la même distance de 0, de l'autre côté.\nExemple similaire : l'opposé de −3 est 3.",
      "Astuce : abscisse = horizontal (droite si positive), ordonnée = vertical (haut si positive).\nExemple similaire : B(−2 ; 4) est à gauche et en haut.",
      "Astuce : abscisse négative → à gauche ; ordonnée positive → en haut.\nExemple similaire : D(−6 ; 3) : à gauche et au-dessus.",
      "Astuce : l'origine est le point de départ des deux axes.\nExemple similaire : l'origine du repère s'écrit O(0 ; 0).",
      "Astuce : abscisse ET ordonnée négatives → en bas à gauche.\nExemple similaire : E(−1 ; −7) est en bas à gauche.",
      "Astuce : l'opposé d'un négatif est un positif.\nExemple similaire : l'opposé de −12 est 12.",
      "Astuce : la distance à 0 ignore le signe (partie numérique).\nExemple similaire : distance à 0 de −12 → 12.",
      "Astuce : même abscisse → le segment est vertical.\nExemple similaire : A(−3 ; 2) et B(−3 ; 6) : segment vertical de 4 unités.",
      "Astuce : compte les crans sur la droite graduée en partant de l'origine.\nExemple similaire : 3 à droite puis 5 en arrière → abscisse −2."
    ],
    genH: {
      1: "Astuce : à gauche de l'origine = négatif.\nExemple similaire : 6 unités à gauche → −6.",
      2: "Astuce : compte jusqu'à 0 puis jusqu'à l'autre point, et additionne.\nExemple similaire : de −3 à 4 → 3 + 4 = 7 unités."
    }

  },
  triangles5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=FucUXFt-wjI", t: "Somme des angles d'un triangle" },
      { u: "https://www.youtube.com/watch?v=rJvF6iENYME", t: "L'inégalité triangulaire" },
      { u: "https://www.youtube.com/watch?v=u1rqg_5pL1s", t: "Reconnaître des triangles égaux" }
    ],
    resume: [
      { t: "Somme des angles", f: "A + B + C = 180°", d: "ex : 60° et 40° → le 3e angle = 80°" },
      { t: "Inégalité triangulaire", f: "le plus grand côté < somme des 2 autres", d: "AB = 5, AC = 2,4, BC = 1,8 → 2,4 + 1,8 = 4,2 < 5 : impossible" },
      { t: "Triangles particuliers", f: "2 côtés égaux → isocèle", d: "3 côtés égaux → équilatéral\n1 angle droit → rectangle" }
    ],
    qs: [
      "Astuce : 180° moins la somme des deux angles connus.\nExemple similaire : angles 50° et 60° → 180 − 110 = 70°.",
      "Astuce : isocèle = 2 côtés égaux (et donc 2 angles à la base égaux).\nExemple similaire : côtés 6 ; 6 ; 4 → isocèle.",
      "Astuce : isocèle → les deux angles à la base sont égaux.\nExemple similaire : base à 70° chacun → sommet = 180 − 140 = 40°.",
      "Astuce : l'angle droit compte pour 90°.\nExemple similaire : rectangle en A, angle B = 30° → angle C = 60°.",
      "Astuce : compare le plus grand côté à la somme des deux autres.\nExemple similaire : côtés 4 ; 6 ; 9 : 9 < 10, le triangle existe.",
      "Astuce : cherche d'abord le 3e angle.\nExemple similaire : 30° et 75° → 3e = 75° → deux angles égaux → isocèle.",
      "Astuce : 180 − 90 − l'angle connu.\nExemple similaire : triangle rectangle avec un angle de 30° → le troisième = 60°.",
      "Astuce : les angles à la base d'un isocèle sont égaux : (180 − angle au sommet) ÷ 2.\nExemple similaire : sommet 40° → base = (180 − 40) ÷ 2 = 70°.",
      "Astuce : 3 angles égaux → 180° ÷ 3.\nExemple similaire : chaque angle d'un triangle équilatéral vaut 60°.",
      "Astuce : la somme des trois angles doit valoir exactement 180°.\nExemple similaire : 70° + 30° + 80° = 180°.",
      "Astuce : dans un triangle isocèle, les angles à la base sont égaux.\nExemple similaire : angle à la base 50° → sommet = 180° − 100° = 80°.",
      "Astuce : additionne tout, égale à 180°, résous.\nExemple similaire : x + 2x + 5x = 8x = 180° → impossible ici, il faut que la somme donne un multiple de 180°."
    ],
    genH: {
      1: "Astuce : les trois angles d'un triangle totalisent 180°.\nExemple similaire : pour 50° et 60°, le troisième mesure 180 − 50 − 60 = 70°.",
      2: "Astuce : isocèle : les angles à la base sont égaux ; sommet = 180 − 2 × angle.\nExemple similaire : base 65° → sommet = 180 − 130 = 50°.",
      3: "Astuce : triangle rectangle : l'angle droit = 90° → troisième = 90 − angle.\nExemple similaire : un angle de 55° → le troisième = 35°.",
      4: "Astuce : angles à la base = (180 − angle au sommet) ÷ 2.\nExemple similaire : sommet 60° → base = (180 − 60) ÷ 2 = 60° (triangle équilatéral)."
    }
  },
  fractions1: {
    videos: [
      { u: "https://www.youtube.com/watch?v=RJwAP3LNPqA", t: "Fractions égales et simplification" },
      { u: "https://www.youtube.com/watch?v=Kgy1Uv0KAdY", t: "Comparer une fraction à l'unité" }
    ],
    resume: [
      { t: "Fractions égales", f: "12/18 = 2/3   (÷6)", d: "On divise (ou multiplie) numérateur et dénominateur par le même nombre." },
      { t: "Comparer à l'unité", f: "3/4 < 1    5/4 > 1", d: "Numérateur < dénominateur : la fraction est plus petite que 1 (et inversement)." },
      { t: "Comparer deux fractions", f: "2/5 = 6/15 et 1/3 = 5/15 → 2/5 > 1/3", d: "On met au même dénominateur (ou au même numérateur) et on compare." }
    ],
    qs: [
      "Astuce : cherche le plus grand diviseur commun.\nExemple similaire : 15/25 = 3/5 (÷5).",
      "Astuce : même numérateur → le plus petit dénominateur gagne.\nExemple similaire : 2/3 > 2/7.",
      "Astuce : cherche une fraction égale en divisant numérateur et dénominateur.\nExemple similaire : 4/8 = 1/2 et 3/6 = 1/2.",
      "Astuce : même dénominateur → compare les numérateurs.\nExemple similaire : 4/9 < 6/9.",
      "Astuce : mets tout au même dénominateur pour comparer.\nExemple similaire : 1/2 = 4/8 et 5/8 : le plus grand est 5/8.",
      "Astuce : une fraction est plus petite que 1 si son numérateur est plus petit que son dénominateur.\nExemple similaire : 5/6 < 1 < 9/8.",
      "Astuce : même numérateur → plus petit dénominateur = plus grande fraction.\nExemple similaire : 3/5 > 3/8.",
      "Astuce : mets au même dénominateur, puis compare les numérateurs.\nExemple similaire : 2/3 = 6/9 > 5/9.",
      "Astuce : cherche le plus grand diviseur commun, puis divise les deux termes.\nExemple similaire : 15/25 = 3/5 (÷5).",
      "Astuce : met les trois fractions au même dénominateur avant d'ordonner.\nExemple similaire : 1/2 = 2/4 < 3/4 < 4/4.",
      "Astuce : dénominateur commun, puis compare.\nExemple similaire : 1/2 = 3/6 > 2/6 = 1/3."
    ],
    genH: {
      1: "Astuce : cherche le plus grand diviseur commun.\nExemple similaire : 15/25 = 3/5 (÷5).",
      2: "Astuce : même dénominateur → compare les numérateurs.\nExemple similaire : 3/7 < 5/7."
    }

  },
  parallelogrammes5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=4dGM22L9030", t: "Le parallélogramme" },
      { u: "https://www.youtube.com/watch?v=hUoaHWdYi_8", t: "Reconnaître un parallélogramme" },
      { u: "https://www.youtube.com/watch?v=DRGJ2Y_TyCI", t: "Construire un parallélogramme au compas" },
      { u: "https://www.youtube.com/watch?v=RrdxZu9l1_8", t: "Construire un parallélogramme règle et équerre" },
      { u: "https://www.youtube.com/watch?v=ctVWi7FakFc", t: "Construire un parallélogramme sur quadrillage" }
    ],
    resume: [
      { t: "Parallélogramme", f: "côtés opposés ∥ et de même longueur", d: "Son centre de symétrie est l'intersection des diagonales." },
      { t: "Diagonales", f: "[AC] et [BD] se coupent en leur milieu", d: "OA = OC et OB = OD dans tout parallélogramme." },
      { t: "Angles", f: "opposés égaux    consécutifs : 180°", d: "Deux angles consécutifs sont supplémentaires." }
    ],
    qs: [
      "Astuce : diagonales coupées en leur milieu = propriété de TOUS les parallélogrammes.\nExemple similaire : dans un parallélogramme ABCD, O est à la fois le milieu de [AC] et de [BD].",
      "Astuce : parallélogramme = côtés opposés PARALLÈLES, donc de même longueur.\nExemple similaire : [AB] et [DC] parallèles et AB = DC.",
      "Astuce : si les diagonales se coupent en leur milieu, c'est un parallélogramme.\nExemple similaire : un quadrilatère dont O est le milieu des deux diagonales → parallélogramme.",
      "Astuce : côté opposé = même longueur ; périmètre = 2 × (a + b).\nExemple similaire : côtés 6 cm et 3 cm → 2 × (6 + 3) = 18 cm.",
      "Astuce : angles opposés égaux ; angles consécutifs supplémentaires (somme 180°).\nExemple similaire : angles de 120° et 60° en vis-à-vis.",
      "Astuce : O est le milieu des deux diagonales → OA = OC et OB = OD.\nExemple similaire : OB = 5 → OD = 5.",
      "Astuce : les angles opposés d'un parallélogramme sont ÉGAUX.\nExemple similaire : l'un 72° → l'opposé 72°.",
      "Astuce : les côtés opposés sont égaux : AB = CD.\nExemple similaire : BC = 7 → DA = 7.",
      "Astuce : angles consécutifs = supplémentaires → 180 − angle.\nExemple similaire : angle 70° → consécutif 110°.",
      "Astuce : A et B sont consécutifs → angle B = 180 − angle A.\nExemple similaire : angle A = 130° → angle B = 50°."
    ],
    genH: {
      1: "Astuce : les angles opposés d'un parallélogramme sont égaux.\nExemple similaire : l'un 84° → l'opposé 84°.",
      2: "Astuce : angles consécutifs supplémentaires : 180 − angle.\nExemple similaire : angle 98° → consécutif 82°.",
    }

  },
  litteral9: {
    videos: [
      { u: "https://www.youtube.com/watch?v=eBPOd0bTBro", t: "Simplifier une expression" },
      { u: "https://www.youtube.com/watch?v=xZCXVgGT_Bk", t: "Tester une égalité" }
    ],
    resume: [
      { t: "Développer", f: "3 × (x + 2) = 3x + 6", d: "On distribue le facteur à chaque terme de la parenthèse." },
      { t: "Réduire", f: "4x + 3 + 5x = 9x + 3", d: "On regroupe les termes semblables (les x entre eux, les nombres entre eux)." },
      { t: "Tester une égalité", f: "3 × (x + 1) = 3x + 3", d: "On remplace x par une valeur et on compare les deux membres." }
    ],
    qs: [
      "Astuce : distribue le 3 aux deux termes.\nExemple similaire : 4 × (x + 5) = 4x + 20.",
      "Astuce : regroupe les x entre eux, puis les nombres.\nExemple similaire : 6a + 2 + a = 7a + 2.",
      "Astuce : distribue le 5 aux deux termes de la parenthèse.\nExemple similaire : 3 × (2 + b) = 6 + 3b.",
      "Astuce : regroupe séparément les a et les nombres.\nExemple similaire : 5m + 3 + m + 4 = 6m + 7.",
      "Astuce : développe d'abord, réduis ensuite.\nExemple similaire : 3(2x + 1) + 2x = 6x + 3 + 2x = 8x + 3.",
      "Astuce : teste la distributivité : k(a − b) = ka − kb.\nExemple similaire : 4 × 7 − 4 × 2 = 20 = 4 × (7 − 2).",
      "Astuce : factoriser = écrire un produit ; cherche le facteur commun.\nExemple similaire : 7x + 21 = 7(x + 3).",
      "Astuce : développe, calcule les constantes, puis réduis les x.\nExemple similaire : 2(4x + 1) − 3x = 8x + 2 − 3x = 5x + 2.",
      "Astuce : teste une égalité en remplaçant la lettre par une valeur, sans résoudre.\nExemple similaire : 4 × (x + 1) = 4x + 4, et non 4x + 1 : l'égalité est fausse pour tout x.",
      "Astuce : applique la distributivité sans résoudre : 2 × (x + 5) = 2x + 10, qui n'est pas 2x + 5.\nExemple similaire : 3 × (x + 2) = 3x + 6, qui n'est pas 3x + 2 : l'égalité est fausse pour tout x.",
      "Astuce : dévelope chaque parenthèse puis réduis les x et les nombres.\nExemple similaire : 2(3x + 1) + x = 6x + 2 + x = 7x + 2.",
      "Astuce : périmètre du rectangle = 2 × (longueur + largeur).\nExemple similaire : largeur x, longueur x + 3 → P = 2(2x + 3) = 4x + 6."
    ],
    genH: {
      2: "Astuce : multiplie k par x (kx) et k par le nombre.\nExemple similaire : 4 × (x + 3) = 4x + 12.",
      3: "Astuce : développe, calcule les constantes, puis réduis les x.\nExemple similaire : 3(2x + 4) − 2x = 6x + 12 − 2x = 4x + 12."
    }

  },
  espace1: {
    videos: [
      { u: "https://www.youtube.com/watch?v=XBoNTs-5ko4", t: "Prismes : perspective cavalière (5ème)" },
      { u: "https://www.youtube.com/watch?v=BI89OjsQjjo", t: "Patrons d'un pavé droit" }
    ],
    resume: [
      { t: "Pavé droit", f: "6 faces    12 arêtes    8 sommets", d: "Comme le cube, mais avec des faces rectangulaires de dimensions différentes." },
      { t: "Perspective cavalière", f: "arêtes fuyantes : ÷2 à ~30°", d: "Arêtes de face : vraies longueurs ; fuyantes : raccourcies ; cachées : pointillés." },
      { t: "Patron", f: "solide déplié → on plie pour reconstruire", d: "Exemple : le cylindre a un patron de 2 disques + 1 rectangle." }
    ],
    qs: [
      "Astuce : compte les arêtes du dessin en perspective : 4 en bas, 4 en haut, 4 verticales.\nExemple similaire : un cube (pavé régulier) a aussi 12 arêtes.",
      "Astuce : 3 paires de faces identiques → 6 faces ; tous les coins partagés → 8 sommets.\nExemple similaire : le cube a aussi 6 faces et 8 sommets.",
      "Astuce : le cube a 6 faces carrées.\nExemple similaire : le dé d'un jeu de société.",
      "Astuce : arête invisible = pointillé.\nExemple similaire : l'arête « du fond » d'un pavé est en pointillés.",
      "Astuce : seules les arêtes fuyantes (profondeur) sont raccourcies.\nExemple similaire : la hauteur d'un pavé en perspective garde sa vraie longueur.",
      "Astuce : patron = solide déplié, on plie pour le reconstruire.\nExemple similaire : une boîte d'allumettes ouverte à plat.",
      "Astuce : fuyantes ≈ moitié de la vraie longueur, à ~30° de l'horizontale.\nExemple similaire : arête de 6 cm → dessinée ~3 cm.",
      "Astuce : imagine le cylindre « déroulé » : 2 disques + un rectangle.\nExemple similaire : l'étiquette d'une boîte ronde est un rectangle.",
      "Astuce : 2 bases triangulaires (3 sommets chacune) reliées par 3 faces rectangles.\nExemple similaire : la tente de camping (prisme triangulaire) a 6 sommets.",
      "Astuce : c'est un résultat connu : 11 patrons non superposables.\nExemple similaire : on les obtient en plaçant les 6 carrés différemment.",
      "Astuce : les 2 bases sont des triangles + 3 rectangles latéraux.\nExemple similaire : le patron a 5 faces en tout."
    ],
    genH: {
      1: "Astuce : 4 arêtes en bas, 4 en haut, 4 verticales.\nExemple similaire : le pavé droit a aussi 12 arêtes.",
      2: "Astuce : 2 bases + autant de rectangles que de côtés de la base.\nExemple similaire : base triangulaire → 3 + 2 = 5 faces.",
      3: "Astuce : n arêtes par base + n arêtes verticales.\nExemple similaire : base à 4 côtés → 12 arêtes.",
      4: "Astuce : 2 fois le nombre de sommets de la base.\nExemple similaire : base triangulaire → 6 sommets."
    }

  },
  propo1: {
    videos: [
      { u: "https://www.youtube.com/watch?v=leBAfrIbAbk", t: "Le tableau de proportionnalité" }
    ],
    resume: [
      { t: "Grandeurs proportionnelles", f: "valeurs × le même nombre", d: "Le coefficient de proportionnalité relie toutes les valeurs." },
      { t: "Tableau", f: "3 → 6 €    1 → 2 €    5 → 10 €", d: "On peut passer par l'unité : prix d'un seul objet, puis on multiplie." },
      { t: "Graphique", f: "points alignés AVEC (0 ; 0)", d: "Si les points ne passent pas par l'origine, ce n'est pas proportionnel." }
    ],
    qs: [
      "Astuce : cherche d'abord le prix d'UN objet.\nExemple similaire : 4 cahiers = 8 € → 1 = 2 € → 7 = 14 €.",
      "Astuce : cherche le coefficient (la valeur d'un seul) puis multiplie.\nExemple similaire : 4 cahiers = 8 € → 1 = 2 € → 7 = 14 €.",
      "Astuce : cherche d'abord le coefficient de la première colonne.\nExemple similaire : 2 → 10 (coefficient 5), donc 4 → 20.",
      "Astuce : cherche d'abord le prix d'UN kilo.\nExemple similaire : 2 kg = 3 € → 1 kg = 1,50 € → 5 kg = 7,50 €.",
      "Astuce : même coefficient partout : quand l'entrée double, la sortie double.\nExemple similaire : 3 kg → 6 €, donc 6 kg → 12 €.",
      "Astuce : cherche d'abord la quantité par minute, puis multiplie.\nExemple similaire : 4 L en 2 min → 2 L/min → en 10 min : 20 L.",
      "Astuce : coefficient = 24 ÷ 15, applique-le à 40.\nExemple similaire : 6 kg pour 9 € → 10 kg pour 15 €.",
      "Astuce : divise par 6 pour le prix d'un seul, puis multiplie par 9.\nExemple similaire : 4 yaourts = 2,80 € → 9 = 6,30 €.",
      "Astuce : cherche d'abord la valeur d'UNE unité, puis multiplie.\nExemple similaire : 4 L en 2 min → 2 L/min → 10 min : 20 L.",
      "Astuce : points alignés avec l'origine = proportionnel.\nExemple similaire : une droite qui commence à (0 ; 0).",
      "Astuce : passe par l'unité (500 g), puis compte les paquets.\nExemple similaire : 250 g = 3 € → 1 kg = 12 €.",
      "Astuce : cherche la distance en 1 minute d'abord.\nExemple similaire : 30 cm en 2 min → 15 cm/min → 5 min : 75 cm."
    ],
    genH: {
      1: "Astuce : cherche le prix d'un seul objet d'abord.\nExemple similaire : 3 stylos = 9 € → 1 = 3 € → 6 stylos = 18 €.",
      2: "Astuce : coefficient = valeur ÷ entrée, à appliquer partout.\nExemple similaire : 2 → 14 (coeff 7), donc 4 → 28.",
      3: "Astuce : divise par les minutes pour avoir 1 minute, puis multiplie.\nExemple similaire : 6 L en 3 min → 2 L/min → 5 min : 10 L.",
      4: "Astuce : vitesse = distance ÷ temps, puis multiplie par le nouveau temps.\nExemple similaire : 60 cm en 4 min → 15 cm/min → 6 min : 90 cm."
    }

  },
  droitesrem5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=7inMCnths8I", t: "Médiatrices et cercle circonscrit" },
      { u: "https://www.youtube.com/watch?v=k3_g9amoIDE", t: "Les hauteurs d'un triangle" }
    ],
    resume: [
      { t: "Médiatrice", f: "perpendiculaire au milieu du segment", d: "tout point de la médiatrice est à égale distance des extrémités" },
      { t: "Hauteur", f: "sommet → perpendiculaire au côté opposé", d: "les 3 hauteurs se coupent à l'orthocentre" },
      { t: "Médiane", f: "sommet → milieu du côté opposé", d: "les 3 médianes se coupent au centre de gravité" }
    ],
    qs: [
      "Astuce : trois côtés → trois médiatrices, qui se coupent au centre du cercle circonscrit.\nExemple similaire : la médiatrice de [AB] = tous les points à égale distance de A et de B.",
      "Astuce : hauteur = du sommet, perpendiculaire au côté opposé.\nExemple similaire : la médiatrice passe elle par le MILIEU, et ⊥ aussi.",
      "Astuce : médiatrice = points à égale distance des extrémités.\nExemple similaire : si C est sur la médiatrice de [AB], alors CA = CB.",
      "Astuce : médiatrice → cercle circonscrit ; hauteur → orthocentre ; médiane → centre de gravité.\nExemple similaire : les 3 médianes se coupent au centre de gravité.",
      "Astuce : médiatrice = milieu + angle droit.\nExemple similaire : la médiatrice de [AB] passe par le milieu de [AB].",
      "Astuce : c'est la propriété clé pour les programmes de construction.\nExemple similaire : M sur la médiatrice de [AB], MA = 4 → MB = 4.",
      "Astuce : hauteur = sommet + perpendiculaire au côté opposé.\nExemple similaire : la hauteur issue de B est perpendiculaire à (AC).",
      "Astuce : centre du cercle circonscrit = point de rencontre des médiatrices.\nExemple similaire : place-le avec ton compas ouvert sur un sommet.",
      "Astuce : médiatrices → cercle circonscrit ; médianes → centre de gravité ; hauteurs → orthocentre.\nExemple similaire : pour tracer le cercle circonscrit, trace d'abord 2 médiatrices.",
      "Astuce : médiatrice → distances égales aux extrémités.\nExemple similaire : AM = 7 → BM = 7.",
      "Astuce : médiane = sommet → milieu du côté opposé.\nExemple similaire : le centre de gravité est sur chaque médiane.",
      "Astuce : hauteurs → orthocentre ; à ne pas confondre avec les médiatrices.\nExemple similaire : dans un triangle rectangle, l'orthocentre est au sommet de l'angle droit."
    ],
    genH: {
      2: "Astuce : sur la médiatrice, les distances aux deux extrémités sont égales.\nExemple : MA = 5 → MB = 5."
    }
  },
  relatifs2: {
    videos: [
      { u: "https://www.youtube.com/watch?v=4hRzrbn32V8", t: "Comparer des nombres relatifs" },
      { u: "https://www.youtube.com/watch?v=I0NiW8GeHEY", t: "Additionner des nombres relatifs" },
      { u: "https://www.youtube.com/watch?v=3YKQYLe93Yk", t: "Soustraire des nombres relatifs" }
    ],
    resume: [
      { t: "Comparer", f: "−7 < −2 < 0 < 3", d: "Sur la droite graduée, ce qui est à gauche est plus petit ; entre négatifs, le plus petit est le plus loin de 0." },
      { t: "Additionner", f: "(−3) + (−5) = −8    (−7) + 4 = −3", d: "Même signe : on ajoute et on garde le signe. Signes différents : on soustrait et on garde le signe du plus loin de 0." },
      { t: "Soustraire", f: "(−10) − (−4) = −10 + 4 = −6", d: "Soustraire un nombre = additionner son opposé." }
    ],
    qs: [
      "Astuce : même signe (−) → on ajoute et on garde le −.\nExemple similaire : (−2) + (−6) = −8.",
      "Astuce : signes différents → on calcule la différence et on garde le signe du plus loin de 0.\nExemple similaire : (−9) + 5 = −4.",
      "Astuce : sur la droite graduée, part de 6 et recule de 10 crans.\nExemple similaire : 4 − 9 = −5.",
      "Astuce : deux négatifs s'additionnent : on ajoute les valeurs et on garde le −.\nExemple similaire : (−2) + (−6) = −8.",
      "Astuce : soustraire un négatif = ajouter le positif.\nExemple similaire : (−6) − (−9) = −6 + 9 = 3.",
      "Astuce : place les nombres sur une droite graduée, le plus petit est à gauche.\nExemple similaire : entre −5 et −1, le plus petit est −5.",
      "Astuce : place les nombres sur une droite graduée, le plus petit est le plus à gauche.\nExemple similaire : entre −9 et −2, le plus petit est −9.",
      "Astuce : procède de gauche à droite, un calcul à la fois.\nExemple similaire : −4 + 7 − 10 = 3 − 10 = −7.",
      "Astuce : la distance à zéro de −5, c'est sa partie numérique (sans le signe).\nExemple similaire : distance à zéro de −9 : 9.",
      "Astuce : enchaîne de gauche à droite, une opération à la fois.\nExemple similaire : (−4) − 3 + 9 → −7 + 9 = 2.",
      "Astuce : part de la température initiale et enchaîne les variations.\nExemple similaire : départ −3, puis +10 puis −5 : −3 + 10 − 5 = +2.",
      "Astuce : procède de gauche à droite, en gardant le signe à chaque étape.\nExemple similaire : 2 − 8 + 5 − 1 = −6 + 5 − 1 = −2.",
      "Astuce : sur la droite graduée, ce qui est à droite est le plus grand.\nExemple similaire : −4 > −9, car −4 est plus proche de 0."
    ],
    genH: {
      1: "Astuce : sur la droite graduée, part du premier nombre et avance/recule.\nExemple similaire : (−8) + 5 = −3.",
      2: "Astuce : entre deux négatifs, le plus grand est le plus proche de 0.\nExemple similaire : entre −9 et −4, le plus grand est −4."
    }
  },
  stats5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=RVExjE6PGhw", t: "Lire un tableau à double entrée" },
      { u: "https://www.youtube.com/watch?v=h0urYAnMUNI", t: "Calculer une moyenne" },
      { u: "https://www.youtube.com/watch?v=MwNV5eCBFrI", t: "Calculer des fréquences" }
    ],
    resume: [
      { t: "Moyenne simple", f: "(8 + 12 + 12 + 15) ÷ 4 = 11,75", d: "Somme de toutes les valeurs ÷ nombre de valeurs." },
      { t: "Effectif", f: "« 12 » apparaît 2 fois → effectif 2", d: "L'effectif d'une valeur = le nombre de fois où elle apparaît dans la série." },
      { t: "Médiane", f: "2 ; 3 ; 5 ; 6 ; 9 → médiane 5", d: "On ordonne la série ; la médiane la partage en deux groupes de même effectif." }
    ],
    qs: [
      "Astuce : somme ÷ nombre de notes.\nExemple similaire : (7 + 9 + 14) ÷ 3 = 10.",
      "Astuce : compte les apparitions de la valeur.\nExemple similaire : 5 ; 5 ; 5 ; 2 → effectif de 5 = 3.",
      "Astuce : compte toutes les valeurs de la série.\nExemple similaire : 6 ; 8 ; 8 ; 10 ; 12 → 5 valeurs, effectif total 5.",
      "Astuce : divise la somme par l'effectif.\nExemple similaire : (4 + 11 + 15) ÷ 3 = 10.",
      "Astuce : multiplie chaque valeur par son effectif, additionne, puis divise.\nExemple similaire : (3×12 + 2×15) ÷ 5 = 66 ÷ 5 = 13,2.",
      "Astuce : moyenne = total ÷ nombre de notes.\nExemple similaire : 36 sur 4 notes → 9.",
      "Astuce : multiplie chaque valeur par son effectif, additionne, divise par l'effectif total.\nExemple similaire : (3×10 + 2×14) ÷ 5 = 58 ÷ 5 = 11,6.",
      "Astuce : somme pondérée ÷ effectif total.\nExemple similaire : 2 (5 fois) et 0 (5 fois) → (2×5) ÷ 10 = 1.",
      "Astuce : la moyenne est une valeur « centrale » : rien n'oblige chaque note à l'atteindre.\nExemple similaire : notes 8 et 17 → moyenne 12,5 sans note à 12,5.",
      "Astuce : nouvelle moyenne = nouvelle somme ÷ nouvel effectif.\nExemple similaire : 6 notes, moyenne 10 → 60 ; on ajoute 16 → 76 ÷ 7 ≈ 10,9.",
      "Astuce : ordonne la série, puis compte les valeurs.\nExemple similaire : 9 valeurs → la médiane est la 5e.",
      "Astuce : somme visée = moyenne × nombre de notes ; note manquante = différence.\nExemple similaire : 4 notes de moyenne 12 (somme 48), viser 13 sur 5 → 65 − 48 = 17.",
      "Astuce : fréquence = effectif de la valeur ÷ effectif total.\nExemple similaire : 3 garçons sur 12 élèves : 3/12 = 0,25 = 25 %.",
      "Astuce : compte les apparitions de la valeur, puis divise par le nombre total de valeurs.\nExemple similaire : 1 ; 2 ; 2 ; 4 : fréquence de 2 = 2/4 = 50 %.",
      "Astuce : ordonne la série, la médiane est la valeur du milieu.\nExemple similaire : 1 ; 3 ; 3 ; 6 ; 8 : médiane 3."
    ],
    genH: {
      1: "Astuce : l'effectif total est la somme des effectifs de chaque catégorie.\nExemple similaire : 12 + 8 + 5 = 25.",
      2: "Astuce : moyenne = somme des valeurs ÷ nombre de valeurs.\nExemple similaire : (10 + 14 + 12 + 16 + 18) ÷ 5 = 70 ÷ 5 = 14.",
      3: "Astuce : classe les valeurs ; avec 5 valeurs, la médiane est la 3ᵉ.\nExemple similaire : 2 ; 4 ; 6 ; 8 ; 10 → médiane 6.",
      4: "Astuce : fréquence = (effectif ÷ total) × 100.\nExemple similaire : 9 élèves sur 15 → 9 ÷ 15 = 0,6 = 60 %."
    }
  },
  aires5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=y-PV5LNmqsM", t: "Calculer l'aire d'un disque (Cinquième)" },
      { u: "https://www.youtube.com/watch?v=vof06TmPcQk", t: "Calculer une aire (figure composée, Cinquième)" }
    ],
    resume: [
      { t: "Périmètres", f: "rectangle : P = 2 × (L + l)", d: "carré : P = 4 × côté\ndisque : P = 2 × π × r" },
      { t: "Aires usuelles", f: "rectangle : A = L × l", d: "triangle : A = (b × h) ÷ 2\ndisque : A = π × r²" },
      { t: "Conversions d'aires", f: "1 m² = 100 dm²", d: "chaque rang : ×100\n1 dm² = 100 cm² ; 1 m² = 10 000 cm²" }
    ],
    qs: [
      "Astuce : P = 2 × (L + l).\nExemple similaire : 6 par 4 → 2 × 10 = 20 cm.",
      "Astuce : aire = L × l.\nExemple similaire : 6 × 4 = 24 cm².",
      "Astuce : (base × hauteur) ÷ 2.\nExemple similaire : base 8, h 3 → 12 cm².",
      "Astuce : A = π × r² ; ne confonds pas avec le périmètre 2πr.\nExemple similaire : r = 2 → A = 3,14 × 4 = 12,56 cm².",
      "Astuce : les unités d'aire s'échangent par 100 : 1 m² = 100 dm².\nExemple similaire : 1 dm² = 100 cm².",
      "Astuce : P = π × d ; le diamètre suffit.\nExemple similaire : d = 6 → P ≈ 18,84 cm.",
      "Astuce : A = base × hauteur.\nExemple similaire : base 5, h 9 → 45 cm².",
      "Astuce : A = (b × h) ÷ 2 → h = 2A ÷ b.\nExemple similaire : A = 20, b = 10 → h = 4.",
      "Astuce : aire du triangle = (base × hauteur) ÷ 2.\nExemple similaire : base 10, hauteur 6 → 60 ÷ 2 = 30 cm².",
      "Astuce : carré → il suffit du côté.\nExemple similaire : côté 5 → 25 cm².",
      "Astuce : les unités d'aires vont de 100 en 100 (et non de 10 en 10).\nExemple similaire : 1 m² = 100 dm².",
      "Astuce : multiplie base par hauteur, puis divise par 2.\nExemple similaire : base 12, hauteur 6 → 72 ÷ 2 = 36 cm²."
    ],
    genH: {
      1: "Astuce : périmètre du rectangle = 2 × (L + l).\nExemple similaire : 7 × 3 → 20 cm.",
      2: "Astuce : A = (base × hauteur) ÷ 2.\nExemple : base 8, hauteur 6 → 48 ÷ 2 = 24 cm²."
    }
  },
  fractions2: {
    videos: [
      { u: "https://www.youtube.com/watch?v=K7e_5LJdKPE", t: "Additionner des fractions de dénominateurs différents" }
    ],
    resume: [
      { t: "Même dénominateur", f: "1/4 + 2/4 = 3/4", d: "On additionne (ou soustrait) seulement les numérateurs." },
      { t: "Dénominateurs multiples", f: "2/3 + 1/6 = 4/6 + 1/6 = 5/6", d: "1/4 = 2/8 et 1/3 = 2/6 : on transforme avant d'opérer." },
      { t: "Manque pour l'unité", f: "1 − 3/8 = 8/8 − 3/8 = 5/8", d: "On écrit 1 = b/b avec b le dénominateur commun." }
    ],
    qs: [
      "Astuce : dénominateurs égaux → additionne simplement les numérateurs.\nExemple similaire : 2/5 + 1/5 = 3/5.",
      "Astuce : dénominateurs égaux → additionne les numérateurs.\nExemple similaire : 1/5 + 2/5 = 3/5.",
      "Astuce : même dénominateur → soustrais les numérateurs.\nExemple similaire : 5/6 − 2/6 = 3/6 = 1/2.",
      "Astuce : dénominateur commun 6 ici : 2/3 = 4/6.\nExemple similaire : 1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
      "Astuce : 3/4 = 6/8 : mets au même dénominateur puis additionne.\nExemple similaire : 1/4 + 1/8 = 2/8 + 1/8 = 3/8.",
      "Astuce : 1/3 = 2/6 → mets tout en sixièmes.\nExemple similaire : 1/4 + 1/8 = 2/8 + 1/8 = 3/8.",
      "Astuce : dénominateur commun 18.\nExemple similaire : 3/4 − 1/6 = 9/12 − 2/12 = 7/12.",
      "Astuce : 1/3 = 2/6, même dénominateur puis soustrais.\nExemple similaire : 3/4 − 1/2 = 3/4 − 2/4 = 1/4.",
      "Astuce : écris 1 = 8/8 (même dénominateur), puis soustrais.\nExemple similaire : 1 − 2/5 = 5/5 − 2/5 = 3/5.",
      "Astuce : 1/5 = 2/10 : détecte le dénominateur commun qui simplifie tout.\nExemple similaire : 1/2 + 3/10 = 5/10 + 3/10 = 8/10 = 4/5.",
      "Astuce : fraction restante = 1 − fractions mangées.\nExemple similaire : 1/2 + 1/4 mangés → reste 1/4."
    ],
    genH: {
      1: "Astuce : même dénominateur → opère sur les numérateurs.\nExemple similaire : 1/6 + 4/6 = 5/6.",
      2: "Astuce : double le premier dénominateur pour l'aligner.\nExemple similaire : 1/4 + 3/8 = 2/8 + 3/8 = 5/8."
    }

  },
  propo2: {
    videos: [
      { u: "https://www.youtube.com/watch?v=6MMvDOPKDOE", t: "Appliquer et calculer un pourcentage" },
      { u: "https://www.youtube.com/watch?v=l88QVVAAdhs", t: "Augmenter d'un pourcentage" },
      { u: "https://www.youtube.com/watch?v=lJZ_cQ-hiT8", t: "Diminuer d'un pourcentage" }
    ],
    resume: [
      { t: "Pourcentage", f: "10 % de 80 = 80 × 10/100 = 8", d: "Prendre t % = multiplier par t/100 (25 % = ÷ 4 ; 50 % = moitié)." },
      { t: "Augmenter / baisser", f: "20 € + 20 % → 20 + 4 = 24 €", d: "On calcule d'abord la part, puis on l'ajoute (ou on la retire)." },
      { t: "Fraction d'une quantité", f: "2/3 de 60 = 60 × 2 ÷ 3 = 40", d: "« de » se traduit par une multiplication." }
    ],
    qs: [
      "Astuce : 10 % = diviser par 10.\nExemple similaire : 10 % de 50 = 5.",
      "Astuce : 50 % = la moitié.\nExemple similaire : 50 % de 52 = 26.",
      "Astuce : 25 % = un quart.\nExemple similaire : 25 % de 200 = 50.",
      "Astuce : calcule l'augmentation, puis ajoute-la au prix initial.\nExemple similaire : 20 € + 20 % → 24 €.",
      "Astuce : « de » signifie « fois ».\nExemple similaire : 2/3 de 90 = 2/3 × 90 = 60.",
      "Astuce : multiplie le total par le pourcentage ÷ 100.\nExemple similaire : 25 % de 12 élèves → 12 × 25 ÷ 100 = 3.",
      "Astuce : cherche d'abord le nombre de filles (55 %), puis le complément.\nExemple similaire : 400 élèves dont 30 % en CM2 → 70 % ailleurs.",
      "Astuce : pourcentage = (partie ÷ total) × 100.\nExemple similaire : 12 gagnants sur 30 → 12/30 = 40 %.",
      "Astuce : pourcentage = (variation ÷ prix initial) × 100.\nExemple similaire : baisse de 20 € sur 80 € → 20/80 = 25 %.",
      "Astuce : calcule la baisse en €, puis soustrais-la du prix.\nExemple similaire : 60 € − 10 % → baisse 6 € → reste 54 €."
    ],
    genH: {
      2: "Astuce : multiplie par le pourcentage puis divise par 100.\nExemple similaire : 20 % de 45 = 9.",
      3: "Astuce : multiplie p par t, puis divise par 100.\nExemple similaire : 25 % de 60 = 60 × 25 ÷ 100 = 15."
    }
  },
  parallelogrammes2: {
    videos: [
      { u: "https://www.youtube.com/watch?v=e-baAiHlypg", t: "Parallélogrammes particuliers" },
      { u: "https://www.youtube.com/watch?v=y2UKmaVd0WI", t: "Carré, rectangle, losange : définitions et propriétés" }
    ],
    resume: [
      { t: "Rectangle", f: "parallélogramme + 4 angles droits", d: "Ses diagonales sont de même longueur." },
      { t: "Losange", f: "parallélogramme + 4 côtés égaux", d: "Ses diagonales sont perpendiculaires." },
      { t: "Carré", f: "rectangle ET losange", d: "4 côtés égaux ET 4 angles droits." },
      { t: "Aires", f: "parallélogramme : b × h    losange : d₁ × d₂ ÷ 2", d: "La hauteur est perpendiculaire à la base ; le losange : (d₁ × d₂) ÷ 2." }
    ],
    qs: [
      "Astuce : 4 angles droits = rectangle ; 4 côtés égaux = losange ; les deux à la fois = carré.\nExemple similaire : côtés de 5 cm partout et 4 angles droits → carré.",
      "Astuce : losange = 4 côtés égaux ET diagonales perpendiculaires. Les angles droits sont pour le carré.\nExemple similaire : « diagonales de même longueur » → rectangle.",
      "Astuce : un angle droit dans un parallélogramme → les quatre angles sont droits (rectangle).\nExemple similaire : un losange avec un angle droit serait un carré.",
      "Astuce : diagonales perpendiculaires = losange ; diagonales de même longueur = rectangle.\nExemple similaire : un losange avec des diagonales ⊥ et de même longueur → carré.",
      "Astuce : aire = base × hauteur (la hauteur : perpendiculaire du sommet à la base).\nExemple similaire : base 6 cm, hauteur 4 cm → 24 cm².",
      "Astuce : aire du losange = d₁ × d₂ ÷ 2.\nExemple similaire : diagonales 10 et 4 cm → 10 × 4 ÷ 2 = 20 cm².",
      "Astuce : un rectangle a 4 angles droits (et des diagonales de même longueur).\nExemple similaire : côtés 3 et 8 avec 4 angles droits → rectangle.",
      "Astuce : 4 côtés égaux sans angle droit → au moins un losange (s'il avait des angles droits, ce serait un carré).\nExemple similaire : côtés 4, 4, 4, 4 sans angle droit → losange.",
      "Astuce : dans un rectangle, les diagonales sont égales (pas perpendiculaires en général).\nExemple similaire : diagonales de 10 cm toutes les deux → rectangle.",
      "Astuce : le carré cumule rectangle ET losange.\nExemple similaire : tout carré est un rectangle et un losange."
    ],
    genH: {
      1: "Astuce : aire du rectangle = longueur × largeur.\nExemple similaire : 5 × 3 = 15 cm².",
      2: "Astuce : 4 côtés égaux = losange, 4 angles droits = rectangle, les deux = carré.\nExemple similaire : côtés égaux + un angle droit = carré.",
      3: "Astuce : aire = base × hauteur.\nExemple similaire : base 5 cm, hauteur 3 cm → 15 cm².",
      4: "Astuce : aire du losange = d₁ × d₂ ÷ 2.\nExemple similaire : diagonales 8 et 6 → 8 × 6 ÷ 2 = 24 cm²."
    }

  },
  equations5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=6gy3DH19Ifk", t: "Équation x + a = b" },
      { u: "https://www.youtube.com/watch?v=gcdBHwRaBa8", t: "Équation ax = b" }
    ],
    resume: [
      { t: "Équation somme", f: "x + a = b  →  x = b − a", d: "Exemple : x + 9 = 17 → x = 17 − 9 = 8. Vérification : 8 + 9 = 17." },
      { t: "Équation produit", f: "a × x = b  →  x = b ÷ a", d: "Exemple : 6 × x = 42 → x = 42 ÷ 6 = 7. Vérification : 6 × 7 = 42." },
      { t: "Tester une solution", f: "remplace x, compare les 2 membres", d: "Exemple : 3 × x + 2 = 14 avec x = 4 : 3 × 4 + 2 = 14. Les membres sont égaux, donc x = 4 est solution." }
    ],
    qs: [
      "Astuce : x est le résultat moins le nombre ajouté.\nExemple similaire : x + 5 = 12 → x = 12 − 5 = 7.",
      "Astuce : x = résultat − le nombre ajouté.\nExemple similaire : x + 7 = 14 → x = 7.",
      "Astuce : x = résultat ÷ facteur connu.\nExemple similaire : 4 × x = 28 → x = 7.",
      "Astuce : remplace x par la valeur proposée et calcule les deux membres.\nExemple similaire : 2 × x + 1 = 9 avec x = 4 : 2 × 4 + 1 = 9 → oui.",
      "Astuce : x = total − le nombre connu, même s'il est écrit en premier.\nExemple similaire : 20 + x = 35 → x = 15.",
      "Astuce : isole d'abord le produit (en ajoutant), puis divise.\nExemple similaire : 4 × x − 5 = 19 → 4 × x = 24 → x = 6.",
      "Astuce : x = résultat + le nombre retiré.\nExemple similaire : x − 15 = 3 → x = 18.",
      "Astuce : calcule l'opérateur du membre de droite d'abord, puis soustrais.\nExemple similaire : x + 2 = 4 × 5 → x + 2 = 20 → x = 18.",
      "Astuce : isole le produit, puis divise.\nExemple similaire : 20 = 3 × x + 2 → 3 × x = 18 → x = 6.",
      "Astuce : traduis l'histoire en équation, puis résous.\nExemple similaire : n + 12 = 30 → n = 18.",
      "Astuce : triple = × 3, diminué de = − . Isole le produit, puis divise.\nExemple similaire : le double d'un nombre augmenté de 3 vaut 15 → 2 × x = 12 → x = 6.",
      "Astuce : calcule l'opérateur isolé d'abord (5 × 3), puis isole le produit avec x.\nExemple similaire : 3 × x + 2 × 4 = 23 → 3 × x = 15 → x = 5."
    ],
    genH: {
      1: "Astuce : x = résultat − le nombre ajouté.\nExemple similaire : x + 7 = 14 → x = 7.",
      2: "Astuce : x = résultat total ÷ facteur.\nExemple similaire : 5 × x = 40 → x = 8.",
      3: "Astuce : calcule l'opérateur du membre de droite d'abord, puis soustrais.\nExemple similaire : x + 6 = 4 × 5 → x = 20 − 6 = 14.",
      4: "Astuce : isole le produit (+ côté droit), puis divise.\nExemple similaire : 4 × x − 6 = 14 → 4 × x = 20 → x = 5."
    }
  },
  espace2: {
    videos: [
      { u: "https://www.youtube.com/watch?v=Ao8cRWT_ELY", t: "Volume d'un prisme et d'un cylindre" }
    ],
    resume: [
      { t: "Volume du pavé", f: "V = L × l × h", d: "cube : V = arête³\nex : 4 × 3 × 5 = 60 cm³" },
      { t: "Prisme et cylindre", f: "V = (aire de la base) × hauteur", d: "cylindre : V = π × r² × h\nex : r = 3, h = 10 → 282,6 cm³" },
      { t: "Volumes et litres", f: "1 L = 1 dm³", d: "1 m³ = 1 000 L\n2,5 m³ = 2 500 L" }
    ],
    qs: [
      "Astuce : volume du pavé = longueur × largeur × hauteur.\nExemple similaire : 3 × 2 × 4 = 24 cm³.",
      "Astuce : arête × arête × arête.\nExemple similaire : arête 2 cm → 2 × 2 × 2 = 8 cm³.",
      "Astuce : multiplie les trois dimensions.\nExemple similaire : 2 × 3 × 4 = 24 cm³.",
      "Astuce : volume du pavé = produit des trois dimensions.\nExemple similaire : 4 × 3 × 5 = 60 cm³.",
      "Astuce : d'abord l'aire du disque de base (π × r²), puis × hauteur.\nExemple similaire : rayon 2, hauteur 10 → 3,14 × 4 × 10 = 125,6 cm³.",
      "Astuce : d'abord l'aire du disque de base (π × r²), puis × hauteur.\nExemple similaire : rayon 2, hauteur 10 → 3,14 × 4 × 10 = 125,6 cm³.",
      "Astuce : cherche l'arête a : V = a³.\nExemple similaire : 27 = 3 × 3 × 3 → arête 3 cm.",
      "Astuce : h = V ÷ (L × l).\nExemple similaire : V = 48, L = 6, l = 2 → h = 4 cm.",
      "Astuce : 1 L = 1 dm³ ; pour passer de dm³ à cm³ on multiplie par 1 000.\nExemple similaire : 2 L = 2 000 cm³.",
      "Astuce : 1 m³ = 1000 L.\nExemple similaire : 1,2 m³ = 1200 L.",
      "Astuce : prisme comme cylindre : V = (aire de la base) × hauteur.\nExemple similaire : base 25 cm², hauteur 4 → 100 cm³.",
      "Astuce : si chaque dimension est multipliée par k, le volume est multiplié par k × k × k.\nExemple similaire : dimensions triplées → volume ×27."
    ],
    genH: {
      2: "Astuce : multiplie les trois dimensions.\nExemple similaire : 3 × 4 × 5 = 60 cm³.",
      3: "Astuce : V = π × r² × h.\nExemple : rayon 2, hauteur 10 → 3,14 × 4 × 10 = 125,6 cm³.",
      4: "Astuce : dimensions × k → volume × k × k × k.\nExemple : k = 2 → volume ×8."
    }
  },
  proba5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=g9CT15Tz7TI", t: "Le cours : probabilités (5e)" },
      { u: "https://www.youtube.com/watch?v=a9Mb5v7Z4Mw", t: "Calculs de probabilités très simples" }
    ],
    resume: [
      { t: "Vocabulaire", f: "univers Ω = toutes les issues\névénement = des issues", d: "Exemple (dé) : Ω = {1 ; 2 ; 3 ; 4 ; 5 ; 6} ; « obtenir un pair » = {2 ; 4 ; 6}." },
      { t: "Probabilité (équiprobable)", f: "p = cas favorables ÷ cas possibles", d: "Exemple : P(pair) = 3 ÷ 6 = 1/2. Résultat toujours entre 0 et 1." },
      { t: "Cas limites", f: "p = 0 : impossible\np = 1 : certain", d: "La somme des probabilités de toutes les issues vaut 1." }
    ],
    qs: [
      "Astuce : une pièce a deux faces, chacune est une issue.\nExemple similaire : une roulette à 4 zones → 4 issues.",
      "Astuce : l'univers regroupe TOUTES les issues possibles.\nExemple similaire : pour une pièce, Ω = {Pile ; Face}.",
      "Astuce : liste les nombres pairs du dé.\nExemple similaire : « obtenir plus de 4 » → {5 ; 6} → 2 cas favorables.",
      "Astuce : cas favorables ÷ cas possibles, puis simplifie.\nExemple similaire : P(impair) = 3/6 = 1/2.",
      "Astuce : une probabilité est toujours entre 0 et 1.\nExemple similaire : p = 3/2 est impossible, p = 0,25 oui (1/4).",
      "Astuce : compte toutes les billes, puis celles de la couleur voulue.\nExemple similaire : 4 rouges et 4 bleues → P(bleue) = 4/8 = 1/2.",
      "Astuce : compte les issues qui conviennent, sur 6 au total.\nExemple similaire : P(obtenir 2 ou 3) = 2/6 = 1/3.",
      "Astuce : événement élémentaire = une seule issue.\nExemple similaire : « tirer l'as de cœur » : une seule carte.",
      "Astuce : fraction puis simplifie en divisant par le PGCD.\nExemple similaire : 6 sur 24 → 6/24 = 1/4.",
      "Astuce : compte les rois (4) sur le total (32), puis simplifie.\nExemple similaire : 4 as dans 32 cartes → 4/32 = 1/8.",
      "Astuce : liste les issues : PP, PF, FP, FF — sans en oublier.\nExemple similaire : dé rouge et dé bleu → 36 issues.",
      "Astuce : p = 0 veut dire zéro chance.\nExemple similaire : « obtenir 7 » avec un dé à 6 faces : p = 0."
    ],
    genH: {
      1: "Astuce : une seule face convient, sur 6 issues équiprobables.\nExemple similaire : P(obtenir 4) = 1/6.",
      2: "Astuce : fraction rouges ÷ total, puis simplifie la fraction.\nExemple similaire : 4 rouges et 8 bleues → 4/12 = 1/3."
    }
  },
  informatique5: {
    videos: [
      { u: "https://www.lumni.fr/video/algorithmique-et-programmation-en-scratch-variables-boucles-tests", t: "Scratch : variables, boucles, tests" },
      { u: "https://www.lumni.fr/video/decouverte-de-la-plateforme-de-programmation-coder-un-jeu-sur-scratch-1-8", t: "Découvrir Scratch" }
    ],
    resume: [
      { t: "Variable", f: "n ← 3  : n prend la valeur 3", d: "La flèche est une affectation : on range 3 dans la boîte n ; on peut la changer ensuite avec n ← n + 2." },
      { t: "Boucle répéter", f: "répéter 4 fois : ajouter 3", d: "Exemple : n ← 5, puis 5 + 4 × 3 = 17 : une boucle de k ajouts de b ajoute k × b en tout." },
      { t: "Boucle tant que", f: "tant que n < 7 : ajouter 1", d: "Exemple : n = 2 → 3 ; 4 ; 5 ; 6 ; 7 : c'est 5 ajouts, la boucle s'arrête dès que la condition devient fausse." }
    ],
    qs: [
      "Astuce : suis les étapes dans l'ordre, une à une.\nExemple similaire : choisir 3 ; ajouter 4 ; doubler → 7 × 2 = 14.",
      "Astuce : la flèche ← range une valeur dans la variable.\nExemple similaire : n ← 5 met 5 dans la boîte n.",
      "Astuce : met à jour n ligne par ligne, en repartant de la valeur précédente.\nExemple similaire : n ← 2 ; n ← n + 3 ; n ← n × 2 → 5 × 2 = 10.",
      "Astuce : k ajouts de b ajoutent k × b en tout.\nExemple similaire : n ← 4, répéter 3 fois ajouter 2 → 4 + 6 = 10.",
      "Astuce : nombre de passages × augmentation = ajout total.\nExemple similaire : répéter 5 fois ajouter 3 → +15 au total.",
      "Astuce : une étape par ligne, en gardant le résultat intermédiaire.\nExemple similaire : 5 ; +2 ; ×3 → 7 × 3 = 21.",
      "Astuce : chaque passage multiplie par 3 : enchaîne les produits.\nExemple similaire : n ← 1, répéter 3 fois multiplier par 3 → 27.",
      "Astuce : liste les valeurs du compteur jusqu'à la limite.\nExemple similaire : compteur de 1, tant que < 5 → 4 ajouts (2 ; 3 ; 4 ; 5).",
      "Astuce : soustrais d'abord, puis multiplie.\nExemple similaire : 10 ; −3 ; ×4 → 7 × 4 = 28.",
      "Astuce : rejoue le programme avec a inconnu et écris l'équation.\nExemple similaire : (3 + a) × 2 = 14 → 3 + a = 7 → a = 4.",
      "Astuce : total retiré ÷ pas = nombre de passages.\nExemple similaire : de 12 à 3 en retirant 3 : 9 ÷ 3 = 3 passages.",
      "Astuce : calcule x avant l'ajout, puis soustrais pour trouver a.\nExemple similaire : x ← 2 ; x ← x × 5 ; x ← x + a = 20 → a = 10."
    ],
    genH: {
      1: "Astuce : une seule instruction : résultat = départ + ajout.\nExemple similaire : choisir 6 ; ajouter 5 → 11.",
      2: "Astuce : additions répétées = multiplication.\nExemple similaire : n ← 3, répéter 4 fois ajouter 5 → 3 + 20 = 23.",
      3: "Astuce : compte les doubles successifs, un par passage.\nExemple similaire : n ← 3, répéter 2 fois multiplier par 2 → 3 × 2 = 6, puis 6 × 2 = 12.",
      4: "Astuce : calcule (départ + ajout) entre parenthèses, puis multiplie.\nExemple similaire : choisir 4 ; ajouter 3 ; multiplier par 5 → 7 × 5 = 35."
    }
  }
};
