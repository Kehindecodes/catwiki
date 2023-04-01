const axios = require('axios');
require('dotenv').config();

async function httpGetCatImagesByBreed(req, res) {
	const breedId = req.body.breed_id;
	const apiKey = process.env.API_KEY;
	try {
		const images = await axios.get(
			`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
			{
				headers: {
					'x-api-key': apiKey,
				},
			},
		);
		return res.status(200).json(images.data);
	} catch (error) {
		return res.send(error);
	}
}

module.exports = {
	httpGetCatImagesByBreed,
};
