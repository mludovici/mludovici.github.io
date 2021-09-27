import React, { useContext, useState, useEffect } from 'react'

const DarkModeContext = React.createContext()

export function useDarkMode() {
    return useContext(DarkModeContext)
}

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

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(getInitialTheme() || 'light')

    useEffect(() => {
        const root = window.document.documentElement
        const isDark = darkMode === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(darkMode)

        localStorage.setItem('color-theme', darkMode)
    }, [darkMode])

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}
