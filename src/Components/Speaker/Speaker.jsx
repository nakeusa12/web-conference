import React from 'react';
import SpeakerOne from '../../Img/speakerOne.jpg';
import {
	SpeakerSection,
	SpekerTitle,
	SpeakerContainer,
	SpeakerCard,
	NameCard,
} from './SpeakerStyled';

const Speaker = () => {
	return (
		<SpeakerSection>
			<SpekerTitle>
				<p>Our Speakings</p>
				<h2>Who's Speaking</h2>
			</SpekerTitle>
			<SpeakerContainer>
				<SpeakerCard>
					<img src={SpeakerOne} alt='' />
					<NameCard>
						<p>Albert Barnes</p>
						<span>Founder</span>
					</NameCard>
				</SpeakerCard>
				<SpeakerCard>
					<img src={SpeakerOne} alt='' />
					<NameCard>
						<p>Albert Barnes</p>
						<span>Co-Founder</span>
					</NameCard>
				</SpeakerCard>
				<SpeakerCard>
					<img src={SpeakerOne} alt='' />
					<NameCard>
						<p>Albert Barnes</p>
						<span>CEO</span>
					</NameCard>
				</SpeakerCard>
			</SpeakerContainer>
		</SpeakerSection>
	);
};

export default Speaker;
