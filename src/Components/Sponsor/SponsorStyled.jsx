import styled from 'styled-components';

export const SponsorSec = styled.section`
	width: 100%;
	background: #151d53;
	padding: 50px 0;
`;

export const SponsorTitle = styled.div`
	text-align: center;
	color: #fff;
	position: relative;

	p {
		font-size: 35px;
		font-weight: 600;
		margin-bottom: 5px;

		span {
			color: #ec398c;
		}
	}
`;

export const SponsorContainer = styled.div`
	width: 100%;
	max-width: 1110px;
	margin: 0 auto;
	@media screen and (max-width: 1168px) {
		max-width: 90%;
	}
`;
export const SponsorArea = styled.div`
	padding: 50px 0;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	transition: color 600ms ease-in-out;

	.logoarea {
		max-width: 120px;
		width: 100%;
		height: auto;
		position: relative;

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			cursor: pointer;
			opacity: 0.4;
			transition: opacity 500ms ease-in-out;

			:hover {
				opacity: 1;
			}

			@media screen and (max-width: 1200px) {
				margin: 10px;
			}
		}
	}

	@media screen and (max-width: 676px) {
		.logoarea {
			margin-right: 30px;
			margin-bottom: 20px;
		}
	}
`;
