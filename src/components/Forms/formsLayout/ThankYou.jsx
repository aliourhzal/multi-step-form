
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { stepsActions } from '../../../store/currentStepSlice';

import './ThankYou.css'
import { useEffect } from 'react';

function ThankYou() {
	const { currentStep } = useSelector(state => state.steps)
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if(currentStep !== 4) {
			dispatch(stepsActions.changePage(0));
			navigate('/personalInfo');
		}
	})

	return (
		<div className='thanksBox'>
			<img src="images/icon-thank-you.svg" alt='thankYou' />
			<h1>Thank you!</h1>
			<p>Thanks for confirming your subscription! We hope you have fun using out platform. if you ever need support, please feel free to email us at support@loremgaming.com.</p>
		</div>
	);
}

export default ThankYou;