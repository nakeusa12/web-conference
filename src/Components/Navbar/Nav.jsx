import React from 'react';
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

const Nav = ({ toggle }) => {
	return (
		<NavBar>
			<Container>
				<NavLogo>
					<img src={Logo} alt='logo' />
				</NavLogo>
				<MobileIcon onClick={toggle}>
					<GiHamburgerMenu />
				</MobileIcon>
				<WrapperMenu>
					<MenuItem>
						<NavLinks>Home</NavLinks>
					</MenuItem>
					<MenuItem>
						<NavLinks>About</NavLinks>
					</MenuItem>
					<MenuItem>
						<NavLinks>Speaker</NavLinks>
					</MenuItem>
					<MenuItem>
						<NavLinks>Pricing</NavLinks>
					</MenuItem>
					<MenuItem>
						<NavLinks>Contact</NavLinks>
					</MenuItem>
					<MenuBtn>Buy Ticket</MenuBtn>
				</WrapperMenu>
			</Container>
		</NavBar>
	);
};

export default Nav;
