import React from 'react';
import { ScheduleNav } from './ScheduleStyled';

const ScheduleNavItem = ({ itemName, itemDate, day, setDay }) => {
	return (
		<ScheduleNav
			onClick={() => setDay(itemName)}
			style={{
				background: day === itemName ? 'rgba(255,255,255,.223)' : '#151853',
				color: day === itemName ? '#151853' : '#fff',
				border: day === itemName ? '2px solid #151853' : 'none',
				boxShadow:
					day === itemName ? '2px 3px 15px rgba(0, 0, 0, 0.3)' : 'none',
			}}>
			<p>{itemName}</p>
			<span>{itemDate}</span>
		</ScheduleNav>
	);
};

export default ScheduleNavItem;
