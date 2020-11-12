import React from 'react';
import {
	ContactSec,
	ContactTitle,
	ContactContainer,
	ContactInfo,
	ContactForm,
} from './ContactStyled';
import { TiLocationArrowOutline } from 'react-icons/ti';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';

const Contact = () => {
	return (
		<ContactSec>
			<ContactTitle>
				<p>Need Something?</p>
				<h2>Contact Us</h2>
			</ContactTitle>
			<ContactContainer>
				<ContactInfo>
					<div className='content'>
						<p>
							<TiLocationArrowOutline
								style={{
									width: '30',
									height: '30',
									position: 'absolute',
									top: '20',
								}}
							/>{' '}
							<span>2004 Mawar Flower Street</span>
						</p>
					</div>
					<div className='content'>
						<p>
							<HiOutlineMail
								style={{
									width: '30',
									height: '30',
									position: 'absolute',
									top: '20',
								}}
							/>{' '}
							<span>(62) 827 7832 2383</span>
						</p>
					</div>
					<div className='content'>
						<p>
							<HiPhone
								style={{
									width: '30',
									height: '30',
									position: 'absolute',
									top: '20',
								}}
							/>{' '}
							<span>busfez@contact.com</span>
						</p>
					</div>
				</ContactInfo>
				<ContactForm>
					<input type='text' placeholder='Your Name' name='name' />
					<input type='text' placeholder='Your Email' name='email' />
					<input
						type='text'
						name='description'
						placeholder='Your Message ...'
					/>
					<button>Send</button>
				</ContactForm>
			</ContactContainer>
		</ContactSec>
	);
};

export default Contact;
