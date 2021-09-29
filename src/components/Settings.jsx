import React from 'react'
import { FormattedMessage } from 'react-intl'
import { BsInfoCircle } from 'react-icons/bs'
import { useDarkMode } from '../providers/DarkModeProvider'
import { GiSunRadiations, GiMoon } from 'react-icons/gi'

import de from '../assets/images/flag/de.svg'
import us from '../assets/images/flag/us.svg'

function SettingsPage({ changeLocale }) {
    const { darkMode, setDarkMode } = useDarkMode()
    return (
        <div className="h-screen dark:bg-black">
            <div className="pt-10 dark:bg-black">
                <div className="p-8 flex flex-col max-w-xl mx-auto border-2 rounded-md shadow-md bg-gray-700 text-gray-50">
                    <div
                        className="flex justify-center align-middle content-center items-start text-center"
                        style={{ minHeight: '80px' }}>
                        <BsInfoCircle className="mr-3 h-8 w-8"></BsInfoCircle>
                        <FormattedMessage id="settings.info"></FormattedMessage>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-around mt-10">
                        <div className="flex sm:justify-center content-center items-center justify-start	">
                            <div style={{ width: '5em' }}>
                                <FormattedMessage id="settings.lang"></FormattedMessage>
                            </div>
                            <div className="flex ml-3">
                                <img
                                    className="mr-3"
                                    onClick={() => changeLocale('de')}
                                    src={de}
                                    alt="germanFlag"
                                    style={{
                                        width: '2em',
                                        height: '2em',
                                    }}
                                />
                                <img
                                    className="ml-3"
                                    onClick={() => changeLocale('en')}
                                    src={us}
                                    alt="usFlag"
                                    style={{
                                        width: '2em',
                                        height: '2em',
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mt-5 flex sm:justify-center items-center content-center sm:mt-0 justify-start">
                            <FormattedMessage id="settings.color"></FormattedMessage>
                            <div className="flex ml-3">
                                {darkMode === 'dark' ? (
                                    <GiSunRadiations
                                        onClick={() => setDarkMode('light')}
                                        style={{
                                            fill: 'yellow',
                                            height: '2em',
                                            width: '2em',
                                        }}></GiSunRadiations>
                                ) : (
                                    <GiMoon
                                        onClick={() => setDarkMode('dark')}
                                        style={{
                                            fill: 'darkcyan',

                                            height: '2em',
                                            width: '2em',
                                        }}></GiMoon>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage