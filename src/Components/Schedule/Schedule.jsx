import React, { useState } from 'react';
import ScheduleNavItem from './ScheduleNavItem';
import {
	ScheduleSec,
	ScheduleTitle,
	ScheduleChoice,
	Container,
} from './ScheduleStyled';
import ScheduleCard from './ScheduleCard';

const Schedule = () => {
	const [day, setDay] = useState('Monday');

	return (
		<ScheduleSec id='schedule'>
			<ScheduleTitle>
				<p>Our Plans</p>
				<h2>Schedule & Agenda</h2>
			</ScheduleTitle>
			<ScheduleChoice>
				<ScheduleNavItem
					day={day}
					setDay={setDay}
					itemName='Monday'
					itemDate='January 14, 2019'
				/>
				<ScheduleNavItem
					day={day}
					setDay={setDay}
					itemName='Tuesday'
					itemDate='January 15, 2019'
				/>
				<ScheduleNavItem
					day={day}
					setDay={setDay}
					itemName='Wednesday'
					itemDate='January 16, 2019'
				/>
			</ScheduleChoice>
			<Container>
				{day === 'Monday' && (
					<React.Fragment>
						<ScheduleCard
							scheduleTitle='Dealing with Difficult People'
							scheduleDesc='by Gary Armstrong / Ceo of Confer'
						/>
						<ScheduleCard
							scheduleTitle='Crop Insurance Conference'
							scheduleDesc='by Amanda Hudson / Ceo of Confer'
						/>
						<ScheduleCard
							scheduleTitle='Capdm Executive Conference'
							scheduleDesc='by Martha Burke / Ceo of Confer'
						/>
						<ScheduleCard
							scheduleTitle='Street Food Convention'
							scheduleDesc='by Jeffrey Morales / Ceo of Confer'
						/>
					</React.Fragment>
				)}
				{day === 'Tuesday' && (
					<React.Fragment>
						<ScheduleCard
							scheduleTitle='Crop Insurance Conference'
							scheduleDesc='by Amanda Hudson / Ceo of Confer'
						/>
						<ScheduleCard
							scheduleTitle='Capdm Executive Conference'
							scheduleDesc='by Martha Burke / Ceo of Confer'
						/>
						<ScheduleCard
							scheduleTitle='Street Food Convention'
							scheduleDesc='by Jeffrey Morales / Ceo of Confer'
						/>
					</React.Fragment>
				)}
				{day === 'Wednesday' && (
					<React.Fragment>
						<ScheduleCard
							scheduleTitle='Dealing with Difficult People'
							scheduleDesc='by Gary Armstrong / Ceo of Confer'
						/>
						<ScheduleCard
							scheduleTitle='Street Food Convention'
							scheduleDesc='by Jeffrey Morales / Ceo of Confer'
						/>
					</React.Fragment>
				)}
			</Container>
		</ScheduleSec>
	);
};

export default Schedule;
