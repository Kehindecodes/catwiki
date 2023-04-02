const express = require('express');
const { httpGetTopCatBreeds } = require('./topCatBreed.controller');

const topCatBreedsRouter = express.Router();

// get all the cat breeds

topCatBreedsRouter.get('/topbreeds', httpGetTopCatBreeds);

module.exports = topCatBreedsRouter;
