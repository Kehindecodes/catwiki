import React, { useState, useRef } from 'react';

import { HiSearch } from 'react-icons/hi';

const Dropdown = ({ catBreeds }) => {
	const [inputValue, setInputValue] = useState('');
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const blurTimeoutRef = useRef(null);

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};
	const handleInputBlur = () => {
		blurTimeoutRef.current = setTimeout(() => {
			setIsDropdownOpen(false);
		}, 200); // Delay the closing of the dropdown to allow the selection to register
	};
	const handleItemSelect = (item) => {
		setInputValue(item);
		setIsDropdownOpen(false);
	};
	const filteredBreeds = catBreeds.filter((breed) =>
		breed.name.toLowerCase().includes(inputValue.toLowerCase()),
	);
	const dropdownHeight =
		filteredBreeds.length > 5
			? 'h-dropdown'
			: `h-${filteredBreeds.length * 36}`;

	return (
		<div className='relative'>
			<div>
				<input
					type='text'
					value={inputValue}
					onChange={handleInputChange}
					onFocus={() => setIsDropdownOpen(true)}
					onBlur={handleInputBlur}
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

			{isDropdownOpen && (
				<ul
					className={`absolute z-10 w-full bg-white shadow-md py-1 rounded-2xl mt-5 overflow-y-auto ${dropdownHeight}`}>
					{filteredBreeds.length === 0 ? (
						<li className='px-4 py-2 cursor-default rounded-2xl font-montserrat text-gray-500'>
							No results found
						</li>
					) : (
						filteredBreeds.map((breed, index) => (
							<li
								key={index}
								className='px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-2xl font-montserrat'
								onClick={() => handleItemSelect(breed.name)}>
								{breed.name}
							</li>
						))
					)}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
