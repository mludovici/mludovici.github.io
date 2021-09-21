import React, { useState } from 'react'
import LoginCSS from './LoginRegister.module.css'
import { LoginForm } from './StyledLoginRegister'
import { useAuth } from '../../providers/AuthProvider'

function LoginComponent({ showSignin, loginHandler }) {
    const [email, setEmail] = useState()
    const [pw, setPW] = useState()
    const [errorMsg, setErrorMsg] = useState('')
    const [emailResetError, setResetEmailError] = useState(null)
    const [emailResetSuccess, setEmailResetSuccess] = useState(null)
    const { loginError, auth } = useAuth()

    const handleLogin = async e => {
        e.preventDefault()
        try {
            await loginHandler(email, pw)
        } catch (e) {
            setErrorMsg(e.message)
        }
    }

    const emailResetHandler = async () => {
        try {
            await auth.sendPasswordResetEmail(email)
            setEmailResetSuccess('Please check your email reset link!')
        } catch (e) {
            setResetEmailError(e.message)
        }
    }

    return (
        <>
            <LoginForm showSignin={showSignin} method="POST">
                <input
                    required
                    type="text"
                    placeholder="Email"
                    autoComplete="email"
                    className={LoginCSS.input}
                    name="emailsignin"
                    onChange={e => setEmail(e.target.value)}></input>
                <input
                    required
                    type="password"
                    placeholder="Password"
                    //autoComplete="current-password"
                    autoComplete="off"
                    className={LoginCSS.input}
                    name="pwsignin"
                    onChange={e => setPW(e.target.value)}></input>

                <button
                    type="submit"
                    className={LoginCSS.btn}
                    onClick={e => handleLogin(e)}>
                    log in
                </button>

                <span className="my-4 text-blue-600">
                    <button
                        className="text-gray-400"
                        onClick={emailResetHandler}>
                        I forgot my password.
                    </button>
                    {emailResetSuccess && <p>{emailResetSuccess}</p>}
                    {emailResetError && (
                        <p className="text-red-500">{emailResetError}</p>
                    )}
                </span>
                <div id="logInErrorMsg" className="text-red-600 mt-5">
                    {errorMsg}
                </div>
                <div className="text-red-600 mt-5">
                    {loginError ? loginError.message : null}
                </div>
            </LoginForm>
        </>
    )
}

export default LoginComponent
