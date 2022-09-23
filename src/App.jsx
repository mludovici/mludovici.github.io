import { createContext, React, useEffect } from 'react'
import { useTitle } from './components/utils'
import { translations } from './customHooks/useLanguage'
import { useLanguage } from './customHooks/useLanguage'
// import TagManager from 'react-gtm-module'
import { IntlProvider } from 'react-intl'
import { Provider as StoreProvider } from 'react-redux'
import { getAnalytics, logEvent } from "firebase/analytics";

import store from './store'
import RouterComponent from './components/RouterComponent'

export const LanguageToggleContext = createContext({
    changeLanguage: () => {},
});

function App({title}) {
    useTitle(title)
    const [locale, changeLanguage] = useLanguage();
  


const analytics = getAnalytics();
    useEffect(() => {
        logEvent(analytics, 'screen_view', {
            firebase_screen: 'Home',
            firebase_screen_class: 'MainPage',
        })
    }, [analytics, locale])

    const languageMode = Object.keys(translations).includes(locale) ? locale 
    : 'de-de'

    return (
			<StoreProvider store={store}>
                <LanguageToggleContext.Provider value={changeLanguage}>
                    <IntlProvider key={locale} locale={locale} messages={translations[languageMode]}>
                        <RouterComponent />
                    </IntlProvider>
                </LanguageToggleContext.Provider>
			</StoreProvider>
    )
}

export default App
