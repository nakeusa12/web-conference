import styled from 'styled-components';
import SpeakBg from '../../Img/speakBg.png';

export const SpeakerSection = styled.section`
  width: 100%;
  padding: 70px 0;
  height: 650px;
  background: linear-gradient(180deg,#151853 20%, #EC398C 100%);
  position: relative;
  z-index: 0;

  ::after{
    content: '';
    width: 100%;
    height: 650px;
    background: url('${SpeakBg}') no-repeat center/cover;
    position: absolute;
    opacity: .2;
    top: 0;
    left: 0;
    z-index: -1;
  }

`;

export const SpekerTitle = styled.div`
	text-align: center;
	color: #fff;
	position: relative;
	p {
		font-size: 23px;
		color: #ec398c;
	}
	h2 {
		font-size: 40px;
		line-height: 1;
		font-weight: 600;
	}
`;

export const SpeakerContainer = styled.div`
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;
	position: relative;
	padding: 20px 60px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	overflow-x: hidden;
`;

export const SpeakCard = styled.div`
	width: 100%;
	max-width: 370px;
	height: 400px;
	margin: 20px 0;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	overflow: hidden;
	cursor: pointer;
	padding-bottom: 20px;

	img {
		width: 100%;
		height: 100%;
		border-radius: 10px;
		object-fit: cover;
		filter: grayscale(25%);
	}
`;

export const NameCard = styled.div`
	position: absolute;
	width: 100%;
	padding: 20px;
	background: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0.02) 0%,
		rgba(0, 0, 0, 0.5) 40%,
		rgba(0, 0, 0, 0.9) 100%
	);

	p {
		color: #fff;
		font-size: 20px;
	}
	span {
		color: #ec398c;
		font-weight: 500;
	}
`;
