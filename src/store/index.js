import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from './settingsStore.js'
import authReducer from './authStore.js'

const store = configureStore({ 
	reducer: {
		settings: settingsReducer,
		auth: authReducer,
	},
	// middleware: getDefaultMiddleware =>	getDefaultMiddleware({		serializableCheck: false,	}),
})


export default store