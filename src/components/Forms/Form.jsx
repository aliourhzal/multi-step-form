
import FirstForm from "./formsLayout/FirstForm";
import SecondForm from "./formsLayout/SecondForm";
import ThirdForm from "./formsLayout/ThirdForm";
import Summery from "./formsLayout/Summery";
import ThankYou from "./formsLayout/ThankYou";
import './Form.css'

function Form(props) {
	const stepId = ['first', 'second', 'third', 'fourth'];
	const STEPS = {
		0: <FirstForm next={props.next}/>,
		1: <SecondForm next={props.next}/>,
		2: <ThirdForm next={props.next}/>,
		3: <Summery next={props.next}/>,
		4: <ThankYou />
	}

	return (
		<div className="formBox">
			<div className='formHolder'>
				{ STEPS[props.step] }
				{
					props.step < 4 && 
					<div className="nav">
						{
							props.step > 0 && <button className="backBtn" onClick={props.previous}>Go Back</button>
						}
						<button className="nextBtn" type="submit" form={stepId[props.step]}>Next Step</button>
					</div>
				}
			</div>
		</div>
	);
}

export default Form;