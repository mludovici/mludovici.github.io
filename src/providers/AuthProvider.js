import React, { useContext, useState, useEffect } from 'react'
import { app, auth, firestore, storage, analytics } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(undefined)
    const [loginError, setLoginError] = useState(null)

    const login = async (email, password) => {
        try {
            return auth.signInWithEmailAndPassword(email, password)
        } catch (error) {
            setLoginError(error)
        }
    }

    const signup = async (email, password) => {
        // try {
        //     const userCredentials = await auth.createUserWithEmailAndPassword(
        //         email,
        //         password
        //     )
        //     if (userCredentials) {
        //         const user = userCredentials.user
        //         let success = await user.sendEmailVerification()
        //         console.log('success register:', success)
        //     }
        // } catch (error) {
        //     setErrorTimeout(setRegisterError, error)
        // }
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
        login,
        signup,
        logout,
        currentUser,
        app,
        firestore,
        storage,
        auth,
        analytics,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
