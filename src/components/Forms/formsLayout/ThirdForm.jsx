
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import AddonOption from './AddonOption';
import { addonActions } from '../../../store/addonSlice';
import { stepsActions } from '../../../store/currentStepSlice';

import './ThirdForm.css'

const ADDONS = [
	{
		subject: 'Online service',
		description: 'Access to multiplayer games',
		monthlyPrice: 1
	},
	{
		subject: 'Larger storage',
		description: 'Extra 1TB of cloud save',
		monthlyPrice: 2
	},
	{
		subject: 'Customizable profile',
		description: 'Custom theme on your profile',
		monthlyPrice: 2
	},

]

function ThirdForm(props) {
	const { mode } = useSelector(state => state.plan);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { currentStep, availablePages } = useSelector(state => state.steps);

	useEffect(() => {
		if (currentStep !== 2){
			navigate(availablePages[currentStep]);
		}
	});

	const formSubmitHandler = (e) => {
		e.preventDefault();
		for (let index = 0; index < ADDONS.length; index++) {
			if (e.target[index].checked)
			{
				dispatch(addonActions.addAddon({
					title: ADDONS[index].subject,
					price: ADDONS[index].monthlyPrice
				}));
			}
		}
		dispatch(stepsActions.nextPage());
		navigate('/summery');
	}

	const previousStep = function () {
		dispatch(stepsActions.previousPage());
		navigate(availablePages[currentStep - 1]);
	} 

	return (
		<>
			<div className='formHeader'>
				<h1>Pick add-ons</h1>
				<p>Add-ons help enhance your gaming experience.</p>
			</div>
			<form id='third' onSubmit={formSubmitHandler}>
				{
					ADDONS.map(add => {
						return (
							<AddonOption key={add.subject} title={add.subject} description={add.description} price={add.monthlyPrice} mode={mode}/>
						);
					})
				}
			</form>
			<div className="nav">
				<button className="backBtn" onClick={previousStep}>Go Back</button>
				<button className="nextBtn" type="submit" form='third'>Next Step</button>
			</div>
		</>
	);
}

export default ThirdForm;