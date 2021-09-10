import React, { useState } from 'react'
import { useAuth } from '../../providers/AuthProvider'
import LoginCSS from './LoginRegister.module.css'
import { LoginForm } from './StyledLoginRegister'

function LoginComponent({ showSignin, loginHandler }) {
    const [email, setEmail] = useState()
    const [pw, setPW] = useState()
    const [errorMsg, setErrorMsg] = useState('')
    const { loginError } = useAuth()

    const handleLogin = async e => {
        e.preventDefault()
        try {
            let user = await loginHandler(email, pw)

        } catch (e) {
            setErrorMsg(e.message)
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
                    <a href="#" className="text-gray-400">
                        I forgot my password.
                    </a>
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
