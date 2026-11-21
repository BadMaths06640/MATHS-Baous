/* ================= BaouMaths — banque de questions 4e ================= */
window.BANK_4E = {
  themes: [
    {
      id: "propo4", titre: "Pourcentages, vitesses, échelles", icone: "🚗",
      chap: [1],
      notion: "Vitesse = distance ÷ temps (v = d/t) ; d = v × t ; t = d ÷ v.\nConversion : km/h ÷ 3,6 ≈ m/s.\nAugmenter de t % = multiplier par (1 + t/100) ; diminuer de t % = multiplier par (1 − t/100).",
      qs: [
        { d:1, q:"Une voiture roule à 60 km/h pendant 2 h. Distance parcourue ?", c:["30 km","120 km","62 km","240 km"], a:1, e:"d = v × t = 60 × 2 = 120 km." },
        { d:1, q:"90 km/h en m/s ?", c:["9 m/s","25 m/s","90 m/s","0,25 m/s"], a:1, e:"90 ÷ 3,6 = 25 m/s." },
        { d:1, q:"Augmenter un prix de 10 % revient à le multiplier par...", c:["1,10","0,10","1,01","10"], a:0, e:"Multiplier par 1 + 10/100 = 1,10." },
        { d:2, q:"120 km en 1 h 30. Vitesse moyenne ?", c:["80 km/h","90 km/h","60 km/h","40 km/h"], a:0, e:"1 h 30 = 1,5 h. v = 120 ÷ 1,5 = 80 km/h." },
        { d:2, q:"à 80 km/h, durée pour 200 km ?", c:["2 h 30","2 h","2 h 40","1 h 30"], a:0, e:"t = 200 ÷ 80 = 2,5 h = 2 h 30 min." },
        { d:2, q:"Une console de jeu à 40 € baisse de 25 %. Nouveau prix ?", c:["30 €","32 €","25 €","15 €"], a:0, e:"Baisse de 25 % : 40 × 0,75 = 30 € (ou 40 − 10)." },
        { d:3, q:"15 km en 12 min en vélo. Vitesse moyenne en km/h ?", a:"75", e:"12 min = 0,2 h. v = 15 ÷ 0,2 = 75 km/h." },
        { d:3, q:"Sur une carte à l'échelle 1/2 000 000, 3,5 cm représentent :", c:["7 km","70 km","700 km","3,5 km"], a:1, e:"3,5 × 2 000 000 = 7 000 000 cm = 70 km." },
        { d:3, q:"Un article coûte 60 € HT, TVA à 20 % (rappel : TTC = HT × 1,2). Prix TTC ?", a:"72", e:"60 × 1,2 = 72 €." },
        { d:4, q:"Après une hausse de 20 % puis une baisse de 20 %, le prix final par rapport au prix initial...", c:["est environ 4 % plus bas","est identique","est environ 4 % plus haut","a doublé"], a:0, e:"Multiplier par 1,2 puis par 0,8 donne 0,96 : le prix final est 4 % plus bas que le prix initial (jamais identique)." },
        { d:4, q:"Un train fait 150 km en 1 h 15 min en moyenne. Vitesse moyenne en km/h ?", a:"120", e:"1 h 15 = 1,25 h. v = 150 ÷ 1,25 = 120 km/h." },
        { d:4, q:"Une école de 600 élèves : 60 % sont en 6e ou 5e, et 25 % des élèves restants sont en 4e. Combien d'élèves en 4e ?", a:"60", e:"6e-5e : 600 × 0,6 = 360 (restent 240). 25 % de 240 = 60 élèves en 4e." }
      ]
    },
        {
      id: "pythagore", titre: "Théorème de Pythagore", icone: "📐",
      chap: [2, 15],
      notion: "Si un triangle est rectangle en A, alors BC² = AB² + AC² (l'hypoténuse est le côté opposé à l'angle droit, le plus long).\nRéciproque : si BC² = AB² + AC², alors le triangle est rectangle en A.",
      qs: [
        { d:1, q:"Triangle rectangle, côtés de l'angle droit : 3 cm et 4 cm. Hypoténuse ?", c:["5 cm","7 cm","6 cm","25 cm"], a:0, e:"3² + 4² = 9 + 16 = 25 → hypoténuse = √25 = 5 cm." },
        { d:1, q:"Dans un triangle rectangle, l'hypoténuse est...", c:["le plus long côté","le plus court côté","toujours de 5 cm","n'importe quel côté"], a:0, e:"L'hypoténuse est le côté opposé à l'angle droit : c'est le plus long." },
        { d:1, q:"9² = ?", a:"81", e:"9 × 9 = 81." },
        { d:2, q:"Triangle rectangle en A : AB = 6, AC = 8, BC = ?", a:"10", e:"BC² = 6² + 8² = 36 + 64 = 100 → BC = 10." },
        { d:2, q:"Triangle rectangle : hypoténuse 13, un côté 5. Autre côté du triangle ?", a:"12", e:"a² = 13² − 5² = 169 − 25 = 144 → 12." },
        { d:2, q:"Un triangle a des côtés de 7, 24, 25. Est-il rectangle ?", c:["Oui","Non","On ne peut pas savoir","Seulement si l'angle fait 60°"], a:0, e:"25² = 625 et 7² + 24² = 49 + 576 = 625 : égalité → rectangle (réciproque)." },
        { d:3, q:"Triangle rectangle : hypoténuse 10, un côté 6. Autre côté ?", a:"8", e:"a² = 100 − 36 = 64 → a = 8." },
        { d:3, q:"Un mât de 5 m est planté à 3 m d'un mur ; son sommet touche le mur. Hauteur du point de contact ?", c:["4 m","6 m","8 m","2 m"], a:0, e:"√(5² − 3²) = √16 = 4 m." },
        { d:3, q:"Triangle avec côtés 5, 6, 8. Est-il rectangle ?", c:["Non","Oui","Impossible de dire","Seulement si l'angle fait 90°"], a:0, e:"8² = 64 ≠ 5² + 6² = 61 → pas rectangle." },
        { d:4, q:"Diagonale d'un rectangle de 9 sur 12 (arrondi au dixième) ?", a:"15", e:"√(9² + 12²) = √225 = 15." },
        { d:4, q:"Un losange a des diagonales de 6 cm et 8 cm. Son côté ?", a:"5", e:"Les diagonales se coupent perpendiculairement en leur milieu : côté = √(3² + 4²) = 5 cm." },
        { d:4, q:"Une échelle de 5 m est appuyée à 1,4 m d'un mur. À quelle hauteur (dixième) touche-t-elle ?", a:"4.8", e:"√(25 − 1,96) = √23,04 = 4,8 m." }
      ],
      gen: {
        2: () => { const triple = [[3,4,5],[6,8,10],[5,12,13],[9,12,15],[8,15,17],[12,16,20]][Math.floor(Math.random()*6)];
          return { q:`Triangle rectangle : côtés de l'angle droit ${triple[0]} et ${triple[1]}. Hypoténuse ?`, a:String(triple[2]), e:`${triple[0]}² + ${triple[1]}² = ${triple[0]**2} + ${triple[1]**2} = ${triple[2]**2} → hypoténuse = ${triple[2]}.` }; },
        4: () => { const triple = [[6,8,10],[5,12,13],[8,15,17],[9,12,15]][Math.floor(Math.random()*4)];
          return { q:`Triangle rectangle : hypoténuse ${triple[2]}, un côté ${triple[0]}. Autre côté de l'angle droit ?`, a:String(triple[1]), e:`a² = ${triple[2]}² − ${triple[0]}² = ${triple[2]**2} − ${triple[0]**2} = ${triple[1]**2} → a = ${triple[1]}.` }; }
      }
    },
    {
      id: "relatifs4",
      titre: "Multiplication et division de nombres relatifs",
      icone: "\u00d7\u00f7",
      chap: [3],
      notion: "Produit de relatifs : le produit de deux nombres de m\u00eame signe est positif, le produit de deux nombres de signes contraires est n\u00e9gatif.\nNombre de facteurs n\u00e9gatifs : un produit est positif si le nombre de facteurs n\u00e9gatifs est pair, n\u00e9gatif s'il est impair.\nDivision : la r\u00e8gle des signes est la m\u00eame pour le quotient ; le quotient de deux nombres de m\u00eame signe est positif.\nPriorit\u00e9s : on calcule les puissances, puis les multiplications et divisions, puis les additions et soustractions.",
      qs: [
        { d: 1, q: "Calculer : (-8) \u00d7 (-7)", c: ["56", "-56", "15", "-15"], a: 0, e: "Le produit de deux nombres n\u00e9gatifs est positif : 8 \u00d7 7 = 56, donc (-8) \u00d7 (-7) = 56." },
        { d: 1, q: "Calculer : 8 \u00d7 (-7)", c: ["-56", "56", "-48", "15"], a: 0, e: "Les signes sont contraires, donc le produit est n\u00e9gatif : 8 \u00d7 7 = 56, donc 8 \u00d7 (-7) = -56." },
        { d: 2, q: "Calculer : (-2) \u00d7 3 \u00d7 (-4)", a: "24", e: "Deux facteurs n\u00e9gatifs : le nombre de facteurs n\u00e9gatifs est pair, donc le produit est positif. 2 \u00d7 3 \u00d7 4 = 24." },
        { d: 2, q: "Sans calculer, donner le signe de (-5) \u00d7 2 \u00d7 (-1) \u00d7 7", c: ["Positif, car il y a 2 facteurs n\u00e9gatifs", "N\u00e9gatif, car il y a 2 facteurs n\u00e9gatifs", "Positif, car il y a 3 facteurs n\u00e9gatifs", "Impossible \u00e0 savoir"], a: 0, e: "Le produit est positif quand le nombre de facteurs n\u00e9gatifs est pair : ici (-5) et (-1), soit 2 facteurs, donc positif." },
        { d: 2, q: "Calculer : (-36) \u00f7 9", c: ["-4", "4", "-324", "-27"], a: 0, e: "Signes contraires, donc quotient n\u00e9gatif : 36 \u00f7 9 = 4, donc (-36) \u00f7 9 = -4." },
        { d: 3, q: "Calculer : (-12) \u00f7 (-3) + 1", a: "5", e: "On fait d'abord la division : (-12) \u00f7 (-3) = 4 (m\u00eame signe), puis 4 + 1 = 5." },
        { d: 3, q: "Calculer : (-3)\u00b2 \u00d7 (-2)", a: "-18", e: "(-3)\u00b2 = 9 (le carr\u00e9 d'un n\u00e9gatif est positif), puis 9 \u00d7 (-2) = -18." },
        { d: 3, q: "Calculer : -5 + 2 \u00d7 (-6)", a: "-17", e: "Priorit\u00e9 \u00e0 la multiplication : 2 \u00d7 (-6) = -12, puis -5 + (-12) = -17." },
        { d: 4, q: "Calculer : (-1)\u2075 \u00d7 2\u2074", a: "-16", e: "(-1)\u2075 = -1 (puissance impaire d'un n\u00e9gatif : n\u00e9gatif) et 2\u2074 = 16, donc -1 \u00d7 16 = -16." },
        { d: 3, q: "Un sous-marin descend de 40 m par minute. Quelle est sa position après 3 minutes, s'il part de la surface ?", a: "-120", e: "Une descente de 40 m par minute correspond \u00e0 -40 \u00d7 3 = -120 : le sous-marin est \u00e0 120 m sous la mer." },
        { d: 4, q: "Calculer : [(-6) \u00d7 4] \u00f7 (-8)", a: "3", e: "On calcule d'abord les crochets : (-6) \u00d7 4 = -24, puis (-24) \u00f7 (-8) = 3 (m\u00eame signe, quotient positif)." },
        { d: 4, q: "Dans quel quadrant se trouve le point B(-2 ; 5) (abscisse n\u00e9gative, ordonn\u00e9e positive) ?", c: ["Le 2\u1d49 quadrant (en haut \u00e0 gauche)", "Le 1\u1d49\u1d4f quadrant (en haut \u00e0 droite)", "Le 3\u1d49 quadrant (en bas \u00e0 gauche)", "Le 4\u1d49 quadrant (en bas \u00e0 droite)"], a: 0, e: "Abcisse n\u00e9gative = \u00e0 gauche, ordonn\u00e9e positive = en haut : c'est le 2\u1d49 quadrant." }
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
      },
      genH: {
        1: "Astuce : deux signes \u00ab \u2212 \u00bb tiennent lieu de signe \u00ab + \u00bb.\nExemple similaire : (-6) \u00d7 (-5) = 30, car 6 \u00d7 5 = 30 et le produit de deux n\u00e9gatifs est positif.",
        2: "Astuce : cherche d'abord le signe (m\u00eame signe = +, signes contraires = \u2212), puis calcule comme d'habitude.\nExemple similaire : (-24) \u00f7 6 = -4, car 24 \u00f7 6 = 4 et les signes sont contraires."
      }
    },
        {
      id: "sphvol", titre: "Solides : volumes", icone: "🥫",
      chap: [4],
      notion: "Prisme droit : V = aire de la base × hauteur.\nCylindre : V = π × r² × h.\nLitres : 1 L = 1 dm³ = 1 000 cm³.\nPyramide : V = (aire de la base × hauteur) ÷ 3. Cône de révolution : V = (π × r² × hauteur) ÷ 3.\nSections planes : un plan parallèle à la base d'une pyramide ou d'un cône donne une réduction de la base ; dans un cylindre ou un prisme, elle est identique à la base.",
      qs: [
        { d:1, q:"Volume d'un cylindre de rayon 2 cm et hauteur 5 cm (π ≈ 3,14) ?", a:"62.8", e:"V = π × 4 × 5 = 20π ≈ 62,8 cm³." },
        { d:1, q:"1 L = ... cm³ ?", c:["100","1 000","10","10 000"], a:1, e:"1 L = 1 dm³ = 1 000 cm³." },
        { d:1, q:"Volume d'un prisme à base carrée de côté 4 cm, hauteur 3 cm ?", a:"48", e:"Base : 4 × 4 = 16 cm². V = 16 × 3 = 48 cm³." },
        { d:2, q:"Volume d'un cylindre de diamètre 4 cm, hauteur 10 cm (π ≈ 3,14) ?", a:"125.6", e:"Rayon = 2 cm → V = π × 4 × 10 ≈ 125,6 cm³." },
        { d:2, q:"Une boîte de 8 cm × 5 cm × 4 cm contient...", c:["160 cm³ = 160 mL","160 L","17 cm³","40 cm³"], a:0, e:"V = 8 × 5 × 4 = 160 cm³ = 160 mL." },
        { d:2, q:"Volume de 2,5 L en cm³ ?", a:"2500", e:"1 L = 1000 cm³ → 2,5 L = 2500 cm³." },
        { d:3, q:"Combien de flacons de 250 mL peut-on remplir avec 3 L ?", a:"12", e:"3 L = 3000 mL ; 3000 ÷ 250 = 12 flacons." },
        { d:3, q:"Volume d'un cylindre de rayon 3 cm et hauteur 7 cm : formule et valeur (π ≈ 3,14, dixièmes) ?", a:"197.8", e:"V = π × 9 × 7 = 63π ≈ 197,82 → 197,8 cm³." },
        { d:3, q:"Un cylindre a un volume de 100 cm³ et une hauteur de 4 cm. Aire de sa base ?", a:"25", e:"Base = V ÷ h = 100 ÷ 4 = 25 cm²." },
        { d:4, q:"Une citerne cylindrique : rayon 1 m, hauteur 2 m. Capacité en L (π ≈ 3,14) ?", a:"6280", e:"V = π × 1² × 2 ≈ 6,28 m³ = 6 280 L." },
        { d:4, q:"Un pavé de 10 cm × 8 cm × 6 cm peut-il tenir dans une boîte cylindrique de rayon 5 cm et hauteur 12 cm ?", c:["Non","Oui","Impossible à savoir","Seulement si l'orientation change"], a:0, e:"Il faut que la diagonale de la base (10 × 8) tienne dans le disque : √(10² + 8²) ≈ 12,8 cm > 10 cm de diamètre → impossible (et la diagonale du pavé ≈ 14,7 cm > 12 cm de hauteur)." },
        { d:4, q:"On verse 500 cm³ d'eau dans un cylindre de rayon 5 cm. Hauteur de l'eau (π ≈ 3,14, dixième) ?", a:"6.4", e:"h = V ÷ (πr²) = 500 ÷ 78,5 ≈ 6,37 → ≈ 6,4 cm." },
        { d: 2, q: "Volume d'une pyramide à base carrée de côté 6 cm et de hauteur 8 cm ?", a: "96", e: "Aire de la base : 6 × 6 = 36 cm². V = (36 × 8) ÷ 3 = 96 cm³." },
        { d: 3, q: "Volume d'un cône de rayon 3 cm et de hauteur 7 cm (à l'unité près, π ≈ 3,14) ?", c: ["≈ 66 cm³", "≈ 22 cm³", "≈ 44 cm³", "≈ 198 cm³"], a: 0, e: "V = (π × 3² × 7) ÷ 3 = 21 π ≈ 65,9, soit environ 66 cm³." },
        { d: 3, q: "Un cylindre est coupé par un plan parallèle à sa base. La section est...", c: ["un disque de même rayon que la base", "un rectangle", "un disque plus petit que la base", "une ellipse"], a: 0, e: "Dans un cylindre (comme dans un prisme), la section parallèle à la base est identique à la base." },
        { d: 4, q: "Une pyramide est coupée par un plan parallèle à sa base. La section est...", c: ["une réduction de la base", "un agrandissement de la base", "un triangle", "un disque"], a: 0, e: "Un plan parallèle à la base d'une pyramide (ou d'un cône) donne une section qui est une réduction de la base." },
      ]
    },
    {
      id: "arithmetique4",
      titre: "Divisibilit\u00e9 et nombres premiers",
      icone: "\u2139",
      chap: [5],
      notion: "Division euclidienne : diviser a par b, c'est trouver le quotient q et le reste r tels que a = b \u00d7 q + r avec r < b.\nCrit\u00e8res de divisibilit\u00e9 : un nombre est divisible par 2 s'il se termine par 0, 2, 4, 6 ou 8 ; par 5 s'il se termine par 0 ou 5 ; par 3 (ou 9) si la somme de ses chiffres est divisible par 3 (ou 9) ; par 4 si ses deux derniers chiffres forment un nombre divisible par 4.\nNombre premier : nombre entier qui a exactement 2 diviseurs, 1 et lui-m\u00eame. 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47... sont premiers. 1 et 0 ne sont pas premiers.",
      qs: [
        { d: 1, q: "Dans la division euclidienne de 702 par 273, quel est le quotient ?", c: ["2", "3", "258", "975"], a: 0, e: "273 \u00d7 2 = 546 et 273 \u00d7 3 = 819 > 702 : le quotient est 2." },
        { d: 2, q: "Dans la division euclidienne de 702 par 273, quel est le reste ?", a: "156", e: "702 = 273 \u00d7 2 + 156, et 156 < 273 : le reste est 156." },
        { d: 2, q: "Compl\u00e9ter : 351 = 17 \u00d7 20 + ...", a: "11", e: "17 \u00d7 20 = 340, et 351 - 340 = 11. On v\u00e9rifie que 11 < 17 : c'est bien le reste." },
        { d: 2, q: "Quel est le reste de la division euclidienne de 100 par 7 ?", c: ["2", "1", "3", "14"], a: 0, e: "7 \u00d7 14 = 98, donc 100 = 7 \u00d7 14 + 2 : le reste est 2." },
        { d: 2, q: "Parmi ces nombres, lequel est premier ?", c: ["97", "91", "87", "51"], a: 0, e: "91 = 7 \u00d7 13, 87 = 3 \u00d7 29 et 51 = 3 \u00d7 17 ne sont pas premiers. 97 n'est divisible que par 1 et 97 : il est premier." },
        { d: 1, q: "Quel est le plus petit nombre premier ?", c: ["2", "1", "3", "0"], a: 0, e: "1 n'a qu'un seul diviseur : ce n'est pas un nombre premier. Le plus petit nombre premier est 2 (le seul pair)." },
        { d: 3, q: "Parmi ces nombres, lequel est premier ?", c: ["31", "27", "33", "39"], a: 0, e: "27 = 3\u00b3, 33 = 3 \u00d7 11 et 39 = 3 \u00d7 13 sont divisibles par 3. 31 n'a pas d'autre diviseur que 1 et 31." },
        { d: 3, q: "Combien y a-t-il de nombres premiers ?", c: ["Une infinit\u00e9", "25", "100", "On ne sait pas"], a: 0, e: "Il existe une infinit\u00e9 de nombres premiers : dès qu'on en a une liste, on peut toujours en trouver un nouveau." },
        { d: 3, q: "Dans l'\u00e9galit\u00e9 546 = 9 \u00d7 60 + r, quel est le reste r ?", c: ["6", "4", "0", "9"], a: 0, e: "9 \u00d7 60 = 540, et 546 - 540 = 6, avec 6 < 9 : le reste est 6." },
        { d: 3, q: "Un nombre entier est divisible \u00e0 la fois par 2 et par 5. Par quel nombre se termine-t-il forc\u00e9ment ?", c: ["0", "5", "2", "1"], a: 0, e: "Divisible par 2 : il finit par 0, 2, 4, 6 ou 8. Divisible par 5 : il finit par 0 ou 5. Seul 0 convient aux deux." },
        { d: 4, q: "Quel est le reste de la division euclidienne de 2003 par 4 ?", a: "3", e: "4 \u00d7 500 = 2000, donc 2003 = 4 \u00d7 500 + 3 : le reste est 3." },
        { d: 4, q: "On multiplie deux nombres premiers distincts, par exemple 3 \u00d7 7. Combien le r\u00e9sultat a-t-il de diviseurs ?", c: ["4 (1, 3, 7 et le produit)", "2", "3", "6"], a: 0, e: "Pour 3 \u00d7 7 = 21 : les diviseurs sont 1, 3, 7 et 21, soit 4 diviseurs. C'est vrai pour tout produit de deux premiers distincts." }
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
      },
      genH: {
        1: "Astuce : cherche le multiple de b juste en dessous de a, le reste est ce qui manque.\nExemple similaire : reste de 47 par 6 ? 6 \u00d7 7 = 42, donc 47 = 6 \u00d7 7 + 5 : le reste est 5.",
        2: "Astuce : additionne les chiffres du nombre. Si la somme est dans la table de 3, le nombre est divisible par 3.\nExemple similaire : 271 ? 2 + 7 + 1 = 10, non divisible par 3. 273 ? 2 + 7 + 3 = 12, divisible par 3 : oui."
      }
    },
        {
      id: "rationnels", titre: "Nombres rationnels : les 4 opérations", icone: "🍕",
      chap: [6, 10],
      notion: "Somme : dénominateur commun. Produit : numérateurs × numérateurs, dénominateurs × dénominateurs.\nDiviser par a/b = multiplier par b/a (l'inverse).\nPrendre a/b d'une quantité : multiplier par a/b.",
      qs: [
        { d:1, q:"Calculer : 1/3 + 1/6", c:["2/9","1/2","1/4","2/6"], a:1, e:"1/3 = 2/6, donc 2/6 + 1/6 = 3/6 = 1/2." },
        { d:1, q:"Calculer : 2/5 × 3/4", c:["3/10","6/9","5/20","2/3"], a:0, e:"2 × 3 = 6 et 5 × 4 = 20 : 6/20 simplifié en 3/10." },
        { d:1, q:"L'inverse de 3/4 est...", c:["4/3","−3/4","1/4","12/3"], a:0, e:"L'inverse de a/b est b/a : 4/3." },
        { d:2, q:"Calculer : 3/4 ÷ 1/2", c:["3/8","3/2","6/8 = 3/4","1/2"], a:1, e:"Diviser par 1/2 = multiplier par 2 : 3/4 × 2 = 6/4 = 3/2." },
        { d:2, q:"Calculer : 5/6 − 1/4", c:["4/2","7/12","4/12","1/6"], a:1, e:"Dénominateur commun 12 : 10/12 − 3/12 = 7/12." },
        { d:2, q:"Les 3/5 d'un terrain de 2 500 m², c'est :", a:"1500", e:"3/5 × 2500 = 7500/5 = 1500 m²." },
        { d:3, q:"Calculer : 2/3 + 5/6 − 1/2", a:"1", e:"Dénominateur 6 : 4/6 + 5/6 − 3/6 = 6/6 = 1." },
        { d:3, q:"Calculer : (2/3) × (9/4)", c:["3/2","2/12","11/7","3/4"], a:0, e:"2 × 9 = 18, 3 × 4 = 12 → 18/12 = 3/2 (simplifié par 6)." },
        { d:3, q:"Calculer : 4/7 − 1/7 × 2", c:["2/7","6/7","7/7","−6/7"], a:0, e:"Produit d'abord : 1/7 × 2 = 2/7. Puis 4/7 − 2/7 = 2/7." },
        { d:4, q:"Calculer : (1/2 + 1/3) ÷ 5/6", a:"1", e:"Parenthèse : 3/6 + 2/6 = 5/6. Division : 5/6 ÷ 5/6 = 5/6 × 6/5 = 1." },
        { d:4, q:"Calculer : 3/4 ÷ (1/2 + 1/4)", c:["1","3/4","3/8","9/16"], a:0, e:"Parenthèse : 1/2 + 1/4 = 3/4. Division : 3/4 ÷ 3/4 = 1." },
        { d:4, q:"Après avoir dépensé 1/4 de son argent puis 1/3 du reste, quelle fraction de l'argent de départ reste-t-il ?", c:["1/2","5/12","1/3","7/12"], a:0, e:"1/4 dépensé → reste 3/4. On dépense 1/3 de 3/4 = 1/4. Reste : 3/4 − 1/4 = 1/2." }
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
      id: "translation4",
      titre: "La translation",
      icone: "\u2192",
      chap: [7],
      notion: "D\u00e9finition : M' est l'image de M par la translation qui transforme A en B signifie que MM' = AB et que [MM'] est parall\u00e8le \`a (AB) et de m\u00eame sens que [AB].\nConservation : la translation conserve les longueurs, les angles, les aires, l'alignement et le parall\u00e9lisme.\nImage d'une figure : l'image d'un segment est un segment parall\u00e8le et de m\u00eame longueur ; l'image d'un cercle est un cercle de m\u00eame rayon.",
      qs: [
        { d: 1, q: "Comment construire l'image M' de M par la translation qui transforme A en B ?", c: ["On reporte le vecteur AB \u00e0 partir de M", "On trace le symétrique de M par rapport \u00e0 A", "On trace le symétrique de M par rapport \u00e0 B", "On place M' n'importe o\u00f9 sur la droite (AB)"], a: 0, e: "On reporte \u00e0 partir de M la m\u00eame direction, le m\u00eame sens et la m\u00eame longueur que de A vers B." },
        { d: 2, q: "Que peut-on dire du segment [M'N'], image de [MN] par une translation ?", c: ["Il est parall\u00e8le \u00e0 [MN] et de m\u00eame longueur", "Il est perpendiculaire \u00e0 [MN]", "Il est deux fois plus long", "Il est symétrique par rapport \u00e0 M"], a: 0, e: "La translation conserve longueurs et parall\u00e9lisme : M'N' = MN et (M'N') est parall\u00e8le \u00e0 (MN)." },
        { d: 2, q: "Une translation conserve-t-elle les aires des figures ?", c: ["Oui, toujours", "Non, jamais", "Seulement pour les rectangles", "Seulement pour les cercles"], a: 0, e: "La translation conserve longueurs, angles et aires : une figure et son image ont la m\u00eame aire." },
        { d: 2, q: "Un t\u00e9l\u00e9ph\u00e9rique se d\u00e9place en ligne droite du bas vers le haut d'une pente. Quel type de transformation d\u00e9crit son mouvement ?", c: ["Une translation", "Une rotation", "Une sym\u00e9trie centrale", "Une homoth\u00e9tie"], a: 0, e: "Tous les points se d\u00e9placent dans la m\u00eame direction, le m\u00eame sens et la m\u00eame distance : c'est une translation." },
        { d: 2, q: "Une figure et son image par une translation ont-elles le m\u00eame p\u00e9rim\u00e8tre ?", c: ["Oui, car la translation conserve les longueurs", "Non, le p\u00e9rim\u00e8tre augmente", "Non, le p\u00e9rim\u00e8tre diminue", "Cela d\u00e9pend de la translation"], a: 0, e: "La translation conserve les longueurs, donc le p\u00e9rim\u00e8tre est conserv\u00e9." },
        { d: 3, q: "A a pour coordonn\u00e9es (2 ; 5). Quelle est l'image de A par la translation de 3 vers la droite et 2 vers le bas ?", c: ["(5 ; 3)", "(-1 ; 7)", "(5 ; 7)", "(-1 ; 3)"], a: 0, e: "3 vers la droite : 2 + 3 = 5. 2 vers le bas : 5 - 2 = 3. L'image est (5 ; 3)." },
        { d: 2, q: "Quelle est l'image d'un cercle par une translation ?", c: ["Un cercle de m\u00eame rayon", "Un cercle de rayon double", "Une droite", "Un ovale"], a: 0, e: "La translation conserve les longueurs : le rayon est inchang\u00e9, l'image est un cercle de m\u00eame rayon." },
        { d: 3, q: "Un train avance de 40 m. Chaque point du train s'est d\u00e9plac\u00e9 de ...", c: ["40 m, dans la m\u00eame direction et le m\u00eame sens", "40 m, dans des directions diff\u00e9rentes", "moins de 40 m \u00e0 l'avant", "plus de 40 m \u00e0 l'arri\u00e8re"], a: 0, e: "Dans une translation, tous les points se d\u00e9placent de la m\u00eame distance dans la m\u00eame direction et le m\u00eame sens." },
        { d: 3, q: "Un rectangle d'aire 12 cm\u00b2 est translat\u00e9. Quelle est l'aire de son image ?", c: ["12 cm\u00b2", "24 cm\u00b2", "6 cm\u00b2", "On ne peut pas savoir"], a: 0, e: "La translation conserve les aires : l'image a la m\u00eame aire, 12 cm\u00b2." },
        { d: 3, q: "MN = 6 cm. Quelle est la longueur de M'N', o\u00f9 M' et N' sont les images de M et N par une translation ?", a: "6", e: "La translation conserve les longueurs : M'N' = MN = 6 cm." },
        { d: 3, q: "Un angle de 45\u00b0 est translat\u00e9. Quelle est la mesure de l'angle image ?", a: "45", e: "La translation conserve les angles : l'angle image mesure aussi 45\u00b0." }
      ],
      gen: {},
      genH: {}
    },
        {
      id: "litteral4", titre: "Calcul littéral et équations", icone: "🧩",
      chap: [8, 13],
      notion: "Double distributivité : (a + b)(c + d) = ac + ad + bc + bd.\nÉquation x + a = b → x = b − a. Équation a × x = b → x = b ÷ a.\nL'égalité se conserve si on applique la même opération des deux côtés.",
      qs: [
        { d:1, q:"Développer : 2(3x + 1)", c:["6x + 1","6x + 2","5x + 3","3x + 2"], a:1, e:"2 × 3x = 6x et 2 × 1 = 2 → 6x + 2." },
        { d:1, q:"Résoudre : x + 7 = 12", a:"5", e:"x = 12 − 7 = 5." },
        { d:1, q:"Résoudre : 3x = 21", a:"7", e:"x = 21 ÷ 3 = 7." },
        { d:2, q:"Résoudre : x − 5 = −2", a:"3", e:"x = −2 + 5 = 3." },
        { d:2, q:"Développer puis réduire : (x + 2)(x + 3)", c:["x² + 5x + 6","x² + 6","x² + 5x + 5","x² + 6x + 6"], a:0, e:"x×x = x² ; x×3 = 3x ; 2×x = 2x ; 2×3 = 6. Total : x² + 5x + 6." },
        { d:2, q:"Résoudre : −4x = 20", a:"-5", e:"x = 20 ÷ (−4) = −5." },
        { d:3, q:"Résoudre : 2x + 3 = 11", a:"4", e:"2x = 11 − 3 = 8 (on enlève 3 des deux côtés), puis x = 8 ÷ 2 = 4." },
        { d:3, q:"Développer puis réduire : (2x − 1)(x + 4)", c:["2x² + 7x − 4","2x² + 8x − 4","2x² + 7x + 4","2x² + 9x − 4"], a:0, e:"2x × x = 2x² ; 2x × 4 = 8x ; −1 × x = −x ; −1 × 4 = −4. Total : 2x² + 7x − 4." },
        { d:3, q:"Résoudre : 5x − 7 = 2x + 8", c:["x = 1","x = 5","x = 15","x = −5"], a:1, e:"5x − 2x = 8 + 7 (on regroupe) → 3x = 15 → x = 5." },
        { d:4, q:"Résoudre : 3(x − 2) = 4x + 1", a:"-7", e:"3x − 6 = 4x + 1 → −6 − 1 = 4x − 3x → x = −7." },
        { d:4, q:"Un rectangle a un périmètre de 24 cm et une longueur de 3 cm de plus que sa largeur. Sa largeur ?", a:"4.5", e:"Largeur x, longueur x + 3 : 2 × (x + x + 3) = 24 → 4x + 6 = 24 → 4x = 18 → x = 4,5 cm." },
        { d:4, q:"Résoudre : (2x + 3)(x − 5) = 0", c:["x = −3/2 ou x = 5","x = 3/2 ou x = −5","x = −3 ou x = 5","x = 0"], a:0, e:"Produit nul : un des facteurs est nul : 2x + 3 = 0 → x = −3/2 ; ou x − 5 = 0 → x = 5." }
      ],
      gen: {
        1: () => { const a = 1 + Math.floor(Math.random()*9), b = 1 + Math.floor(Math.random()*9);
          return { q:`Résoudre : x + ${a} = ${a + b}`, a:String(b), e:`x = ${a+b} − ${a} = ${b}.` }; },
        3: () => { const a = 2 + Math.floor(Math.random()*4), x = 1 + Math.floor(Math.random()*9), b = Math.floor(Math.random()*12);
          return { q:`Résoudre : ${a}x + ${b} = ${a*x + b}`, a:String(x), e:`${a}x = ${a*x+b} − ${b} = ${a*x}, donc x = ${a*x} ÷ ${a} = ${x}.` }; }
      }
    },
    {
      id: "thales4",
      titre: "Th\u00e9or\u00e8me de Thal\u00e8s et triangles \u00e9gaux",
      icone: "\u224b",
      chap: [9],
      notion: "Th\u00e9or\u00e8me de Thal\u00e8s : si M \u2208 [AB], N \u2208 [AC] et (MN) // (BC), alors AM/AB = AN/AC = MN/BC.\nConfiguration \u00ab papillon \u00bb : la m\u00eame \u00e9galit\u00e9 s'applique quand les droites (MN) et (BC) sont parall\u00e8les avec M entre A et B... en gardant les c\u00f4t\u00e9s qui partent du m\u00eame point.\nCalcul d'une longueur : on utilise le produit en croix, par exemple AM/AB = AN/AC donne AC = AB \u00d7 AN \u00f7 AM.\nTriangles \u00e9gaux : deux triangles sont \u00e9gaux (isom\u00e9triques) s'ils ont des c\u00f4t\u00e9s \u00e9gaux deux \u00e0 deux, ou un angle \u00e9gal compris entre deux c\u00f4t\u00e9s \u00e9gaux, ou deux angles \u00e9gaux et le c\u00f4t\u00e9 compris \u00e9gal.",
      qs: [
        { d: 1, q: "M \u2208 [AB], N \u2208 [AC] et (MN) // (BC). Quelle est l'\u00e9galit\u00e9 de Thal\u00e8s ?", c: ["AM/AB = AN/AC = MN/BC", "AM/AB = AN/BC = MN/AC", "AB/AM = AC/AN = BC/MN", "AM/AB = AC/AN = MN/BC"], a: 0, e: "Les rapports se font sur chaque c\u00f4t\u00e9 en partant du sommet A : AM/AB = AN/AC = MN/BC." },
        { d: 2, q: "Deux triangles \u00e9gaux ont...", c: ["les m\u00eames longueurs, deux \u00e0 deux", "la m\u00eame aire mais des longueurs diff\u00e9rentes", "des angles compl\u00e9mentaires", "des c\u00f4t\u00e9s proportionnels diff\u00e9rents"], a: 0, e: "\u00c9gaux = superposables : m\u00eames longueurs, m\u00eames angles, m\u00eame aire." },
        { d: 2, q: "AM = 2, AB = 6, AN = 3 et (MN) // (BC). Calculer AC.", a: "9", e: "AM/AB = AN/AC, donc 2/6 = 3/AC. Produit en croix : AC = 6 \u00d7 3 \u00f7 2 = 9." },
        { d: 2, q: "Compl\u00e9ter le produit en croix : 3/5 = ?/15", c: ["9", "6", "12", "8"], a: 0, e: "3/5 = 9/15, car on multiplie num\u00e9rateur et d\u00e9nominateur par 3 (ou 5 \u00d7 ? = 3 \u00d7 15 = 45, donc ? = 9)." },
        { d: 3, q: "Les triangles AMN et ABC sont tels que (MN) // (BC). Que peut-on dire d'eux ?", c: ["Ils sont semblables : les longueurs de ABC sont AMN multipli\u00e9es par un m\u00eame nombre", "Ils sont \u00e9gaux : m\u00eames longueurs", "Ils ont le m\u00eame p\u00e9rim\u00e8tre", "Ils sont rectangles"], a: 0, e: "Thal\u00e8s montre que ABC est un agrandissement de AMN : m\u00eames angles, longueurs proportionnelles." },
        { d: 3, q: "AM = 3, AB = 5, AN = 6 et (MN) // (BC). Calculer AC.", a: "10", e: "AM/AB = AN/AC, donc 3/5 = 6/AC. Produit en croix : AC = 5 \u00d7 6 \u00f7 3 = 10." },
        { d: 3, q: "Configuration papillon : M, A, B align\u00e9s et M, T, C align\u00e9s, avec (BT) // (AC), MA = 6, AB = 2 et MT = 9. Calculer TC.", a: "3", e: "Thal\u00e8s en M : MA/MB = MT/MC, donc 6/8 = 9/MC. Produit en croix : MC = 8 \u00d7 9 \u00f7 6 = 12, donc TC = MC - MT = 12 - 9 = 3." },
        { d: 3, q: "Deux triangles ont un angle \u00e9gal compris entre deux c\u00f4t\u00e9s \u00e9gaux. Que peut-on conclure ?", c: ["Ils sont \u00e9gaux (2\u1d49 cas d'\u00e9galit\u00e9)", "Il faut v\u00e9rifier le 3\u1d49 c\u00f4t\u00e9", "Ils sont seulement semblables", "Rien du tout"], a: 0, e: "C'est le 2\u1d49 cas d'\u00e9galit\u00e9 des triangles : un angle \u00e9gal compris entre deux c\u00f4t\u00e9s \u00e9gaux deux \u00e0 deux suffit." },
        { d: 3, q: "MN = 4, BC = 12, AM = 3 et (MN) // (BC). Calculer AB.", a: "9", e: "AM/AB = MN/BC, donc 3/AB = 4/12. Produit en croix : AB = 3 \u00d7 12 \u00f7 4 = 9." },
        { d: 4, q: "AM = 2, AB = 5 et l'aire de AMN est 4 cm\u00b2, avec (MN) // (BC). Quelle est l'aire de ABC ?", c: ["25 cm\u00b2, car le rapport est 5/2 = 2,5\u00b2, donc 4 \u00d7 6,25", "10 cm\u00b2", "20 cm\u00b2, car 4 \u00d7 (5/2)", "2,5 cm\u00b2"], a: 0, e: "Le rapport d'agrandissement est 5/2 : les longueurs sont multipli\u00e9es par 2,5, donc l'aire par 2,5\u00b2 = 6,25. Aire = 4 \u00d7 6,25 = 25 cm\u00b2." },
        { d: 4, q: "Les c\u00f4t\u00e9s d'un triangle mesurent 3, 4 et 5 cm. Quel est le p\u00e9rim\u00e8tre d'un triangle \u00e9gal ?", c: ["12 cm", "6 cm", "15 cm", "On ne peut pas savoir"], a: 0, e: "Un triangle \u00e9gal a les m\u00eames longueurs, donc le m\u00eame p\u00e9rim\u00e8tre : 3 + 4 + 5 = 12 cm." },
        { d: 4, q: "MN/BC = 0,6 et AC = 10, avec (MN) // (BC). Calculer AN.", a: "6", e: "AN/AC = MN/BC = 0,6, donc AN = 0,6 \u00d7 10 = 6." }
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
      },
      genH: {
        1: "Astuce : \u00e9cris AM/AB = AN/AC, remplace par les valeurs connues, puis fais le produit en croix.\nExemple similaire : AM = 2, AB = 6, AN = 4 ? 2/6 = 4/AC, donc AC = 6 \u00d7 4 \u00f7 2 = 12.",
        2: "Astuce : quand on conna\u00eet MN et BC, utilise AM/AB = MN/BC.\nExemple similaire : MN = 3, BC = 9, AM = 5 ? 5/AB = 3/9, donc AB = 5 \u00d7 9 \u00f7 3 = 15."
      }
    },
        {
      id: "cosinus", titre: "Cosinus d'un angle aigu", icone: "🎯",
      chap: [11],
      notion: "Dans un triangle rectangle : cos(â) = côté adjacent ÷ hypoténuse.\nSurvient aussi : cos(60°) = 0,5 ; cos(45°) ≈ 0,71 ; cos(30°) ≈ 0,87.",
      qs: [
        { d:1, q:"cos(â) se calcule comme...", c:["adjacent ÷ hypoténuse","opposé ÷ hypoténuse","opposé ÷ adjacent","hypoténuse ÷ adjacent"], a:0, e:"cos = adjacent ÷ hypoténuse (CAH/sohcahtoa : SOH-CAH-TOA : Cos = Adjacent/Hypoténuse)." },
        { d:1, q:"Triangle rectangle en A : AB = 4, AC = 3, BC = 5. cos(∠B) ?", c:["4/5","3/5","3/4","5/4"], a:0, e:"∠B : côté adjacent = AB = 4, hypoténuse = BC = 5 → cos = 4/5 = 0,8." },
        { d:1, q:"cos(60°) vaut environ...", c:["0,5","0,87","0,71","1"], a:0, e:"cos(60°) = 0,5 exactement." },
        { d:2, q:"Triangle rectangle : hypoténuse = 10, côté adjacent à l'angle â = 8. cos(â) ?", c:["0,8","1,25","0,6","8"], a:0, e:"cos = 8/10 = 0,8." },
        { d:2, q:"Triangle ABC rectangle en B : BC = 12, AB = 5, AC = 13. cos(∠C) ?", c:["12/13","5/13","13/12","5/12"], a:0, e:"L'hypoténuse est AC = 13 ; le côté adjacent de ∠C est BC = 12 → cos(∠C) = 12/13." },
        { d:2, q:"Si cos(â) ≈ 0,98, l'angle â est...", c:["petit (≈ 10°)","droit (90°)","grand (≈ 80°)","obtus (>90°)"], a:0, e:"cos(0°) = 1 ; plus l'angle est petit, plus le cosinus est proche de 1." },
        { d:3, q:"Triangle rectangle : hypoténuse 8, angle de 30° au sommet. Longueur du côté adjacent (juste) ?", a:"6.9", e:"adjacent = hypoténuse × cos = 8 × cos(30°) ≈ 8 × 0,866 ≈ 6,93 (≈ 6,9)." },
        { d:3, q:"cos(45°) arrondi au centième ?", a:"0.71", e:"cos(45°) ≈ 0,707 → 0,71." },
        { d:3, q:"Triangle rectangle : BC = 12 (hypoténuse), angle ∠B = 25°. Longueur AB (adjacent), au dixième ?", a:"10.9", e:"AB = 12 × cos(25°) ≈ 12 × 0,906 ≈ 10,9." },
        { d:4, q:"Le cosinus d'un angle aigu est toujours compris entre...", c:["0 et 1","0 et 90","−1 et 1","1 et 2"], a:0, e:"Dans un triangle rectangle, le côté adjacent est toujours plus court que l'hypoténuse : le cosinus est strictement entre 0 et 1." },
        { d:4, q:"Quelle égalité est vraie ?", c:["cos(30°) ≈ 0,87","cos(30°) ≈ 0,5","cos(30°) ≈ 0","cos(30°) ≈ 1,73"], a:0, e:"cos(30°) ≈ 0,866." },
        { d:4, q:"Si cos(â) = 1/2 alors l'angle â mesure...", a:"60", e:"On sait que cos(60°) = 1/2 → â = 60°." }
      ]
    },
        {
      id: "puissances", titre: "Puissances", icone: "⚡",
      chap: [12, 17],
      notion: "aⁿ = a × a × ... × a (n facteurs) ; a¹ = a ; a⁰ = 1 (a ≠ 0).\n10ⁿ = 1 suivi de n zéros ; 10⁻ⁿ = 1/10ⁿ.\nRègles : aᵐ × aⁿ = aᵐ⁺ⁿ ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ ; (aᵐ)ⁿ = aᵐˣⁿ ; (a×b)ⁿ = aⁿ × bⁿ.",
      qs: [
        { d:1, q:"Calculer : 2⁴", c:["8","16","6","4"], a:1, e:"2⁴ = 2 × 2 × 2 × 2 = 16 (pas 2 × 4 = 8 !)." },
        { d:1, q:"Calculer : 10⁵", c:["50 000","1 000 000","100 000","10 000"], a:2, e:"10⁵ = 1 suivi de 5 zéros = 100 000." },
        { d:1, q:"Calculer : 7⁰ ... 3⁰ ?", a:"1", e:"Tout nombre non nul à la puissance 0 vaut 1." },
        { d:2, q:"Simplifier : 5³ × 5⁴", c:["5¹²","5⁷","25⁷","5⁻¹"], a:1, e:"On additionne les exposants : 5³ × 5⁴ = 5³⁺⁴ = 5⁷." },
        { d:2, q:"Simplifier : 7⁹ ÷ 7⁶", c:["7³","7¹⁵","7⁵⁴","1/7³"], a:0, e:"On soustrait les exposants : 7⁹⁻⁶ = 7³." },
        { d:2, q:"Calculer : (−3)³", c:["9","−27","27","−9"], a:1, e:"(−3)³ = (−3) × (−3) × (−3) = −27. Puissance impaire d'un négatif → négatif." },
        { d:3, q:"Écriture décimale de : 10⁻³", c:["0,001","0,01","−1 000","0,0001"], a:0, e:"10⁻³ = 1/1000 = 0,001." },
        { d:3, q:"Simplifier : (2³)²", a:"64", e:"(2³)² = 2⁽³ˣ²⁾ = 2⁶ = 64." },
        { d:3, q:"Simplifier : 3⁵ × 3² ÷ 3⁴", c:["27","3¹¹","3","9"], a:0, e:"5 + 2 = 7, puis 7 − 4 = 3, donc 3⁵ × 3² ÷ 3⁴ = 3³ = 27." },
        { d:4, q:"Écriture scientifique de 45 200", c:["4,52 × 10⁴","45,2 × 10³","4,52 × 10⁵","4,52 × 10³"], a:0, e:"Scientifique = a × 10ⁿ avec 1 ≤ a < 10 : 45 200 = 4,52 × 10⁴." },
        { d:4, q:"Calculer : 2⁻² × 2⁵ ÷ 2", a:"4", e:"On additionne les exposants (−2 + 5 − 1 = 2) : 2² = 4." },
        { d:4, q:"Quelle égalité est vraie pour tous nombres a et b (a, b ≠ 0) ?", c:["(a × b)ⁿ = aⁿ × bⁿ","(a + b)ⁿ = aⁿ + bⁿ","aⁿ + aᵐ = aⁿ⁺ᵐ","aⁿ ÷ aᵐ = aⁿᵐ"], a:0, e:"La puissance « passe » sur chaque facteur d'un produit : (a × b)ⁿ = aⁿ × bⁿ. Elle ne s'applique pas aux sommes !" }
      ],
      gen: {
        1: () => { const a = 2 + Math.floor(Math.random()*12);
          return { q:`Calculer : ${a}²`, a:String(a*a), e:`${a}² = ${a} × ${a} = ${a*a}.` }; },
        2: () => { const n = 1 + Math.floor(Math.random()*2);
          return { q:`Calculer : 10${n === 1 ? "" : "²"} × 10²`, a:String(Math.pow(10, n) * 100), e:`10${n === 1 ? "" : "²"} × 10² = 10${n === 1 ? "³" : "⁴"} = ${Math.pow(10, n) * 100} (1 suivi de ${n+2} zéros).` }; }
      }
    },
        {
      id: "stats4", titre: "Statistiques et probabilités (début)", icone: "📊",
      chap: [14, 16],
      notion: "Moyenne pondérée : (somme des valeurs × effectifs) ÷ effectif total.\nProbabilité : nombre de cas favorables ÷ nombre de cas possibles (produits équiprobables).\nUne probabilité est comprise entre 0 (impossible) et 1 (certain).",
      qs: [
        { d:1, q:"Probabilité d'obtenir un nombre pair en lançant un dé à 6 faces ?", c:["1/2","1/4","1/3","2/3"], a:0, e:"3 faces paires (2, 4, 6) sur 6 → 3/6 = 1/2." },
        { d:1, q:"Probabilité de tirer une carte rouge dans un jeu de 52 cartes...", c:["1/2","1/4","1/26","2/13"], a:0, e:"26 rouges sur 52 → 1/2." },
        { d:1, q:"Moyenne pondérée : notes 10 (coef 1) et 14 (coef 2) ?", c:["12,67","12","12,5","13"], a:0, e:"(10 × 1 + 14 × 2) ÷ 3 = (10 + 28) ÷ 3 = 38 ÷ 3 ≈ 12,67 ≈ 12,7." },
        { d:2, q:"Probabilité d'obtenir un nombre ≤ 2 avec un dé à 6 faces ?", c:["1/3","1/6","1/2","2/3"], a:0, e:"2 cas (1, 2) sur 6 → 2/6 = 1/3." },
        { d:2, q:"Notes : 8 (coef 2), 12 (coef 3). Moyenne ?", a:"10.4", e:"(8 × 2 + 12 × 3) ÷ 5 = (16 + 36) ÷ 5 = 52 ÷ 5 = 10,4." },
        { d:2, q:"Un sac a 4 billes bleues et 6 rouges. Probabilité de tirer une bleue ?", c:["0,4","0,6","1/4","2/3"], a:0, e:"4/10 = 0,4." },
        { d:3, q:"Probabilité d'obtenir un multiple de 3 avec un dé à 6 faces ?", a:"0.33", e:"Cas favorables : 3 et 6 → 2/6 = 1/3 ≈ 0,33." },
        { d:3, q:"Moyenne pondérée : 15 (coef 3), 10 (coef 2) ?", a:"13", e:"(15 × 3 + 10 × 2) ÷ 5 = 55 ÷ 5 = 13." },
        { d:3, q:"Probabilité d'obtenir un nombre premier en tirant une carte de 1 à 10 ?", c:["0,4","0,5","0,3","0,2"], a:0, e:"Premiers : 2, 3, 5, 7 → 4/10 = 0,4." },
        { d:4, q:"On joue 2 fois au pile ou face (équiprobable). Probabilité de 2 piles ?", c:["1/4","1/2","1/3","2/4"], a:0, e:"4 issues (PP, PF, FP, FF) équiprobables → 1/4." },
        { d:4, q:"Une série : 12 (3 fois), 15 (2 fois), 10. Moyenne ?", a:"12.67", e:"(36 + 30 + 10) ÷ 6 = 76 ÷ 6 ≈ 12,67." },
        { d:4, q:"Dans une classe de 28 élèves : 16 filles. Un élève tiré au hasard ; probabilité que ce soit un garçon (décimales 2 chiffres) ?", a:"0.43", e:"12 garçons → 12/28 ≈ 0,4286 ≈ 0,43." }
      ]
    }
  ]
};
