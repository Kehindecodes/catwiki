const axios = require('axios');
require('dotenv').config();
async function httpGetAllCatsBreeds(req, res) {
	try {
		const response = await axios.get('https://api.thecatapi.com/v1/breeds');
		return res.status(200).json(response.data);
	} catch (error) {
		return res.send(error);
	}
}

async function httpGetCatBreed(req, res) {
	const breedId = req.params.breedId;
	const apiKey = process.env.API_KEY;

	try {
		const response = await axios.get(
			`https://api.thecatapi.com/v1/breeds/${breedId}`,
		);
		const breedDetails = response.data;

		const imagesResponse = await axios.get(
			`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}&limit=8`,
			{
				headers: {
					'x-api-key': apiKey,
				},
			},
		);
		const breedImages = imagesResponse.data;
		return res
			.status(200)
			.json({
				breed: breedDetails,
				images: breedImages.map((image) => image.url),
			});
	} catch (error) {
		return res.send(error);
	}
}

module.exports = {
	httpGetAllCatsBreeds,
	httpGetCatBreed,
};
