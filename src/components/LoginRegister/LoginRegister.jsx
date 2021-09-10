import React, { useState, useEffect } from 'react'

import { useAuth } from '../../providers/AuthProvider'
import LoginRegisterCSS from './LoginRegister.module.css'
import { SignupForm, LoginForm } from './StyledLoginRegister'
import RegisterComponent from './RegisterComponent'
import LoginComponent from './LoginComponent'

import { Route, Link, useRouteMatch } from 'react-router-dom'
function LoginRegister() {
    let [showSignin, setShowSignin] = useState(true)
    let [showSignup, setShowSignup] = useState(false)
    let authFunctions = useAuth()
    let match = useRouteMatch('/register')

    useEffect(() => {
        if (match && match.isExact) {
            setShowSignin(false)
            setShowSignup(true)
        }
    }, [match])

    return (
        <>
            {!authFunctions.currentUser ? (
                <div className={LoginRegisterCSS.container}>
                    <div className={LoginRegisterCSS.container}>
                        <div>
                            <div
                                onClick={() => {
                                    setShowSignin(true)
                                    setShowSignup(false)
                                }}
                                className={`${LoginRegisterCSS.login} ${
                                    showSignin ? LoginRegisterCSS.active : ''
                                }`}
                                style={{ borderRight: '2px solid aquamarine' }}>
                                Log In
                            </div>
                            <div
                                onClick={() => {
                                    setShowSignin(false)
                                    setShowSignup(true)
                                }}
                                className={`${LoginRegisterCSS.signup} ${
                                    showSignup ? LoginRegisterCSS.active : ''
                                }`}>
                                Sign Up
                            </div>

                            <LoginComponent
                                showSignin={showSignin}
                                loginHandler={authFunctions.login}
                                currentUser={
                                    authFunctions.currentUser
                                }></LoginComponent>
                            <RegisterComponent
                                signup={authFunctions.signup}
                                showSignup={showSignup}></RegisterComponent>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className={`bg-white min-content shadow-md flex mt-8 flex-col`}>
                    <p className="text-green-800 leading-5 tracking-widest	mx-auto">
                        You are logged in!{' '}
                        {!authFunctions.currentUser.emailVerified
                            ? 'Please confirm verification link in your email.'
                            : null}
                    </p>
                    <Link
                        to="/"
                        className="text-blue-800 bg-green-400 leading-5 tracking-widest shadow-lg block p-2 mt-2	mx-auto">
                        Home
                    </Link>
                    <button
                        className="bg-blue-300 text-black shadow-lg block p-2 mt-2 mx-auto"
                        onClick={authFunctions.logout}>
                        Logout
                    </button>
                </div>
            )}
        </>
    )
}

export default LoginRegister
