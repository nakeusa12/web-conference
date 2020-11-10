import React from 'react';
import { ScheduleNav } from './ScheduleStyled';

const ScheduleNavItem = ({ itemName, itemDate, day, setDay }) => {
	return (
		<ScheduleNav
			onClick={() => setDay(itemName)}
			style={{
				background: day === itemName ? '#5d5e8d' : '#1f2371',
				color: day === itemName ? '#fff' : '#9293bc',
			}}>
			<p>{itemName}</p>
			<span>{itemDate}</span>
		</ScheduleNav>
	);
};

export default ScheduleNavItem;
