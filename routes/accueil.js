// ce dont j'ai besoin pour travailler sur cette page
const express = require('express');
const path = require('path');


// affiche le middleware dans la console et renvoie sur la route /users
app.get('/', (req, res, next) => {
    console.log('message dans la console');
    res.redirect('/users');
    next();
});
