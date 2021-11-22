import { useState, useEffect } from 'react'
import HomeComponent from './components/HomeComponent'
// import { DarkModeProvider } from './providers/DarkModeProvider'
import Timeline from './components/Timeline/Timeline.jsx'
import Timeline2 from './components/Timeline/Timeline2.jsx'

import Trivia from './components/Games/Trivia'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Test from './components/Impressum'
import ProfilePage from './components/ProfilePage'
import React from 'react'
import LoginRegister from './components/LoginRegister'
import DND from './components/DnDComponent'
import { useAuth } from './providers/AuthProvider'
import TimeLineCard from './components/Timeline/TimeLineCard'
import Navigation from './components/Header/Navigation'
import StarRating from './components/StarRating'
import SettingsPage from './components/Settings'
import { IntlProvider } from 'react-intl'

import store from './store'
import { Provider as SettingsProvider } from 'react-redux'

import deLang from './intl/DE-de'
import enLang from './intl/EN-us'
import CandyCrush from './components/Games/CandyCrush'
const messages = {
    'DE-de': deLang,
    'EN-us': enLang,
    'de-de': deLang,
    'en-us': enLang,
    de: deLang,
    en: enLang,
}

function PageNotFound() {
    return <div>Sorry, no page found under that link!</div>
}

function App() {
    const { currentUser, analytics } = useAuth()
    const browserLang = navigator.language.toLowerCase()
    let setLanguage = Object.keys(messages).includes(browserLang)
        ? browserLang
        : 'de-de'

    useEffect(() => {
        analytics.logEvent('screen_view', {
            firebase_screen: 'Home',
            firebase_screen_class: 'MainPage',
        })
    }, [analytics])
    const [locale, changeLocale] = useState(setLanguage)

    return (
       
            <SettingsProvider store={store}>
            <IntlProvider locale={locale} messages={messages[locale]}>
                <BrowserRouter>
                <Navigation></Navigation>

                    <Routes>
                        <Route
                            path='/'
                            element={<HomeComponent />} 
                        />
                        <Route path="/timeline"  element={<Timeline />} />
                        <Route path="/cv"  element={<Timeline2 />} />
                        <Route path="/impressum"  element={<Test />} />
                        <Route path="/login" element={<LoginRegister />} />
                        <Route path="/logout" element={<LoginRegister />} />
                        <Route path="/register" element={<LoginRegister />} />
                        <Route path="/trivia" element={<Trivia />} />
                        <Route path="/cc" element={<CandyCrush />} />
                        <Route path="/dnd" element={<DND />} />
                        <Route path="/profile" element={currentUser ? (
                                <ProfilePage currentUser={currentUser} />
                            ) : (
                                <LoginRegister />
                            )} />
                        <Route path="/settings" element={ <SettingsPage changeLocale={changeLocale} />} />
                        <Route path="/tlt" element={<TimeLineCard />} />
                        <Route path="/star" element={<StarRating />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </IntlProvider>
            </SettingsProvider>
    )
}

export default App
