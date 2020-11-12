import styled from 'styled-components';

export const FooterArea = styled.div`
	width: 100%;
	background: #071137;
`;
export const FooterContainer = styled.div`
	width: 100%;
	max-width: 1250px;
	margin: 0 auto;
	position: relative;

	@media screen and (max-width: 1220px) {
		width: 90%;
	}
`;
export const FooterDesc = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	padding: 50px 0;
	border-bottom: 1px solid #555;

	@media screen and (max-width: 1030px) {
		flex-direction: column;
	}
`;
export const FooterLogo = styled.div`
	width: 30%;
	margin-right: 20px;

	img {
		width: 30%;
	}

	.icon-medsos {
		margin-top: 20px;
		width: 60%;
		display: flex;
		justify-content: space-between;

		a {
			width: 45px;
			height: 45px;
			color: #fff;
			font-size: 25px;
			border-radius: 50%;
			text-align: center;
			padding: 5px 0;
			border: 1px solid #fff;
			transition: background 400ms ease-in-out;

			:hover {
				color: #ec398c;
				background: #fff;
			}
		}
	}

	@media screen and (max-width: 1030px) {
		width: 100%;
		text-align: center;
		margin-right: 0px;

		img {
			width: 20%;
		}

		.icon-medsos {
			width: 60%;
			margin: 20px auto;
			display: flex;
			justify-content: space-between;

			a {
				width: 45px;
				height: 45px;
				color: #fff;
				font-size: 25px;
				border-radius: 50%;
				text-align: center;
				padding: 5px 0;
				border: 1px solid #fff;
				transition: background 400ms ease-in-out;

				:hover {
					color: #ec398c;
					background: #fff;
				}
			}
		}
	}
`;
export const FooterLink = styled.div`
	width: 70%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-end;

	.workshop {
		width: 33%;
		display: flex;
		flex-direction: column;
		color: white;

		h4 {
			margin-bottom: 10px;
		}

		p {
			font-size: 14px;
			opacity: 0.5;
			margin: 2px 0;

			:hover {
				opacity: 1;
			}
		}

		a {
			font-size: 14px;
			color: #fff;
			margin: 2px 0;
			opacity: 0.5;
			text-decoration: none;

			:hover {
				opacity: 1;
			}
		}
	}

	@media screen and (max-width: 1030px) {
		width: 100%;
		margin-top: 50px;
		justify-content: center;
	}

	@media screen and (max-width: 676px) {
		flex-direction: column;

		.workshop {
			width: 100%;
			margin-bottom: 30px;
			display: flex;
			align-items: center;
			flex-direction: column;
		}
	}
`;
export const FooterEnd = styled.div`
	text-align: center;
	color: #fff;
	padding: 20px 0;
	a {
		color: #fff;
		text-decoration: none;

		:hover {
			color: #ec398c;
		}
	}
`;
