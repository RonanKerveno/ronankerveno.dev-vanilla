const express = require('express');
const router = express.Router();

// Page du site.
router.get('/', (req, res) => {
    res.render('index');
});

// Autres pages (404).
router.all('*', (req, res) => {
    res.render('err/404');
  });
  
 module.exports = router;