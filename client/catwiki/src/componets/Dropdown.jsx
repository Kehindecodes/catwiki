import React, { useState } from 'react';
import { Input, Dropdown, DropdownItem } from 'tailwindcss';
import { HiSearch } from 'react-icons/hi';

const SearchDropdown = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [options, setOptions] = useState(['Option 1', 'Option 2', 'Option 3']);

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSelect = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div>
			<div className='relative'>
				<Input
					className='form-input px-6 py-3 rounded-full w-input mt-6 focus:outline-none font-montserrat text-primary text-lg'
					placeholder='Enter your breed'
					value={searchTerm}
					onChange={handleChange}
				/>
				<span className='absolute inset-y-0 right-0 top-5  flex items-center pl-2'>
					<button
						type='submit'
						className='p-4 focus:outline-none focus:shadow-outline  '>
						<HiSearch className='h-4 w-4 text-primary my-5' />
					</button>
				</span>
			</div>

			<Dropdown
				items={options}
				onChange={handleSelect}
				open={searchTerm !== ''}>
				{options.map((option) => (
					<DropdownItem key={option} value={option}>
						{option}
					</DropdownItem>
				))}
			</Dropdown>
		</div>
	);
};

export default SearchDropdown;
