
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { info } from '../../../store/infoSlice';

import './FirstForm.css'

let errorMsg = '';

function FirstForm(props) {
	const inputIsValid = {
		empty: false,
		valid: true
	}

	const [enteredName, setName] = useState('');
	const [nameIsValid, setNameIsValid] = useState(inputIsValid);
	
	const [enteredEmail, setEmail] = useState('');
	const [emailIsValid, setEmailIsValid] = useState(inputIsValid);

	const [enteredPhone, setPhone] = useState('');
	const [phoneIsValid, setPhoneIsValid] = useState(inputIsValid);
	const dispatch = useDispatch();


	const nameChangeHandler = function(e) {
		setNameIsValid(inputIsValid);
		setName(e.target.value);
	}

	const emailChangeHandler = function(e) {
		setEmailIsValid(inputIsValid);
		setEmail(e.target.value);
	}

	const phoneChangeHandler = function(e) {
		setPhoneIsValid(inputIsValid);
		setPhone(e.target.value);
	}

	const formSubmitHandler = (e) => {
		e.preventDefault();

		if (enteredName.split('').length === 0)
		{
			errorMsg = 'this field is required';
			console.log(errorMsg);
			setNameIsValid({
				empty: true,
			})
			return ;
		}

		if (enteredEmail.split('').length === 0 || !enteredEmail.includes('@'))
		{
			const emailValid = {
				empty: false,
				valid: true
			}
			if (enteredEmail.split('').length === 0)
			{	
				errorMsg = 'this field is required';
				emailValid.empty = true;
			}
			else if (!enteredEmail.includes('@'))
			{
				errorMsg = 'not a valid email address';
				emailValid.valid = false;
			}
			setEmailIsValid(emailValid);
			return;
		}


		dispatch(info.setName(enteredName));
		dispatch(info.setEmail(enteredEmail));
		dispatch(info.setPhone(enteredPhone));
		props.next();
	}

	return (
		<>
			<div className='formHeader'>
				<h1>Personal info</h1>
				<p>Please provide your name, email address, and phone number</p>
			</div>
			<form id='first' onSubmit={formSubmitHandler}>
				<div>
					<label htmlFor="name">Name</label>
					{
						nameIsValid.empty && <span className='isRequired'>{errorMsg}</span>
					}
					<input id='name'  type="text" placeholder='e.g. Stephen King' value={enteredName} onChange={nameChangeHandler} />
				</div>
				<div>
					<label htmlFor="email">Email Address</label>
					{
						(emailIsValid.empty || !emailIsValid.valid) && <span className='isRequired'>{errorMsg}</span>
					}
					<input id='email' type="text" placeholder='e.g. stephenking@lorem.com' value={enteredEmail} onChange={emailChangeHandler} />
				</div>
				<div>
					<label htmlFor="phone">Phone Number</label>
					{
						phoneIsValid.empty && !phoneIsValid.valid && <span className='isRequired'>{errorMsg}</span>
					}
					<input id='phone' type="tel" placeholder='e.g. +1 234 567 890' value={enteredPhone} onChange={phoneChangeHandler} />
				</div>
			</form>
		</>
	);
}

export default FirstForm;