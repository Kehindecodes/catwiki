const axios = require('axios');

async function httpGetAllCatsBreeds(req, res) {
	try {
		const response = await axios.get('https://api.thecatapi.com/v1/breeds');
		return res.status(200).json(response.data);
	} catch (error) {
		return res.send(error);
	}
}

module.exports = {
	httpGetAllCatsBreeds,
};
