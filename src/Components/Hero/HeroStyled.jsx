import styled from 'styled-components';
import HeroBg from '../../Img/herobg.jpg';

export const HeroSection = styled.section`
  min-height: 100vh;
  background: url('${HeroBg}') no-repeat center/cover;
  position: relative;
  z-index: 0;
  display: flex;
  transition: all 600ms ease-in-out;
  align-items: center;


  ::before{
    content: '';
    width: 100%;
    height: 100vh;
    background: rgba(40,22,108,0.81);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const HeroContainer = styled.div`
	width: 100%;
	height: 100vh;
	padding-left: 50px;
	margin: 0 auto;
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	@media screen and (max-width: 520px) {
		width: 90%;
		padding-left: 0px;
	}
`;

export const HeroContent = styled.div`
	color: #fff;
	text-align: left;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	@media screen and (max-width: 610px) {
		width: 100%;
	}
`;

export const H2 = styled.h2`
	font-size: 70px;
	line-height: 1.1;
	z-index: 3;

	@media screen and (max-width: 610px) {
		font-size: 60px;
	}
	@media screen and (max-width: 520px) {
		font-size: 50px;
	}
`;

export const P2 = styled.p`
	font-size: 17px;
	display: inline-block;
	margin: 25px 0;
`;

export const P1 = styled.p`
	font-size: 25px;
	display: inline-block;
	color: #ec398c;
	font-weight: 600;
	padding: 5px 10px;
`;

export const BtnHero = styled.a`
	background: #ec398c;
	color: #f3f3f3;
	font-size: 15px;
	border: none;
	outline: none;
	border-radius: 7px;
	font-weight: 500;
	padding: 12px 25px;
	cursor: pointer;
	transition: background 300ms ease-in-out;

	&:hover {
		background: #fff;
		color: #ec398c;
	}
`;
