// Import modules
require('dotenv').config();
const https = require('https');
const fs = require('fs');
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

// Config SSL
const ssl = {
    key: fs.readFileSync(process.env.SSL_KEY_PATH),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH)
  };

// Routage
app.use(router);

// Lancement du serveur
// https.createServer(ssl, app).listen(PORT, () => {
//     console.log(`Listening on https://localhost:${PORT}`);
//   });

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});