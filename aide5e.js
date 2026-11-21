/* ================= BaouMaths — résumés visuels et aides par question (5e)
   resume : cartes { t: titre, f: formule mise en valeur, d: détail }
   qs     : aide par index de question (« Astuce…\nExemple : … »)
   genH   : aide appliquée aux questions générées, par difficulté 1-4 */
window.AIDE_5E = {
  calc: {
    videos: [
      { u: "https://www.youtube.com/watch?v=xsv49X48RvE", t: "Enchaîner des opérations sans parenthèses" },
      { u: "https://www.youtube.com/watch?v=zi17rpzxsC8", t: "Enchaîner des opérations avec parenthèses" },
    ],
    resume: [
      { t: "L'ordre de calcul", f: "1) ( )    2) × ÷    3) + −", d: "D'abord les parenthèses, puis les multiplications et divisions de gauche à droite, enfin les additions et soustractions." },
      { t: "Exemple guide", f: "3 + 5 × 2 = 3 + 10 = 13", d: "La multiplication passe avant l'addition, même si elle vient après dans l'écriture." },
      { t: "Puissance et carré", f: "(−3)² = 9  (jamais négatif)", d: "Le carré s'applique d'abord au contenu de la parenthèse, avant la multiplication extérieure." }
    ],
    qs: [
      "Astuce : la multiplication est prioritaire sur l'addition.\nExemple similaire : 4 + 6 × 3 = 4 + 18 = 22.",
      "Astuce : fais d'abord la division, ensuite la soustraction.\nExemple similaire : 15 − 9 ÷ 3 = 15 − 3 = 12.",
      "Astuce : avec des parenthèses, on les calcule d'abord, même si × vient après.\nExemple similaire : (6 + 2) × 3 = 8 × 3 = 24.",
      "Astuce : trois étapes — parenthèse, puis produit, puis addition.\nExemple similaire : 5 + 2 × (9 − 6) = 5 + 2 × 3 = 5 + 6 = 11.",
      "Astuce : ÷ et × ont le même rang : on calcule de gauche à droite.\nExemple similaire : 20 ÷ 4 × 5 = 5 × 5 = 25.",
      "Astuce : calcule les deux produits d'abord, puis enchaîne + et −.\nExemple similaire : 1 + 4 × 5 − 2 × 3 = 1 + 20 − 6 = 15.",
      "Astuce : ordre complet — parenthèse, carré, produit, addition. Un carré est toujours positif ou nul.\nExemple similaire : 2 × (3 − 6)² + 1 = 2 × 9 + 1 = 19.",
      "Astuce : va du plus intérieur au plus extérieur (parenthèse → crochets → soustraction).\nExemple similaire : 30 − [2 × (1 + 3) − 2] = 30 − 6 = 24.",
      "Astuce : calcule chaque produit séparément, puis soustrais.\nExemple similaire : 7 × 2 − 3 × 4 = 14 − 12 = 2.",
      "Astuce : traite chaque parenthèse séparément avant le produit final.\nExemple similaire : (10 − 2 × 4) × (−2)² = 2 × 4 = 8.",
      "Astuce : commence par la parenthèse la plus intérieure.\nExemple similaire : 9 − 3 × [8 ÷ (2 + 2)] = 9 − 3 × 2 = 3.",
      "Astuce : teste chaque choix jusqu'au bout, en respectant l'ordre des opérations.\nExemple similaire : 4 × 6 − 4 × 3 = 24 − 12 = 12."
    ],
    genH: {
      1: "Astuce : la multiplication est prioritaire sur l'addition.\nExemple similaire : 6 + 5 × 3 = 6 + 15 = 21.",
      2: "Astuce : produit d'abord, puis chaîne de + et −.\nExemple similaire : 12 − 3 × 2 + 3 = 12 − 6 + 3 = 9.",
      3: "Astuce : parenthèse, produit, carré, puis différence.\nExemple similaire : 3 × (3 + 6) − 3² = 27 − 9 = 18.",
      4: "Astuce : parenthèse d'abord (produits avant soustraction), produit par (−1), puis addition.\nExemple similaire : (4² − 4 × 4) × (−1) + 2 × 4 = 0 + 8 = 8."
    }
  },
  symetrie5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=o-LXjfesIxw", t: "La symétrie centrale" },
      { u: "https://www.youtube.com/watch?v=EBEiFNLxm9s", t: "Utiliser les propriétés de la symétrie centrale" },
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
      "Astuce : le centre doit être le milieu : (x + x') ÷ 2 = abscisse du centre.\nExemple similaire : symétrique de 7 par rapport à 2 : (7 + x') ÷ 2 = 2 → x' = -3.",
      "Astuce : l'image est IDENTIQUE : périmètre, aire et angles inchangés.\nExemple similaire : un triangle de côtés 3 ; 4 ; 5 cm a une image de côtés 3 ; 4 ; 5 cm.",
      "Astuce : dimensions conservées → même aire.\nExemple similaire : rectangle 5 × 2 cm → image : rectangle 5 × 2 cm, aire 10 cm²."
    ],
    genH: {
      1: "Astuce : O est le milieu de [MM'] : OM' = OM.\nExemple similaire : OM = 5 cm → OM' = 5 cm.",
      2: "Astuce : MM' = MO + OM' = 2 × MO.\nExemple similaire : OM = 6 cm → MM' = 12 cm.",
      3: "Astuce : dimensions conservées : le rectangle image est identique ; périmètre = 2 × (L + l).\nExemple similaire : 6 × 4 cm → périmètre 2 × (6 + 4) = 20 cm.",
      4: "Astuce : la symétrie centrale conserve longueurs, angles et aires (juste un demi-tour autour de O).\nExemple similaire : un triangle de côtés 3 ; 4 ; 5 cm a une image aux mêmes côtés."
    },
  },

  angles5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=H2m_XYGgFwc", t: "Propriétés des angles (5ème)" },
      { u: "https://www.youtube.com/watch?v=L9mP1DwXTDg", t: "Angles et droites parallèles" },
      { u: "https://www.youtube.com/watch?v=3h5x2gSIr-c", t: "Les angles en 5ème" },
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
    },
  },

  triangles5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=FucUXFt-wjI", t: "Somme des angles d'un triangle" },
      { u: "https://www.youtube.com/watch?v=rJvF6iENYME", t: "L'inégalité triangulaire" },
      { u: "https://www.youtube.com/watch?v=u1rqg_5pL1s", t: "Reconnaître des triangles égaux" },
      { u: "https://www.youtube.com/watch?v=7inMCnths8I", t: "Médiatrices et cercle circonscrit" },
      { u: "https://www.youtube.com/watch?v=k3_g9amoIDE", t: "Les hauteurs d'un triangle" },
    ],
    resume: [
      { t: "Somme des angles", f: "A + B + C = 180°", d: "Toujours 180° : pour trouver un angle, soustrais la somme des deux autres." },
      { t: "Inégalité triangulaire", f: "plus grand côté < somme des 2 autres", d: "Sinon le triangle n'existe pas." },
      { t: "Triangles particuliers", f: "2 côtés égaux → isocèle\n3 côtés égaux → équilatéral (60°)", d: "Rectangle : un angle droit." },
      { t: "Droites remarquables", f: "médiatrice · hauteur · médiane", d: "Médiatrice : milieu + ⊥ (cercle circonscrit). Hauteur : du sommet, ⊥ au côté opposé (orthocentre). Médiane : du sommet au milieu du côté (centre de gravité)." }
    ],
    qs: [
      "Astuce : 180° moins la somme des deux angles connus.\nExemple similaire : angles 50° et 60° → 180 − 110 = 70°.",
      "Astuce : trois côtés → trois médiatrices, qui se coupent au centre du cercle circonscrit.\nExemple similaire : la médiatrice de [AB] = tous les points à égale distance de A et de B.",
      "Astuce : isocèle = 2 côtés égaux (et donc 2 angles à la base égaux).\nExemple similaire : côtés 6 ; 6 ; 4 → isocèle.",
      "Astuce : isocèle → les deux angles à la base sont égaux.\nExemple similaire : base à 70° chacun → sommet = 180 − 140 = 40°.",
      "Astuce : l'angle droit compte pour 90°.\nExemple similaire : rectangle en A, angle B = 30° → angle C = 60°.",
      "Astuce : compare le plus grand côté à la somme des deux autres.\nExemple similaire : côtés 4 ; 6 ; 9 : 9 < 10, le triangle existe.",
      "Astuce : cherche d'abord le 3e angle.\nExemple similaire : 30° et 75° → 3e = 75° → deux angles égaux → isocèle.",
      "Astuce : hauteur = du sommet, perpendiculaire au côté opposé.\nExemple similaire : la médiatrice passe elle par le MILIEU, et ⊥ aussi.",
      "Astuce : 180 − 90 − l'angle connu.\nExemple similaire : triangle rectangle avec un angle de 30° → le troisième = 60°.",
      "Astuce : médiatrice = points à égale distance des extrémités.\nExemple similaire : si C est sur la médiatrice de [AB], alors CA = CB.",
      "Astuce : médiatrice → cercle circonscrit ; hauteur → orthocentre ; médiane → centre de gravité.\nExemple similaire : les 3 médianes se coupent au centre de gravité.",
      "Astuce : les angles à la base d'un isocèle sont égaux : (180 − angle au sommet) ÷ 2.\nExemple similaire : sommet 40° → base = (180 − 40) ÷ 2 = 70°."
    ],
    genH: {
      1: "Astuce : les trois angles d'un triangle totalisent 180°.\nExemple similaire : pour 50° et 60°, le troisième mesure 180 − 50 − 60 = 70°.",
      2: "Astuce : isocèle : les angles à la base sont égaux ; sommet = 180 − 2 × angle.\nExemple similaire : base 65° → sommet = 180 − 130 = 50°.",
      3: "Astuce : triangle rectangle : l'angle droit = 90° → troisième = 90 − angle.\nExemple similaire : un angle de 55° → le troisième = 35°.",
      4: "Astuce : angles à la base = (180 − angle au sommet) ÷ 2.\nExemple similaire : sommet 60° → base = (180 − 60) ÷ 2 = 60° (triangle équilatéral)."
    },
  },

  parallelogrammes5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=4dGM22L9030", t: "Le parallélogramme" },
      { u: "https://www.youtube.com/watch?v=hUoaHWdYi_8", t: "Reconnaître un parallélogramme" },
      { u: "https://www.youtube.com/watch?v=e-baAiHlypg", t: "Parallélogrammes particuliers" },
      { u: "https://www.youtube.com/watch?v=y2UKmaVd0WI", t: "Carré, rectangle, losange : définitions et propriétés" },
      { u: "https://www.youtube.com/watch?v=DRGJ2Y_TyCI", t: "Construire un parallélogramme au compas" },
      { u: "https://www.youtube.com/watch?v=RrdxZu9l1_8", t: "Construire un parallélogramme règle et équerre" },
      { u: "https://www.youtube.com/watch?v=ctVWi7FakFc", t: "Construire un parallélogramme sur quadrillage" },
    ],
    resume: [
      { t: "Parallélogramme", f: "côtés opposés ∥ et égaux", d: "Diagonales coupées en leur milieu (= centre de symétrie) ; angles opposés égaux ; angles consécutifs supplémentaires." },
      { t: "Rectangle", f: "parallélogramme + angle droit", d: "4 angles droits ; diagonales de MÊME longueur." },
      { t: "Losange", f: "parallélogramme + 4 côtés égaux", d: "Diagonales PERPENDICULAIRES." },
      { t: "Carré et aires", f: "carré = rectangle + losange", d: "Aire d'un parallélogramme = base × hauteur ; aire d'un losange = d₁ × d₂ ÷ 2." }
    ],
    qs: [
      "Astuce : diagonales coupées en leur milieu = propriété de TOUS les parallélogrammes.\nExemple similaire : des diagonales de même longueur → rectangle, pas tous les parallélogrammes.",
      "Astuce : 4 angles droits = rectangle ; 4 côtés égaux = losange ; les deux à la fois = carré.\nExemple similaire : côtés de 5 cm partout et 4 angles droits → carré.",
      "Astuce : parallélogramme = côtés opposés PARALLÈLES, donc de même longueur.\nExemple similaire : [AB] et [DC] parallèles et AB = DC.",
      "Astuce : losange = 4 côtés égaux ET diagonales perpendiculaires. Les angles droits sont pour le carré.\nExemple similaire : « diagonales de même longueur » → rectangle.",
      "Astuce : côté opposé = même longueur ; périmètre = 2 × (a + b).\nExemple similaire : côtés 6 cm et 3 cm → 2 × (6 + 3) = 18 cm.",
      "Astuce : angles opposés égaux ; angles consécutifs supplémentaires (somme 180°).\nExemple similaire : angles de 120° et 60° en vis-à-vis.",
      "Astuce : les angles opposés d'un parallélogramme sont ÉGAUX.\nExemple similaire : l'un 72° → l'opposé 72°.",
      "Astuce : un angle droit dans un parallélogramme → les quatre angles sont droits (rectangle).\nExemple similaire : un losange avec un angle droit serait un carré.",
      "Astuce : aire = base × hauteur (la hauteur : perpendiculaire du sommet à la base).\nExemple similaire : base 6 cm, hauteur 4 cm → 24 cm².",
      "Astuce : angles consécutifs = supplémentaires → 180 − angle.\nExemple similaire : angle 70° → consécutif 110°.",
      "Astuce : diagonales perpendiculaires = losange ; diagonales de même longueur = rectangle.\nExemple similaire : un losange avec des diagonales ⊥ et de même longueur → carré.",
      "Astuce : aire du losange = d₁ × d₂ ÷ 2.\nExemple similaire : diagonales 10 et 4 cm → 10 × 4 ÷ 2 = 20 cm²."
    ],
    genH: {
      1: "Astuce : les angles opposés d'un parallélogramme sont égaux.\nExemple similaire : l'un 84° → l'opposé 84°.",
      2: "Astuce : angles consécutifs supplémentaires : 180 − angle.\nExemple similaire : angle 98° → consécutif 82°.",
      3: "Astuce : aire du parallélogramme = base × hauteur.\nExemple similaire : base 11 cm, hauteur 3 cm → 33 cm².",
      4: "Astuce : aire du losange = d₁ × d₂ ÷ 2.\nExemple similaire : diagonales 8 et 5 cm → 20 cm²."
    },
  },
  fractions: {
    videos: [
      { u: "https://www.youtube.com/watch?v=RJwAP3LNPqA", t: "Fractions égales et simplification" },
      { u: "https://www.youtube.com/watch?v=Kgy1Uv0KAdY", t: "Comparer une fraction à l'unité" },
      { u: "https://www.youtube.com/watch?v=K7e_5LJdKPE", t: "Additionner des fractions de dénominateurs différents" },
    ],
    resume: [
      { t: "Addition / soustraction", f: "2/3 + 1/6 = 4/6 + 1/6 = 5/6", d: "On met d'abord au même dénominateur, puis on additionne les numérateurs." },
      { t: "Fraction d'une quantité", f: "2/3 de 60 = 60 × 2 = 120 → ÷ 3 = 40", d: "« 2/3 de 60 » : on multiplie par le numérateur puis on divise par le dénominateur (ou l'inverse, le résultat est le même)." },
      { t: "Simplification", f: "12/18 = 2/3   (÷6)", d: "On divise numérateur et dénominateur par un même nombre, jusqu'à la fraction irréductible." }
    ],
    qs: [
      "Astuce : cherche le plus grand diviseur commun.\nExemple similaire : 15/25 = 3/5 (÷5).",
      "Astuce : dénominateurs égaux → additionne simplement les numérateurs.\nExemple similaire : 2/5 + 1/5 = 3/5.",
      "Astuce : cherche une fraction égale en divisant numérateur et dénominateur.\nExemple similaire : 4/8 = 1/2 et 3/6 = 1/2.",
      "Astuce : dénominateur commun 6 ici : 2/3 = 4/6.\nExemple similaire : 1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
      "Astuce : 3/4 = 6/8 : mets au même dénominateur puis additionne.\nExemple similaire : 1/4 + 1/8 = 2/8 + 1/8 = 3/8.",
      "Astuce : mets tout au même dénominateur pour comparer.\nExemple similaire : 1/2 = 4/8 et 5/8 : le plus grand est 5/8.",
      "Astuce : dénominateur commun 18.\nExemple similaire : 3/4 − 1/6 = 9/12 − 2/12 = 7/12.",
      "Astuce : « de » signifie « fois ».\nExemple similaire : 2/3 de 90 = 2/3 × 90 = 60.",
      "Astuce : 1/3 = 2/6, même dénominateur puis soustrais.\nExemple similaire : 3/4 − 1/2 = 3/4 − 2/4 = 1/4.",
      "Astuce : écris 1 = 8/8 (même dénominateur), puis soustrais.\nExemple similaire : 1 − 2/5 = 5/5 − 2/5 = 3/5.",
      "Astuce : 1/5 = 2/10 : détecte le dénominateur commun qui simplifie tout.\nExemple similaire : 1/2 + 3/10 = 5/10 + 3/10 = 8/10 = 4/5.",
      "Astuce : fraction restante = 1 − fractions mangées.\nExemple similaire : 1/2 + 1/4 mangés → reste 1/4."
    ],
    genH: {
      1: "Astuce : divise numérateur et dénominateur par le même nombre.\nExemple similaire : 20/35 = 4/7 (÷5)."
    }
  },
  arithmetique5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=phQY4ybQrUI", t: "Poser une division euclidienne" },
      { u: "https://www.youtube.com/watch?v=y3nU79nBMpw", t: "Divisibilité par 2" },
      { u: "https://www.youtube.com/watch?v=d0JC5Ar_Jzc", t: "Divisibilité par 3 et 9" },
      { u: "https://www.youtube.com/watch?v=kWMh9eZJIxQ", t: "Nombres premiers : définition" },
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
      "Astuce : simplifie par les facteurs communs, autant de fois que possible.\nExemple similaire : 24/36 → par 2 : 12/18 → par 2 : 6/9 → par 3 : 2/3.",
      "Astuce : divise par 2 une première fois : si le résultat est encore pair, le nombre est divisible par 4.\nExemple similaire : 132 ÷ 2 = 66, pair → 132 est divisible par 4.",
      "Astuce : isole 11 × z = 362 − 10, puis divise.\nExemple similaire : 100 = 9 × z + 10 → 9 × z = 90 → z = 10.",
      "Astuce : sauf 2, tous les nombres premiers sont impairs, et le produit de deux impairs est impair.\nExemple similaire : 3 × 5 = 15, impair."
    ],
    genH: {
      1: "Astuce : cherche le multiple du diviseur juste en dessous du nombre, le reste est ce qui manque.\nExemple similaire : 47 = 6 × 7 + 5 → reste 5.",
      2: "Astuce : additionne les chiffres : si la somme est dans la table de 3, le nombre est divisible par 3.\nExemple similaire : 271 → 2 + 7 + 1 = 10 → non ; 273 → 12 → oui."
    }
  },
  propo: {
    videos: [
      { u: "https://www.youtube.com/watch?v=leBAfrIbAbk", t: "Le tableau de proportionnalité" },
      { u: "https://www.youtube.com/watch?v=6MMvDOPKDOE", t: "Appliquer et calculer un pourcentage" },
    ],
    resume: [
      { t: "Tableau de proportionnalité", f: "3 → 6 €\n1 → 2 €   (÷3)\n5 → 10 €  (×5)", d: "Le coefficient multiplie toute la colonne : passer par l'unité évite les erreurs." },
      { t: "Pourcentages", f: "10 % de 80 = 80 × 10/100 = 8", d: "Repères : 50 % = moitié, 25 % = quart, 10 % = dixième. Sinon on multiplie par t/100." },
      { t: "Échelle", f: "1/100 000 : 1 cm → 1 km", d: "Multiplie la distance mesurée par le dénominateur de l'échelle, puis convertis en unité lisible." }
    ],
    qs: [
      "Astuce : cherche d'abord le prix d'UN objet.\nExemple similaire : 4 cahiers = 8 € → 1 = 2 € → 7 = 14 €.",
      "Astuce : 10 % = diviser par 10.\nExemple similaire : 10 % de 50 = 5.",
      "Astuce : 50 % = la moitié.\nExemple similaire : 50 % de 52 = 26.",
      "Astuce : 25 % = un quart.\nExemple similaire : 25 % de 200 = 50.",
      "Astuce : calcule l'augmentation, puis ajoute-la au prix initial.\nExemple similaire : 20 € + 20 % → 24 €.",
      "Astuce : 1 cm sur la carte vaut 100 000 cm réels = 1 km.\nExemple similaire : 6 cm à l'échelle 1/100 000 → 6 km.",
      "Astuce : calcule le montant de la baisse, retire-le du prix initial.\nExemple similaire : 50 € soldés à −20 % → baisse de 10 → 40 €.",
      "Astuce : coefficient = 24 ÷ 15, applique-le à 40.\nExemple similaire : 6 kg pour 9 € → 10 kg pour 15 €.",
      "Astuce : après +10 %, le prix vaut 110 % de l'ancien : divise par 1,1.\nExemple similaire : 33 € après +10 % → ancien = 33 ÷ 1,1 = 30 €.",
      "Astuce : cherche d'abord le nombre de filles (55 %), puis le complément.\nExemple similaire : 400 élèves dont 30 % en CM2 → 70 % ailleurs.",
      "Astuce : baisse en % = écart ÷ prix initial × 100.\nExemple similaire : de 60 € à 45 € → 15/60 = 25 %.",
      "Astuce : divise la dimension réelle par 50 pour la maquette.\nExemple similaire : 20 m à l'échelle 1/50 → 2000 ÷ 50 = 40 cm."
    ],
    genH: {
      2: "Astuce : multiplie par le pourcentage puis divise par 100.\nExemple similaire : 20 % de 45 = 9.",
      3: "Astuce : baisse = p × t/100 ; prix soldé = p − baisse.\nExemple similaire : 60 € à −50 % → 30 €."
    }
  },
  relatifs: {
    videos: [
      { u: "https://www.youtube.com/watch?v=WauL1kM2lmQ", t: "Repérer un nombre relatif" },
      { u: "https://www.youtube.com/watch?v=4hRzrbn32V8", t: "Comparer des nombres relatifs" },
      { u: "https://www.youtube.com/watch?v=I0NiW8GeHEY", t: "Additionner des nombres relatifs" },
      { u: "https://www.youtube.com/watch?v=3YKQYLe93Yk", t: "Soustraire des nombres relatifs" },
    ],
    resume: [
      { t: "Repérage et opposés", f: "A(3 ; −2)\nopposé de 6 : −6", d: "Dans le plan : abscisse (droite/gauche), ordonnée (haut/bas). Deux opposés sont de part et d'autre de 0, à la même distance." },
      { t: "Comparer", f: "−7 < −2 < 0 < 3", d: "Tout négatif est plus petit que tout positif. Entre deux négatifs, le plus petit est le plus loin de 0." },
      { t: "Additionner − soustraire", f: "(−5) + 8 = +3\n(−10) − (−4) = −6", d: "Même signe : on ajoute. Signes contraires : on soustrait et on garde le signe du plus loin de 0. Soustraire = ajouter l'opposé." }
    ],
    qs: [
      "Astuce : même signe (−) → on ajoute et on garde le −.\nExemple similaire : (−2) + (−6) = −8.",
      "Astuce : signes différents → on calcule la différence et on garde le signe du plus loin de 0.\nExemple similaire : (−9) + 5 = −4.",
      "Astuce : sur la droite graduée, part de 6 et recule de 10 crans.\nExemple similaire : 4 − 9 = −5.",
      "Astuce : l'opposé est à la même distance de 0, de l'autre côté.\nExemple similaire : l'opposé de −3 est 3.",
      "Astuce : soustraire un négatif = ajouter le positif.\nExemple similaire : (−6) − (−9) = −6 + 9 = 3.",
      "Astuce : place les nombres sur une droite graduée, le plus petit est à gauche.\nExemple similaire : entre −5 et −1, le plus petit est −5.",
      "Astuce : abscisse = horizontal (droite si positive), ordonnée = vertical (haut si positive).\nExemple similaire : B(−2 ; 4) est à gauche et en haut.",
      "Astuce : procède de gauche à droite, un calcul à la fois.\nExemple similaire : −4 + 7 − 10 = 3 − 10 = −7.",
      "Astuce : la distance à zéro de −5, c'est sa partie numérique (sans le signe).\nExemple similaire : distance à zéro de −9 : 9.",
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
      { u: "https://www.youtube.com/watch?v=MwNV5eCBFrI", t: "Calculer des fréquences" },
    ],
    resume: [
      { t: "Moyenne simple", f: "(8 + 12 + 12 + 15) ÷ 4 = 11,75", d: "Somme de toutes les valeurs ÷ nombre de valeurs." },
      { t: "Effectif", f: "« 12 » apparaît 2 fois → effectif 2", d: "L'effectif d'une valeur = le nombre de fois où elle apparaît dans la série." },
      { t: "Étendue", f: "max − min = 12 − 1 = 11", d: "L'étendue mesure l'écart entre la plus grande et la plus petite valeur." }
    ],
    qs: [
      "Astuce : somme ÷ nombre de notes.\nExemple similaire : (7 + 9 + 14) ÷ 3 = 10.",
      "Astuce : compte les apparitions de la valeur.\nExemple similaire : 5 ; 5 ; 5 ; 2 → effectif de 5 = 3.",
      "Astuce : trie d'abord la série.\nExemple similaire : 2 ; 10 ; 3 → triée 2 ; 3 ; 10 → étendue 8.",
      "Astuce : divise la somme par l'effectif.\nExemple similaire : (4 + 11 + 15) ÷ 3 = 10.",
      "Astuce : cherche max et min après tri.\nExemple similaire : max 6 mm, min 0 mm → étendue 6 mm.",
      "Astuce : moyenne = total ÷ nombre de notes.\nExemple similaire : 36 sur 4 notes → 9.",
      "Astuce : multiplie chaque valeur par son effectif, additionne, divise par l'effectif total.\nExemple similaire : (3×10 + 2×14) ÷ 5 = 58 ÷ 5 = 11,6.",
      "Astuce : somme pondérée ÷ effectif total.\nExemple similaire : 2 (5 fois) et 0 (5 fois) → (2×5) ÷ 10 = 1.",
      "Astuce : la moyenne est une valeur « centrale » : rien n'oblige chaque note à l'atteindre.\nExemple similaire : notes 8 et 17 → moyenne 12,5 sans note à 12,5.",
      "Astuce : nouvelle moyenne = nouvelle somme ÷ nouvel effectif.\nExemple similaire : 6 notes, moyenne 10 → 60 ; on ajoute 16 → 76 ÷ 7 ≈ 10,9.",
      "Astuce : étendue = max − min pour chaque série.\nExemple similaire : série 1 ; 9 → étendue 8.",
      "Astuce : somme visée = moyenne × nombre de notes ; note manquante = différence.\nExemple similaire : 4 notes de moyenne 12 (somme 48), viser 13 sur 5 → 65 − 48 = 17.",
      "Astuce : fréquence = effectif de la valeur ÷ effectif total.\nExemple similaire : 3 garçons sur 12 élèves : 3/12 = 0,25 = 25 %.",
      "Astuce : compte les apparitions de la valeur, puis divise par le nombre total de valeurs.\nExemple similaire : 1 ; 2 ; 2 ; 4 : fréquence de 2 = 2/4 = 50 %.",
      "Astuce : ordonne la série, la médiane est la valeur du milieu.\nExemple similaire : 1 ; 3 ; 3 ; 6 ; 8 : médiane 3.",
    ],
    genH: {
      1: "Astuce : l'effectif total est la somme des effectifs de chaque catégorie.\nExemple similaire : 12 + 8 + 5 = 25.",
      2: "Astuce : moyenne = somme des valeurs ÷ nombre de valeurs.\nExemple similaire : (10 + 14 + 12 + 16 + 18) ÷ 5 = 70 ÷ 5 = 14.",
      3: "Astuce : classe les valeurs ; avec 5 valeurs, la médiane est la 3ᵉ.\nExemple similaire : 2 ; 4 ; 6 ; 8 ; 10 → médiane 6.",
      4: "Astuce : fréquence = (effectif ÷ total) × 100.\nExemple similaire : 9 élèves sur 15 → 9 ÷ 15 = 0,6 = 60 %."
    },
  },
  litteral5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=eBPOd0bTBro", t: "Simplifier une expression" },
      { u: "https://www.youtube.com/watch?v=xZCXVgGT_Bk", t: "Tester une égalité" },
    ],
    resume: [
      { t: "Simple distributivité", f: "k × (a + b) = k×a + k×b\n3 × (x + 2) = 3x + 6", d: "On distribue le facteur k à CHAQUE terme de la parenthèse (attention aux signes)." },
      { t: "Réduire", f: "4x + 3 + 5x = 9x + 3", d: "On regroupe les termes « semblables » (les x entre eux, les nombres entre eux). Mais 3x + 5 ne se réduit pas." },
      { t: "Tester une valeur", f: "2x + 5 pour x = 3 → 2×3 + 5 = 11", d: "On remplace la lettre par sa valeur, puis on calcule en respectant les priorités." }
    ],
    qs: [
      "Astuce : distribue le 3 aux deux termes.\nExemple similaire : 4 × (x + 5) = 4x + 20.",
      "Astuce : regroupe les x entre eux, puis les nombres.\nExemple similaire : 6a + 2 + a = 7a + 2.",
      "Astuce : distribue aussi sur le « − » : 5 × (−a) = −5a.\nExemple similaire : 3 × (4 − b) = 12 − 3b.",
      "Astuce : regroupe séparément les a et les nombres.\nExemple similaire : 5m − 3 + m − 4 = 6m − 7.",
      "Astuce : développe d'abord, réduis ensuite.\nExemple similaire : 3(2x + 1) + 2x = 6x + 3 + 2x = 8x + 3.",
      "Astuce : teste la distributivité : k(a − b) = ka − kb.\nExemple similaire : 4 × 7 − 4 × 2 = 20 = 4 × (7 − 2).",
      "Astuce : factoriser = écrire un produit ; cherche le facteur commun.\nExemple similaire : 7x + 21 = 7(x + 3).",
      "Astuce : développe, réduis, attention aux signes.\nExemple similaire : 2(4x − 1) − 3x = 8x − 2 − 3x = 5x − 2.",
      "Astuce : remplace la lettre par sa valeur puis calcule.\nExemple similaire : 3y + 1 pour y = 4 → 13.",
      "Astuce : développe les deux côtés puis regroupe les x d'un côté.\nExemple similaire : 2(x + 1) = x + 4 → 2x + 2 = x + 4 → x = 2.",
      "Astuce : −2 × 3 = −6 et −2 × (−x) = +2x.\nExemple similaire : −3(2 − x) + x = −6 + 3x + x = 4x − 6.",
      "Astuce : périmètre du rectangle = 2 × (longueur + largeur).\nExemple similaire : largeur x, longueur x + 3 → P = 2(2x + 3) = 4x + 6."
    ],
    genH: {
      2: "Astuce : multiplie k par x (kx) et k par le nombre.\nExemple similaire : 4 × (x + 3) = 4x + 12.",
      3: "Astuce : développe, calcule les constantes, puis réduis les x.\nExemple similaire : 3(2x + 4) − 2x = 6x + 12 − 2x = 4x + 12."
    }
  },
  aires5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=Ao8cRWT_ELY", t: "Volume d'un prisme et d'un cylindre" },
    ],
    resume: [
      { t: "Rectangle", f: "P = 2 × (L + l)\nA = L × l", d: "Périmètre en unités de longueur, aire en unités²." },
      { t: "Triangle et disque", f: "A(triangle) = (b × h) ÷ 2\nA(disque) = π × r²", d: "Attention : le périmètre du disque est 2 × π × r (ou π × d), pas son aire !" },
      { t: "Volumes et conversions", f: "V(pavé) = L × l × h\n1 L = 1 dm³   1 m² = 100 dm²", d: "Conversions : longueur ×10, aire ×100, volume ×1000 par échelon. 1 cm³ = 1 mL." }
    ],
    qs: [
      "Astuce : P = 2 × (L + l).\nExemple similaire : 6 par 4 → 2 × 10 = 20 cm.",
      "Astuce : aire = L × l.\nExemple similaire : 6 × 4 = 24 cm².",
      "Astuce : (base × hauteur) ÷ 2.\nExemple similaire : base 8, h 3 → 12 cm².",
      "Astuce : A = π × r² ; ne confonds pas avec le périmètre 2πr.\nExemple similaire : r = 2 → A = 3,14 × 4 = 12,56 cm².",
      "Astuce : multiplie les trois dimensions.\nExemple similaire : 2 × 3 × 4 = 24 cm³.",
      "Astuce : les unités d'aire s'échangent par 100 : 1 m² = 100 dm².\nExemple similaire : 1 dm² = 100 cm².",
      "Astuce : P = π × d ; le diamètre suffit.\nExemple similaire : d = 6 → P ≈ 18,84 cm.",
      "Astuce : prisme = aire de la base × hauteur.\nExemple similaire : disque r = 1, h = 5 → 3,14 × 5 = 15,7 cm³.",
      "Astuce : cherche l'arête a : V = a³.\nExemple similaire : 27 = 3 × 3 × 3 → arête 3 cm.",
      "Astuce : A = base × hauteur.\nExemple similaire : base 5, h 9 → 45 cm².",
      "Astuce : 1 m³ = 1000 L.\nExemple similaire : 1,2 m³ = 1200 L.",
      "Astuce : A = (b × h) ÷ 2 → h = 2A ÷ b.\nExemple similaire : A = 20, b = 10 → h = 4."
    ],
    genH: {
      1: "Astuce : périmètre du rectangle = 2 × (L + l).\nExemple similaire : 7 × 3 → 20 cm.",
      2: "Astuce : multiplie les trois dimensions.\nExemple similaire : 3 × 4 × 5 = 60 cm³."
    }
  },
  proba5: {
    videos: [
      { u: "https://www.youtube.com/watch?v=g9CT15Tz7TI", t: "Le cours : probabilités (5e)" },
      { u: "https://www.youtube.com/watch?v=a9Mb5v7Z4Mw", t: "Calculs de probabilités très simples" },
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
  }
};
