
import { useDispatch, useSelector } from 'react-redux';
import AddonOption from './AddonOption';
import { addonActions } from '../../../store/addonSlice';

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
	console.log(mode);

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
		props.next();
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
		</>
	);
}

export default ThirdForm;