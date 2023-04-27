import { useState } from 'react'
import Card from './components/UI/Card'
import SideBar from './components/SideBarComponents/SideBar'
import Form from './components/Forms/Form'
import './App.css'

function App() {
	const [step, setStep] = useState(0);

	const nextStep = () => {
		setStep(step => step + 1);
	}

	const previousStep = () => {
		setStep(step => step - 1);
	}

	return (
		<Card className='formContainer'>
			<SideBar step={step}/>
			<Form step={step} next={nextStep} previous={previousStep}/>
		</Card>
	);
}

export default App
