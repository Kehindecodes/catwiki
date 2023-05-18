import React, { useState, useEffect } from 'react';
import Header from '../componets/Header';
import logo from '../assets/CatwikiLogo.svg';
import { HiSearch } from 'react-icons/hi';
import cat from '../assets/black-cat.png';
import { BsArrowRight } from 'react-icons/bs';
import breed from '../assets/image 2.png';
import breed1 from '../assets/image 1.png';
import breed3 from '../assets/image 3.png';
import Footer from '../componets/Footer';
import { httpGetAllCatsBreeds, httpGetTopBreeds } from '../hooks/request';

const Home = () => {
	const [allBreeds, setAllBreeds] = useState([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const allBreedsResponse = await httpGetAllCatsBreeds();
				console.log(allBreedsResponse.data);
				setAllBreeds(allBreedsResponse.data.map((breed) => breed.name));
				console.log(allBreeds);
			} catch (error) {
				console.error(error);
			}
		}

		fetchData();
	}, []);
	return (
		<div>
			<Header />
			<section className='mx-16 bg-hero-image h-hero w-auto rounded-t-3xl'>
				<div className='px-20 flex justify-center items-start flex-col py-32'>
					<div className='text-white flex items-center'>
						<h3 className='text-6xl mb-3 font-mystery '>Catwiki</h3>
						<img src={cat} className='mb-4 w-20 ml-7' />
					</div>
					<p className='text-white my-7 font-medium text-2xl tracking-wider font-montserrat'>
						Get to know more about your
						<br /> cat breed
					</p>
					<div className='relative'>
						<input
							type='text'
							className='form-input px-6 py-3 rounded-full w-input mt-6 focus:outline-none font-montserrat text-primary text-lg'
							placeholder='Enter your breed'
						/>
						<span className='absolute inset-y-0 right-0 top-5  flex items-center pl-2'>
							<button
								type='submit'
								className='p-4 focus:outline-none focus:shadow-outline  '>
								<HiSearch className='h-4 w-4 text-primary my-5' />
							</button>
						</span>
					</div>
				</div>
			</section>
			{/* breeds */}
			<section className='bg-secondary mx-16 py-6 px-20 rounded-b-3xl'>
				<p className='text-primary font-montserrat text-lg font-medium'>
					Most Search Breeds
				</p>
				<div className='bg-primary w-14 h-1'></div>
				<div className='flex justify-between'>
					<h2 className='font-montserrat font-bold text-primary my-10 text-5xl'>
						{allBreeds.length - 1}+ Breeds For you <br /> to discover
					</h2>
					<div
						className='flex self-end items-center font-bold text-lg font-montserrat text-textTrans
					hover:text-primary'>
						<a
							href='http://'
							target='_blank'
							rel='noopener noreferrer'
							className='text-textTrans mr-3 hover:text-primary'>
							SEE MORE
						</a>
						<BsArrowRight className='fil-textTrans mt-1' />
					</div>
				</div>
				{/* breed images */}
				<div className='my-12 flex space-x-20'>
					<div>
						<img
							src={breed}
							alt=' cats'
							className='w-breedImg h-breedImg rounded-lg'
						/>
						<p className='text-primary font-montserrat text-lg mt-4 font-semibold'>
							savannah
						</p>
					</div>
					<div>
						<img
							src={breed}
							alt=' cats'
							className='w-breedImg h-breedImg rounded-lg'
						/>
						<p className='text-primary font-montserrat text-lg mt-4 font-semibold'>
							savannah
						</p>
					</div>
					<div>
						<img
							src={breed}
							alt=' cats'
							className='w-breedImg h-breedImg rounded-lg'
						/>
						<p className='text-primary font-montserrat text-lg mt-4 font-semibold'>
							savannah
						</p>
					</div>
					<div>
						<img
							src={breed}
							alt=' cats'
							className='w-breedImg h-breedImg rounded-lg'
						/>
						<p className='text-primary font-montserrat text-lg mt-4 font-semibold'>
							savannah
						</p>
					</div>
				</div>
			</section>
			<section className='bg-white mx-16 py-6 px-20 flex'>
				{/* content */}
				<div className='w-content self-center '>
					<div className='bg-divider w-14 h-1 mb-4'></div>
					<h2 className='font-montserrat font-bold text-primary mb-10 text-5xl'>
						Why should you <br /> have a cat?
					</h2>
					<p className='text-primary font-montserrat text-lg mt-4 font-medium'>
						Having a cat around you can actually trigger the <br /> release of
						calming chemicals in your body which <br /> lower your stress and
						anxiety leves
					</p>
					<div
						className='flex self-end items-center font-bold text-lg font-montserrat text-textTrans
					hover:text-primary mt-10'>
						<a
							href='http://'
							target='_blank'
							rel='noopener noreferrer'
							className='text-textTrans mr-3 hover:text-primary'>
							READ MORE
						</a>
						<BsArrowRight className='fil-textTrans mt-1' />
					</div>
				</div>
				{/* images */}
				<div className='grid grid-cols-2 gap-4 mt-16'>
					<div className='w-image2 h-image2'>
						<img src={breed} alt='' />
					</div>
					<div className='w-image3 h-image3'>
						<img src={breed3} alt='' />
					</div>
					<div className='w-image1 h-image1 -mt-60 ml-9'>
						<img src={breed1} alt='' />
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Home;
