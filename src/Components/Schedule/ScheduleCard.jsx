import React from 'react';
import {
	ScheduleItem,
	WrapperCard,
	InfoCard,
	AboutCard,
	BtnItem,
} from './ScheduleStyled';

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
				<p>12-14 Jan 2019</p>
				<p>Mountain Resort, Phoenix, USA</p>
			</AboutCard>
		</WrapperCard>
		<BtnItem>View More</BtnItem>
	</ScheduleItem>
);

export default ScheduleCard;
