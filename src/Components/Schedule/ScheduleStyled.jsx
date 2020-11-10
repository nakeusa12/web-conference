import styled from 'styled-components';

export const ScheduleSec = styled.section`
	width: 100%;
	background: #b842a8;
	padding: 100px 0;
`;

export const ScheduleTitle = styled.div`
	text-align: center;
	color: #fff;
	position: relative;
	p {
		font-size: 23px;
	}
	h2 {
		font-size: 40px;
		line-height: 1;
		font-weight: 600;
	}
`;

export const ScheduleChoice = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (max-width: 970px) {
		padding: 14px 0 0 0;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	@media screen and (max-width: 1168px) {
		width: 100%;
		max-width: 90%;
		margin: 0 auto;
	}
`;

export const ScheduleNav = styled.div`
	width: 100%;
	max-width: 170px;
	text-align: center;
	padding: 14px 20px;
	margin: 70px 0 20px 0;
	font-weight: 600;
	cursor: pointer;
	transition: background 500ms ease-in-out;
	span {
		font-size: 14px;
		margin: 8px 0 0 0;
		display: block;
	}
	&:first-of-type {
		border-radius: 14px 0 0 14px;
	}
	&:nth-child(2) {
		border-left: 1px solid #4c4f8d;
		border-right: 1px solid #4c4f8d;
	}
	&:last-of-type {
		border-radius: 0 14px 14px 0;
	}
	@media screen and (max-width: 970px) {
		margin: 10px 0;
		max-width: 608px;
		&:first-of-type,
		&:nth-child(2),
		&:last-of-type {
			border-radius: 0px;
			border-left: none;
			border-right: none;
		}
	}
	@media screen and (min-width: 971px) and (max-width: 1168px) {
		max-width: 33%;
	}
`;

export const ScheduleItem = styled.div`
	width: 100%;
	border: 1px solid #444675;
	border-radius: 10px;
	padding: 30px;
	margin: 22px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: border 500ms ease-in-out;
	cursor: pointer;
	&:hover {
		border: 1px solid #df42b1;
	}

	@media screen and (max-width: 970px) {
		flex-direction: column;
		align-items: center;
		max-width: 608px;
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

export const WrapperCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 740px;
	color: #fff;

	@media screen and (max-width: 970px) {
		max-width: 100%;
		flex-wrap: wrap;
	}

	@media screen and (min-width: 971px) and (max-width: 1168px) {
		max-width: 80%;
		justify-content: flex-start;
	}
`;

export const InfoCard = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 970px) {
		width: 100%;
		.info {
			h3 {
				font-size: 15px;
			}
			p {
				font-size: 13px;
			}
		}
	}

	@media screen and (min-width: 971px) and (max-width: 1168px) {
		width: 100%;
		max-width: 55%;

		.info {
			h3 {
				font-size: 15px;
			}
			p {
				font-size: 13px;
			}
		}
	}
`;

export const AboutCard = styled.div`
	padding-left: 14px;

	p {
		i {
			color: #df42b1;
			margin-right: 10px;
		}
	}

	@media screen and (max-width: 970px) {
		padding: 18px 14px;
		p {
			font-size: 15px;
		}
	}

	@media screen and (min-width: 971px) and (max-width: 1168px) {
		p {
			font-size: 15px;
		}
	}
`;

export const BtnItem = styled.a`
	background: #151853;
	color: #f3f3f3;
	border: none;
	outline: none;
	border-radius: 7px;
	font-weight: 400;
	padding: 12px 30px;
	cursor: pointer;

	transition: background 300ms ease-in-out;

	&:hover {
		background: #fff;
		color: #151853;
	}
`;
