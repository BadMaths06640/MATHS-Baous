# BaouMaths 📈

Application de révision **progressive, auto-corrective et auto-adaptative** en mathématiques pour le cycle 4 (5e · 4e · 3e), conforme aux programmes de mathématiques en vigueur (arrêté du 17 janvier 2020 — repères de progression du cycle 4).

## 🚀 Utilisation

L'application est publiée ici (GitHub Pages) : **[https://badmaths06640.github.io/MATHS-Baous/](https://badmaths06640.github.io/MATHS-Baous/)**

Parcours de l'élève :
1. **Choix du niveau de classe** (5e, 4e, 3e).
2. **Choix du thème** (41 thèmes conformes au programme, présentés **dans l'ordre de la progression annuelle** : chaque carte indique les chapitres correspondants).
3. **Auto-évaluation du niveau de maîtrise** (4 échelons, vocabulaire du socle commun : maîtrise fragile → très bonne maîtrise).
4. **Résumé de cours** : chaque thème s'ouvre sur des cartes visuelles rappelant les formules et règles révisées.
5. **Série de 10 questions** avec correction immédiate et explication pédagogique après chaque réponse.
6. **Aide à la demande** : un bouton « 💡 Aide » présent sur CHAQUE question donne une astuce ET un exemple similaire, cliquable et dépliable autant de fois que voulu.
7. **Révision en vidéo** : chaque thème propose une ou plusieurs vidéos 🎬 (essentiellement Yvan Monka et les capsules des cours, extraites des QR codes des PDF de cours), ouverte dans un nouvel onglet — aucune vidéo intégrée, aucun traceur chargé par l'application.
8. **Adaptativité** : 3 bonnes réponses de suite → le niveau monte ; 2 erreurs de suite → il redescend. Les **41 thèmes** disposent désormais chacun de **générateurs infinis de questions** (inspirés de l'approche paramétrique de Mathalea), répartis sur les 4 niveaux de difficulté, avec leur propre aide (astuce + exemple similaire) : les séries sont renouvelées à l'infini, y compris sur les chapitres moins probabilistes (angles, statistiques, translation, sphères, Thalès, fonctions…).
9. **Bilan** avec étoiles (0 à 3) et niveau de maîtrise estimé, sauvegardé par thème.

Aucun compte, aucune connexion : l'élève clique et travaille.

## 🔒 Conformité RGPD

- **Aucune donnée personnelle collectée** : pas de compte, pas d'e-mail, pas de formulaire.
- **Aucun cookie, aucun traceur, aucune publicité, aucune mesure d'audience** : la page ne fait aucun appel réseau après son chargement.
- **Stockage 100 % local** : la progression (étoiles, niveaux, nombre de sessions) est enregistrée dans le *stockage local* du navigateur de l'appareil — données non personnelles, jamais transmises.
- **Droit à l'effacement** : un bouton « Effacer toutes mes données » supprime immédiatement tout l'historique local.
- **Portabilité maîtrisée** : un « code de progression » (texte encodé, sans donnée identifiante) peut être exporté/importé pour continuer sur un autre appareil, sans aucun serveur.
- Rubrique d'information intégrée dans l'application (bouton « RGPD »), à lire avant tout déploiement scolaire.

## 🌐 Hébergement

Site statique hébergé gratuitement par **GitHub Pages** (HTTPS, sans serveur, sans base de données). Comme aucune donnée personnelle n'est traitée, aucun registre RGPD n'est requis côté application ; le responsable du site est le propriétaire du dépôt.

## 🛠️ Structure technique

```
index.html    interface (3 étapes : niveau → thème → maîtrise)
style.css     design responsive (mobile/tablette/ordinateur)
app.js        moteur : navigation, adaptativité, correction, stockage local
data.js       agrégation des niveaux
data5e.js     banque de questions 5e (17 thèmes / 22 chapitres)
data4e.js     banque de questions 4e (17 thèmes / 18 chapitres)
data3e.js     banque de questions 3e (19 thèmes / 19 chapitres)
aide5e.js     résumés de cours + aides par question (5e)
aide4e.js     résumés de cours + aides par question (4e)
aide3e.js     résumés de cours + aides par question (3e)
aides.js      fusion des aides dans les banques
```

Technologies : HTML/CSS/JavaScript natif — **zéro dépendance externe** (aucun CDN, aucune police distante), indispensable à la conformité RGPD.

## 📚 Contenu pédagogique — aligné sur la progression annuelle

Les thèmes sont **rangés dans l'ordre de l'année** et affichent les chapitres du programme correspondants (PDF de cours complets 5e/4e/3e présents dans le dépôt). L'élève révise donc toujours ce qu'il vient de voir en classe.

| Niveau | Thèmes → chapitres de la progression |
|---|---|
| 5e | Calcul et priorités opératoires (ch. 1) · Arithmétique : diviseurs et nombres premiers (ch. 1) · Symétrie centrale (ch. 2) · Calcul littéral : distributivité (ch. 3, 9) · Angles et droites parallèles (ch. 4) · Nombres relatifs : repérage et calcul (ch. 5, 13) · Triangles : angles et constructions (ch. 6) · Fractions : comparer, additionner, soustraire (ch. 7, 16) · Parallélogrammes et quadrilatères (ch. 8, 18) · Géométrie dans l'espace : solides et volumes (ch. 10, 20) · Proportionnalité et pourcentages (ch. 11, 17) · Droites remarquables du triangle (ch. 12) · Statistiques : effectifs et moyenne (ch. 14) · Périmètres et aires (ch. 15) · Équations et problèmes (ch. 19) · Probabilités (ch. 21) · Pensée informatique (Scratch) (ch. 22) |
| 4e | Proportionnalité et pourcentages (ch. 1) · Théorème de Pythagore et racine carrée (ch. 2) · Multiplication et division de nombres relatifs (ch. 3) · Solides : volumes (ch. 4) · Divisibilité et nombres premiers (ch. 5) · Nombres rationnels : les 4 opérations (ch. 6, 10) · La translation (ch. 7) · Calcul littéral : développer et réduire (ch. 8) · Théorème de Thalès (ch. 9) · Cosinus d'un angle aigu (ch. 11) · Puissances (ch. 12) · Réciproque de Pythagore (ch. 13) · Équations : résoudre (ch. 14) · Statistiques : moyenne et médiane (ch. 15) · Réciproque de Thalès (ch. 16) · Probabilités (ch. 17) · Grandeurs : vitesses et débits (ch. 18) |
| 3e | Fractions et nombres relatifs (ch. 1) · Puissances et notation scientifique (ch. 2) · Théorème de Thalès et rappel de Pythagore (ch. 3) · Calcul littéral, partie 1 (ch. 4) · Fonctions : image et antécédent (ch. 5) · Réciproque et contraposée de Thalès (ch. 6) · Fonction linéaire (ch. 7) · Arithmétique : multiples et diviseurs (ch. 8) · Calcul littéral, partie 2 : identités remarquables (ch. 9) · Statistiques : médiane et quartiles (ch. 10) · Rotation (ch. 11) · Fonction affine (ch. 12) · Trigonométrie : calculer des longueurs (ch. 13) · La sphère et la boule (ch. 14) · Calcul littéral, partie 3 : factorisation et produit nul (ch. 15) · Trigonométrie : calculer des angles (ch. 16) · Repérage dans l'espace et sections de solides (ch. 17) · Probabilités (ch. 18) · Homothéties et agrandissements (ch. 19) |
