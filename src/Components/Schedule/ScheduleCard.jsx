import React from 'react';
import {
	ScheduleItem,
	WrapperCard,
	InfoCard,
	AboutCard,
	BtnItem,
} from './ScheduleStyled';

import { BsClock } from 'react-icons/bs';
import { FaPlaceOfWorship } from 'react-icons/fa';

const ScheduleCard = ({ scheduleTitle, scheduleDesc }) => (
	<ScheduleItem>
		<WrapperCard>
			<InfoCard>
				<div className='info'>
					<h3>{scheduleTitle}</h3>
					<p>{scheduleDesc}</p>
				</div>
			</InfoCard>
			<AboutCard>
				<p>
					<BsClock /> <span>9AM - 10AM</span>
				</p>
				<p>
					<FaPlaceOfWorship /> <span>Mountain Resort, Phoenix, USA</span>
				</p>
			</AboutCard>
		</WrapperCard>
		<BtnItem>View More</BtnItem>
	</ScheduleItem>
);

export default ScheduleCard;
