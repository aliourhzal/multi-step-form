
import { useSelector } from "react-redux";

import Card from "../UI/Card";
import Step from "./Step";

import './SideBar.css'

function SideBar(props) {
	const { currentStep } = useSelector(state => state.steps);
	const FormsTitles = ['your info', 'select plan', 'add-ons', 'summary'];

	return (
		<Card className='sideBar'>
			{
				FormsTitles.map((title, i) => {
					let isActive = false;
					if (i === currentStep || (currentStep == 4 && i == 3))
						isActive = true;
					return (
						<Step key={i} id={i + 1} title={title} isActive={isActive}/>
					);
				})
			}
		</Card>
	);
}

export default SideBar;