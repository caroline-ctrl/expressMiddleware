// ce dont j'ai besoin pour travailler sur cette page
const express = require('express');
const path = require('path');
const rootDir = require('../helper/path-helper');


const router = express.Router();


// affiche le middleware dans la console et renvoie sur la route /users
router.get('/', (req, res, next) => {
    console.log('message dans la console');
    res.redirect('/users');
    next();
});

module.exports = router;