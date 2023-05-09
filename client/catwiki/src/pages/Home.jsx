import React from 'react';
import Header from '../componets/Header';
import logo from '../assets/CatwikiLogo.svg';
import { HiSearch } from 'react-icons/hi';
import cat from '../assets/black-cat.png';

const Home = () => {
	return (
		<>
			<Header />
			<section className='mx-9 bg-hero-image h-hero w-auto rounded-t-3xl'>
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
			<section className='bg-secondary mx-9 py-4 px-20'>
				<p className='text-primary'>Most Search Breeds</p>
				<div className='bg-primary w-14 h-1'></div>
				<h2></h2>
			</section>
		</>
	);
};

export default Home;
