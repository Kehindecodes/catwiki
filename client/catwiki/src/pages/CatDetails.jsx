import React, { useState } from 'react';
import Footer from '../componets/Footer';
import Header from '../componets/Header';
import cat from '../assets/image 3.png';
const CatDetails = () => {
	const [adaptability, setAdaptability] = useState(5);
	const [affection, setAffection] = useState(5);
	const [grooming, setGrooming] = useState(1);
	const [intelligence, setIntelligence] = useState(5);
	const [childFriendly, setChildFriendly] = useState(4);
	const [healthIssues, setHealthIssues] = useState(3);
	const [socialNeeds, setSocialNeeds] = useState(5);
	const [strangerFriendly, setStrangerFriendly] = useState(3);

	console.log(affection);

	const getColorClass = (level, index) => {
		if (index < level) {
			return 'bg-primary';
		} else {
			return 'bg-gray-500';
		}
	};
	return (
		<div className='min-h-screen flex-grow'>
			<Header />
			<div className='mx-16 flex mt-9'>
				{/* cat image */}
				<div className='relative w-catImg h-catImg mr-14'>
					<div className='absolute inset-0 w-shadow h-shadow rounded-3xl bg-shadow mt-8 '></div>
					<img
						src={cat}
						alt='cat'
						className=' absolute inset-0 w-catImg h-catImg rounded-3xl ml-4'
					/>
				</div>
				{/* cat details */}
				<div className='w-catdetails ml-9'>
					<h2 className='text-primary font-montserrat font-bold text-4xl mb-5'>
						Benegal
					</h2>
					<p className='text-primary font-montserrat font-medium text-lg mb-5'>
						Bengals are a lot of fun to live with, but they're definitely not
						the
						<br /> cat for everyone, or for first-time cat owners. Extremely{' '}
						<br />
						intelligent, curious and active, they demand a lot of interaction
						and woe betide the owner who doesn't provide it.
					</p>
					<p className='mb-5 font-montserrat font-medium  text-md'>
						<span className='font-bold'>Temperament: </span>Alert, Agile,
						Energetic, Demanding, Intelligent
					</p>
					<p className='mb-5 font-montserrat font-medium  text-md'>
						<span className='font-bold'>Origin: </span>United States
					</p>
					<p className='mb-5 font-montserrat font-medium  text-md'>
						<span className='font-bold'>Life Span: </span>12 - 15 years
					</p>
					<div className='flex items-center  mb-5 font-montserrat font-medium text-md'>
						<div>
							<h2 className='font-bold '>Adaptability:</h2>
						</div>
						<div className='flex shows'>
							{[...Array(5)].map((_, index) => (
								<div
									key={index}
									className={`w-12 h-2 rounded-2xl ml-3  ${getColorClass(
										adaptability,
										index,
									)}`}></div>
							))}
						</div>
					</div>
					<div className='flex items-center mb-5 font-montserrat font-medium text-md'>
						<div>
							<h2 className='font-bold'>Affection Level:</h2>
						</div>
						<div className='flex shows '>
							{[...Array(5)].map((_, index) => (
								<div
									key={index}
									className={`w-12 h-2 rounded-2xl ml-3  ${getColorClass(
										affection,
										index,
									)}`}></div>
							))}
						</div>
					</div>
					<div className='flex items-center mb-5 font-montserrat font-medium text-md'>
						<div>
							<h2 className='font-bold'>Child Friendly:</h2>
						</div>
						<div className='flex shows '>
							{[...Array(5)].map((_, index) => (
								<div
									key={index}
									className={`w-12 h-2 rounded-2xl ml-3  ${getColorClass(
										childFriendly,
										index,
									)}`}></div>
							))}
						</div>
					</div>
					<div className='flex items-center mb-5 font-montserrat font-medium text-md'>
						<div>
							<h2 className='font-bold'>Grooming:</h2>
						</div>
						<div className='flex shows '>
							{[...Array(5)].map((_, index) => (
								<div
									key={index}
									className={`w-12 h-2 rounded-2xl ml-3  ${getColorClass(
										grooming,
										index,
									)}`}></div>
							))}
						</div>
					</div>
					<div className='flex items-center mb-5 font-montserrat font-medium text-md'>
						<div>
							<h2 className='font-bold'>Intelligence:</h2>
						</div>
						<div className='flex shows '>
							{[...Array(5)].map((_, index) => (
								<div
									key={index}
									className={`w-12 h-2 rounded-2xl ml-3  ${getColorClass(
										intelligence,
										index,
									)}`}></div>
							))}
						</div>
					</div>
					<div className='flex items-center mb-5 font-montserrat font-medium text-md'>
						<div>
							<h2 className='font-bold'>Health issues:</h2>
						</div>
						<div className='flex shows '>
							{[...Array(5)].map((_, index) => (
								<div
									key={index}
									className={`w-12 h-2 rounded-2xl ml-3  ${getColorClass(
										healthIssues,
										index,
									)}`}></div>
							))}
						</div>
					</div>
					<div className='flex items-center mb-5 font-montserrat font-medium text-md'>
						<div>
							<h2 className='font-bold'>Social needs:</h2>
						</div>
						<div className='flex shows '>
							{[...Array(5)].map((_, index) => (
								<div
									key={index}
									className={`w-12 h-2 rounded-2xl ml-3  ${getColorClass(
										socialNeeds,
										index,
									)}`}></div>
							))}
						</div>
					</div>
					<div className='flex items-center mb-5 font-montserrat font-medium text-md'>
						<div>
							<h2 className='font-bold'>Stranger friendly:</h2>
						</div>
						<div className='flex shows'>
							{[...Array(5)].map((_, index) => (
								<div
									key={index}
									className={`w-12 h-2 rounded-2xl ml-3  ${getColorClass(
										strangerFriendly,
										index,
									)}`}></div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='mt-8 mx-16'>
				<h2 className='font-bold text-primary font-montserrat mb-8 text-4xl'>
					Other Photos
				</h2>
				<div className='grid grid-cols-4 gap-6 '>
					<div>
						<img src={cat} alt='cat' className='w-photo h-photo' />
					</div>
					<div>
						<img src={cat} alt='cat' className='w-photo h-photo' />
					</div>
					<div>
						<img src={cat} alt='cat' className='w-photo h-photo' />
					</div>
					<div>
						<img src={cat} alt='cat' className='w-photo h-photo' />
					</div>
					<div>
						<img src={cat} alt='cat' className='w-photo h-photo' />
					</div>
					<div>
						<img src={cat} alt='cat' className='w-photo h-photo' />
					</div>
					<div>
						<img src={cat} alt='cat' className='w-photo h-photo' />
					</div>
					<div>
						<img src={cat} alt='cat' className='w-photo h-photo' />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default CatDetails;
