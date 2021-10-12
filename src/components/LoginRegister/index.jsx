import React, { useState, useEffect } from 'react'

import { useAuth } from '../../providers/AuthProvider'
import LoginRegisterCSS from './LoginRegister.module.css'
import RegisterComponent from './RegisterComponent'
import LoginComponent from './LoginComponent'
import { FormattedMessage } from 'react-intl'
import { Link, useRouteMatch } from 'react-router-dom'
function LoginRegister() {
    let [showSignin, setShowSignin] = useState(true)
    let [showSignup, setShowSignup] = useState(false)
    let [loggedOut, setLoggedOut] = useState(null)
    let authFunctions = useAuth()
    let analytics = authFunctions.analytics
    let matchRegister = useRouteMatch('/register')
    let logout = useRouteMatch('/logout')
    useEffect(() => {
        //console.log('user:', authFunctions.currentUser)
        if (authFunctions.currentUser == null && logout && logout.isExact) {
            setLoggedOut('You logged out succesfully!')
        } else {
            setLoggedOut(null)
        }

        if (matchRegister && matchRegister.isExact) {
            setShowSignin(false)
            setShowSignup(true)
        } else {
            setShowSignin(true)
            setShowSignup(false)
        }

        //console.log(authFunctions.currentUser)
    }, [matchRegister, logout, authFunctions])

    return (
        <div className="bg-gray-300 dark:bg-gray-700">
            {loggedOut && (
                <p className="mt-3 flex justify-center text-red-500">
                    {loggedOut}
                </p>
            )}
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
                                <FormattedMessage id="login.login"></FormattedMessage>
                            </div>
                            <div
                                onClick={() => {
                                    setShowSignin(false)
                                    setShowSignup(true)
                                }}
                                className={`${LoginRegisterCSS.signup} ${
                                    showSignup ? LoginRegisterCSS.active : ''
                                }`}>
                                <FormattedMessage id="login.register"></FormattedMessage>
                            </div>

                            <LoginComponent
                                analytics={analytics}
                                showSignin={showSignin}
                                loginHandler={authFunctions.login}
                                currentUser={
                                    authFunctions.currentUser
                                }></LoginComponent>
                            <RegisterComponent
                                analytics={analytics}
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
                        <FormattedMessage id="login.logout"></FormattedMessage>{' '}
                    </button>
                </div>
            )}
        </div>
    )
}

export default LoginRegister
