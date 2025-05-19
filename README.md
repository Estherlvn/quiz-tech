# 🚀 Déploiement d'une application React sur un serveur Apache

Ce guide décrit les étapes pour mettre en ligne une application **React** sur un **serveur distant Apache** à l’aide de **FileZilla** (transfert FTP) et **PuTTY** (connexion SSH). L'application est servie avec **Node.js + Express**, et configurée via Apache avec un proxy.

## 🛠️ Prérequis

* Application React fonctionnelle
* Un serveur Apache configuré (accès FTP + SSH)
* Node.js et npm installés sur le serveur
* Apache2 installé sur le serveur
* Les outils suivants installés localement :
  * [FileZilla](https://filezilla-project.org/)
  * [PuTTY](https://www.putty.org/)
  * [VS Code](https://code.visualstudio.com/) (ou autre éditeur de texte)


## 📁 Étape 1 – Connexion au serveur
### A. Connexion FTP (avec FileZilla)
1. Ouvrir FileZilla
2. Renseigner les champs :
   * **Hôte** : IP ou nom de domaine du serveur
   * **Nom d’utilisateur**
   * **Mot de passe**
   * **Port** : 21 (ou autre selon configuration)
3. Se connecter et naviguer dans les dossiers du serveur

### B. Connexion SSH (avec PuTTY)
1. Ouvrir PuTTY
2. Entrer l’adresse IP du serveur dans “Host Name”
3. Cliquer sur “Open”
4. S’authentifier avec vos identifiants


## ⚙️ Étape 2 – Préparer l’application React
### A. Ajouter un fichier `server.js`
Créer un fichier `server.js` à la racine du projet React
### B. Modifier `package.json`
S'assurer que la ligne `"homepage": "."` est bien définie (surtout pour React Router)


## ⚙️ Étape 3 – Build et installation des dépendances
Depuis le terminal (via PuTTY ou en local si build puis upload) :
```bash
npm install
npm install express
npm run build
```


## 📤 Étape 4 – Transfert des fichiers sur le serveur
Utiliser FileZilla pour transférer :
* Le dossier `build/`
* Le fichier `server.js`
* Le fichier `package.json` (optionnel mais recommandé)
* Le dossier `node_modules/` (facultatif, sinon `npm install` côté serveur)


## 🌐 Étape 5 – Configuration d'Apache
### A. Créer un fichier `.conf` Apache
### B. Activer le proxy Apache et la configuration
Dans le terminal via PuTTY :
```bash
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2ensite mon-projet.conf
sudo systemctl reload apache2
```

## 🖥️ Étape 6 – Lancer le serveur Node.js
Toujours depuis PuTTY :
```bash
cd /chemin/vers/le/projet
node server.js
```

Si le déploiement a fonctionné, le message suivant devrait apparaître :
```
Server is running on port 3000
```




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
