# BaouMaths 📈

Application de révision **progressive, auto-corrective et auto-adaptative** en mathématiques pour le cycle 4 (5e · 4e · 3e), conforme aux programmes de mathématiques en vigueur (arrêté du 17 janvier 2020 — repères de progression du cycle 4).

## 🚀 Utilisation

L'application est publiée ici (GitHub Pages) : **[https://badmaths06640.github.io/MATHS-Baous/](https://badmaths06640.github.io/MATHS-Baous/)**

Parcours de l'élève :
1. **Choix du niveau de classe** (5e, 4e, 3e).
2. **Choix du thème** (25 thèmes conformes au programme, présentés **dans l'ordre de la progression annuelle** : chaque carte indique les chapitres correspondants).
3. **Auto-évaluation du niveau de maîtrise** (4 échelons, vocabulaire du socle commun : maîtrise fragile → très bonne maîtrise).
4. **Résumé de cours** : chaque thème s'ouvre sur des cartes visuelles rappelant les formules et règles révisées.
5. **Série de 10 questions** avec correction immédiate et explication pédagogique après chaque réponse.
6. **Aide à la demande** : un bouton « 💡 Aide » présent sur CHAQUE question donne une astuce ET un exemple similaire, cliquable et dépliable autant de fois que voulu.
7. **Adaptativité** : 3 bonnes réponses de suite → le niveau monte ; 2 erreurs de suite → il redescend. Les générateurs produisent des variantes infinies de questions calculatoires (avec leur propre aide).
8. **Bilan** avec étoiles (0 à 3) et niveau de maîtrise estimé, sauvegardé par thème.

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
data5e.js     banque de questions 5e (8 thèmes)
data4e.js     banque de questions 4e (8 thèmes)
data3e.js     banque de questions 3e (9 thèmes)
aide5e.js     résumés de cours + aides par question (5e)
aide4e.js     résumés de cours + aides par question (4e)
aide3e.js     résumés de cours + aides par question (3e)
aides.js      fusion des aides dans les banques
```

Technologies : HTML/CSS/JavaScript natif — **zéro dépendance externe** (aucun CDN, aucune police distante), indispensable à la conformité RGPD.

## 📚 Contenu pédagogique — aligné sur la progression annuelle

Les thèmes sont **rangés dans l'ordre de l'année** et affichent les chapitres du programme correspondants (PDF de progression présents dans le dépôt). L'élève révise donc toujours ce qu'il vient de voir en classe.

| Niveau | Thèmes → chapitres de la progression |
|---|---|
| 5e | Priorités opératoires (ch. 1) · Symétrie, angles et quadrilatères (ch. 2, 6, 8, 12, 18) · Calcul littéral (ch. 3, 9, 19) · Relatifs (ch. 5, 13) · Fractions : comparer, additionner, soustraire (ch. 7, 16) · Proportionnalité et pourcentages (ch. 11, 17) · Statistiques (ch. 14) · Périmètres, aires et volumes (ch. 15, 20) |
| 4e | Pourcentages, vitesses, échelles (ch. 1, 18) · Pythagore (ch. 2, 13) · Solides et volumes (ch. 4) · Fractions, les 4 opérations (ch. 6, 10) · Calcul littéral et équations (ch. 8, 14) · Cosinus (ch. 11) · Puissances (ch. 12) · Statistiques et probabilités (ch. 15, 17) |
| 3e | Racines carrées (ch. 3 — outils Thalès/Pythagore) · Thalès et agrandissements (ch. 3, 6, 19) · Équations et problèmes (ch. 4, 15) · Fonctions (ch. 5, 7, 12) · Identités remarquables et factorisation (ch. 9, 15) · Statistiques : médiane et quartiles (ch. 10) · Trigonométrie (ch. 13, 16) · Sphères, cônes, pyramides (ch. 14, 17) · Probabilités (ch. 18) |
