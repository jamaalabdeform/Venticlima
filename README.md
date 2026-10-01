# Venticlima

Site de présentation en ligne : https://venticlima-agadir.higgsfield.app
Construit sur Higgsfield avec une direction visuelle Impeccable.

Cette copie locale contient aussi une version autonome pour présentation et sauvegarde.
Démarrer : node server.cjs (http://localhost:4177).
Reconstruire : npm install puis node build.cjs.
Le dossier dist contient la version statique compilée. Configurer les routes inconnues vers index.html sur un hébergement statique.

Téléphone confirmé : +212661255939. Le formulaire prépare un message WhatsApp à relire puis envoyer par le visiteur. Aucun email inventé.
Avant lancement officiel : valider les informations légales, ajouter les vraies références et photos de chantiers. Les exemples et visuels d’illustration sont signalés. Aucun chiffre, certificat, témoignage ou client inventé.

Validation : huit pages, images, interactions des expertises, menu mobile et Escape, absence de débordement à 390px, récapitulatif WhatsApp et conservation des champs. Compilation Higgsfield et publication réussies.

## Utilisation du dépôt

```sh
npm ci
npm run build
npm start
```

Ouvrir http://localhost:4177. Les huit routes sont prises en charge par le serveur local.

Ce dépôt contient la version autonome React du site, ses sources TypeScript et CSS, ses images et polices ainsi que la sortie compilée `dist`. Le projet hébergé sur Higgsfield utilise son environnement TanStack Start ; pousser dans ce dépôt ne redéploie pas automatiquement la version Higgsfield.

Les assets statiques sont conservés dans `dist/assets`. Le build remplace `main.js` et `main.css` sans effacer les images ni les polices.

### Modifier le contenu

- `src/data.ts` : coordonnées, expertises, secteurs et exemples de projets.
- `src/site.tsx` : pages et interactions.
- `src/style.css` : identité visuelle et responsive.
- `src/main.tsx` : routage de la version autonome.

Le formulaire prépare un message WhatsApp sans envoi automatique. Aucune clé API ni aucun service email n’est requis.
