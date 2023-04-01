const express = require('express');
const { httpGetCatImagesByBreed } = require('./catImages.controller');

const catImagesRouter = express.Router();

// get all the cat breeds

catImagesRouter.post('/', httpGetCatImagesByBreed);

module.exports = catImagesRouter;
