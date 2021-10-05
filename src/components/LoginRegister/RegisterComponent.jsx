import React, { useState, useRef } from 'react'
import { useAuth } from '../../providers/AuthProvider'
import LoginCSS from './LoginRegister.module.css'
import { SignupForm } from './StyledLoginRegister'
import { setErrorTimeout } from '../utils'
import { FormattedMessage } from 'react-intl'
function RegisterComponent({ showSignup, signup, analytics }) {
    const [formDetails, setFormDetails] = useState({})
    const [registerSuccess, setRegisterSuccess] = useState(null)
    const { auth } = useAuth()
    const [registerError, setRegisterError] = useState(null)
    const formRef = useRef(null)
    const handleSubmit = async e => {
        e.preventDefault()

        // let formData = new FormData(formRef.current)
        // for (let [key, val] of formData) {
        //     console.log('item2:', key, val)
        // }
        // console.log(typeof t) // == Object
        // console.log(t) // doesn't simply show anything, just a simple object
        // console.log(e.target) // === formRef.current
        // console.log(
        //     Array.from(formRef.current).forEach(el =>
        //         console.log('arr:', el.name, el.value)
        //     ) // not possible to iterate just the formData object with forEach because its an object
        // )
        // console.log({ formRef })

        if (formDetails.password !== formDetails.passwordrepeat) {
            setErrorTimeout(setRegisterError, {
                message: 'Passwords do not match!',
            })
            return
        }

        await auth
            .createUserWithEmailAndPassword(
                formDetails.email,
                formDetails.password
            )
            .then(userCredentials => {
                if (userCredentials) {
                    const user = userCredentials.user
                    let success = user.sendEmailVerification()
                    if (success) {
                        setRegisterSuccess(
                            'You registered successfully! please check your email!'
                        )
                        analytics.logEvent('sign_up', {
                            email: formDetails.email,
                        })
                    }
                    setFormDetails({})
                }
            })
            .catch(error => {
                console.log('ERROR!')
                setErrorTimeout(setRegisterError, error)
            })
    }

    const captureFormChange = event => {
        event.preventDefault()
        setFormDetails(prevState => {
            return {
                ...prevState,
                [event.target.id]: event.target.value,
            }
        })
    }

    return (
        <SignupForm
            ref={formRef}
            showSignup={showSignup}
            onSubmit={e => handleSubmit(e)}>
            {/* <input
                required
                type="text"
                placeholder="Choose a Username"
                autoComplete="username"
                className={LoginCSS.input}
                id="username"
                name="username"
                onChange={captureFormChange}></input> */}
            <input
                required
                type="text"
                placeholder="Your Email Address"
                autoComplete="email"
                className={LoginCSS.input}
                id="email"
                name="email"
                onChange={captureFormChange}></input>
            <input
                required
                type="password"
                placeholder="Choose a Password"
                autoComplete="new-password"
                id="password"
                name="password"
                className={LoginCSS.input}
                onChange={captureFormChange}></input>
            <input
                required
                type="password"
                placeholder="Repeat Password"
                autoComplete="new-password"
                id="passwordrepeat"
                name="passwordrepeat"
                className={LoginCSS.input}
                onChange={captureFormChange}></input>

            <div className="text-red-500 my-3" id="signUpErrorMsg">
                {registerError ? registerError.message : null}
            </div>
            <button type="submit" className={LoginCSS.btn}>
                <FormattedMessage id="register.createAccount"></FormattedMessage>
            </button>

            <p className="text-green-500">
                {registerSuccess ? registerSuccess : null}
            </p>
        </SignupForm>
    )
}

export default RegisterComponent
