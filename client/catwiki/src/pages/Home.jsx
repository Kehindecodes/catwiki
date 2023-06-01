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
import { httpGetAllCatsBreeds, httpGetAllCatsImages } from '../hooks/request';
import SearchDropdown from '../componets/Dropdown';
import Dropdown from '../componets/Dropdown';
import { Link } from 'react-router-dom';

const Home = () => {
	const [catData, setCatData] = useState([]);
	const [allBreeds, setAllBreeds] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const catBreedsresponse = await httpGetAllCatsBreeds();
				const catImagesresponse = await httpGetAllCatsImages();

				const catBreeds = catBreedsresponse.data;
				const catImages = catImagesresponse.data;

				setAllBreeds(catBreeds);

				const combinedData = catImages.map((catImage, index) => ({
					id: catImage.id,
					url: catImage.url,
					name: catBreeds[index].name,
					length: catBreeds.length,
				}));

				setCatData(combinedData);
			} catch (error) {
				console.error(error);
			}
		}

		fetchData();
	}, []);

	const visibleCatData = catData.slice(0, 4);

	return (
		<div>
			<Header />
			<section className='mx-6 sm:mx-16 bg-hero-image h-hero w-auto rounded-t-3xl'>
				<div className='px-4 sm:px-20 flex justify-center  h-full lg:items-start flex-col py-6 lg:py-32'>
					<div className='text-white flex items-center'>
						<h3 className='text-4xl sm:text-6xl mb-3 font-mystery'>Catwiki</h3>
						<img src={cat} className='mb-4 w-12 sm:w-20 ml-4 sm:ml-7' />
					</div>
					<p className='text-white my-7 font-medium text-xl sm:text-2xl tracking-wider font-montserrat'>
						Get to know more about your
						<br />
						cat breed
					</p>
					<Dropdown catBreeds={allBreeds} />
				</div>
			</section>
			{/* breeds */}
			<section className='bg-secondary mx-6 sm:mx-16 py-6 px-4 sm:px-20 rounded-b-3xl'>
				<p className='text-primary font-montserrat text-xl sm:text-lg font-medium'>
					Most Search Breeds
				</p>
				<div className='bg-primary w-10 h-1 sm:w-14'></div>
				<div className='flex flex-col sm:flex-row justify-between'>
					<h2 className='font-montserrat font-bold text-primary my-6 sm:my-10 text-3xl sm:text-5xl'>
						{allBreeds.length - 1}+ Breeds For you <br /> to discover
					</h2>
					<div className='flex self-end items-center font-bold text-lg sm:text-base font-montserrat text-textTrans hover:text-primary'>
						<Link
							to={'/topbreeds'}
							className='text-textTrans mr-3 hover:text-primary'>
							SEE MORE
						</Link>
						<BsArrowRight className='fil-textTrans mt-1' />
					</div>
				</div>
				{/* breed images */}
				<div className='my-8 sm:my-12 flex flex-wrap justify-center gap-4 sm:gap-8'>
					{visibleCatData.map((cat) => (
						<div key={cat.id} className='w-breedImg h-breedImg '>
							<img
								src={cat.url}
								alt='cats'
								className='w-full h-auto rounded-lg object-cover'
							/>
							<p className='text-primary font-montserrat text-lg mt-2 font-semibold text-center'>
								{cat.name}
							</p>
						</div>
					))}
				</div>
			</section>
			<section className='bg-white mx-6 sm:mx-16 py-6 px-4 sm:px-20 flex flex-col lg:flex-row'>
				{/* content */}
				<div className='w-full sm:w-content self-center'>
					<div className='bg-divider w-10 h-1 mb-2 sm:w-14'></div>
					<h2 className='font-montserrat font-bold text-primary mb-6 sm:mb-10 text-3xl sm:text-5xl'>
						Why should you <br /> have a cat?
					</h2>
					<p className='text-primary font-montserrat text-base sm:text-lg mt-2 sm:mt-4 font-medium'>
						Having a cat around you can actually trigger the release of calming
						chemicals in your body which lower your stress and anxiety levels.
					</p>
					<div className='flex self-end items-center font-bold text-lg sm:text-base font-montserrat text-textTrans hover:text-primary mt-8 sm:mt-10'>
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
				<div className='grid grid-cols-2 gap-6 mt-10 lg:mt-16'>
					<div className='w-image1sm lg:w-image2 h-image1sm 1g:h-image2'>
						<img src={breed} alt='' className='w-full h-full ' />
					</div>
					<div className='w-image3sm lg:w-image3 h-image3sm lg:h-image3'>
						<img src={breed3} alt='' className='w-full h-full ' />
					</div>
					<div className=' w-image2sm lg:w-image1 h-image2sm lg:h-image1 mt-4 lg:-mt-48  ml-6 lg:ml-9'>
						<img src={breed1} alt='' className='w-full h-full ' />
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Home;
