import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CatDetails from './pages/CatDetails.jsx';
import CatBreeds from './pages/CatBreeds.jsx';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/topbreeds' element={<CatBreeds />} />
				<Route path='/breeds/:breedId' element={<CatDetails />} />
			</Routes>
			{/* <Home /> */}
			{/* <CatDetails />
			<CatBreeds />{' '} */}
		</BrowserRouter>
	);
}

export default App;
