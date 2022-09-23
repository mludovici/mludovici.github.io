import React, { useContext, useState, useEffect } from 'react'
import { app, firestore, storage, analytics } from '../firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(undefined)
    const [loginError, setLoginError] = useState(null)
    const auth = getAuth();

    const login = async (email, password) => {
        try {
            return signInWithEmailAndPassword(auth, email, password)
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
