const express = require('express');
const axios = require('axios');
const app = express();

const catBreedRouter = require('./routes/catBreeds.route');
const catImagesRouter = require('./routes/catImages.router');

app.use(express.json());

// route
app.use('/', catBreedRouter);
app.use('/images', catImagesRouter);

module.exports = app;