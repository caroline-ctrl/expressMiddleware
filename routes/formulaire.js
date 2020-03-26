// ce dont j'ai besoin pour travailler sur cette page
const express = require('express');


const router = express.Router();


// affiche le middleware en html (titre et formulaire qui envoie l'action sur la route /create-user)
router.get('/users', (req, res, next) => {
    res.send(`
    <h3>Rentrez votre nom</h3>
    <form action="/create-user" method="POST"><input type="texte" name="name">
    <button type="submit">envoyer</button>`
    );
    next();
});


// traite le contenu de l'input grace au module body-parser 
// affiche le middleware dans la console et en html
router.post('/create-user', (req, res, next) => {
    console.log(req.body.name);
    res.send(`
    <h3>Votre nom est : </h3>
    <h1>${req.body.name}</h1>`
    );
});


module.exports = router;