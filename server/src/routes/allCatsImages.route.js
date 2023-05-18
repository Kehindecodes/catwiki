const express = require('express');
const { httpGetAllCatsImages } = require('./allCatsImage.controller');

const allCatsImageRouter = express.Router();

// get all the cat images
allCatsImageRouter.get('/', httpGetAllCatsImages);

module.exports = allCatsImageRouter;
