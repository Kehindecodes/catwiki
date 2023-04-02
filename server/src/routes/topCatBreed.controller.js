const axios = require('axios');
require('dotenv').config();

async function httpGetTopCatBreeds(req, res) {
	const apiKey = process.env.API_KEY;
	const limit = 8;

	try {
		const response = await axios.get(
			`https://api.thecatapi.com/v1/breeds?order=desc&limit=${limit}`,
			{
				headers: {
					'x-api-key': apiKey,
				},
			},
		);
		return res.status(200).json(response.data);
	} catch (error) {
		return res.send(error);
	}
}

module.exports = {
	httpGetTopCatBreeds,
};
