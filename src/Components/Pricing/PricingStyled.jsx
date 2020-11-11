import styled from 'styled-components';
import pricingBg from '../../Img/pricingBg.jpg';

export const PricingSec = styled.section`
	width: 100%;
	background: #ec398c;
	padding: 100px 0;
  height: 800px;
  background: linear-gradient(180deg, #EC398C 50%, #151853 100%);
  position: relative;
  z-index: 0;

  ::before{
    content: '';
    width: 100%;
    height: 800px;
    background: url('${pricingBg}') no-repeat center/cover;
    position: absolute;
    opacity: .09;
    top: 0;
    left: 0;
    z-index: -1;
  }

	@media screen and (max-width: 1003px) {
		height: auto;


		::before{
			height: 100%;
		}
	}
`;

export const PricingTitle = styled.div`
	text-align: center;
	color: #fff;
	position: relative;
	p {
		font-size: 23px;
		color: #151853;
	}
	h2 {
		font-size: 40px;
		line-height: 1;
		font-weight: 600;
	}
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1110px;
	margin: 0 auto;
	@media screen and (max-width: 1168px) {
		max-width: 90%;
	}
`;

export const Content = styled.div`
	width: 100%;
	margin-top: 50px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	grid-gap: 25px;
	align-items: center;
`;

export const PricingCard = styled.div`
	width: 100%;
	height: 450px;

	:nth-child(2) {
		height: 520px;
	}

	:hover {
		box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.34);
	}
`;

export const HeadCard = styled.div`
	width: 100%;
	height: 20%;
	background: #151853;
	padding: 15px;
	border-radius: 10px 10px 0px 0px;
	text-align: center;
	color: #fff;

	h3 {
		font-size: 25px;
		font-weight: 600;
	}

	p {
		font-size: 14px;
	}
`;

export const BodyCard = styled.div`
	width: 100%;
	height: 60%;
	background: #fff;
	padding: 20px;

	h2 {
		font-size: 35px;
		color: #ec398c;
	}
`;

export const ItemAccess = styled.div`
	margin-top: 20px;
	p {
		font-size: 16px;
		margin: 10px 0;

		span {
			margin-left: 10px;
			color: #151853;
		}
	}
`;

export const BtnCard = styled.div`
	width: 100%;
	height: 20%;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0 0 10px 10px;
`;

export const BtnPricing = styled.div`
	background: #151853;
	color: #f3f3f3;
	border: none;
	outline: none;
	border-radius: 7px;
	font-weight: 400;
	padding: 12px 70px;
	cursor: pointer;

	transition: background 300ms ease-in-out;

	&:hover {
		background: #fff;
		color: #151853;
		border: 2px solid #151853;
	}
`;
