
import './AddonOption.css'

function AddonOption(props) {

	const paymentMethod = props.mode === 'monthly' ? 'mo' : 'yr';
	const modeFactor = paymentMethod === 'mo' ? 1 : 10;

	return (
		<label className='custom-box'>
			<input type="checkbox"/>
			<div className='checkbox-btn'>
				<div className='check-icon'>
					<img src="images/icon-checkmark.svg"/>
				</div>
				<div className='add-on'>
					<div className='subject'>{props.title}</div>
					<div className='description'>{props.description}</div>
				</div>
				<span className='price'>${props.price * modeFactor}/{paymentMethod}</span>
			</div>
		</label>
	);
}

export default AddonOption;