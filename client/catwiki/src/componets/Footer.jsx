import React from 'react';
import logo from '../assets/CatwikiLogo.svg';
import cat from '../assets/black-cat.png';
const Footer = () => {
	return (
		<footer className='flex  justify-normal lg:justify-between bg-black rounded-t-3xl px-4  lg:px-20 items-center mx-3 md:mx-16 py-6 mt-24 '>
			<div className='text-white hidden lg:flex items-center h-full '>
				<h3 className='text-2xl mb-3 font-mystery '>Catwiki</h3>
				<img src={cat} className='mb-4 w-10 ml-7' />
			</div>
			<p className='font-bold font-montserrat text-sm text-white'>
				<span className='mr-4'>©</span>
				created by oki kehinde - devChallenge.io 2021
			</p>
		</footer>
	);
};

export default Footer;
