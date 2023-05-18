import axios from 'axios';
const API_URL = 'http://localhost:9000';

async function httpGetAllCatsBreeds() {
	try {
		const response = await axios.get(`${API_URL}/api/v1/breeds`);
		return response;
	} catch (err) {
		return {
			ok: false,
		};
	}
}

async function httpGetCatsImagesByBreed(breedId) {
	try {
		const data = {
			breed_id: JSON.stringify(breedId),
		};
		const headers = {
			'Content-Type': 'application/json',
		};
		const response = await axios.post(`${API_URL}/breeds`, data, { headers });
		return await response.json();
	} catch (err) {
		return {
			ok: false,
		};
	}
}

async function httpGetTopBreeds() {
	try {
		const response = await axios.get(`${API_URL}/topbreeds`);
		return await response.json();
	} catch (err) {
		return {
			ok: false,
		};
	}
}

export { httpGetAllCatsBreeds, httpGetCatsImagesByBreed, httpGetTopBreeds };
