import React from 'react'
import LoginCSS from './LoginRegister.module.css'
import { SignupForm } from './StyledLoginRegister'

function RegisterComponent({ showSignup }) {
	return (
		<SignupForm showSignup={showSignup}>
			<input
				required
				type='text'
				placeholder='Choose a Username'
				autoComplete='username'
				className={LoginCSS.input}
				name='username'
			></input>
			<input
				required
				type='text'
				placeholder='Your Email Address'
				autoComplete='email'
				className={LoginCSS.input}
				name='email'
			></input>
			<input
				required
				type='password'
				placeholder='Choose a Password'
				autoComplete='new-password'
				name='password'
				className={LoginCSS.input}
			></input>
			<input
				required
				type='password'
				placeholder='Repeat Password'
				autoComplete='new-password'
				name='passwordrepeat'
				className={LoginCSS.input}
			></input>

			<button type='submit' className={LoginCSS.btn}>
				Create account
			</button>

			<div id='pwStrength'>
				<p id='pwStrengthP'>PW Strength:</p>
				<p id='pwColor'></p>
			</div>
			<div id='signUpErrorMsg'></div>
		</SignupForm>
	)
}

export default RegisterComponent
