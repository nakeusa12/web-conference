import React from 'react';
import { SpeakerSection, SpekerTitle, SpeakerContainer } from './SpeakerStyled';
import SpeakerCard from './SpeakerCard';

const Speaker = () => {
	return (
		<SpeakerSection>
			<SpekerTitle>
				<p>Our Speakings</p>
				<h2>Who's Speaking</h2>
			</SpekerTitle>
			<SpeakerContainer>
				<SpeakerCard />
			</SpeakerContainer>
		</SpeakerSection>
	);
};

export default Speaker;
