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
					<SidebarLink>Home</SidebarLink>
					<SidebarLink>Blog</SidebarLink>
					<SidebarLink>Speaker</SidebarLink>
					<SidebarLink>Pricing</SidebarLink>
					<SidebarLink>Contact</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute>Buy Ticket</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
