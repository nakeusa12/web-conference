import React from 'react';
import { SpeakCard, NameCard } from './SpeakerStyled';
import speakerOne from '../../Img/speakerOne.jpg';
import speakerTwo from '../../Img/speakerTwo.jpg';
import speakerThree from '../../Img/speakerThree.jpg';
import speakerFour from '../../Img/speakerFour.jpg';
import speakerFive from '../../Img/speakerFive.jpg';

// ================
import SwiperCore, { Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
SwiperCore.use([Autoplay, A11y]);

const SpeakerCard = () => {
	const persons = [
		{
			image: speakerOne,
			name: 'Alex Barnes',
			job: 'Founder of Gojek',
		},
		{
			image: speakerTwo,
			name: 'Mishusa Zheying',
			job: 'Co-Founder of Harizon.io',
		},
		{
			image: speakerThree,
			name: 'John Wixsell',
			job: 'Founder of Taktik.Space',
		},
		{
			image: speakerFour,
			name: 'Ken Brightness',
			job: 'CEO of Butstart',
		},
		{
			image: speakerFive,
			name: 'Urasi Yuan',
			job: 'Founder of Canva',
		},
	];

	return (
		<>
			<Swiper
				spaceBetween={30}
				slidesPerView={3}
				autoplay={{ delay: 2000, disableOnInteraction: false }}>
				{persons.map((person) => (
					<SwiperSlide key={person.name}>
						<SpeakCard>
							<img src={person.image} alt='' />
							<NameCard>
								<p>{person.name}</p>
								<span>{person.job}</span>
							</NameCard>
						</SpeakCard>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default SpeakerCard;
