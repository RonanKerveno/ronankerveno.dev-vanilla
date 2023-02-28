// Import modules
require('dotenv').config();
const express = require('express');

// Import router
const router = require('./app/router');

// Config port
const port = process.env.PORT || 3000;

// Config express
const app = express();
app.set('view engine', 'ejs');
app.set('views', "./app/views");

// Config fichiers statiques
app.use(express.static('public'));

// Routage
app.use(router);

// Lancement du serveur
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});