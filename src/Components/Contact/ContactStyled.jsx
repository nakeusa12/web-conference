import styled from 'styled-components';

export const ContactSec = styled.section`
	width: 100%;
	background: #151853;
	padding: 100px 0;
`;

export const ContactTitle = styled.div`
	text-align: center;
	color: #fff;
	position: relative;
	p {
		font-size: 20px;
		color: #ec398c;
	}
	h2 {
		font-size: 40px;
		line-height: 1;
		font-weight: 600;
	}
`;

export const ContactContainer = styled.div`
	width: 100%;
	max-width: 1150px;
	margin: 50px auto;
	display: flex;
	flex-direction: row;
	position: relative;

	@media screen and (max-width: 958px) {
		width: 90%;
		flex-direction: column;
		align-items: center;
	}
`;

export const ContactInfo = styled.div`
	width: 40%;

	.content {
		width: 100%;
		padding: 25px 20px;
		margin-bottom: 20px;
		border-radius: 5px;
		position: relative;

		p {
			font-size: 18px;
			color: #bbd;

			span {
				margin-left: 50px;
			}
		}
	}

	@media screen and (max-width: 958px) {
		width: 100%;
	}
`;

export const ContactForm = styled.form`
	width: 60%;
	margin-right: 20px;
	display: flex;
	flex-direction: column;

	input {
		padding: 15px;
		margin-bottom: 20px;
		border: 1px solid #aaa;
		background: transparent;
		outline: 0;
		color: #fff;
		border-radius: 5px;

		:nth-child(3) {
			padding: 10px 10px 100px 10px;
		}
	}

	button {
		margin-top: 10px;
		padding: 13px 0;
		width: 200px;
		background: #ec398c;
		border: none;
		outline: none;
		font-size: 18px;
		color: #fff;
		border-radius: 5px;
		cursor: pointer;
		transition: background 400ms ease-in-out;

		:hover {
			background: #fff;
			color: #ec398c;
		}
	}

	@media screen and (max-width: 958px) {
		width: 100%;

		button {
			width: auto;
		}
	}
`;
