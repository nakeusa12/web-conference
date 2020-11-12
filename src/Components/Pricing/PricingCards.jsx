import React from 'react';
import {
	PricingCard,
	HeadCard,
	BodyCard,
	ItemAccess,
	BtnCard,
	BtnPricing,
} from './PricingStyled';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const PricingCards = () => {
	const datas = [
		{
			nameCard: 'Booster',
			summary: 'Ticket Access for One Day',
			price: 60,
			detailCard: [
				'Coffee Break',
				'Catering Include',
				'Lunch and Networking',
				'Talk to the Editors Session ',
			],
		},
		{
			nameCard: 'Acceleration',
			summary: 'Ticket Access for some people',
			price: 200,
			detailCard: [
				'Coffee Break',
				'Catering Include',
				'Picth Competition',
				'6 days of coaching',
				'Lunch and Networking',
				'Talk to the Editors Session ',
			],
		},
		{
			nameCard: 'Conference',
			summary: 'Ticket Access for Three Days',
			price: 120,
			detailCard: [
				'Coffee Break',
				'Catering Include',
				'Picth Competition',
				'Lunch and Networking',
				'Talk to the Editors Session ',
			],
		},
	];

	return (
		<>
			{datas.map((data, index) => (
				<PricingCard key={index}>
					<HeadCard>
						<h3>{data.nameCard}</h3>
						<p>{data.summary}</p>
					</HeadCard>
					<BodyCard>
						<h2>$ {data.price}</h2>
						<ItemAccess>
							{data.detailCard.map((detail) => (
								<p>
									<IoMdCheckmarkCircleOutline style={{ color: 'EC398C' }} />{' '}
									<span>{detail}</span>
								</p>
							))}
						</ItemAccess>
					</BodyCard>
					<BtnCard>
						<BtnPricing>Get Tickets</BtnPricing>
					</BtnCard>
				</PricingCard>
			))}
		</>
	);
};

export default PricingCards;
