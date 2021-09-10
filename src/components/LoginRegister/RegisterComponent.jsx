import React, { useState } from 'react'
import { useAuth } from '../../providers/AuthProvider'
import LoginCSS from './LoginRegister.module.css'
import { SignupForm } from './StyledLoginRegister'

function RegisterComponent({ showSignup, signup }) {
    const [password, setPassword] = useState('')
    const [passwordrepeat, setPasswordRepeat] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [pwError, setPWError] = useState('')
    const [pwTooWeak, setPWTooWeak] = useState('')
    const [formDetails, setFormDetails] = useState({})
    const [pwStrength, setPWStrength] = useState('')
    const { registerError } = useAuth()

    const isValidEmail = email => {
        const re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
    }

    function validatePassword(password1, password2) {
        let pwNotSame

        if (password1 !== password2) {
            pwNotSame = true
            setPWError('Passwords do not match!')
            return false
        }
        let strongRegex = new RegExp(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
        )
        let mediumRegex = new RegExp(
            '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
        )

        let isWeak
        let isMedium
        let isStrong

        if (strongRegex.test(password1)) {
            setPWStrength('strong')
            return true
        } else if (mediumRegex.test(password1)) {
            setPWStrength('medium')
            return true
        } else {
            setPWStrength('weak')
            setPWTooWeak('Please choose a stronger password!')
            return false
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formDetails)
        // if (!isValidEmail(formDetails.email)) {
        //     setEmailError('This is not a valid email!')
        //     return
        // } else {
        //     setEmailError('')
        // }
        // if (
        //     !validatePassword(formDetails.password, formDetails.passwordrepeat)
        // ) {
        //     return
        // }

        signup(formDetails.email, formDetails.password).then(signupResult =>
            console.log('signupResult:', signupResult)
        )

        setFormDetails({})
    }

    const captureFormDetails = event => {
        console.log(event.target.id)
        setFormDetails(prevState => {
            return {
                ...prevState,
                [event.target.id]: event.target.value,
            }
        })
    }

    return (
        <SignupForm showSignup={showSignup}>
            <input
                required
                type="text"
                placeholder="Choose a Username"
                autoComplete="username"
                className={LoginCSS.input}
                id="username"
                onChange={captureFormDetails}></input>
            <input
                required
                type="text"
                placeholder="Your Email Address"
                autoComplete="email"
                className={LoginCSS.input}
                id="email"
                onChange={captureFormDetails}></input>
            <p className="text-red-500">{emailError}</p>
            <input
                required
                type="password"
                placeholder="Choose a Password"
                autoComplete="new-password"
                id="password"
                className={LoginCSS.input}
                onChange={captureFormDetails}></input>
            <input
                required
                type="password"
                placeholder="Repeat Password"
                autoComplete="new-password"
                id="passwordrepeat"
                className={LoginCSS.input}
                onChange={captureFormDetails}></input>
            <p className="text-red-500">{pwError}</p>

            <div className="text-red-500 my-3" id="signUpErrorMsg">
                {registerError ? registerError.message : null}
            </div>
            <button
                type="submit"
                className={LoginCSS.btn}
                onClick={e => handleSubmit(e)}>
                Create account
            </button>

            <div id="pwStrength">
                <p id="pwStrengthP">PW Strength:</p>
                <p id="pwColor">{pwTooWeak}</p>
            </div>
        </SignupForm>
    )
}

export default RegisterComponent
