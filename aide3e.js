/* ================= BaouMaths — résumés visuels et aides par question (3e)
   resume : cartes { t: titre, f: formule mise en valeur, d: détail }
   qs     : aide par index de question (« Astuce…\nExemple : … »)
   genH   : aide appliquée aux questions générées, par difficulté 1-4 */
window.AIDE_3E = {
  racines: {
    videos: [
      { u: "https://www.youtube.com/watch?v=y2HlgP09Bog", t: "Calculer une racine carrée" },
      { u: "https://www.youtube.com/watch?v=bjS5LW-hgWk", t: "Encadrer une racine carrée" },
    ],
    resume: [
      { t: "Définition", f: "(√a)² = a\n√(a²) = a   (a ≥ 0)", d: "√a est le nombre POSITIF dont le carré vaut a : √49 = 7 (jamais −7)." },
      { t: "Produit et quotient", f: "√(a × b) = √a × √b\n√(a ÷ b) = √a ÷ √b", d: "Exemple : √(4 × 9) = √4 × √9 = 6. ATTENTION : √(a + b) ≠ √a + √b !" },
      { t: "Simplifier", f: "√50 = √(25 × 2) = 5√2", d: "Cherche le plus grand carré parfait qui divise le nombre (4, 9, 16, 25, 36, 49, 64…)." }
    ],
    qs: [
      "Astuce : cherche le nombre positif dont le carré vaut 49.\nExemple similaire : √81 = 9.",
      "Astuce : le carré « annule » la racine.\nExemple similaire : (√7)² = 7.",
      "Astuce : décompose dans les deux sens.\nExemple similaire : 49 = 7², donc 7² = 49 et √49 = 7.",
      "Astuce : factorise par le plus grand carré parfait : 50 = 25 × 2.\nExemple similaire : √75 = √(25 × 3) = 5√3.",
      "Astuce : calcule CHAQUE racine puis additionne (jamais sous une seule racine !).\nExemple similaire : √16 + √25 = 4 + 5 = 9.",
      "Astuce : regroupe les racines en produit : √18 × √2 = √36.\nExemple similaire : 3√8 × √2 = 3√16 = 12.",
      "Astuce : cherche le plus grand carré parfait dans 72 (36).\nExemple similaire : √98 = √(49 × 2) = 7√2.",
      "Astuce : simplifie √20 = 2√5, puis soustrais les √5 (mêmes « unités »).\nExemple similaire : 5√3 − √12 = 5√3 − 2√3 = 3√3.",
      "Astuce : encadre 30 entre deux carrés parfaits voisins : 25 et 36.\nExemple similaire : √45 : 36 < 45 < 49 → entre 6 et 7.",
      "Astuce : identité (a + b)² = a² + 2ab + b², ici a = 1, b = √2.\nExemple similaire : (2 + √3)² = 4 + 4√3 + 3 = 7 + 4√3.",
      "Astuce : multiplie et divise SOUS une seule racine.\nExemple similaire : √8 × √6 ÷ √12 = √(48 ÷ 12) = √4 = 2.",
      "Astuce : l'aire du carré est (côté)², et (√8)² = 8.\nExemple similaire : carré de côté √3 → aire 3."
    ],
    genH: {
      2: "Astuce : cherche le plus grand carré parfait qui divise le nombre sous la racine.\nExemple similaire : √27 = √(9 × 3) = 3√3.",
      3: "Astuce : encadre le nombre entre deux carrés parfaits consécutifs.\nExemple similaire : 40 : 36 < 40 < 49 → √40 entre 6 et 7."
    }
  },
fractions3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=Z86gfJOKgBg", t: "Calculs de fractions (1)" },
      { u: "https://www.youtube.com/watch?v=1yV5scwCwvg", t: "Calculs de fractions (2)" },
      { u: "https://www.youtube.com/watch?v=qZaTliAWkA0", t: "Rendre une fraction irréductible" }
    ],
    resume: [
      { t: "Règle des signes", f: "(−) × (−) = +\n(−) × (+) = −", d: "Nombre pair de facteurs négatifs → produit positif ; impair → négatif. Même règle pour la division." },
      { t: "Additionner / soustraire", f: "2/3 − 1/6 = 4/6 − 1/6 = 3/6 = 1/2", d: "Même dénominateur d'abord, puis on opère sur les numérateurs." },
      { t: "Multiplier / diviser", f: "a/b × c/d = ac/bd\na ÷ (b/c) = a × c/b", d: "Diviser par une fraction : multiplier par son inverse (l'inverse de a/b est b/a)." }
    ],
    qs: [
      "Astuce : compte les facteurs négatifs : impair → produit négatif.\nExemple similaire : 4 facteurs négatifs → positif.",
      "Astuce : applique la règle des signes, puis multiplie les numérateurs entre eux et les dénominateurs entre eux.\nExemple similaire : (−3/4) × (2/5) = −(3 × 2)/(4 × 5) = −6/20 = −3/10.",
      "Astuce : dénominateur commun 6.\nExemple similaire : 1/2 − 1/4 = 2/4 − 1/4 = 1/4.",
      "Astuce : cherche un dénominateur commun : 12 convient pour 4 et 6, puis additionne les numérateurs.\nExemple similaire : 1/4 + 1/6 = 3/12 + 2/12 = 5/12.",
      "Astuce : diviser par b/c revient à multiplier par son inverse c/b.\nExemple similaire : 5 ÷ (5/3) = 5 × 3/5 = 3.",
      "Astuce : un quotient de deux nombres négatifs est positif ; diviser par −1/2 revient à multiplier par −2.\nExemple similaire : (−1/2) ÷ (−1/4) = (−1/2) × (−4) = 2.",
      "Astuce : commence par la somme entre parenthèses avec le dénominateur 6, puis multiplie.\nExemple similaire : (1/2 − 1/6) × 6 : 1/2 − 1/6 = 2/6 = 1/3, puis 1/3 × 6 = 2.",
      "Astuce : échange numérateur et dénominateur sans changer le signe.\nExemple similaire : l'inverse de −3/5 est −5/3.",
      "Astuce : simplifie d'abord chaque parenthèse en une fraction, puis multiplie par l'inverse.\nExemple similaire : (1 + 1/2) ÷ (2 − 1/4) = (3/2) ÷ (7/4) = (3/2) × (4/7) = 6/7.",
      "Astuce : produit en croix.\nExemple similaire : x/4 = 3/8 → x = 4 × 3/8 = 1,5.",
      "Astuce : les inverses sont 1/2 et 1/4 ; additionne-les avec le dénominateur 4.\nExemple similaire : la somme des inverses de 2 et de 6 : 1/2 + 1/6 = 3/6 + 1/6 = 4/6 = 2/3.",
      "Astuce : multiplie les deux membres par 5, puis divise par 2.\nExemple similaire : 3x/4 = 9 → 3x = 36 → x = 12."
    ],
    genH: {
      1: "Astuce : les dénominateurs sont déjà égaux : additionne simplement les numérateurs.\nExemple similaire : 3/7 + 2/7 = 5/7.",
      2: "Astuce : diviser par d revient à multiplier par 1/d : écris tout sur 2d, puis simplifie.\nExemple similaire : 3/2 ÷ 4 = 3/(2 × 4) = 3/8."
    }
  },
  thales: {
    videos: [
      { u: "https://www.youtube.com/watch?v=08UEfPADVWs", t: "Le théorème de Thalès" },
      { u: "https://www.youtube.com/watch?v=BNgjzubShAo", t: "Image d'un point par une homothétie" },
    ],
    resume: [
      { t: "Le théorème", f: "AM/AB = AN/AC = MN/BC", d: "Valable si (MN) ∥ (BC) avec M sur (AB) et N sur (AC). On écrit les rapports à partir du sommet commun A." },
      { t: "Agrandir / réduire", f: "longueurs : × k\naires : × k²\nvolumes : × k³", d: "Exemple : k = 3 → aires × 9, volumes × 27. k < 1 : réduction ; k > 1 : agrandissement." },
      { t: "Pièges classiques", f: "AM/AB avec AB = AM + MB", d: "Si l'énoncé donne MB, calcule d'abord AB = AM + MB avant d'écrire le rapport." }
    ],
    qs: [
      "Astuce : AM = AB × (1/3).\nExemple similaire : AM/AB = 1/4, AB = 20 → AM = 5.",
      "Astuce : rapport 3 → chaque longueur est multipliée par 3.\nExemple similaire : rapport 5 → longueurs × 5.",
      "Astuce : les AIRES sont multipliées par k².\nExemple similaire : rapport 1/3 → aires × 1/9.",
      "Astuce : AN = AC × AM/AB.\nExemple similaire : AM/AB = 1/2, AC = 16 → AN = 8.",
      "Astuce : MN/BC = AM/AB → BC = MN × (inverse du rapport).\nExemple similaire : rapport 1/3, MN = 4 → BC = 12.",
      "Astuce : les VOLUMES sont multipliés par k³.\nExemple similaire : échelle 1/3 → volume × 1/27.",
      "Astuce : AB = AM + MB = 8, puis AC = AN × AB/AM, enfin NC = AC − AN.\nExemple similaire : AM = 2, MB = 4, AN = 5 → AB = 6, AC = 15, NC = 10.",
      "Astuce : volume × k³ = 2³ = 8.\nExemple similaire : rapport 3 → volume × 27.",
      "Astuce : MN = BC × 0,6 : petite multiplication.\nExemple similaire : rapport 0,4, BC = 20 → MN = 8.",
      "Astuce : volume × k³ = 3³.\nExemple similaire : rapport 2 → volume × 8.",
      "Astuce : MN = BC × AM/AB = 12 × 6/9.\nExemple similaire : AB = 8, AM = 4, BC = 10 → MN = 5.",
      "Astuce : aire × k² = 24 × (1/2)².\nExemple similaire : aire 40, rapport 1/2 → 10."
    ],
    genH: {
      2: "Astuce : Thalès : MN = BC × AM/AB (les petites longueurs sur les grandes).\nExemple similaire : AM = 2, AB = 4, BC = 10 → MN = 10 × 2/4 = 5.",
      4: "Astuce : produit en croix sur AM/AB = AN/AC : AC = AN × AB/AM.\nExemple similaire : AM = 2, AB = 4, AN = 3 → AC = 3 × 4/2 = 6."
    },
  },
  equations3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=gcdBHwRaBa8", t: "Résoudre une équation ax = b" },
      { u: "https://www.youtube.com/watch?v=9Y4mCFQ4F-8", t: "Résoudre ax + b = cx + d" },
    ],
    resume: [
      { t: "Équation ax + b = cx + d", f: "3x + 2 = x + 10 → 2x = 8 → x = 4", d: "On regroupe les x d'un côté (soustraction) et les nombres de l'autre, puis on divise." },
      { t: "Produit nul", f: "A × B = 0 ⟺ A = 0 ou B = 0", d: "Exemple : (x − 3)(x + 5) = 0 → x = 3 ou x = −5. Deux solutions à vérifier séparément." },
      { t: "Résoudre un problème", f: "1) poser x  2) équation  3) résoudre  4) vérifier", d: "Exemple : pense à un nombre → 3x + 2 = 17. Pose l'inconnue, traduis la phrase, résous, contrôle la cohérence." }
    ],
    qs: [
      "Astuce : enlève 5, puis divise par 2.\nExemple similaire : 3x + 4 = 13 → x = 3.",
      "Astuce : regroupe les x : 3x − 2x = 7.\nExemple similaire : 5x = 2x + 9 → x = 3.",
      "Astuce : x divisé par 2 = 6 → multiplie les deux côtés par 2.\nExemple similaire : x/3 = 5 → x = 15.",
      "Astuce : regroupe : 5x − 2x = 12 + 3.\nExemple similaire : 6x − 2 = 3x + 10 → 3x = 12 → x = 4.",
      "Astuce : chaque facteur peut être nul, teste-les un par un.\nExemple similaire : (x − 1)(x + 2) = 0 → x = 1 ou x = −2.",
      "Astuce : divise d'abord les deux côtés par 4, ou développe.\nExemple similaire : 3(x + 2) = 15 → x + 2 = 5 → x = 3.",
      "Astuce : regroupe les x à droite et les nombres à gauche (attention aux signes).\nExemple similaire : 5 − 3x = x + 1 → 4 = 4x → x = 1.",
      "Astuce : produit nul : 2x + 1 = 0 ou x − 4 = 0.\nExemple similaire : (3x − 2)(x + 1) = 0 → x = 2/3 ou x = −1.",
      "Astuce : traduis : 3x + 2 = 17.\nExemple similaire : nombre × 5 − 1 = 19 → x = 4.",
      "Astuce : somme = x + (x + 1) + (x + 2) = 3x + 3.\nExemple similaire : somme 24 → 3x + 3 = 24 → x = 7.",
      "Astuce : c'est le carré qui se « défait » par ± : x − 3 = 5 ou x − 3 = −5.\nExemple similaire : (x + 1)² = 9 → x = 2 ou x = −4.",
      "Astuce : pose x la largeur : 2(x + x + 3) = 24, puis calcule l'aire avec les longueurs trouvées.\nExemple similaire : P = 20 et L = l + 2 → l = 4, L = 6, aire 24."
    ],
    genH: {
      1: "Astuce : isole x : passe le nombre de l'autre côté en changeant de signe.\nExemple similaire : x + 5 = 2 → x = 2 − 5 = −3.",
      2: "Astuce : x = c ÷ a.\nExemple similaire : 4x = −20 → x = −20 ÷ 4 = −5.",
      3: "Astuce : d'abord ax = c − b, puis divise par a.\nExemple similaire : 3x + 2 = 11 → 3x = 9 → x = 3.",
      4: "Astuce : regroupe les x d'un côté : (a − c)x = d − b, puis divise.\nExemple similaire : 5x + 1 = 3x + 9 → 2x = 8 → x = 4."
    },
  },
  puissances3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=IKmReDkNGp8", t: "Calculs de puissances (1)" },
      { u: "https://www.youtube.com/watch?v=_iwHYbuZ4N8", t: "Calculs de puissances (2)" },
    ],
    resume: [
      { t: "Règles de calcul", f: "aᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ ÷ aⁿ = aᵐ⁻ⁿ\n(aᵐ)ⁿ = aᵐ×ⁿ", d: "Même base : on additionne les exposants (produit), on les soustrait (quotient), on les multiplie (puissance de puissance)." },
      { t: "Puissances remarquables", f: "a⁰ = 1\na⁻ⁿ = 1/aⁿ", d: "Exemple : 10⁻² = 1/(10²) = 0,01. a est non nul." },
      { t: "Notation scientifique", f: "a × 10ⁿ avec 1 ≤ a < 10", d: "Exemple : 45 000 = 4,5 × 10⁴. L'ordre de grandeur est la puissance de 10 la plus proche." }
    ],
    qs: [
      "Astuce : compte les zéros : exposant 4 → 4 zéros.\nExemple similaire : 10⁵ = 100 000.",
      "Astuce : tout nombre non nul élevé à la puissance 0 vaut 1.\nExemple similaire : 3⁰ + 4⁰ = 1 + 1 = 2.",
      "Astuce : même base : additionne les exposants.\nExemple similaire : 2³ × 2⁴ = 2⁷.",
      "Astuce : puissance de puissance : multiplie les exposants.\nExemple similaire : (2²)³ = 2⁶.",
      "Astuce : même base : soustrais les exposants.\nExemple similaire : 5⁶ ÷ 5⁴ = 5².",
      "Astuce : un exposant négatif donne l'inverse : 10⁻ⁿ = 1/10ⁿ.\nExemple similaire : 10⁻³ = 1/1000 = 0,001.",
      "Astuce : multiplie les coefficients comme nombres, puis additionne les exposants.\nExemple similaire : 2a³ × 5a⁴ = 10a⁷.",
      "Astuce : un seul chiffre non nul avant la virgule : compte le décalage de la virgule pour trouver l'exposant.\nExemple similaire : 320 000 = 3,2 × 10⁵.",
      "Astuce : nombre plus petit que 1 : l'exposant est négatif ; décale la virgule jusqu'à un seul chiffre non nul devant.\nExemple similaire : 0,0007 = 7 × 10⁻⁴.",
      "Astuce : un exposant négatif donne l'inverse : a⁻ⁿ = 1/aⁿ, puis calcule la puissance.\nExemple similaire : 2⁻³ = 1/(2³) = 1/8 = 0,125.",
      "Astuce : multiplie les deux blocs séparément, puis ramène 12 à 1,2 × 10.\nExemple similaire : (2 × 10²) × (6 × 10⁴) = 12 × 10⁶ = 1,2 × 10⁷.",
      "Astuce : calcule chaque puissance séparément, puis additionne les trois résultats.\nExemple similaire : 2⁰ + 2¹ + 2² = 1 + 2 + 4 = 7."
    ],
    genH: {
      1: "Astuce : aᵏ veut dire k facteurs égaux à a : multiplie-les tous.\nExemple similaire : 3⁴ = 3 × 3 × 3 × 3 = 81.",
      2: "Astuce : même base au numérateur et au dénominateur : soustrais les exposants.\nExemple similaire : 7⁵ ÷ 7³ = 7²."
    }
  },
  fonctions: {
    videos: [
      { u: "https://www.youtube.com/watch?v=gQUt5y8LFKk", t: "Lire graphiquement une image et un antécédent" },
      { u: "https://www.youtube.com/watch?v=EOS5bSPTZjg", t: "Image et antécédent dans un tableau" },
      { u: "https://www.youtube.com/watch?v=FjqPwHS7vE8", t: "Calculer une image par une fonction" },
    ],
    resume: [
      { t: "Image", f: "f(x) = 2x + 3 → f(4) = 11", d: "L'image de 4 est 11 : on REMPLACE x par 4 dans la formule et on calcule. La flèche va de x vers f(x)." },
      { t: "Antécédent", f: "f(x) = 11 → 2x + 3 = 11 → x = 4", d: "Chercher un antécédent = résoudre une équation. Une image est unique ; un antécédent peut ne pas exister ou être multiple." },
      { t: "Vocabulaire", f: "« g(3) = 12 » :\n12 = image de 3 ; 3 = antécédent de 12", d: "Le nombre ENTRE parenthèses (3) est celui qu'on entre ; le résultat (12) est l'image." }
    ],
    qs: [
      "Astuce : remplace x par 4 : 2 × 4 + 3.\nExemple similaire : f(x) = 3x + 1 → f(2) = 7.",
      "Astuce : élève 5 au carré.\nExemple similaire : f(x) = x² → f(9) = 81.",
      "Astuce : entre parenthèses = antécédent ; résultat de l'autre côté = image.\nExemple similaire : h(5) = 20 → 20 est l'image de 5, 5 est un antécédent de 20.",
      "Astuce : résous l'équation 3x − 2 = 10.\nExemple similaire : f(x) = 2x − 1, image 9 → 2x = 10 → x = 5.",
      "Astuce : le carré se calcule AVANT la multiplication : (−3)² = 9 puis × 2.\nExemple similaire : f(x) = 3x² → f(−2) = 12.",
      "Astuce : résous x + 5 = −1.\nExemple similaire : f(x) = x + 2, image 0 → x = −2.",
      "Astuce : multiplie d'abord, soustrais ensuite : 5 − 2 × 7.\nExemple similaire : f(x) = 4 − 3x → f(2) = −2.",
      "Astuce : résous x² − 3 = 6, donc x² = 9 : DEUX antécédents.\nExemple similaire : f(x) = x² → antécédents de 4 : −2 et 2.",
      "Astuce : sur une courbe : abscisse → montée jusqu'à la courbe → ordonnée lue.\nExemple similaire : si la courbe passe par (2 ; 5), l'image de 2 est 5.",
      "Astuce : commence par la parenthèse : −4 + 1 = −3, puis élève au carré.\nExemple similaire : f(x) = (x + 2)² → f(−5) = 9.",
      "Astuce : calcule g(2) D'ABORD, puis injecte ce résultat dans g.\nExemple similaire : g(x) = x + 3 → g(g(1)) = g(4) = 7.",
      "Astuce : résous 3x = 15.\nExemple similaire : g(x) = 5x, image 35 → x = 7."
    ],
    genH: {
      1: "Astuce : l'image de x se lit directement dans la table (f(x)).\nExemple similaire : si f(3) = 12, l'image de 3 est 12.",
      2: "Astuce : l'antécédent de y est le x tel que f(x) = y.\nExemple similaire : si f(3) = 12, un antécédent de 12 est 3.",
      3: "Astuce : remplace x par sa valeur dans la formule.\nExemple similaire : f(x) = 3x + 2 → f(4) = 14.",
      4: "Astuce : résous ax + b = y.\nExemple similaire : f(x) = 3x + 2, antécédent de 14 : 3x = 12 → x = 4."
    },
  },
  faffine3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=qahxeWQ7kTg", t: "Représenter une fonction affine" },
    ],
    resume: [
      { t: "Fonction linéaire", f: "f(x) = ax", d: "Multiplie par a (coefficient de proportionnalité) ; la droite passe par l'origine. Exemple : f(x) = 3x → f(4) = 12." },
      { t: "Fonction affine", f: "f(x) = ax + b", d: "a : coefficient directeur ; b : ordonnée à l'origine (f(0) = b). La droite coupe l'axe des ordonnées au point (0 ; b)." },
      { t: "Trouver a", f: "a = (f(x₂) − f(x₁)) ÷ (x₂ − x₁)", d: "Avec deux points de la droite. Exemple : f(1) = 5, f(3) = 11 → a = 6 ÷ 2 = 3, puis b = f(0) = 2." }
    ],
    qs: [
      "Astuce : linéaire : uniquement le produit a × x, sans nombre ajouté derrière.\nExemple similaire : f(x) = 5x est linéaire ; f(x) = 5x + 1 ne l'est pas.",
      "Astuce : dans f(x) = ax, le nombre a est le coefficient directeur de la droite.\nExemple similaire : dans f(x) = 4x, a = 4 est le coefficient directeur.",
      "Astuce : linéaire et affine ont pour représentation graphique une droite ; celle de la linéaire passe en plus par l'origine.\nExemple similaire : f(x) = 2x + 1 a pour représentation une droite coupant l'axe des ordonnées en (0 ; 1).",
      "Astuce : remplace x par la valeur proposée dans la formule.\nExemple similaire : f(x) = 2x + 3 → f(5) = 2 × 5 + 3 = 13.",
      "Astuce : f(0) = a × 0 = 0 pour toute fonction linéaire : la droite passe par l'origine.\nExemple similaire : f(x) = 7x → f(0) = 0.",
      "Astuce : proportionnalité : image = coefficient × valeur, c'est une fonction linéaire.\nExemple similaire : le prix payé est proportionnel à la masse achetée : c'est une fonction linéaire.",
      "Astuce : droite passant par l'origine : f(2) = 6, donc a = 6 ÷ 2.\nExemple similaire : une droite passe par l'origine et par (3 ; 12) : a = 12 ÷ 3 = 4.",
      "Astuce : calcule d'abord a = (f(3) − f(1)) ÷ (3 − 1), puis déduis b avec f(1) = a × 1 + b.\nExemple similaire : f(1) = 4 et f(3) = 10 : a = 3, puis 3 + b = 4 → b = 1, donc f(0) = 1.",
      "Astuce : b = f(0) : c'est l'ordonnée du point où la droite coupe l'axe des ordonnées.\nExemple similaire : dans f(x) = 3x − 2, b = −2.",
      "Astuce : a = (f(5) − f(2)) ÷ (5 − 2) : différence des images divisée par différence des abscisses.\nExemple similaire : f(1) = 4 et f(4) = 13 : a = (13 − 4) ÷ 3 = 3.",
      "Astuce : résous −2x + 8 = 0 : isole le terme en x, puis divise.\nExemple similaire : 3x − 12 = 0 → x = 4.",
      "Astuce : remplace x par 0 : il ne reste que b.\nExemple similaire : f(x) = 5x + 3 → f(0) = 3."
    ],
    genH: {
      1: "Astuce : fonction linéaire : multiplie simplement la valeur par a.\nExemple similaire : f(x) = 6x → f(3) = 18.",
      2: "Astuce : remplace x par la valeur proposée : calcule a × x d'abord, puis ajoute ou retranche b.\nExemple similaire : f(x) = 3x + 2 → f(4) = 12 + 2 = 14."
    }
  },
  arithmetique3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=al9oHwrlTNo", t: "Le cours : arithmétique (multiples et diviseurs)" },
      { u: "https://www.youtube.com/watch?v=RBE2wPIKagI", t: "Décomposer en produit de facteurs premiers" },
    ],
    resume: [
      { t: "Multiples et diviseurs", f: "20 = 4 × 5 → 4 et 5 sont des diviseurs de 20", d: "a est multiple de b quand a = b × k avec k entier. Les multiples de 7 : 7, 14, 21, 28, 35..." },
      { t: "Décomposition en facteurs premiers", f: "60 = 2 × 2 × 3 × 5", d: "On divise autant de fois que possible par 2, puis 3, 5, 7... on s'arrête quand il ne reste que des facteurs premiers." },
      { t: "PGCD et fractions", f: "PGCD (84 ; 126) = 42 → 84/126 = 2/3", d: "PGCD : produit des facteurs premiers COMMUNS avec les plus petits exposants. Fraction irréductible : PGCD numérateur-dénominateur = 1." }
    ],
    qs: [
      "Astuce : décompose par 7.\nExemple similaire : 84 = 7 × 12 est aussi un multiple de 7.",
      "Astuce : décompose par les premiers 2, 2 et 3.\nExemple similaire : 18 = 2 × 3 × 3.",
      "Astuce : liste les diviseurs de chacun et prend le plus grand commun.\nExemple similaire : PGCD (10 ; 15) : diviseurs de 10 (1, 2, 5, 10), de 15 (1, 3, 5, 15) → PGCD = 5.",
      "Astuce : écris les paires de multiplications : chaque produit donne deux diviseurs.\nExemple similaire : 12 = 1 × 12 = 2 × 6 = 3 × 4 → 6 diviseurs.",
      "Astuce : décompose en facteurs premiers, puis multiplie les facteurs communs aux deux nombres.\nExemple similaire : PGCD (18 ; 30) : 18 = 2 × 3 × 3 et 30 = 2 × 3 × 5 → 2 × 3 = 6.",
      "Astuce : facteurs premiers communs (plus petit exposant).\nExemple similaire : A = 2 × 3 × 3, B = 2 × 2 × 3 → PGCD = 2 × 3 = 6.",
      "Astuce : garde les facteurs premiers communs aux deux décompositions, avec leur plus petit exposant.\nExemple similaire : 84 = 2 × 2 × 3 × 7 et 105 = 3 × 5 × 7 → facteurs communs 3 et 7 : PGCD = 21.",
      "Astuce : teste la divisibilité : somme des chiffres multiple de 3, divisibilité par 7, par 11...\nExemple similaire : 57 = 3 × 19 n'est pas premier (5 + 7 = 12 divisible par 3) ; 53 l'est.",
      "Astuce : écris les paires de multiplications : chaque produit donne deux diviseurs.\nExemple similaire : 18 = 1 × 18 = 2 × 9 = 3 × 6 → 6 diviseurs.",
      "Astuce : premiers entre eux : un seul diviseur commun, qui est 1.\nExemple similaire : 8 et 9 n'ont que 1 comme diviseur commun : ils sont premiers entre eux.",
      "Astuce : divise le numérateur et le dénominateur par leur PGCD.\nExemple similaire : 60/90 : PGCD = 30 → 2/3.",
      "Astuce : cherche le plus petit multiple commun des deux intervalles.\nExemple similaire : toutes les 8 min et toutes les 12 min : multiples communs 24, 48... → 24 min."
    ],
    genH: {
      1: "Astuce : les deux nombres valent g fois deux nombres premiers entre eux : leur PGCD est g.\nExemple similaire : PGCD (14 ; 21) = 7 car 14 = 7 × 2 et 21 = 7 × 3, avec 2 et 3 premiers entre eux.",
      2: "Astuce : pᵏ a exactement k + 1 diviseurs : 1, p, p², ..., pᵏ.\nExemple similaire : 8 = 2³ a 4 diviseurs : 1, 2, 4, 8."
    }
  },
  identites: {
    videos: [
      { u: "https://www.youtube.com/watch?v=jmKHKs2ZM94", t: "Factoriser une expression" },
      { u: "https://www.youtube.com/watch?v=6j0oMQlaBYg", t: "Identité (a − b)(a + b) = a² − b²" },
    ],
    resume: [
      { t: "Les 3 identités", f: "(a + b)² = a² + 2ab + b²\n(a − b)² = a² − 2ab + b²\n(a + b)(a − b) = a² − b²", d: "Le double-produit 2ab est LE terme qu'on oublie. (x + 3)² = x² + 6x + 9, pas x² + 9 !" },
      { t: "Développer ou factoriser ?", f: "x² + 6x + 9 = (x + 3)²", d: "Développer = transformer un produit en somme. Factoriser = l'inverse : repérer une identité ou un facteur commun." },
      { t: "Facteur commun", f: "x² + 7x = x(x + 7)\n5x + 10 = 5(x + 2)", d: "Avant de chercher une identité, regarde s'il y a un facteur commun évident." }
    ],
    qs: [
      "Astuce : le facteur commun est x : x² = x × x et 7x = x × 7.\nExemple similaire : x² + 5x = x(x + 5).",
      "Astuce : identité (a + b)² = a² + 2ab + b², avec 2ab = 2 × x × 3 = 6x.\nExemple similaire : (x + 2)² = x² + 4x + 4.",
      "Astuce : c'est (a + b)(a − b) = a² − b².\nExemple similaire : (x + 5)(x − 5) = x² − 25.",
      "Astuce : 16 = 4² → différence de carrés.\nExemple similaire : x² − 25 = (x − 5)(x + 5).",
      "Astuce : (2x)² = 4x² et le double-produit 2 × 2x × 1 = 4x.\nExemple similaire : (3x + 1)² = 9x² + 6x + 1.",
      "Astuce : 5 est présent dans les deux termes.\nExemple similaire : 3x + 12 = 3(x + 4).",
      "Astuce : 25 = 5² et 10x = 2 × x × 5 → identité (a − b)².\nExemple similaire : x² − 8x + 16 = (x − 4)².",
      "Astuce : c'est une différence de carrés : 9 − x².\nExemple similaire : (5 − x)(5 + x) = 25 − x².",
      "Astuce : 4x² = (2x)², 9 = 3², milieu 2 × 2x × 3 = 12x.\nExemple similaire : 9x² + 12x + 4 = (3x + 2)².",
      "Astuce : différence de carrés avec a = 2x + 1 et b = 3.\nExemple similaire : (x + 2)² − 4 = (x)(x + 4).",
      "Astuce : c'est a² − b² : 101² − 99² = (101 − 99)(101 + 99).\nExemple similaire : 51² − 49² = 2 × 100 = 200.",
      "Astuce : une équation du second degré peut avoir DEUX solutions : x + 2 = 7 ou x + 2 = −7.\nExemple similaire : (x − 1)² = 4 → x = 3 ou x = −1."
    ],
    genH: {
      2: "Astuce : (a + b)(a − b) = a² − b² : le terme en x disparaît.\nExemple similaire : (x + 3)(x − 3) = x² − 9.",
      3: "Astuce : c'est une identité remarquable : x² ± 2×b×x + b² (n'oublie pas le double-produit !).\nExemple similaire : (x + 2)² = x² + 4x + 4."
    }
  },
  stats3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=aO3pb-FEsbk", t: "Moyenne, médiane, étendue (1)" },
      { u: "https://www.youtube.com/watch?v=AcSxB_wedkU", t: "Moyenne, médiane, étendue (2)" },
    ],
    resume: [
      { t: "Médiane", f: "2 ; 5 ; 8 ; 10 ; 20 → Médiane = 8", d: "On ORDONNE la série. Effectif impair → valeur du milieu ; effectif pair → moyenne des deux valeurs centrales." },
      { t: "Quartiles", f: "Q1 : au moins 25 % en dessous\nQ3 : au moins 75 % en dessous", d: "Q1 = Q3 sont cherchés sur la série ordonnée, séparément de la moyenne." },
      { t: "Médiane ≠ moyenne", f: "1 ; 2 ; 3 ; 4 ; 100 : médiane 3, moyenne 22", d: "La moyenne subit les valeurs extrêmes ; la médiane, non. Étendue = max − min." }
    ],
    qs: [
      "Astuce : la série est déjà ordonnée : prends la valeur du milieu (3e sur 5).\nExemple similaire : 1 ; 3 ; 4 ; 6 ; 9 → médiane 4.",
      "Astuce : c'est la 2e valeur des 3.\nExemple similaire : 5 ; 8 ; 10 → médiane 8.",
      "Astuce : trie d'abord, puis max − min.\nExemple similaire : 3 ; 7 ; 9 ; 15 → étendue 12.",
      "Astuce : effectif pair → moyenne des 3e et 4e valeurs.\nExemple similaire : 2 ; 4 ; 6 ; 8 → médiane 5.",
      "Astuce : c'est la moyenne qui « subit » les valeurs extrêmes.\nExemple similaire : 1 ; 2 ; 3 ; 4 ; 50 → moyenne 12, médiane 3.",
      "Astuce : 7 valeurs → 4e de la liste ordonnée.\nExemple similaire : 1 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7 → médiane 4.",
      "Astuce : quart de 7 ≈ 1,75 → arrondis au supérieur : 2e valeur.\nExemple similaire : 1 ; 2 ; 3 ; 4 ; 5 ; 6 ; 8 → Q1 = 2.",
      "Astuce : médiane de la moitié supérieure (10 ; 12 ; 14).\nExemple similaire : 1 ; 2 ; 3 ; 4 ; 5 ; 6 → Q3 = 5.",
      "Astuce : c'est une simple somme des effectifs.\nExemple similaire : 5 (4 fois), 6 (3 fois) → total 7.",
      "Astuce : une valeur extrême fait bouger la moyenne, mais pas la médiane (4e valeur sur 7).\nExemple similaire : modifier le 100 en 200 de « 1 ; 2 ; 3 ; 4 ; 100 » ne change pas la médiane.",
      "Astuce : c'est une série de 20 valeurs → positions 10 et 11.\nExemple similaire : 6 valeurs → 3e et 4e.",
      "Astuce : médiane des 6 valeurs = moyenne des 3e et 4e : elle ne dépend pas de x.\nExemple similaire : 1 ; 2 ; 3 ; 4 ; 5 ; 100 → médiane 3,5."
    ],
    genH: {
      1: "Astuce : étendue = plus grande valeur − plus petite.\nExemple similaire : 3 ; 7 ; 12 → étendue 12 − 3 = 9.",
      2: "Astuce : moyenne = somme ÷ nombre de valeurs.\nExemple similaire : (10 + 12 + 14 + 16 + 18) ÷ 5 = 14.",
      3: "Astuce : classe les valeurs ; avec 7 valeurs, la médiane est la 4ᵉ.\nExemple similaire : 2 ; 4 ; 6 ; 8 ; 10 ; 12 ; 14 → médiane 8.",
      4: "Astuce : classe les valeurs ; avec 8 valeurs, Q1 est la 2ᵉ valeur (au moins 25 % en dessous).\nExemple similaire : 1 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7 ; 8 → Q1 = 2."
    },
  },
  rotation3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=xd_-KzMmjwI", t: "Image d'un point par une rotation" },
      { u: "https://www.youtube.com/watch?v=_lr-qTQVtCg", t: "Image d'une figure par une rotation" },
    ],
    resume: [
      { t: "Définition", f: "centre O + angle + sens", d: "La rotation de centre O, d'angle et de sens donnés fait « pivoter » la figure autour de O. Sens trigonométrique : anti-horaire." },
      { t: "Ce qui est conservé", f: "longueurs · angles · alignement", d: "Image superposable : OM' = OM, longueurs, angles, alignement et parallélisme conservés, donc même périmètre et même aire." },
      { t: "Cas particulier", f: "rotation de 180° = symétrie centrale", d: "La rotation de 180° autour de O est exactement la symétrie centrale de centre O." }
    ],
    qs: [
      "Astuce : trois ingrédients : le centre où pivote la figure, l'angle et le sens.\nExemple similaire : la rotation de centre O, d'angle 90° dans le sens trigonométrique.",
      "Astuce : la rotation fait pivoter sans déformer : ni changement de taille, ni changement de forme.\nExemple similaire : une feuille tournée de 45° reste identique : mêmes longueurs, mêmes angles.",
      "Astuce : un demi-tour autour d'un point, c'est exactement la symétrie centrale.\nExemple similaire : l'image de M par la rotation de 180° de centre O est le symétrique de M par rapport à O.",
      "Astuce : la rotation conserve les longueurs : OM' = OM.\nExemple similaire : si OM = 5 cm, alors OM' = 5 cm aussi.",
      "Astuce : figures superposables : mêmes longueurs et mêmes angles, donc même périmètre et même aire.\nExemple similaire : un triangle et son image par une rotation ont la même aire.",
      "Astuce : pour un polygone régulier à n côtés, l'angle clé vaut 360° ÷ n.\nExemple similaire : 360° ÷ 6 = 60° : l'hexagone régulier est invariant pour 60° (et ses multiples).",
      "Astuce : l'angle de la rotation est exactement l'angle entre un point et son image, vu du centre.\nExemple similaire : rotation d'angle 70° : l'angle MOM' vaut 70°.",
      "Astuce : 360° ÷ 3 = 120° : chaque sommet tourne vers le sommet suivant.\nExemple similaire : pour un carré : 360° ÷ 4 = 90°.",
      "Astuce : la branche suivante se trouve tous les 360° ÷ 4 = 90° : teste les multiples de 90°.\nExemple similaire : une croix régulière est invariante pour les rotations de 90°, 180° et 270°.",
      "Astuce : résous 360° ÷ n = 30° pour trouver le nombre de côtés.\nExemple similaire : pour un angle de 45° : 360 ÷ 45 = 8 côtés (l'octogone).",
      "Astuce : tourner de 90° dans un sens, c'est tourner de 360 − 90 dans l'autre sens.\nExemple similaire : une rotation de −30° équivaut à une rotation de 330° dans le sens trigonométrique.",
      "Astuce : après plusieurs virages identiques, il faut retrouver l'orientation de départ : l'angle doit diviser 360°.\nExemple similaire : des rotations de 72° conviennent pour un pavage : 360 ÷ 72 = 5."
    ],
    genH: {
      2: "Astuce : une rotation conserve les longueurs et les angles.\nExemple similaire : l'image d'un segment de 6 cm par une rotation est un segment de 6 cm.",
      3: "Astuce : une rotation conserve les angles : la mesure ne change pas.\nExemple similaire : un angle de 30° a pour image un angle de 30°."
    },
  },
  trigo: {
    videos: [
      { u: "https://www.youtube.com/watch?v=G54mXt7J9dg", t: "Calculer une longueur avec la trigonométrie" },
      { u: "https://www.youtube.com/watch?v=pO8J2hA7aso", t: "La tangente d'un angle aigu" },
    ],
    resume: [
      { t: "Les 3 formules", f: "sin = opposé ÷ hypoténuse\ncos = adjacent ÷ hypoténuse\ntan = opposé ÷ adjacent", d: "Mnémo : SOH-CAH-TOA. L'hypoténuse est face à l'angle droit ; l'opposé est face à l'angle â." },
      { t: "Valeurs repères", f: "sin(30°) = 0,5\ntan(45°) = 1\nsin(90°) = 1", d: "sin(60°) ≈ 0,87 ; cos(60°) = 0,5. La calculatrice doit être en mode DEGRÉS (deg)." },
      { t: "Chercher un angle", f: "sin(â) = 0,6 → â ≈ 37°", d: "On utilise les touches sin⁻¹ (arcsin), cos⁻¹ ou tan⁻¹. Un sinus proche de 1 → angle proche de 90°." }
    ],
    qs: [
      "Astuce : SOH — Sinus = Opposé ÷ Hypoténuse.\nExemple similaire : opposé 3, hypoténuse 6 → sin = 0,5.",
      "Astuce : valeur exacte à retenir.\nExemple similaire : cos(60°) = 0,5.",
      "Astuce : valeur exacte à retenir.\nExemple similaire : sin(30°) = 0,5.",
      "Astuce : divise l'opposé par l'hypoténuse.\nExemple similaire : opposé 4, hypoténuse 8 → 0,5.",
      "Astuce : TOA — Tan = Opposé ÷ Adjacent, ici BC ÷ AB.\nExemple similaire : opposé 6, adjacent 8 → tan = 0,75.",
      "Astuce : sin(90°) = 1 : plus l'angle est grand, plus le sinus monte vers 1.\nExemple similaire : sin ≈ 0,5 → angle ≈ 30°.",
      "Astuce : hauteur = longueur du fil × sin(35°).\nExemple similaire : fil de 10 m à 30° → 10 × 0,5 = 5 m.",
      "Astuce : opposé = hypoténuse × sin(37°).\nExemple similaire : hypoténuse 10, angle 30° → opposé 5.",
      "Astuce : divise simplement : 5 ÷ 2.\nExemple similaire : opposé 6, adjacent 3 → tan = 2.",
      "Astuce : sin(â) = 1,2/5 = 0,24, puis touche sin⁻¹.\nExemple similaire : sin(â) = 0,5 → â = 30°.",
      "Astuce : c'est l'identité fondamentale, valable pour tout â.\nExemple similaire : si cos(â) = 0,6, alors sin(â) = 0,8 (car cos² + sin² = 1).",
      "Astuce : d'abord l'hypoténuse par Pythagore (√(6² + 2²)), puis sin = opposé ÷ hypoténuse.\nExemple similaire : mât 4 m, pied à 3 m → hypoténuse 5, sin = 4/5 = 0,8 → â ≈ 53°."
    ],
    genH: {
      2: "Astuce : cos(x) = adjacent ÷ hypoténuse ; sin(x) = opposé ÷ hypoténuse.\nExemple similaire : opposé 3, hypoténuse 5 → sin(x) = 3/5.",
      3: "Astuce : côté = hypoténuse × cos(x) (ou × sin(x) pour l'opposé).\nExemple similaire : sin(x) = 3/5, hypoténuse 15 → opposé = 15 × 3/5 = 9."
    },
  },
  sph3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=GNbVEivQpVQ", t: "Se repérer sur une sphère" },
    ],
    resume: [
      { t: "Sections et repérage", f: "plan → cercle ; par le centre → grand cercle", d: "Exemple : l'équateur est un grand cercle de la Terre. Dans l'espace, un point du pavé droit se repère par 3 coordonnées ; sur Terre : latitude et longitude." },
      { t: "Sphère (boule)", f: "V = (4/3) × π × r³\nAire = 4 × π × r²", d: "Exemple : r = 3 → V = (4/3) × π × 27 = 36π ≈ 113 cm³. Volume en unités³, aire en unités²." },
      { t: "Cône et pyramide", f: "V = (1/3) × aire de la base × h", d: "Cône : base = π r², donc V = (1/3)πr²h. Pyramide : base = aire de sa face polygonale." },
      { t: "Agrandir / réduire", f: "V × k³", d: "Exemple : réduction k = 1/2 → volume × 1/8. Le volume varie comme le CUBE des longueurs." }
    ],
    qs: [
      "Astuce : V = (1/3) × base × hauteur, même si la base est petite.\nExemple similaire : base 30 cm², h = 6 → 60 cm³.",
      "Astuce : trois cônes remplissent exactement le cylindre de même base et hauteur.\nExemple similaire : cylindre 90 cm³ → cône correspondant 30 cm³.",
      "Astuce : V = (4/3) × π × 3³ = (4/3) × π × 27.\nExemple similaire : r = 1 → V ≈ 4,19 ≈ 4 cm³.",
      "Astuce : V = (1/3) × π × r² × h, avec le RAYON 3.\nExemple similaire : r = 1, h = 6 → 2π ≈ 6,3 cm³.",
      "Astuce : c'est une aire de base d'abord (6 × 6 = 36), puis (1/3) × 36 × 10.\nExemple similaire : base 25, h = 6 → 50.",
      "Astuce : on résout (4/3)πr³ = 36π, donc r³ = 27.\nExemple similaire : V = (32/3)π → r³ = 8 → r = 2.",
      "Astuce : V = (1/3) × π × 2² × 9 = 12π.\nExemple similaire : r = 3, h = 7 → 21π ≈ 65,9 cm³.",
      "Astuce : base 8 × 5 = 40, puis (1/3) × 40 × 6.\nExemple similaire : base 30, h = 5 → 50 cm³.",
      "Astuce : les volumes sont multipliés par k³, pas k.\nExemple similaire : rapport 1/3 → volume × 1/27.",
      "Astuce : isole la base : B = 3V ÷ h.\nExemple similaire : V = 90, h = 3 → B = 90.",
      "Astuce : les volumes varient comme le CUBE du rayon.\nExemple similaire : r double → volume × 8.",
      "Astuce : aire de la base triangulaire : (6 × 5)/2, puis h = 3V ÷ B.\nExemple similaire : V = 30, base 10 → h = 9.",
      "Astuce : l'aire d'une sphère est 4 × π × r².\nExemple similaire : r = 1 : aire ≈ 12,6.",
      "Astuce : aire = 4 × π × 3² = 36 π.\nExemple similaire : r = 1 : 4π ≈ 12,6.",
      "Astuce : toute coupe plane d'une sphère donne un cercle.\nExemple similaire : une orange coupée montre un bord circulaire.",
      "Astuce : plan passant par le centre = grand cercle, le plus grand possible.\nExemple similaire : l'équateur est un grand cercle de la Terre.",
      "Astuce : trois directions à repérer : longueur, largeur, hauteur.\nExemple similaire : le coin d'une pièce : (0 ; 0 ; 0), le coin opposé : (L ; l ; h).",
    ],
    genH: {
      2: "Astuce : aire de la sphère = 4 × π × r² ; donne le résultat en …π.\nExemple similaire : r = 3 → 4 × π × 9 = 36π.",
      3: "Astuce : volume de la boule = 4 × π × r³ ÷ 3.\nExemple similaire : r = 3 → 4 × π × 27 ÷ 3 = 36π.",
      4: "Astuce : plan quelconque → cercle ; plan passant par le centre → grand cercle.\nExemple similaire : l'équateur est un grand cercle de la Terre."
    },
  },
  proba3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=CBtj0nLx-N4", t: "Le cours : probabilités (3e)" },
      { u: "https://www.youtube.com/watch?v=d6Co0q01QH0", t: "Calculer une probabilité" },
    ],
    resume: [
      { t: "La formule", f: "p = (cas favorables) ÷ (cas possibles)", d: "Uniquement pour des issues équiprobables. Exemple : dé → p(nombre pair) = 3/6 = 1/2." },
      { t: "Encadrement", f: "0 ≤ p ≤ 1", d: "p = 0 : impossible ; p = 1 : certain. En pourcentage : p = 25 % ↔ 1 chance sur 4." },
      { t: "Événement contraire", f: "p(non A) = 1 − p(A)", d: "Exemple : p(ne pas obtenir 6) = 1 − 1/6 = 5/6. Très utile pour « au moins une fois »." }
    ],
    qs: [
      "Astuce : 1 cas favorable (pile) sur 2 possibles.\nExemple similaire : face → 0,5 aussi.",
      "Astuce : un événement certain arrive toujours.\nExemple similaire : « obtenir un nombre ≤ 6 » avec un dé → p = 1.",
      "Astuce :événement impossible.\nExemple similaire : tirer une boule verte d'un sac sans boules vertes → p = 0.",
      "Astuce : multiples de 5 sur un dé : seulement 5. Un seul cas favorable.\nExemple similaire : nombre 6 → 1/6.",
      "Astuce :5 rouges sur 10 billes au total.\nExemple similaire : une noire → 2/10 = 0,2.",
      "Astuce : c'est une 0,25 = 25 % = 1/4.\nExemple similaire : p = 0,5 → 1 chance sur 2.",
      "Astuce :4 cas favorables (1 ; 2 ; 3 ; 4) sur 6, puis simplifie.\nExemple similaire : nombre > 4 → 2/6 = 1/3.",
      "Astuce : additionne les couleurs : vertes + noires = 5 sur 10.\nExemple similaire : rouge ou noire → 7/10 = 0,7.",
      "Astuce : les deux événements recouvrent toutes les issues : ce sont des événements contraires.\nExemple similaire : p(pair) + p(impair) = 1.",
      "Astuce : dénombre TOUTES les issues : 6 × 6 = 36, dont une seule somme 2.\nExemple similaire : somme 12 → 1/36 aussi.",
      "Astuce : passe par l'événement contraire : p(aucun pile) = 1/8, donc p = 1 − 1/8.\nExemple similaire : 2 lancers, au moins une face → 1 − 1/4 = 3/4."
    ],
    genH: {
      2: "Astuce : compte les cas favorables (1 à n), divise par 6 et convertis en %.\nExemple similaire : ≤ 3 → 3/6 = 50 %.",
      3: "Astuce : P = cas favorables ÷ cas possibles, puis simplifie la fraction.\nExemple similaire : 4 rouges sur 12 boules → 4/12 = 1/3.",
    }
  }
};
