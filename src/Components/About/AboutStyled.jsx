import styled from 'styled-components';

export const AboutSection = styled.section`
	width: 100%;
	background: #151853;
	height: 900px;

	@media screen and (max-width: 958px) {
		height: auto;
	}

	@media screen and (max-width: 610px) {
		height: auto;
	}
`;

export const AboutContainer = styled.div`
	width: 100%;
	max-width: 1200px;

	margin: 0 auto;
	position: relative;
	@media screen and (max-width: 958px) {
		width: 90%;
	}
`;

export const AboutInfo = styled.div`
	width: 100%;
	height: 650px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-content: center;
	grid-column-gap: 5rem;

	@media screen and (max-width: 958px) {
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 5rem;
		padding-bottom: 5rem;
	}
`;

export const Desc = styled.div`
	width: 100%;
	color: #fff;

	span {
		color: #df42b1;
		border-bottom: 2px solid #4b4d7b;
	}
	h2 {
		font-size: 35px;
		line-height: 1.2;
		margin: 26px 0;
	}
	p {
		font-size: 17px;
		line-height: 1.8;
		margin-bottom: 40px;
	}

	@media screen and (max-width: 958px) {
		margin-left: 0px;
	}
`;

export const BtnAbout = styled.a`
	background: #ec398c;
	color: #f3f3f3;
	border: none;
	outline: none;
	border-radius: 7px;
	font-weight: 400;
	padding: 10px 30px;
	cursor: pointer;

	transition: background 300ms ease-in-out;

	&:hover {
		background: #fff;
		color: #ec398c;
	}
`;

export const ImgAbout = styled.div`
	margin-right: 50px;
	height: 440px;
	width: 500px;
	justify-self: end;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and (max-width: 1020px) {
		height: 400px;
		width: 450px;
		margin-right: 0px;
		margin-top: 50px;
		img {
			object-fit: contain;
		}
	}

	@media screen and (max-width: 958px) {
		height: 450px;
		width: 550px;
	}

	@media screen and (max-width: 610px) {
		height: 100%;
		width: 100%;
		margin-top: 100px;
	}
`;

export const AboutDate = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #151853;

	@media screen and (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const DateInfo = styled.div`
	width: 100%;
	max-width: 300px;

	@media screen and (max-width: 1000px) {
		max-width: 100%;
		text-align: center;
	}

	span {
		color: #df42b1;
	}
	h3 {
		color: #fff;
		line-height: 1.3;
		font-weight: 500;
		margin: 8px 0 0 0;
		font-size: 25px;
	}
`;

export const DateContainer = styled.div`
	width: 100%;
	max-width: 820px;
	display: flex;
	justify-content: flex-end;

	@media screen and (max-width: 1000px) {
		flex-wrap: wrap;
		margin-top: 3rem;
		justify-content: space-between;
	}
	@media screen and (max-width: 480px) {
		width: 100%;
	}
`;

export const CardDate = styled.div`
	width: 100%;
	text-align: center;
	padding: 20px;
	max-width: 140px;
	margin: 0 20px;
	background: rgba(255, 255, 255, 0.2);
	border-bottom: 5px solid #df42b1;

	@media screen and (max-width: 875px) {
		max-width: 44%;
		margin: 10px;
	}
	@media screen and (max-width: 480px) {
		max-width: 100%;
	}

	h2 {
		color: #fff;
		font-size: 60px;
		line-height: 1;
	}
	p {
		color: #d4d4d4;
		font-weight: 500;
		font-size: 17px;
		margin: 6px 0 0 0;
	}
`;
