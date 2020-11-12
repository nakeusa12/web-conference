import React from 'react';
import {
	FooterArea,
	FooterContainer,
	FooterDesc,
	FooterLogo,
	FooterLink,
	FooterEnd,
} from './FooterStyled';
import Logo from '../../Img/Busfez.png';
import { GrFacebookOption } from 'react-icons/gr';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
	return (
		<FooterArea>
			<FooterContainer>
				<FooterDesc>
					<FooterLogo>
						<img src={Logo} alt='' />
						<div className='icon-medsos'>
							<a href='!#'>
								<GrFacebookOption />
							</a>
							<a href='!#'>
								<FaInstagram />
							</a>
							<a href='!#'>
								<FaTwitter />
							</a>
							<a href='!#'>
								<FaYoutube />
							</a>
						</div>
					</FooterLogo>
					<FooterLink>
						<div className='workshop'>
							<h4>Futures</h4>
							<p>Business Future</p>
							<p>Forum</p>
							<p>Secure Network</p>
							<p>Forum Speaker Series</p>
						</div>
						<div className='workshop'>
							<h4>Workshops</h4>
							<p>Fluter Basic</p>
							<p>Microsoft Excel Base</p>
							<p>Secure Network</p>
							<p>Forum Speaker Series</p>
						</div>
						<div className='workshop'>
							<h4>Contact</h4>
							<a href='!#'>2004 Mawar Flower Street</a>
							<a href='!#'>(62) 827 7832 2383</a>
							<a href='!#'>busfez@contact.com</a>
							<a href='!#'>www.busfez.com</a>
						</div>
					</FooterLink>
				</FooterDesc>
				<FooterEnd>
					<p>
						I'm Slicing from Colorlib and Dribble -{' '}
						<a href='https://sfullnakeusa.netlify.app/' target='blank'>
							Saiful Nakeusa
						</a>
					</p>
				</FooterEnd>
			</FooterContainer>
		</FooterArea>
	);
};

export default Footer;
