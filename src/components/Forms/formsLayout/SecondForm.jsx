
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { planActions } from '../../../store/planSlice';
import { stepsActions } from '../../../store/currentStepSlice';
import PlanOption from './PlanOption';

import './SecondForm.css'

const PLANS = [
	{
		title: 'arcade',
		icon: "images/icon-arcade.svg",
		monthlyPrice: 9,
	},
	{
		title: 'advanced',
		icon: "images/icon-advanced.svg",
		monthlyPrice: 12,
	},
	{
		title: 'pro',
		icon: "images/icon-pro.svg",
		monthlyPrice: 15,
	}
]

function SecondForm(props) {
	const [monthlyToggle, setmonthlyToggle] = useState(true);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { currentStep, availablePages } = useSelector(state => state.steps);

	useEffect(() => {
		if (currentStep !== 1)
			navigate('/personalInfo');
	}, []);
		
	
	const toggleChangeHandler = function (e) {
		const monthly = document.querySelector('.monthly');
		const yearly = document.querySelector('.yearly');

		if (!monthlyToggle)
		{
			monthly.style.color = 'hsl(213, 96%, 18%)';
			yearly.style.color = 'hsl(231, 11%, 63%)';
		}
		else
		{
			yearly.style.color = 'hsl(213, 96%, 18%)';
			monthly.style.color = 'hsl(231, 11%, 63%)';
		}
		setmonthlyToggle(state => !state);
	}

	const formSubmitHandler = (e) => {
		e.preventDefault();

		const paymentMode = e.target[PLANS.length];
		let mode = '';
		for (let index = 0; index < PLANS.length; index++) {
			const plan = e.target[index];
			if(plan.checked)
			{
				dispatch(planActions.setPlan(PLANS[index].title));
				dispatch(planActions.setPrice(PLANS[index].monthlyPrice))
			}
		}
		paymentMode.checked ? mode = 'yearly' : mode = 'monthly';
		dispatch(planActions.setMode(mode));
		dispatch(stepsActions.nextPage());
		navigate('/pickAddons');
	}

	const previousStep = function () {
		dispatch(stepsActions.previousPage());
		navigate(availablePages[currentStep - 1]);
	}

	return (
		<>
			<div className='formHeader'>
				<h1>Select your plan</h1>
				<p>You have the option of monthly or yearly billing.</p>
			</div>
			<form id='second' onSubmit={formSubmitHandler}>
				<div className="plans">
					{
						PLANS.map(plan => {
							return (
								<PlanOption key={plan.title} title={plan.title} icon={plan.icon} amount={plan.monthlyPrice} isMonthly={monthlyToggle}/>
							);
						})
					}
				</div>
				<div className="billing">
					<span className='monthly'>monthly</span>
					<label className='switch'>
						<input type="checkbox" onChange={toggleChangeHandler}/>
						<span className='slider round'></span>
					</label>
					<span className='yearly'>yearly</span>
				</div>
			</form>
			<div className="nav">
				<button className="backBtn" onClick={previousStep}>Go Back</button>
				<button className="nextBtn" type="submit" form='second'>Next Step</button>
			</div>
		</>
	);
}

export default SecondForm;