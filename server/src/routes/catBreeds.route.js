const express = require('express');
const { httpGetAllCatsBreeds } = require('./catBreeds.controller');

const catBreedsRouter = express.Router();

// get all the cat breeds
catBreedsRouter.get('/', httpGetAllCatsBreeds);


module.exports = catBreedsRouter;
