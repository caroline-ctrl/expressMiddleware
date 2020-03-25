// ce dont j'ai besoin pour travailler sur cette page
const express = require('express');
const bodyParse = require('body-parser');
const accueil = require('./routes/accueil');
const formulaire = require('./routes/formulaire');


const app = express();

// permet de parser le contenu de l'input
app.use(bodyParse.urlencoded({extended: true}));
// pour se servir des deux routes
app.use(accueil);
app.use(formulaire);
// port 3000
app.listen(3000);