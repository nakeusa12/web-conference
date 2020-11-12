import React from 'react';
import { PricingSec, PricingTitle, Container, Content } from './PricingStyled';
import PricingCards from './PricingCards';

const Pricing = () => {
	return (
		<PricingSec id='pricing'>
			<PricingTitle>
				<p>Chooice A Ticket</p>
				<h2>Ticket Pricing</h2>
			</PricingTitle>
			<Container>
				<Content>
					<PricingCards />
				</Content>
			</Container>
		</PricingSec>
	);
};

export default Pricing;
