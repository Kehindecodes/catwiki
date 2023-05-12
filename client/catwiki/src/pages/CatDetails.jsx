import React from 'react';
import Footer from '../componets/Footer';
import Header from '../componets/Header';
import cat from '../assets/image 3.png';

const CatDetails = () => {
	return (
		<div className=''>
			<Header />
			<div className='mx-9 '>
				{/* cat image */}

				<div className='relative'>
					<div className=' absolute w-shadow h-shadow bg-shadow inset-0 mt-10 rounded-3xl '></div>
					<div
						className='absolute inset-0
				  w-catImg h-catImg ml-3'>
						<img src={cat} alt='cat' className='w-full h-full rounded-3xl ' />
					</div>
				</div>
				{/* cat details */}
				<div></div>
			</div>

			<Footer />
		</div>
	);
};

export default CatDetails;
