import React, { useState } from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Nav toggle={toggle} />
		</>
	);
};

export default Navbar;
