
import './Step.css'

function Step(props) {
	return (
		<div className="step">
			<span className={`stepId ${props.isActive && 'active'}`}>{props.id}</span>
			<div>
				<span className='stepCounter'>step {props.id}</span>
				<span className='stepTitle'>{props.title}</span>
			</div>
		</div>
	);
}

export default Step;