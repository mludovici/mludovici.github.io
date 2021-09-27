import { useState } from 'react'
import HomeComponent from './components/HomeComponent'
import { AuthProvider } from './providers/AuthProvider'
import { DarkModeProvider } from './providers/DarkModeProvider'
import Timeline from './components/Timeline/Timeline.jsx'
import Timeline2 from './components/Timeline/Timeline2.jsx'

import Trivia from './components/Games/Trivia'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Impressum from './components/Footer/Impressum'

import React from 'react'
import LoginRegister from './components/LoginRegister'
import DND from './components/Timeline/DnDComponent'

import TimeLineCard from './components/Timeline/TimeLineCard'
import Navigation from './components/Header/Navigation'
import StarRating from './components/StarRating'
import { IntlProvider } from 'react-intl'

import de from './intl/DE-de'
import en from './intl/EN-us'
const messages = {
    'DE-de': de,
    'EN-us': en,
    'de-de': de,
    'en-us': en,
    de: de,
    en: en,
}

function PageNotFound() {
    return <div>Sorry, no page found under that link!</div>
}

function App() {
    const browserLang = navigator.language.toLowerCase()
    let setLanguage = Object.keys(messages).includes(browserLang)
        ? browserLang
        : 'de-de'

    const [locale, changeLocale] = useState(setLanguage)

    return (
        <AuthProvider>
            <DarkModeProvider>
                <IntlProvider locale={locale} messages={messages[locale]}>
                    <BrowserRouter>
                        <Navigation changeLocale={changeLocale}></Navigation>
                        <Switch>
                            <Route path="/" exact>
                                <HomeComponent></HomeComponent>{' '}
                            </Route>

                            <Route
                                path="/homepage"
                                exact
                                component={HomeComponent}
                            />

                            <Route
                                path="/timeline"
                                exact
                                component={Timeline}
                            />
                            <Route path="/cv" exact component={Timeline2} />

                            <Route path="/impressum" component={Impressum} />
                            <Route path="/login" component={LoginRegister} />
                            <Route path="/logout" component={LoginRegister} />

                            <Route path="/register" component={LoginRegister} />

                            <Route path="/trivia" component={Trivia} />
                            <Route path="/dnd" component={DND} />

                            <Route path="/tlt" component={TimeLineCard} />
                            <Route path="/star" component={StarRating} />
                            <Route component={PageNotFound} />
                        </Switch>
                    </BrowserRouter>
                </IntlProvider>
            </DarkModeProvider>
        </AuthProvider>
    )
}

export default App
