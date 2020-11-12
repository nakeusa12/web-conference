import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
} from './NavStyled';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink
						to='hero'
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						offset={-80}
						onClick={toggle}>
						Home
					</SidebarLink>
					<SidebarLink
						to='about'
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						offset={-80}
						onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink
						to='speaker'
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						offset={-80}
						onClick={toggle}>
						Speaker
					</SidebarLink>
					<SidebarLink
						to='pricing'
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						offset={-80}
						onClick={toggle}>
						Pricing
					</SidebarLink>
					<SidebarLink
						to='contact'
						smooth={true}
						duration={500}
						spy={true}
						exact='true'
						offset={-80}
						onClick={toggle}>
						Contact
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute>Buy Ticket</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
