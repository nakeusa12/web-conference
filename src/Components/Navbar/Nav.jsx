import React, { useState, useEffect } from 'react';
import {
	NavBar,
	Container,
	NavLogo,
	MobileIcon,
	WrapperMenu,
	MenuItem,
	MenuBtn,
	NavLinks,
} from './NavStyled';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../../Img/Busfez.png';
import { animateScroll as scroll } from 'react-scroll';

const Nav = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<NavBar scrollNav={scrollNav}>
			<Container>
				<NavLogo onClick={toggleHome}>
					<img src={Logo} alt='logo' />
				</NavLogo>
				<MobileIcon onClick={toggle}>
					<GiHamburgerMenu />
				</MobileIcon>
				<WrapperMenu>
					<MenuItem>
						<NavLinks
							to='about'
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-80}>
							About
						</NavLinks>
					</MenuItem>
					<MenuItem>
						<NavLinks
							to='speaker'
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-80}>
							Speaker
						</NavLinks>
					</MenuItem>
					<MenuItem>
						<NavLinks
							to='schedule'
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-80}>
							Schedule
						</NavLinks>
					</MenuItem>
					<MenuItem>
						<NavLinks
							to='pricing'
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-80}>
							Pricing
						</NavLinks>
					</MenuItem>
					<MenuItem>
						<NavLinks
							to='contact'
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-80}>
							Contact
						</NavLinks>
					</MenuItem>
					<MenuBtn>Buy Ticket</MenuBtn>
				</WrapperMenu>
			</Container>
		</NavBar>
	);
};

export default Nav;
