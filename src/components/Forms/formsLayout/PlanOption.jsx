
import { useState } from 'react';

import './PlanOption.css'

function PlanOption(props) {

	const arcadeIsDefault = props.title === 'arcade' ? true : false;

	return (
		<label className='custom-radio' htmlFor={props.title}>
			<input type="radio" id={props.title} name='plan' defaultChecked={arcadeIsDefault}/>
			<div className='radio-btn'>
				<div className='planProps'>
					<img src={props.icon} alt={props.title} />
					<div className='planTitle'>{props.title}</div>
					<div className="planBill">${props.isMonthly ? props.amount : props.amount * 10}/mo</div>
					{ !props.isMonthly && <div className='discount'>2 months free</div>}
				</div>
			</div>
		</label>
	);
}

export default PlanOption;