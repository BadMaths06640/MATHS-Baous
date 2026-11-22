/* ================= BaouMaths — résumés visuels et aides par question (3e)
   resume : cartes { t: titre, f: formule mise en valeur, d: détail }
   qs     : aide par index de question (« Astuce…
Exemple : … »)
   genH   : aide appliquée aux questions générées, par difficulté 1-4 */
window.AIDE_3E = {
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
  puissances3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=IKmReDkNGp8", t: "Calculs de puissances (1)" },
      { u: "https://www.youtube.com/watch?v=_iwHYbuZ4N8", t: "Calculs de puissances (2)" }
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
  thales3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=08UEfPADVWs", t: "Le théorème de Thalès (Quatrième)" },
      { u: "https://www.youtube.com/watch?v=9itzajcpn_I", t: "Le théorème de Pythagore (rappel)" }
    ],
    resume: [
      { t: "Théorème de Thalès", f: "AM/AB = AN/AC = MN/BC", d: "(BC) ∥ (MN), avec M sur [AB] et N sur [AC]. On écrit les rapports à partir du sommet A, puis produit en croix." },
      { t: "Rappel Pythagore", f: "BC² = AB² + AC²", d: "Triangle rectangle en A : le carré de l'hypoténuse égale la somme des carrés des côtés de l'angle droit." },
      { t: "Produit en croix", f: "a/b = c/d → a × d = b × c", d: "Exemple : AM/AB = AN/AC → AM × AC = AB × AN. On isole ensuite la longueur inconnue." }
    ],
    qs: [
      "Astuce : AM = AB × (1/3).\nExemple similaire : AM/AB = 1/4, AB = 20 → AM = 5.",
      "Astuce : AN = AC × AM/AB.\nExemple similaire : AM/AB = 1/2, AC = 16 → AN = 8.",
      "Astuce : MN/BC = AM/AB → BC = MN × (inverse du rapport).\nExemple similaire : rapport 1/3, MN = 4 → BC = 12.",
      "Astuce : AB = AM + MB = 8, puis AC = AN × AB/AM, enfin NC = AC − AN.\nExemple similaire : AM = 2, MB = 4, AN = 5 → AB = 6, AC = 15, NC = 10.",
      "Astuce : MN = BC × 0,6 : petite multiplication.\nExemple similaire : rapport 0,4, BC = 20 → MN = 8.",
      "Astuce : MN = BC × AM/AB = 12 × 6/9.\nExemple similaire : AB = 8, AM = 4, BC = 10 → MN = 5.",
      "Astuce : repère d'abord l'angle droit, puis cherche le côté qui lui fait face.\nExemple similaire : dans un triangle rectangle en B, l'hypoténuse est [AC].",
      "Astuce : applique le théorème de Pythagore : hyp² = somme des carrés des côtés de l'angle droit.\nExemple similaire : côtés 3 et 4 → hyp² = 9 + 16 = 25, donc hyp = 5.",
      "Astuce : quand on connaît l'hypoténuse, on soustrait les carrés : côté² = hyp² − côté².\nExemple similaire : hyp 25, côté 7 → 625 − 49 = 576 = 24².",
      "Astuce : l'hypoténuse est BC (elle fait face à l'angle droit en A) : BC² = AB² + AC².\nExemple similaire : AB = 3, AC = 4 → BC = 5.",
      "Astuce : une diagonale de rectangle coupe le rectangle en deux triangles rectangles.\nExemple similaire : rectangle 3 sur 4 → diagonale 5.",
      "Astuce : compare le carré du plus grand côté à la somme des carrés des deux autres.\nExemple similaire : côtés 6 ; 8 ; 10 → 100 = 36 + 64 → rectangle."
    ],
    genH: {
      2: "Astuce : Thalès : MN = BC × AM/AB (les petites longueurs sur les grandes).\nExemple similaire : AM = 2, AB = 4, BC = 10 → MN = 10 × 2/4 = 5.",
      4: "Astuce : produit en croix sur AM/AB = AN/AC : AC = AN × AB/AM.\nExemple similaire : AM = 2, AB = 4, AN = 3 → AC = 3 × 4/2 = 6."
    }
  },
  litteral3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=gcdBHwRaBa8", t: "Résoudre une équation ax = b" },
      { u: "https://www.youtube.com/watch?v=9Y4mCFQ4F-8", t: "Résoudre ax + b = cx + d" }
    ],
    resume: [
      { t: "Développer", f: "k(a + b) = ka + kb", d: "Exemple : 3(2x + 5) = 6x + 15. On distribue le facteur sur chaque terme de la parenthèse." },
      { t: "Réduire", f: "7x + 5 − 2x = 5x + 5", d: "On regroupe les termes en x ensemble, les nombres ensemble." },
      { t: "Équations", f: "5x − 3 = 2x + 12 → 3x = 15 → x = 5", d: "On regroupe les x d'un côté, les nombres de l'autre, puis on divise par le coefficient de x." }
    ],
    qs: [
      "Astuce : enlève 5, puis divise par 2.\nExemple similaire : 3x + 4 = 13 → x = 3.",
      "Astuce : regroupe les x : 3x − 2x = 7.\nExemple similaire : 5x = 2x + 9 → x = 3.",
      "Astuce : x divisé par 2 = 6 → multiplie les deux côtés par 2.\nExemple similaire : x/3 = 5 → x = 15.",
      "Astuce : regroupe : 5x − 2x = 12 + 3.\nExemple similaire : 6x − 2 = 3x + 10 → 3x = 12 → x = 4.",
      "Astuce : divise d'abord les deux côtés par 4, ou développe.\nExemple similaire : 3(x + 2) = 15 → x + 2 = 5 → x = 3.",
      "Astuce : regroupe les x à droite et les nombres à gauche (attention aux signes).\nExemple similaire : 5 − 3x = x + 1 → 4 = 4x → x = 1.",
      "Astuce : traduis : 3x + 2 = 17.\nExemple similaire : nombre × 5 − 1 = 19 → x = 4.",
      "Astuce : somme = x + (x + 1) + (x + 2) = 3x + 3.\nExemple similaire : somme 24 → 3x + 3 = 24 → x = 7.",
      "Astuce : pose x la largeur : 2(x + x + 3) = 24, puis calcule l'aire avec les longueurs trouvées.\nExemple similaire : P = 20 et L = l + 2 → l = 4, L = 6, aire 24.",
      "Astuce : regroupe les termes en x ensemble, puis garde les nombres.\nExemple similaire : 7x + 5 − 3x = 4x + 5.",
      "Astuce : distribue le facteur 3 sur les deux termes de la parenthèse.\nExemple similaire : 2(x + 7) = 2x + 14.",
      "Astuce : remplace chaque lettre par sa valeur, puis effectue les calculs dans les parenthèses d'abord.\nExemple similaire : P = 2 × (3 + 4) = 14.",
      "Astuce : distribue le 5 en gardant le signe − devant le 3.\nExemple similaire : 4(3x − 2) = 12x − 8.",
      "Astuce : développe d'abord 2(x + 3), puis regroupe les x.\nExemple similaire : 3(x + 1) = 4x → 3x + 3 = 4x → x = 3."
    ],
    genH: {
      1: "Astuce : isole x : passe le nombre de l'autre côté en changeant de signe.\nExemple similaire : x + 5 = 2 → x = 2 − 5 = −3.",
      2: "Astuce : x = c ÷ a.\nExemple similaire : 4x = −20 → x = −20 ÷ 4 = −5.",
      3: "Astuce : d'abord ax = c − b, puis divise par a.\nExemple similaire : 3x + 2 = 11 → 3x = 9 → x = 3.",
      4: "Astuce : regroupe les x d'un côté : (a − c)x = d − b, puis divise.\nExemple similaire : 5x + 1 = 3x + 9 → 2x = 8 → x = 4."
    }
  },
  fonctions: {
    videos: [
      { u: "https://www.youtube.com/watch?v=gQUt5y8LFKk", t: "Lire graphiquement une image et un antécédent" },
      { u: "https://www.youtube.com/watch?v=EOS5bSPTZjg", t: "Image et antécédent dans un tableau" },
      { u: "https://www.youtube.com/watch?v=FjqPwHS7vE8", t: "Calculer une image par une fonction" }
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
    }
  },
  thalesrecip3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=uaPicwUSQz0", t: "Appliquer la réciproque du théorème de Thalès (Troisième)" },
      { u: "https://www.youtube.com/watch?v=45w1Kna9Mog", t: "La réciproque du théorème de Thalès (Quatrième)" }
    ],
    resume: [
      { t: "Réciproque", f: "AM/AB = AN/AC → (MN) ∥ (BC)", d: "On calcule les deux rapports : s'ils sont égaux, les droites sont parallèles." },
      { t: "Contraposée", f: "AM/AB ≠ AN/AC → pas de parallélisme", d: "Si les rapports sont différents, les droites ne sont pas parallèles." },
      { t: "Méthode", f: "1) rapports avec A   2) égalité ?   3) conclusion", d: "Exemple : AM = 2, AB = 6, AN = 3, AC = 9 : 2/6 = 1/3 et 3/9 = 1/3 → parallèles." }
    ],
    qs: [
      "Astuce : réciproque = les rapports sont égaux donc droites parallèles.\nExemple similaire : AM/AB = AN/AC = 1/3 → (MN) ∥ (BC).",
      "Astuce : contraposée = les rapports sont différents donc droites NON parallèles.\nExemple similaire : AM/AB = 0,5 et AN/AC = 0,6 → pas parallèles.",
      "Astuce : c'est la définition même de la réciproque de Thalès.\nExemple similaire : AM/AB = AN/AC → (MN) ∥ (BC).",
      "Astuce : calcule et simplifie les deux rapports, puis compare-les.\nExemple similaire : AM = 2, AB = 4, AN = 3, AC = 6 → 1/2 et 1/2 → parallèles.",
      "Astuce : calcules les deux rapports (sous forme de fraction ou décimal) et compare.\nExemple similaire : 3/4 = 0,75 et 5/7 ≈ 0,71 → non parallèles.",
      "Astuce : la réciproque est une égalité de rapports, rien d'autre.\nExemple similaire : on compare AM/AB et AN/AC, pas les angles ni les aires.",
      "Astuce : AB = AM + MB et AC = AN + NC : calcule d'abord AB et AC.\nExemple similaire : AM = 1, MB = 2 → AB = 3, rapport 1/3.",
      "Astuce : AB = 3 + 2 = 5 et AC = 6 + 5 = 11, puis compare 3/5 et 6/11.\nExemple similaire : 1/2 et 3/5 → differentes → non parallèles.",
      "Astuce : simplifie chaque rapport à sa plus simple expression avant de comparer.\nExemple similaire : 6/12 = 3/6 = 1/2 → rapports égaux → parallèles.",
      "Astuce : simplifie : 6/9 = 2/3 et 8/12 = 2/3.\nExemple similaire : 4/6 = 2/3 et 10/15 = 2/3 → parallèles.",
      "Astuce : AB = 7 + 3 = 10 et AC = 14 + 6 = 20, puis compare 7/10 et 14/20.\nExemple similaire : 1/2 et 5/10 → égaux → parallèles.",
      "Astuce : compare 5/12 et 6/15 (= 2/5). Produit en croix : 5 × 15 = 75 et 12 × 6 = 72 → différents.\nExemple similaire : 2/5 ≠ 3/7 → non parallèles."
    ],
    genH: {
      2: "Astuce : calcule AM/AB et AN/AC, simplifie-les, puis compare : égaux → parallèles (réciproque).\nExemple similaire : AM = 2, AB = 4, AN = 3, AC = 6 → 1/2 = 1/2 → parallèles.",
      3: "Astuce : calcule les deux rapports : différents → droites non parallèles (contraposée).\nExemple similaire : 1/2 et 2/3 → différents → non parallèles."
    }
  },
  lineaire3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=OK4eATqZs2Y", t: "Fonctions linéaires (Troisième)" }
    ],
    resume: [
      { t: "Définition", f: "f(x) = ax", d: "On multiplie chaque nombre x par le coefficient a : image = a × x." },
      { t: "Graphique", f: "droite passant par l'origine", d: "La représentation graphique d'une fonction linéaire est une droite qui passe par O." },
      { t: "Proportionnalité", f: "y = a × x", d: "Exemple : 15 € pour 2 repas → a = 7,5 → pour 4 repas : 4 × 7,5 = 30 €." }
    ],
    qs: [
      "Astuce : linéaire : uniquement le produit a × x, sans nombre ajouté derrière.\nExemple similaire : f(x) = 5x est linéaire ; f(x) = 5x + 1 ne l'est pas.",
      "Astuce : dans f(x) = ax, le nombre a est le coefficient directeur de la droite.\nExemple similaire : dans f(x) = 4x, a = 4 est le coefficient directeur.",
      "Astuce : f(0) = a × 0 = 0 pour toute fonction linéaire : la droite passe par l'origine.\nExemple similaire : f(x) = 7x → f(0) = 0.",
      "Astuce : proportionnalité : image = coefficient × valeur, c'est une fonction linéaire.\nExemple similaire : le prix payé est proportionnel à la masse achetée : c'est une fonction linéaire.",
      "Astuce : droite passant par l'origine : f(2) = 6, donc a = 6 ÷ 2.\nExemple similaire : une droite passe par l'origine et par (3 ; 12) : a = 12 ÷ 3 = 4.",
      "Astuce : multiplier par le coefficient a.\nExemple similaire : f(x) = 5x → f(2) = 10.",
      "Astuce : une hausse de 20 % revient à multiplier par 1,2 (fonction linéaire de coefficient 1,2).\nExemple similaire : 20 € avec hausse de 50 % → ×1,5 → 30 €.",
      "Astuce : a = ordonnée ÷ abscisse pour la droite passant par l'origine.\nExemple similaire : point (4 ; 10) → a = 10 ÷ 4 = 2,5.",
      "Astuce : détermine d'abord le coefficient a avec le point connu.\nExemple similaire : (2 ; 8) → a = 4 → f(5) = 20.",
      "Astuce : antécédent = diviser par le coefficient : x = image ÷ a.\nExemple similaire : f(x) = 5x, image 30 → antécédent 6.",
      "Astuce : cherche le coefficient de proportionnalité (prix d'UN repas), puis multiplie.\nExemple similaire : 3 jus pour 6 € → a = 2 → 5 jus : 10 €."
    ],
    genH: {
      1: "Astuce : fonction linéaire : multiplie simplement la valeur par a.\nExemple similaire : f(x) = 6x → f(3) = 18.",
      3: "Astuce : un antécédent s'obtient en divisant l'image par le coefficient : x = y ÷ a.\nExemple similaire : f(x) = 3x, image 15 → antécédent 5.",
      4: "Astuce : coefficient a = ordonnée du point ÷ abscisse (droite passant par l'origine).\nExemple similaire : point (4 ; 12) → a = 3."
    }
  },
  arithmetique3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=al9oHwrlTNo", t: "Le cours : arithmétique (multiples et diviseurs)" },
      { u: "https://www.youtube.com/watch?v=RBE2wPIKagI", t: "Décomposer en produit de facteurs premiers" }
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
  identites3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=6j0oMQlaBYg", t: "Identité (a − b)(a + b) = a² − b²" },
      { u: "https://www.youtube.com/watch?v=1EPOmbvoAlU", t: "Développer en utilisant la double distributivité (Troisième)" }
    ],
    resume: [
      { t: "Double distributivité", f: "(a + b)(c + d) = ac + ad + bc + bd", d: "Exemple : (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6." },
      { t: "Carré d'une somme", f: "(a + b)² = a² + 2ab + b²", d: "Exemple : (x + 3)² = x² + 6x + 9 (attention à ne pas oublier le terme 2ab !)." },
      { t: "Différence de carrés", f: "(a + b)(a − b) = a² − b²", d: "Exemple : (x + 5)(x − 5) = x² − 25 ; (3 − x)(3 + x) = 9 − x²." }
    ],
    qs: [
      "Astuce : identité (a + b)² = a² + 2ab + b², avec 2ab = 2 × x × 3 = 6x.\nExemple similaire : (x + 2)² = x² + 4x + 4.",
      "Astuce : c'est (a + b)(a − b) = a² − b².\nExemple similaire : (x + 5)(x − 5) = x² − 25.",
      "Astuce : (2x)² = 4x² et le double-produit 2 × 2x × 1 = 4x.\nExemple similaire : (3x + 1)² = 9x² + 6x + 1.",
      "Astuce : c'est une différence de carrés : 9 − x².\nExemple similaire : (5 − x)(5 + x) = 25 − x².",
      "Astuce : c'est a² − b² : 101² − 99² = (101 − 99)(101 + 99).\nExemple similaire : 51² − 49² = 2 × 100 = 200.",
      "Astuce : multiplie chaque terme du premier par chaque terme du second.\nExemple similaire : (x + 1)(x + 4) = x² + 5x + 4.",
      "Astuce : quatre produits, puis regroupe les termes en x.\nExemple similaire : (x + 2)(x + 5) = x² + 7x + 10.",
      "Astuce : développe d'abord les parenthèses, puis multiplie par le facteur 2 devant.\nExemple similaire : 3(x + 1)(x + 1) = 3(x² + 2x + 1) = 3x² + 6x + 3.",
      "Astuce : 2x × x = 2x², puis 2x × 3 = 6x, 1 × x = x, 1 × 3 = 3 ; regarde les termes en x.\nExemple similaire : (3x + 1)(x + 2) = 3x² + 7x + 2.",
      "Astuce : attention aux signes : (−3) × (+5) = −15.\nExemple similaire : (x − 2)(x + 4) = x² + 2x − 8.",
      "Astuce : 3x × 2x = 6x² ; 3x × 5 = 15x ; (−2) × 2x = −4x ; (−2) × 5 = −10.\nExemple similaire : (2x − 1)(x + 3) = 2x² + 5x − 3.",
      "Astuce : (−4) × (−6) = +24 : deux signes moins donnent un plus.\nExemple similaire : (x − 3)(x − 5) = x² − 8x + 15."
    ],
    genH: {
      2: "Astuce : (a + b)(a − b) = a² − b² : le terme en x disparaît.\nExemple similaire : (x + 3)(x − 3) = x² − 9.",
      3: "Astuce : c'est une identité remarquable : x² ± 2×b×x + b² (n'oublie pas le double-produit !).\nExemple similaire : (x + 2)² = x² + 4x + 4."
    }
  },
  stats3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=aO3pb-FEsbk", t: "Moyenne, médiane, étendue (1)" },
      { u: "https://www.youtube.com/watch?v=AcSxB_wedkU", t: "Moyenne, médiane, étendue (2)" }
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
    }
  },
  rotation3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=xd_-KzMmjwI", t: "Image d'un point par une rotation" },
      { u: "https://www.youtube.com/watch?v=_lr-qTQVtCg", t: "Image d'une figure par une rotation" }
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
    }
  },
  affine3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=qahxeWQ7kTg", t: "Représenter une fonction affine" }
    ],
    resume: [
      { t: "Définition", f: "f(x) = ax + b", d: "a = coefficient directeur, b = ordonnée à l'origine (f(0) = b)." },
      { t: "Graphique", f: "une droite (ne passe pas forcément par O)", d: "b = ordonnée du point où la droite coupe l'axe des ordonnées." },
      { t: "Deux points", f: "a = (f(x₂) − f(x₁)) ÷ (x₂ − x₁)", d: "Exemple : f(1) = 5 et f(3) = 11 → a = 6 ÷ 2 = 3, puis b = f(0) = 2." }
    ],
    qs: [
      "Astuce : linéaire et affine ont pour représentation graphique une droite ; celle de la linéaire passe en plus par l'origine.\nExemple similaire : f(x) = 2x + 1 a pour représentation une droite coupant l'axe des ordonnées en (0 ; 1).",
      "Astuce : remplace x par la valeur proposée dans la formule.\nExemple similaire : f(x) = 2x + 3 → f(5) = 2 × 5 + 3 = 13.",
      "Astuce : calcule d'abord a = (f(3) − f(1)) ÷ (3 − 1), puis déduis b avec f(1) = a × 1 + b.\nExemple similaire : f(1) = 4 et f(3) = 10 : a = 3, puis 3 + b = 4 → b = 1, donc f(0) = 1.",
      "Astuce : b = f(0) : c'est l'ordonnée du point où la droite coupe l'axe des ordonnées.\nExemple similaire : dans f(x) = 3x − 2, b = −2.",
      "Astuce : a = (f(5) − f(2)) ÷ (5 − 2) : différence des images divisée par différence des abscisses.\nExemple similaire : f(1) = 4 et f(4) = 13 : a = (13 − 4) ÷ 3 = 3.",
      "Astuce : résous −2x + 8 = 0 : isole le terme en x, puis divise.\nExemple similaire : 3x − 12 = 0 → x = 4.",
      "Astuce : remplace x par 0 : il ne reste que b.\nExemple similaire : f(x) = 5x + 3 → f(0) = 3.",
      "Astuce : remplace x par la valeur, multiplie d'abord, puis ajoute b.\nExemple similaire : f(x) = 3x + 2 → f(4) = 14.",
      "Astuce : b = f(0) directement, puis a = différence des images ÷ différence des x.\nExemple similaire : f(0) = 2, f(1) = 5 → a = 3, f(x) = 3x + 2.",
      "Astuce : résous l'équation ax + b = image comme une équation classique.\nExemple similaire : f(x) = 2x + 3, antécédent de 11 → 2x = 8 → x = 4.",
      "Astuce : b = f(0) ; a = f(1) − f(0) quand les abscisses diffèrent de 1.\nExemple similaire : f(0) = 1, f(1) = 4 → f(x) = 3x + 1.",
      "Astuce : multiplie par le coefficient, soustrais ensuite.\nExemple similaire : g(x) = 3x − 4 → g(3) = 5."
    ],
    genH: {
      2: "Astuce : remplace x par la valeur proposée : calcule a × x d'abord, puis ajoute ou retranche b.\nExemple similaire : f(x) = 3x + 2 → f(4) = 12 + 2 = 14.",
      3: "Astuce : résous ax + b = image : soustrais b, puis divise par a.\nExemple similaire : f(x) = 2x + 1, antécédent de 9 → 2x = 8 → x = 4."
    }
  },
  trigolong3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=G54mXt7J9dg", t: "Calculer une longueur avec la trigonométrie" },
      { u: "https://www.youtube.com/watch?v=pO8J2hA7aso", t: "La tangente d'un angle aigu" }
    ],
    resume: [
      { t: "Les trois rapports", f: "cos = adj ÷ hyp ; sin = opp ÷ hyp ; tan = opp ÷ adj", d: "Moyen mnémotechnique : SOH-CAH-TOA." },
      { t: "Calculer une longueur", f: "opp = hyp × sin(x)", d: "Exemple : hypoténuse 8, sin(x) = 0,5 → opposé = 8 × 0,5 = 4." },
      { t: "Produit en croix", f: "a/b = c/d → a × d = b × c", d: "On écrit le rapport connu avec les longueurs, puis on isole l'inconnue." }
    ],
    qs: [
      "Astuce : SOH — Sinus = Opposé ÷ Hypoténuse.\nExemple similaire : opposé 3, hypoténuse 6 → sin = 0,5.",
      "Astuce : valeur exacte à retenir.\nExemple similaire : cos(60°) = 0,5.",
      "Astuce : valeur exacte à retenir.\nExemple similaire : sin(30°) = 0,5.",
      "Astuce : divise l'opposé par l'hypoténuse.\nExemple similaire : opposé 4, hypoténuse 8 → 0,5.",
      "Astuce : TOA — Tan = Opposé ÷ Adjacent, ici BC ÷ AB.\nExemple similaire : opposé 6, adjacent 8 → tan = 0,75.",
      "Astuce : hauteur = longueur du fil × sin(35°).\nExemple similaire : fil de 10 m à 30° → 10 × 0,5 = 5 m.",
      "Astuce : opposé = hypoténuse × sin(37°).\nExemple similaire : hypoténuse 10, angle 30° → opposé 5.",
      "Astuce : divise simplement : 5 ÷ 2.\nExemple similaire : opposé 6, adjacent 3 → tan = 2.",
      "Astuce : c'est l'identité fondamentale, valable pour tout â.\nExemple similaire : si cos(â) = 0,6, alors sin(â) = 0,8 (car cos² + sin² = 1).",
      "Astuce : côté = hypoténuse × cosinus de l'angle.\nExemple similaire : hyp 10, cos(x) = 0,6 → adjacent 6.",
      "Astuce : tan met en relation opposé et adjacent (sans l'hypoténuse).\nExemple similaire : adjacent 5, tan(x) = 0,4 → opposé 2.",
      "Astuce : l'échelle est l'hypoténuse, la hauteur est le côté opposé : h = échelle × sin(angle).\nExemple similaire : échelle 4 m, angle 30° → h = 4 × 0,5 = 2 m."
    ],
    genH: {
      2: "Astuce : cos(x) = adjacent ÷ hypoténuse ; sin(x) = opposé ÷ hypoténuse.\nExemple similaire : opposé 3, hypoténuse 5 → sin(x) = 3/5.",
      3: "Astuce : côté = hypoténuse × cos(x) (ou × sin(x) pour l'opposé).\nExemple similaire : sin(x) = 3/5, hypoténuse 15 → opposé = 15 × 3/5 = 9."
    }
  },
  sphere3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=YQF7CBY-uEk", t: "Calculer l'aire et le volume d'une boule (Troisième)" }
    ],
    resume: [
      { t: "Aire", f: "A = 4 × π × r²", d: "Exemple : r = 3 → A = 4 × π × 9 = 36π ≈ 113 cm²." },
      { t: "Volume", f: "V = (4/3) × π × r³", d: "Exemple : r = 3 → V = (4/3) × π × 27 = 36π ≈ 113 cm³." },
      { t: "Sections", f: "plan → cercle", d: "Tout plan coupe une sphère selon un cercle ; s'il passe par le centre, c'est un grand cercle (comme l'équateur)." }
    ],
    qs: [
      "Astuce : V = (4/3) × π × 3³ = (4/3) × π × 27.\nExemple similaire : r = 1 → V ≈ 4,19 ≈ 4 cm³.",
      "Astuce : on résout (4/3)πr³ = 36π, donc r³ = 27.\nExemple similaire : V = (32/3)π → r³ = 8 → r = 2.",
      "Astuce : les volumes varient comme le CUBE du rayon.\nExemple similaire : r double → volume × 8.",
      "Astuce : l'aire d'une sphère est 4 × π × r².\nExemple similaire : r = 1 : aire ≈ 12,6.",
      "Astuce : aire = 4 × π × 3² = 36 π.\nExemple similaire : r = 1 : 4π ≈ 12,6.",
      "Astuce : toute coupe plane d'une sphère donne un cercle.\nExemple similaire : une orange coupée montre un bord circulaire.",
      "Astuce : plan passant par le centre = grand cercle, le plus grand possible.\nExemple similaire : l'équateur est un grand cercle de la Terre.",
      "Astuce : boule = volume avec (4/3) et r³ ; sphère = surface avec 4 et r².\nExemple similaire : r = 3 → V = (4/3) × π × 27 = 36π.",
      "Astuce : A = 4 × π × r² : élève d'abord r au carré.\nExemple similaire : r = 1 → A = 4π ≈ 12,6 cm².",
      "Astuce : calcule r³ d'abord (6³ = 216), multiplie par 4 puis divise par 3, et enfin par π.\nExemple similaire : r = 3 → V ≈ 113 cm³.",
      "Astuce : isole r³ : r³ = V × 3 ÷ (4 × π), puis cherche le cube parfait.\nExemple similaire : V = 36π → r³ = 27 → r = 3.",
      "Astuce : le volume dépend du CUBE du rayon.\nExemple similaire : r × 3 → V × 27."
    ],
    genH: {
      2: "Astuce : aire de la sphère = 4 × π × r² ; donne le résultat en …π.\nExemple similaire : r = 3 → 4 × π × 9 = 36π.",
      3: "Astuce : volume de la boule = 4 × π × r³ ÷ 3.\nExemple similaire : r = 3 → 4 × π × 27 ÷ 3 = 36π."
    }
  },
  factorisation3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=jmKHKs2ZM94", t: "Factoriser une expression" }
    ],
    resume: [
      { t: "Facteur commun", f: "ka + kb = k(a + b)", d: "Exemple : 5x + 10 = 5(x + 2) ; x² + 7x = x(x + 7)." },
      { t: "Identités", f: "a² + 2ab + b² = (a + b)²", d: "Exemple : x² − 10x + 25 = (x − 5)² ; x² − 16 = (x − 4)(x + 4)." },
      { t: "Produit nul", f: "A × B = 0 → A = 0 ou B = 0", d: "Exemple : (x − 3)(x + 5) = 0 → x = 3 ou x = −5." }
    ],
    qs: [
      "Astuce : le facteur commun est x : x² = x × x et 7x = x × 7.\nExemple similaire : x² + 5x = x(x + 5).",
      "Astuce : 16 = 4² → différence de carrés.\nExemple similaire : x² − 25 = (x − 5)(x + 5).",
      "Astuce : 5 est présent dans les deux termes.\nExemple similaire : 3x + 12 = 3(x + 4).",
      "Astuce : 25 = 5² et 10x = 2 × x × 5 → identité (a − b)².\nExemple similaire : x² − 8x + 16 = (x − 4)².",
      "Astuce : 4x² = (2x)², 9 = 3², milieu 2 × 2x × 3 = 12x.\nExemple similaire : 9x² + 12x + 4 = (3x + 2)².",
      "Astuce : différence de carrés avec a = 2x + 1 et b = 3.\nExemple similaire : (x + 2)² − 4 = (x)(x + 4).",
      "Astuce : une équation du second degré peut avoir DEUX solutions : x + 2 = 7 ou x + 2 = −7.\nExemple similaire : (x − 1)² = 4 → x = 3 ou x = −1.",
      "Astuce : chaque facteur peut être nul, teste-les un par un.\nExemple similaire : (x − 1)(x + 2) = 0 → x = 1 ou x = −2.",
      "Astuce : produit nul : 2x + 1 = 0 ou x − 4 = 0.\nExemple similaire : (3x − 2)(x + 1) = 0 → x = 2/3 ou x = −1.",
      "Astuce : c'est le carré qui se « défait » par ± : x − 3 = 5 ou x − 3 = −5.\nExemple similaire : (x + 1)² = 9 → x = 2 ou x = −4.",
      "Astuce : chaque facteur peut être nul ; résous 2x − 6 = 0 puis x + 1 = 0.\nExemple similaire : (3x − 12)(x − 2) = 0 → x = 4 ou x = 2.",
      "Astuce : 3x + 2 = 0 → x = −2 ÷ 3 ; 5x − 10 = 0 → x = 10 ÷ 5 = 2.\nExemple similaire : (2x + 1)(x − 3) = 0 → x = −1/2 ou x = 3."
    ],
    genH: {
      2: "Astuce : produit nul → chaque facteur peut valoir 0 : x − 2 = 0 ou x + 3 = 0.\nExemple similaire : (x + 1)(x − 4) = 0 → x = −1 ou x = 4."
    }
  },
  trigoangle3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=RVYA_mcqAJE", t: "Calculer un angle avec la trigonométrie (Troisième)" },
      { u: "https://www.youtube.com/watch?v=DfgUYXB5_jg", t: "LE COURS : La trigonométrie (Troisième)" }
    ],
    resume: [
      { t: "Trouver un angle", f: "x = sin⁻¹(opp ÷ hyp)", d: "À la calculatrice : touches sin⁻¹, cos⁻¹ ou tan⁻¹ (souvent via 2nd ou shift)." },
      { t: "Valeurs remarquables", f: "sin(30°) = 0,5 ; cos(60°) = 0,5 ; tan(45°) = 1", d: "Exemple : si sin(x) = 0,5 alors x = 30°." },
      { t: "Vérifier", f: "0 < angle < 90°", d: "Dans un triangle rectangle, l'angle cherché est toujours aigu : au-delà de 90°, il y a une erreur." }
    ],
    qs: [
      "Astuce : sin(90°) = 1 : plus l'angle est grand, plus le sinus monte vers 1.\nExemple similaire : sin ≈ 0,5 → angle ≈ 30°.",
      "Astuce : sin(â) = 1,2/5 = 0,24, puis touche sin⁻¹.\nExemple similaire : sin(â) = 0,5 → â = 30°.",
      "Astuce : d'abord l'hypoténuse par Pythagore (√(6² + 2²)), puis sin = opposé ÷ hypoténuse.\nExemple similaire : mât 4 m, pied à 3 m → hypoténuse 5, sin = 4/5 = 0,8 → â ≈ 53°.",
      "Astuce : valeur remarquable : le sinus vaut 1 seulement pour un angle droit.\nExemple similaire : sin(30°) = 0,5.",
      "Astuce : repère les côtés connus : opposé et hypoténuse → sinus.\nExemple similaire : adjacent et hypoténuse → cosinus ; opposé et adjacent → tangente.",
      "Astuce : dans un triangle rectangle isocèle, les angles aigus valent 45° et la tangente vaut 1.\nExemple similaire : tan(x) = 1 → x = 45°.",
      "Astuce : cherche la valeur remarquable ou utilise la touche sin⁻¹ de la calculatrice.\nExemple similaire : sin(x) = 1 → x = 90°.",
      "Astuce : cos(60°) = 0,5 (à ne pas confondre avec sin(30°) = 0,5).\nExemple similaire : cos(x) = 1 → x = 0°.",
      "Astuce : adjacent et hypoténuse → cosinus ; cos(x) = 0,5 → x = 60°.\nExemple similaire : adjacent 5, hypoténuse 10 → cos(x) = 0,5 → x = 60°.",
      "Astuce : utilise la touche tan⁻¹ (avec 2nd ou shift) puis arrondis.\nExemple similaire : tan(x) = 1 → x = 45° ; tan(x) = 0,5 → x ≈ 27°.",
      "Astuce : le câble est l'hypoténuse, la hauteur est le côté opposé : sin(x) = hauteur ÷ câble, puis touche sin⁻¹.\nExemple similaire : câble 10 m, hauteur 5 m → sin(x) = 0,5 → x = 30°.",
      "Astuce : rapport → angle : touche ⁻¹ ; angle → rapport : touche normale.\nExemple similaire : cos(x) = 0,5 → cos⁻¹(0,5) = 60°."
    ],
    genH: {
      3: "Astuce : rapport connu → angle : utilise la touche ⁻¹ de la calculatrice ou une valeur remarquable.\nExemple similaire : sin(x) = 0,5 → x = 30° ; tan(x) = 1 → x = 45°."
    }
  },
  sections3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=GNbVEivQpVQ", t: "Se repérer sur une sphère (Troisième)" },
      { u: "https://www.youtube.com/watch?v=-ylcRWcwIGM", t: "Sections d'un cylindre par un plan" },
      { u: "https://www.youtube.com/watch?v=Cu9USzow-_o", t: "Sections d'une pyramide par un plan" }
    ],
    resume: [
      { t: "Sections du cylindre", f: "plan ∥ base → disque ; plan avec l'axe → rectangle", d: "Exemple : une section perpendiculaire à l'axe donne un disque de même rayon que le cylindre." },
      { t: "Pyramide et cône", f: "plan ∥ base → figure de base en réduction", d: "Exemple : couper une pyramide à base carrée à mi-hauteur donne un carré de côté moitié." },
      { t: "Repérage 3D", f: "(longueur ; largeur ; hauteur)", d: "Un point d'un pavé droit est repéré par 3 nombres ; sur Terre : latitude et longitude (méridiens et parallèles)." }
    ],
    qs: [
      "Astuce : trois directions à repérer : longueur, largeur, hauteur.\nExemple similaire : le coin d'une pièce : (0 ; 0 ; 0), le coin opposé : (L ; l ; h).",
      "Astuce : imagine une tranche de saucisson : la coupe est identique à la base.\nExemple similaire : cylindre de rayon 4 → section parallèle à la base : disque de rayon 4.",
      "Astuce : coupe verticalement le cylindre par son centre : tu obtiens un rectangle.\nExemple similaire : cylindre h = 10, r = 3 → section par un plan contenant l'axe : rectangle 6 × 10.",
      "Astuce : une coupe parallèle à une face reproduit cette face.\nExemple similaire : pavé 5 × 3 × 2, plan parallèle à la face 5 × 3 → rectangle 5 × 3.",
      "Astuce : plus le plan est proche du sommet, plus la section est petite — mais elle garde la forme de la base.\nExemple similaire : pyramide à base carrée coupée à mi-hauteur → carré de côté moitié.",
      "Astuce : plus le plan est loin du centre, plus le cercle de section est petit.\nExemple similaire : couper une orange loin du centre → petite rondelle.",
      "Astuce : l'ordre des coordonnées d'un pavé droit : longueur, largeur, hauteur — la hauteur est la 3e.\nExemple similaire : (5 ; 1 ; 2) → hauteur 2.",
      "Astuce : latitude = parallèles (horizontaux) comptés depuis l'équateur ; longitude = depuis Greenwich.\nExemple similaire : Paris ≈ 49° nord de latitude.",
      "Astuce : méridien = fuseau qui passe par les pôles ; parallèle = cercle horizontal.\nExemple similaire : le méridien de Greenwich fixe la longitude 0°.",
      "Astuce : perpendiculaire à l'axe = parallèle à la base → le rayon ne change pas.\nExemple similaire : cylindre r = 3 coupé n'importe où perpendiculairement à l'axe → disque r = 3.",
      "Astuce : plan à mi-hauteur → réduction de rapport 1/2 : la section a des longueurs moitié de celles de la base.\nExemple similaire : coupe au quart de la hauteur → rayon de base = 4 × rayon de section.",
      "Astuce : plan passant par le centre → grand cercle → rayon de section = rayon de la sphère.\nExemple similaire : boule r = 10 → section contenant le centre : cercle r = 10.",
      "Astuce : respecte l'ordre (longueur ; largeur ; hauteur) indiqué par le repère.\nExemple similaire : pavé 5 × 1 × 3 → sommet opposé : (5 ; 1 ; 3)."
    ],
    genH: {
      2: "Astuce : plan parallèle à la base → disque ; plan contenant l'axe → rectangle.\nExemple similaire : couper un cylindre verticalement par le milieu → rectangle.",
      3: "Astuce : lit les dimensions dans l'ordre (longueur ; largeur ; hauteur).\nExemple similaire : pavé 5 × 1 × 3 → sommet opposé : (5 ; 1 ; 3).",
      4: "Astuce : un plan coupe toujours une sphère selon un cercle ; s'il passe par le centre, c'est un grand cercle.\nExemple similaire : l'équateur est un grand cercle de la Terre."
    }
  },
  proba3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=CBtj0nLx-N4", t: "Le cours : probabilités (3e)" },
      { u: "https://www.youtube.com/watch?v=d6Co0q01QH0", t: "Calculer une probabilité" }
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
      3: "Astuce : P = cas favorables ÷ cas possibles, puis simplifie la fraction.\nExemple similaire : 4 rouges sur 12 boules → 4/12 = 1/3."
    }
  },
  homothetie3: {
    videos: [
      { u: "https://www.youtube.com/watch?v=BNgjzubShAo", t: "Image d'un point par une homothétie" }
    ],
    resume: [
      { t: "Homothétie", f: "OM' = k × OM", d: "M, O et M' sont alignés. Si k < 0, M et M' sont de part et d'autre de O." },
      { t: "Effets sur les mesures", f: "longueurs × k ; aires × k² ; volumes × k³", d: "Exemple : rapport 3 → les aires sont multipliées par 9, les volumes par 27." },
      { t: "Agrandir ou réduire", f: "k > 1 : agrandissement ; 0 < k < 1 : réduction", d: "Exemple : échelle 1/2 → réduction : les longueurs sont divisées par 2, les aires par 4." }
    ],
    qs: [
      "Astuce : rapport 3 → chaque longueur est multipliée par 3.\nExemple similaire : rapport 5 → longueurs × 5.",
      "Astuce : les AIRES sont multipliées par k².\nExemple similaire : rapport 1/3 → aires × 1/9.",
      "Astuce : les VOLUMES sont multipliés par k³.\nExemple similaire : échelle 1/3 → volume × 1/27.",
      "Astuce : volume × k³ = 2³ = 8.\nExemple similaire : rapport 3 → volume × 27.",
      "Astuce : volume × k³ = 3³.\nExemple similaire : rapport 2 → volume × 8.",
      "Astuce : aire × k² = 24 × (1/2)².\nExemple similaire : aire 40, rapport 1/2 → 10.",
      "Astuce : les volumes sont multipliés par k³, pas k.\nExemple similaire : rapport 1/3 → volume × 1/27.",
      "Astuce : une homothétie de rapport k multiplie les longueurs par k.\nExemple similaire : rapport 3, segment 4 cm → image 12 cm.",
      "Astuce : k > 1 on agrandit, k entre 0 et 1 on réduit.\nExemple similaire : rapport 0,5 → réduction de moitié.",
      "Astuce : k < 0 → image de l'autre côté du centre ; |k| donne le facteur de longueur.\nExemple similaire : rapport −3 → M' à 3 × OM de O, à l'opposé de M.",
      "Astuce : semblables = même forme, pas forcément même taille.\nExemple similaire : deux rectangles de rapports côtés 2/3 et 4/6 sont semblables.",
      "Astuce : k = longueur de l'image ÷ longueur de la figure.\nExemple similaire : 5 cm → 20 cm : k = 4."
    ],
    genH: {
      2: "Astuce : une homothétie de rapport k multiplie les longueurs par k.\nExemple similaire : rapport 3, segment 4 cm → image 12 cm.",
      4: "Astuce : les aires sont multipliées par k².\nExemple similaire : rapport 2 → aire × 4."
    }
  }
};
