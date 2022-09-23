import { useState, useEffect, useCallback } from 'react'
import deLang from '../intl/DE-de'
import enLang from '../intl/EN-us'

export const translations = {
    'DE-de': deLang,
    'EN-us': enLang,
    'de-de': deLang,
    'en-us': enLang,
    de: deLang,
    en: enLang,
}

export function useLanguage(userLanguage) {
    const browserLang = navigator.language.toLowerCase()

    let currentLanguage = (userLanguage && Object.keys(translations).includes(userLanguage))
    ? userLanguage : Object.keys(translations).includes(browserLang) ? browserLang 
    : 'de-de'

    const [locale, changeLocale] = useState(currentLanguage)

    const changeLanguage = (lang) => {
        if (lang && Object.keys(translations).includes(lang)) {
            changeLocale(lang);
        }
    }

    return [
        locale,
        changeLanguage
    ]

}
