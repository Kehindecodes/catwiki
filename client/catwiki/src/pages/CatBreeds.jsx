import React from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import cat from '../assets/image 3.png';
const CatBreeds = () => {
	return (
		<>
			<Header />
			<div className='mx-16 mt-6 h-screen'>
				<h1 className='text-primary font-bold text-4xl font-montserrat'>
					Top 10 most searched breeds
				</h1>
				<div className='flex mt-12'>
					{/* image */}
					<div className='w-breed h-breed'>
						<img src={cat} alt='cat' className='w-full h-full' />
					</div>
					{/* breed details */}
					<div className='ml-10'>
						<h3
							className='font-montserrat font-semibold text-4xl text-primary
                        '>
							1. bengal
						</h3>
						<p className='font-bold font-montserrat text-lg text-primary mt-5'>
							Bengals are a lot of fun to live with, but they're definitely not
							the cat for everyone, or for first-time <br /> cat owners.
							Extremely intelligent, curious and active, they demand a lot of
							interaction and woe betide the owner who doesn't provide it.{' '}
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default CatBreeds;
