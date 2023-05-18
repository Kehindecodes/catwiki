const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

const catBreedRouter = require('./routes/catBreeds.route');
const topCatBreedsRouter = require('./routes/topCatBreed.router');
const catImagesRouter = require('./routes/catImages.router');

app.use(cors());
app.use(express.json());

// route
app.use('/api/v1/breeds', catBreedRouter);
app.use('/api/v1/images', catImagesRouter);
app.use('/api/v1/topbreeds', topCatBreedsRouter);

module.exports = app;
