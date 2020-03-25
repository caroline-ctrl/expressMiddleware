// ce dont j'ai besoin pour travailler sur cette page
const express = require('express');


const app = express();

app.get('/', (req, res, next) => {
    console.log('message dans la console');
    next();
});

app.get('/users', (req, res, next) => {
    res.send('<form action="/users" method="POST"><input type="texte" name="user"><button type="submit">envoyer</button>');
});

app.listen(3000);