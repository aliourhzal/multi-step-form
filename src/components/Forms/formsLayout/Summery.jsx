
import { useSelector } from 'react-redux';

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

	const {plan, mode, price} = useSelector(state => state.plan);
	const addons = useSelector(state => state.addons);
	const paymentMethod = mode === 'monthly' ? 'mo' : 'yr';
	const modeFactor = paymentMethod === 'mo' ? 1 : 10;
	const pricingTicket = `$${paymentMethod === 'mo' ? price : price * 10}/${paymentMethod}`;
	let totalAmount = price * modeFactor;

	const formSubmitHandler = (e) => {
		e.preventDefault();
		props.next();
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
						<button className='changeBtn'>change</button>
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
		</>
	);
}

export default Summery;