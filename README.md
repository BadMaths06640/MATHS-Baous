# BaouMaths 📈

Application de révision **progressive, auto-corrective et auto-adaptative** en mathématiques pour le cycle 4 (5e · 4e · 3e), conforme aux programmes de mathématiques en vigueur (arrêté du 17 janvier 2020 — repères de progression du cycle 4).

## 🚀 Utilisation

L'application est publiée ici (GitHub Pages) : **[https://badmaths06640.github.io/MATHS-Baous/](https://badmaths06640.github.io/MATHS-Baous/)**

Parcours de l'élève :
1. **Choix du niveau de classe** (5e, 4e, 3e).
2. **Choix du thème** (25 thèmes conformes au programme : nombres et calculs, données et probabilités, grandeurs et mesures, espace et géométrie).
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

## 📚 Contenu pédagogique (aperçu)

| Niveau | Thèmes |
|---|---|
| 5e | Priorités opératoires · relatifs · écriture fractionnaire · proportionnalité · distributivité · statistiques · symétrie et triangles · aires/volumes |
| 4e | Puissances · rationnels · calcul littéral et équations · pourcentages/vitesses/échelles · Pythagore · cosinus · volumes · statistiques et premières probabilités |
| 3e | Racines carrées · identités remarquables et factorisation · fonctions · équations et problèmes · Thalès · trigonométrie · médiane et quartiles · probabilités · sphères/cônes/pyramides |
