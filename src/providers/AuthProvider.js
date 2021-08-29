import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
	return useContext(AuthContext)
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(undefined)
	const [error, setError] = useState(null)
	const login = (email, password) => {
		return auth.signInWithEmailAndPassword(email, password)
	}

	const signup = async (email, password) => {
		try {
			const userCredentials = await auth.createUserWithEmailAndPassword(
				email,
				password
			)
			if (userCredentials) {
				const user = userCredentials.user
				await user.sendEmailVerification()
			}
		} catch (error) {
			setErrorTimeout(error)
		}
	}

	const setErrorTimeout = (error) => {
		setError(error)
		const interval = setTimeout(() => {
			setError(null)
		}, 30000)
		clearInterval(interval)
	}

	const signout = () => auth.signOut()

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user)
		})
		return unsubscribe
	}, [])

	const value = {
		error,
		login,
		signup,
		signout,
		currentUser,
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
