import React, { useEffect, useState } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import cat from '../assets/image 3.png';
import { httpGetTopBreeds } from '../hooks/request';
const CatBreeds = () => {
	const [topBreeds, setTopBreeds] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const topBreedsresponse = await httpGetTopBreeds();
				const topBreeds = topBreedsresponse.data;
				setTopBreeds(topBreeds);
				console.log(topBreeds);
			} catch (error) {
				console.error(error);
			}
		}

		fetchData();
	}, []);

	return (
		<>
			<Header />
			<div className='mx-6 sm:mx-16 mt-6 min-h-screen'>
				<h1 className='text-primary font-bold text-4xl sm:text-5xl font-montserrat'>
					Top 10 most searched breeds
				</h1>
				<div className='flex flex-col mt-12'>
					{topBreeds.map((topbreed, index) => (
						<div
							className='flex flex-col lg:flex-row mb-10 lg:mb-8'
							key={index}>
							{/* image */}
							<div className=' w-full lg:w-breed  h-image1 lg:h-breed '>
								<img
									src={topbreed.image.url}
									alt='cat'
									className='w-full h-full rounded-3xl object-cover'
								/>
							</div>
							{/* breed details */}
							<div className='ml-0 lg:ml-10 w-full sm:w-catDetails mt-6 lg:mt-0'>
								<h3 className='font-montserrat font-semibold text-2xl sm:text-4xl text-primary'>
									<span>{index + 1}.</span> {topbreed.name}
								</h3>
								<p className='font-bold font-montserrat text-base sm:text-lg text-primary mt-3 sm:mt-5'>
									{topbreed.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default CatBreeds;
