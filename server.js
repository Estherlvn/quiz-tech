const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5230;

// Servir les fichiers statiques du dossier 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Pour toutes les autres requêtes, retourner le fichier 'index.html' du dossier 'build'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
