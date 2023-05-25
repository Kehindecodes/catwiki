import React, { useState, useEffect } from 'react';
import Footer from '../componets/Footer';
import Header from '../componets/Header';
import cat from '../assets/image 3.png';
import { httpGetCatsImagesByBreed } from '../hooks/request';
import { useParams } from 'react-router-dom';

const CatDetails = () => {
	const { breedId } = useParams();
	console.log(breedId);
	const [adaptability, setAdaptability] = useState(null);
	const [affection, setAffection] = useState(null);
	const [grooming, setGrooming] = useState(null);
	const [intelligence, setIntelligence] = useState(null);
	const [childFriendly, setChildFriendly] = useState(null);
	const [healthIssues, setHealthIssues] = useState(null);
	const [socialNeeds, setSocialNeeds] = useState(null);
	const [strangerFriendly, setStrangerFriendly] = useState(null);
	const [breedImages, setBreedImages] = useState([]);
	const [selectedBreed, setSelectedBreed] = useState(null);

	const fetchBreedDetails = async () => {
		try {
			const { data } = await httpGetCatsImagesByBreed(breedId);
			console.log(data);

			// if (!data.ok) {
			// 	throw new Error('Error fetching breed details');
			// }

			const { breed, images } = data;

			setSelectedBreed(breed);
			setBreedImages(images);
			setAdaptability(breed.adaptability);
			setAffection(breed.affection_level);
			setGrooming(breed.grooming);
			setHealthIssues(breed.health_issues);
			setChildFriendly(breed.child_friendly);
			setIntelligence(breed.intelligence);
			setSocialNeeds(breed.social_needs);
			setStrangerFriendly(breed.stranger_friendly);
			setBreedImages(images);
		} catch (error) {
			console.error('Error fetching breed details:', error);
		}
	};

	const getColorClass = (level, index) => {
		if (index < level) {
			return 'bg-primary';
		} else {
			return 'bg-gray-500';
		}
	};

	useEffect(() => {
		fetchBreedDetails();
	}, [breedId]);

	return (
		<div className='min-h-screen flex-grow'>
			<Header />
			<div className='mx-16 flex mt-9'>
				{/* cat image */}
				<div className='relative w-catImg h-catImg mr-14'>
					<div className='absolute inset-0 w-shadow h-shadow rounded-3xl bg-shadow mt-8 '></div>
					<img
						src={breedImages[0]}
						alt='cat'
						className=' absolute inset-0 w-catImg h-catImg rounded-3xl ml-4'
					/>
				</div>
				{/* cat details */}
				<div className='w-catdetails ml-9'>
					<h2 className='text-primary font-montserrat font-bold text-4xl mb-5'>
						{selectedBreed && selectedBreed.name}
					</h2>
					<p className='text-primary font-montserrat font-medium text-lg mb-5'>
						{selectedBreed && selectedBreed.description}
					</p>
					<p className='mb-5 font-montserrat font-medium  text-md'>
						<span className='font-bold'>Temperament: </span>
						{selectedBreed && selectedBreed.temperament}
					</p>
					<p className='mb-5 font-montserrat font-medium  text-md'>
						<span className='font-bold'>Origin: </span>
						{selectedBreed && selectedBreed.origin}
					</p>
					<p className='mb-5 font-montserrat font-medium  text-md'>
						<span className='font-bold'>Life Span: </span>
						{selectedBreed && selectedBreed.life_span}
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
					{breedImages.map((image) => (
						<div key={image.id}>
							<img src={image} alt='cat' className='w-photo h-photo' />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default CatDetails;
