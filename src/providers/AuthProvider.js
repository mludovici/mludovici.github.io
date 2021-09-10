import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(undefined)
    const [loginError, setLoginError] = useState(null)
    const [registerError, setRegisterError] = useState(null)

    const login = async (email, password) => {
        try {
            return auth.signInWithEmailAndPassword(email, password)
        } catch (error) {
            setErrorTimeout(setLoginError, error)
        }
    }

    const signup = async (email, password) => {
        try {
            const userCredentials = await auth.createUserWithEmailAndPassword(
                email,
                password
            )
            if (userCredentials) {
                const user = userCredentials.user
                let success = await user.sendEmailVerification()
                console.log('success register:', success)
            }
        } catch (error) {
            setErrorTimeout(setRegisterError, error)
        }
    }

    const setErrorTimeout = (cbf, error) => {
        cbf(error)
        const interval = setTimeout(() => {
            cbf(null)
        }, 30000)
        clearInterval(interval)
    }

    const logout = () => auth.signOut()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    const value = {
        loginError,
        registerError,
        login,
        signup,
        logout,
        currentUser,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
