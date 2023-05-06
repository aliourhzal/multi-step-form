
import { Routes, Route, Navigate } from "react-router-dom";

import FirstForm from "./formsLayout/FirstForm";
import SecondForm from "./formsLayout/SecondForm";
import ThirdForm from "./formsLayout/ThirdForm";
import Summery from "./formsLayout/Summery";
import ThankYou from "./formsLayout/ThankYou";
import './Form.css'

function Form(props) {
	return (
		<div className="formBox">
			<div className='formHolder'>
				<Routes>
					<Route path="/" element={<Navigate to="/personalInfo" />} />
					<Route path="/personalInfo" element={<FirstForm />}/>
					<Route path="/selectPlan" element={<SecondForm />}/>
					<Route path="/pickAddons" element={<ThirdForm />}/>
					<Route path="/summery" element={<Summery />}/>
					<Route path="/thankYou" element={<ThankYou />}/>
				</Routes>
			</div>
		</div>
	);
}

export default Form;