const axios = require('axios');
require('dotenv').config();
async function httpGetAllCatsImages(req, res) {
	const limit = 4;
	try {
		const response = await axios.get(
			'https://api.thecatapi.com/v1/images/search?limit=4',
		);
		return res.status(200).json(response.data);
	} catch (error) {
		return res.send(error);
	}
}

module.exports = {
	httpGetAllCatsImages,
};
