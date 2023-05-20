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
			<div className='mx-16 mt-6 min-h-screen '>
				<h1 className='text-primary font-bold text-4xl font-montserrat'>
					Top 10 most searched breeds
				</h1>
				<div className='flex  mt-12 flex-col'>
					{topBreeds.map((topbreed, index) => (
						<div className='flex mb-8' key={index}>
							{/* image */}
							<div className='w-breed h-breed'>
								<img
									src={topbreed.image.url}
									alt='cat'
									className='w-full h-full rounded-3xl'
								/>
							</div>
							{/* breed details */}
							<div className='ml-10 w-4/5'>
								<h3
									className='font-montserrat font-semibold text-4xl text-primary
                        '>
									<span>{index + 1}.</span> {topbreed.name}
								</h3>
								<p className='font-bold font-montserrat text-lg text-primary mt-5'>
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
