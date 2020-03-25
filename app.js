// ce dont j'ai besoin pour travailler sur cette page
const express = require('express');
const bodyParse = require('body-parser');


const app = express();

// permet de parser le contenu de l'input
app.use(bodyParse.urlencoded({extended: true}));

// affiche le middleware dans la console et renvoie sur la route /users
app.get('/', (req, res, next) => {
    console.log('message dans la console');
    res.redirect('/users');
    next();
});


// affiche le middleware en html (titre et formulaire qui envoie l'action sur la route /create-user)
app.get('/users', (req, res, next) => {
    res.send(`
    <h3>Rentrez votre nom</h3>
    <form action="/create-user" method="POST"><input type="texte" name="name">
    <button type="submit">envoyer</button>`
    );
    next();
});


// traite le contenu de l'input grace au module body-parser 
// affiche le middleware dans la console et en html
app.post('/create-user', (req, res, next) => {
    console.log(req.body.name);
    res.send(`
    <h3>Votre nom est : </h3>
    <h1>${req.body.name}</h1>`
    );
});


app.listen(3000);