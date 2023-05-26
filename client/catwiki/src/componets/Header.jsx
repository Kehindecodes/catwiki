import React from 'react';
import logo from '../assets/CatwikiLogo.svg';

const Header = () => {
	return (
		<header className='mx-6  md:mx-16 my-4'>
			<nav className='bg-white'>
				<div className=''>
					<a href='/' className=''>
						<img className='h-8 w-auto' src={logo} alt='Logo' />
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Header;
