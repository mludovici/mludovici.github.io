
import { createSlice }  from '@reduxjs/toolkit'

const getInitialTheme = _ => {
	if (typeof window !== 'undefined' && window.localStorage) {
			const storedPrefs = window.localStorage.getItem('color-theme')
			if (typeof storedPrefs === 'string') {
					return storedPrefs
			}

			const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
			if (userMedia.matches) {
					return 'dark'
			}
	}

	// If you want to use light theme as the default,
	// return "light" instead
	return 'light'
}


const initialState = { 
	darkMode: getInitialTheme() || 'light',
}


const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		toggleColorMode: (state, action) =>  {

			state.darkMode = action.payload
		}
		
	}
})

export const {toggleColorMode} = settingsSlice.actions
export const selectColorMode = state => state.settings.darkMode
export default settingsSlice.reducer