import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const NavBar = styled.nav`
	width: 100%;
	position: absolute;
	top: 0;
	padding: 5px 0;
	background: transparent;
	z-index: 99;
	@media screen and (max-width: 1024px) {
		padding: 31px 0;
	}
`;

export const Container = styled.div`
	margin: 0 auto;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 1200px;

	@media screen and (max-width: 1000px) {
		width: 90%;
	}
`;

export const NavLogo = styled.div`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	font-weight: bold;
	text-decoration: none;
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 1024px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 0);
		font-size: 1.8rem;
		cursor: pointer;
		color: #fff;
	}
`;

export const WrapperMenu = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	list-style: none;
	text-align: center;
	width: 100%;

	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

export const MenuItem = styled.li`
	height: 80px;
`;

export const MenuBtn = styled.button`
	background: #ec398c;
	color: #fff;
	border: none;
	outline: none;
	border-radius: 20px;
	font-weight: 500;
	padding: 12px 25px;
	cursor: pointer;
	transition: background 300ms ease-in-out;

	&:hover {
		background: #fff;
		color: #ec398c;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavLinks = styled.a`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	margin-right: 20px;
	height: 100%;
	cursor: pointer;
	font-size: 16px;
	transition: color 600ms ease-in-out;

	&:hover,
	&.active {
		color: #ec398c;
	}
`;

export const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #000;
	z-index: 100;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
	color: #fff;

	:hover {
		color: #ec398c;
	}
`;

export const Icon = styled.div`
	position: absolute;
	top: 2rem;
	right: 2rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

export const SidebarWrapper = styled.div`
	color: #fff;
`;

export const SidebarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(5, 80px);
	align-items: flex-end;
	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(5, 60px);
	}
`;

export const SidebarLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: #fff;
	cursor: pointer;
	&:hover {
		color: #ec398c;
		transition: 0.2s ease-in-out;
	}
`;

export const SideBtnWrap = styled.div`
	display: flex;
	justify-content: center;
`;

export const SidebarRoute = styled.a`
	margin-top: 30px;
	border-radius: 50px;
	background: #ec398c;
	white-space: nowrap;
	padding: 16px 64px;
	color: #fff;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #ec398c;
	}
`;
