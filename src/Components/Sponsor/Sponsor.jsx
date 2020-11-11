import React from 'react';
import {
	SponsorSec,
	SponsorTitle,
	SponsorContainer,
	SponsorArea,
} from './SponsorStyled';
import Realme from '../../Img/realme.svg';
import Tokopedia from '../../Img/tokopedia.svg';
import Google from '../../Img/google.svg';
import Lenovo from '../../Img/lenovo.svg';
import Asus from '../../Img/asus.svg';

const Sponsor = () => {
	return (
		<SponsorSec>
			<SponsorTitle>
				<p>
					Huge <span>Appreciation</span> <br /> For Our Sponsors
				</p>
			</SponsorTitle>
			<SponsorContainer>
				<SponsorArea>
					<div className='logoarea'>
						<img src={Realme} alt='realme' />
					</div>
					<div className='logoarea'>
						<img src={Tokopedia} alt='realme' />
					</div>
					<div className='logoarea'>
						<img src={Google} alt='realme' />
					</div>
					<div className='logoarea'>
						<img src={Lenovo} alt='realme' />
					</div>
					<div className='logoarea'>
						<img src={Asus} alt='realme' />
					</div>
				</SponsorArea>
			</SponsorContainer>
		</SponsorSec>
	);
};

export default Sponsor;
