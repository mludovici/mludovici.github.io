import React, { useState } from 'react'
import { useAuth } from '../../providers/AuthProvider'
import LoginRegisterCSS from './LoginRegister.module.css'
import { SignupForm, LoginForm } from './StyledLoginRegister'
import RegisterComponent from './RegisterComponent'
import LoginComponent from './LoginComponent'

import { Route, Link } from 'react-router-dom'

function LoginRegister() {
	let [showSignin, setShowSignin] = useState(true)
	let [showSignup, setShowSignup] = useState(false)
	let authFunctions = useAuth()
	console.log(authFunctions)

	function isValidEmail(email) {
		const re =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(email.toLowerCase())
	}

	function validatePassword(password) {
		let strongRegex = new RegExp(
			'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
		)
		let mediumRegex = new RegExp(
			'^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
		)
		// let pwStrengthDiv = document.getElementById('pwColor')
		// if (strongRegex.test(password)) {
		// 	pwStrengthDiv.style.backgroundColor = 'green'
		// } else if (mediumRegex.test(password)) {
		// 	pwStrengthDiv.style.backgroundColor = 'orange'
		// } else {
		// 	pwStrengthDiv.style.backgroundColor = 'red'
		// }
	}

	return (
		<div className={LoginRegisterCSS.container}>
			<div className={LoginRegisterCSS.container}>
				<div>
					<div
						onClick={() => {
							setShowSignin(true)
							setShowSignup(false)
						}}
						className={LoginRegisterCSS.login}
						style={{ borderRight: '2px solid aquamarine' }}
					>
						Log In
					</div>
					<div
						onClick={() => {
							setShowSignin(false)
							setShowSignup(true)
						}}
						className={LoginRegisterCSS.signup}
					>
						Sign Up
					</div>

					<LoginComponent showSignin={showSignin}></LoginComponent>
					<RegisterComponent
						showSignup={showSignup}
					></RegisterComponent>
				</div>
			</div>
		</div>
	)
}

export default LoginRegister
