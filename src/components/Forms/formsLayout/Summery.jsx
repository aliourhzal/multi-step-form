
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { stepsActions } from '../../../store/currentStepSlice';
import { addonActions } from '../../../store/addonSlice';

import Card from '../../UI/Card';

import './Summery.css';

function Addon(props) {
	return (
		<div className="addon">
			<span className='addonTitle'>{props.title}</span>
			<span className='addonPrice'>+${props.price}/yr</span>
		</div>
	);
}

function Summery(props) {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { currentStep, availablePages } = useSelector(state => state.steps);
	const { plan, mode, price } = useSelector(state => state.plan);
	const { addons } = useSelector(state => state.addons);
	const paymentMethod = mode === 'monthly' ? 'mo' : 'yr';
	const modeFactor = paymentMethod === 'mo' ? 1 : 10;
	const pricingTicket = `$${paymentMethod === 'mo' ? price : price * 10}/${paymentMethod}`;
	let totalAmount = price * modeFactor;

	console.log(addons);

	useEffect(() => {
		if (currentStep !== 3){
			navigate(availablePages[currentStep]);
		}
	});

	const formSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(stepsActions.nextPage());
		navigate('/thankYou');
	}
	
	const changePlanHandler = function() {
		dispatch(addonActions.removeAddons());
		dispatch(stepsActions.changePage(1));
		navigate('/selectPlan');
	}

	return (
		<>
			<div className='formHeader'>
				<h1>Finishing up</h1>
				<p>Double-check everything looks OK before confirming.</p>
			</div>
			<form className='summeryBox card' onSubmit={formSubmitHandler} id='fourth'>
				<div className="plan">
					<div className="planOption">
						<span className="selectedPlan">{`${plan} (${mode})`}</span>
						<button className='changeBtn' onClick={changePlanHandler}>change</button>
					</div>
					<div className="pricing">{pricingTicket}</div>
				</div>
				<div className='addons'>
					{
						addons.map(addon => {
							totalAmount += addon.price * modeFactor;
							return (
								<Addon key={addon.title} title={addon.title} price={addon.price * modeFactor} />
							);
						})
					}
				</div>
			</form>
			<div className="total">
				<span>Total (per year)</span>
				<span className='totalAmount'>${totalAmount}/{paymentMethod}</span>
			</div>
			<div className="nav">
				<button className="backBtn" >Go Back</button>
				<button className="nextBtn" type="submit" form='fourth'>Next Step</button>
			</div>
		</>
	);
}

export default Summery;