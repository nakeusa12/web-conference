import React from 'react';
import { SpeakCard, NameCard } from './SpeakerStyled';
import speakerOne from '../../Img/speakerOne.jpg';
import speakerTwo from '../../Img/speakerTwo.jpg';
import speakerThree from '../../Img/speakerThree.jpg';
import speakerFour from '../../Img/speakerFour.jpg';
import speakerFive from '../../Img/speakerFive.jpg';

// ================
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Pagination]);

const SpeakerCard = () => {
	const persons = [
		{
			image: speakerOne,
			name: 'Alex Barnes',
			job: 'Founder',
		},
		{
			image: speakerTwo,
			name: 'Mishusa Zheying',
			job: 'Co-Founder',
		},
		{
			image: speakerThree,
			name: 'John Wixsell',
			job: 'Content Creator',
		},
		{
			image: speakerFour,
			name: 'Ken Brightness',
			job: 'UI Designer',
		},
		{
			image: speakerFive,
			name: 'Urasi Yuan',
			job: 'Mobile Developer',
		},
	];

	return (
		<>
			<Swiper
				spaceBetween={30}
				slidesPerView={3}
				pagination={{ clickable: true }}>
				{persons.map((person) => (
					<SwiperSlide>
						<SpeakCard key={person.name}>
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
