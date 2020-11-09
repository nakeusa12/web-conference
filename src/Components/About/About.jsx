import React from 'react';
import AboutBg from '../../Img/aboutBg.png';
import {
	AboutSection,
	AboutContainer,
	AboutInfo,
	Desc,
	BtnAbout,
	ImgAbout,
	AboutDate,
	DateInfo,
	DateContainer,
	CardDate,
} from './AboutStyled';

const About = () => {
	const dates = [
		{
			time: 30,
			when: 'Days',
		},
		{
			time: 12,
			when: 'Hours',
		},
		{
			time: 36,
			when: 'Minutes',
		},
		{
			time: 10,
			when: 'Seconds',
		},
	];

	return (
		<AboutSection>
			<AboutContainer>
				<AboutInfo>
					<Desc>
						<span>About Conference</span>
						<h2>Welcome to the Project Management</h2>
						<p>
							The Project Management is a platform to learn expert techniques
							for building successful project teams, creating efficient plans
							and implementing effective tracking measures to ensure your
							projects come in on deadline and on budget. In one fast-paced,
							well-designed day, we’ll cover all the essential elements of
							project management.
						</p>
						<BtnAbout>Interested</BtnAbout>
					</Desc>
					<ImgAbout>
						<img src={AboutBg} alt='about' />
					</ImgAbout>
				</AboutInfo>

				<AboutDate>
					<DateInfo>
						<span>Conference Date</span>
						<h3>Count Every Second Until The Event</h3>
					</DateInfo>
					<DateContainer>
						{dates.map((date, index) => (
							<CardDate key={index}>
								<h2>{date.time}</h2>
								<p>{date.when}</p>
							</CardDate>
						))}
					</DateContainer>
				</AboutDate>
			</AboutContainer>
		</AboutSection>
	);
};

export default About;
