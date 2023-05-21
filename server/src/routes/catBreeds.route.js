const express = require('express');
const {
	httpGetAllCatsBreeds,
	httpGetCatBreed,
} = require('./catBreeds.controller');

const catBreedsRouter = express.Router();

// get all the cat breeds
catBreedsRouter.get('/', httpGetAllCatsBreeds);

catBreedsRouter.get('/:breedId', httpGetCatBreed);

module.exports = catBreedsRouter;
