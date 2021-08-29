import styled from 'styled-components'

export const SignupForm = styled.form`
	background: #fff;
	padding: 40px;
	clear: both;
	width: 100%;
	box-sizing: border-box;
	height: auto;
	display: ${(props) => (props.showSignup ? 'block' : 'none')};
`

export const LoginForm = styled.form`
	background: #fff;
	padding: 40px;
	clear: both;
	width: 100%;
	box-sizing: border-box;
	height: auto;
	display: ${(props) => (props.showSignin ? 'block' : 'none')};
`
