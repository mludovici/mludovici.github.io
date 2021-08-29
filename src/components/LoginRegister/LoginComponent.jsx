import React from 'react'
import LoginCSS from './LoginRegister.module.css'
import { LoginForm } from './StyledLoginRegister'

function LoginComponent({ showSignin }) {
	return (
		<LoginForm showSignin={showSignin}>
			<input
				required
				type='text'
				placeholder='Email'
				autoComplete='email'
				className={LoginCSS.input}
				name='emailsignin'
			></input>
			<input
				required
				type='password'
				placeholder='Password'
				autoComplete='current-password'
				className={LoginCSS.input}
				name='pwsignin'
			></input>

			<button type='submit' className={LoginCSS.btn}>
				log in
			</button>
			<span>
				<a href='#'>I forgot my username or password.</a>
			</span>

			<div id='logInErrorMsg'></div>
			<div className={LoginCSS['show-welcome']}></div>
		</LoginForm>
	)
}

export default LoginComponent
