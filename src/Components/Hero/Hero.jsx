import React from 'react';
import {
	HeroSection,
	HeroContainer,
	HeroContent,
	H2,
	P2,
	P1,
	BtnHero,
} from './HeroStyled';

const Hero = () => {
	return (
		<HeroSection>
			<HeroContainer>
				<HeroContent>
					<P1>2020</P1>
					<H2>
						Business <br /> Conference
					</H2>
					<P2>MERDEKA PUTIH HOTEL, JAKARTA, INDONESIA</P2>
					<BtnHero>More Information</BtnHero>
				</HeroContent>
			</HeroContainer>
		</HeroSection>
	);
};

export default Hero;
