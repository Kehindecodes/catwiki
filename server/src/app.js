const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

const catBreedRouter = require('./routes/catBreeds.route');
const topCatBreedsRouter = require('./routes/topCatBreed.router');
const catImagesRouter = require('./routes/catImages.router');

app.use(
	cors({
		origin: 'http://localhost:5173',
	}),
);
app.use(express.json());

// route
app.use('/', catBreedRouter);
app.use('/images', catImagesRouter);
app.use(topCatBreedsRouter);

module.exports = app;
