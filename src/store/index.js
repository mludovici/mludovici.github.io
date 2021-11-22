import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from './settingsStore.js';

const store = configureStore({ 
	reducer: {
		settings: settingsReducer,
	}
})


export default store