/* ================= BaouMaths — résumés visuels et aides par question (5e)
   resume : cartes { t: titre, f: formule mise en valeur, d: détail }
   qs     : aide par index de question (« Astuce…\nExemple : … »)
   genH   : aide appliquée aux questions générées, par difficulté 1-4 */
window.AIDE_5E = {
  calc: {
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
  relatifs: {
    resume: [
      { t: "Additionner", f: "(−5) + (−2) = −7\n(−5) + 8 = +3", d: "Même signe : on additionne les valeurs. Signes différents : on soustrait et on garde le signe du plus grand." },
      { t: "Multiplier / diviser", f: "(−) × (−) = +\n(−) × (+) = −", d: "Nombre pair de facteurs négatifs → positif ; nombre impair → négatif. Même règle pour la division." },
      { t: "Puissances", f: "(−3)² = 9   mais   −3² = −9", d: "Le carré s'applique au contenu des parenthèses. Puissance paire → positif ; impaire → négatif." }
    ],
    qs: [
      "Astuce : même signe (−) → on ajoute et on garde le −.\nExemple similaire : (−2) + (−6) = −8.",
      "Astuce : signes différents → on calcule la différence et on garde le signe du plus fort.\nExemple similaire : (−9) + 5 = −4.",
      "Astuce : soustraire, c'est ajouter l'opposé.\nExemple similaire : 4 − 9 = 4 + (−9) = −5.",
      "Astuce : deux signes négatifs → produit positif.\nExemple similaire : (−3) × (−6) = 18.",
      "Astuce : compte les signes − : ici 2, donc le produit est positif.\nExemple similaire : (−5) × 2 × (−3) = 30.",
      "Astuce : soustraire un négatif = ajouter le positif.\nExemple similaire : (−6) − (−9) = −6 + 9 = 3.",
      "Astuce : le carré d'abord (positif !), puis le produit.\nExemple similaire : (−4)² × (−1) = 16 × (−1) = −16.",
      "Astuce : multiplie d'abord, additionne ensuite.\nExemple similaire : −7 + 2 × (−4) = −7 + (−8) = −15.",
      "Astuce : (−) ÷ (−) = +.\nExemple similaire : (−20) ÷ (−4) + 1 = 5 + 1 = 6.",
      "Astuce : imagine une droite graduée et part de la température initiale.\nExemple similaire : départ −3, puis +10 puis −5 : −3 + 10 − 5 = +2.",
      "Astuce : puissance impaire d'un négatif → négatif ; paire → positif. Multiplie ensuite.\nExemple similaire : (−3)³ + 2 × (−1)² = −27 + 2 = −25.",
      "Astuce : ordre : puissance, produit, puis addition (−(−12) = +12).\nExemple similaire : 7 − (−2) × (−1)² = 7 − (−2) × 1 = 7 + 2 = 9."
    ],
    genH: {
      1: "Astuce : sur la droite graduée, part du premier nombre et avance/recule.\nExemple similaire : (−8) + 5 = −3.",
      2: "Astuce : signes égaux → produit positif ; signes opposés → négatif.\nExemple similaire : (−6) × 4 = −24.",
      3: "Astuce : produit d'abord (attention au signe), puis addition.\nExemple similaire : 3 − 2 × (−5) = 3 + 10 = 13.",
      4: "Astuce : carré d'abord — toujours positif — puis produit et différence.\nExemple similaire : (−3)² − (−3) × 2 = 9 + 6 = 15."
    }
  },
  fractions: {
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
  propo: {
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
  litteral5: {
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
  stats5: {
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
      "Astuce : somme visée = moyenne × nombre de notes ; note manquante = différence.\nExemple similaire : 4 notes de moyenne 12 (somme 48), viser 13 sur 5 → 65 − 48 = 17."
    ]
  },
  geom5: {
    resume: [
      { t: "Angles d'un triangle", f: "angle A + B + C = 180°", d: "La somme des trois angles d'un triangle vaut toujours 180°." },
      { t: "Symétrie centrale", f: "O = milieu de [MM']", d: "Le symétrique de M par rapport à O s'obtient en prolongeant [MO] d'autant ; longueurs et angles sont conservés." },
      { t: "Triangles particuliers", f: "2 angles égaux → isocèle\n3 côtés égaux → équilatéral (60°)", d: "Hauteur : du sommet, ⊥ au côté. Médiane : du sommet au milieu. Médiatrice : points à égale distance des extrémités." }
    ],
    qs: [
      "Astuce : 180° moins la somme des deux angles connus.\nExemple similaire : angles 50° et 60° → 180 − 110 = 70°.",
      "Astuce : le centre de symétrie est le MILIEU du segment reliant un point et son image.\nExemple similaire : M(2;3), O(5;3) → M'(8;3).",
      "Astuce : diagonales coupées en leur milieu = propriété de TOUS les parallélogrammes.\nExemple similaire : des diagonales de même longueur → rectangle, pas tous les parallélogrammes.",
      "Astuce : isocèle → les deux angles à la base sont égaux.\nExemple similaire : base à 70° chacun → sommet = 180 − 140 = 40°.",
      "Astuce : l'angle droit compte pour 90°.\nExemple similaire : rectangle en A, angle B = 30° → angle C = 60°.",
      "Astuce : losange = 4 côtés égaux ET diagonales perpendiculaires. Les angles droits sont pour le carré.\nExemple similaire : « diagonales de même longueur » → rectangle.",
      "Astuce : cherche d'abord le 3e angle.\nExemple similaire : 30° et 75° → 3e = 75° → deux angles égaux → isocèle.",
      "Astuce : hauteur = du sommet, perpendiculaire au côté opposé.\nExemple similaire : la médiatrice passe elle par le MILIEU, et ⊥ aussi.",
      "Astuce : trois côtés égaux = équilatéral = trois angles de 60°.\nExemple similaire : côtés 4 ; 4 ; 4 → chaque angle 60°.",
      "Astuce : une symétrie centrale conserve les longueurs.\nExemple similaire : [AB] = 12 cm → [A'B'] = 12 cm.",
      "Astuce : médiatrice = points à égale distance des extrémités.\nExemple similaire : si C est sur la médiatrice de [AB], alors CA = CB.",
      "Astuce : un angle droit dans un parallélogramme → les quatre angles sont droits (rectangle).\nExemple similaire : un losange avec un angle droit serait un carré."
    ]
  },
  aires5: {
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
  }
};
