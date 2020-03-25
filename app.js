// ce dont j'ai besoin pour travailler sur cette page
const express = require('express');


const app = express();

app.use('/', (req, res, next) => {
    console.log('message dans la console');
    res.send('<h1>Page dont le message s\'affiche dans la console</h1>')
});


app.listen(3000);