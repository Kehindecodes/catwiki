import axios from 'axios';
const API_URL = 'http://localhost:9000';

async function httpGetAllCatsBreeds() {
	try {
		const response = await axios.get('/api/v1/breeds');
		return response;
	} catch (err) {
		return {
			ok: false,
		};
	}
}
async function httpGetAllCatsImages() {
	try {
		const response = await axios.get('/api/v1/catimages');
		return response;
	} catch (err) {
		return {
			ok: false,
		};
	}
}

async function httpGetCatsImagesByBreed(breedId) {
	try {
		const response = await axios.get(`/api/v1/breeds/${breedId}`);

		return response;
	} catch (err) {
		return {
			ok: false,
		};
	}
}

async function httpGetTopBreeds() {
	try {
		const response = await axios.get('/api/v1/topbreeds');
		return response;
	} catch (err) {
		return {
			ok: false,
		};
	}
}

export {
	httpGetAllCatsBreeds,
	httpGetCatsImagesByBreed,
	httpGetTopBreeds,
	httpGetAllCatsImages,
};
