import React from 'react'
import person from '../../assets/images/placeholder_person.jpg'
import { FormattedMessage } from 'react-intl'
import AboutMePageCSS from './AboutMePage.module.css'
function AboutMePage() {
    return (
        <div className="min-w-xl max-w-6xl mx-auto px-4 overflow-y-auto dark:bg-gray-600 text-gray-300">
            <section
                id="profile"
                className="
                bg-gray-800 flex flex-col sm:flex sm:flex-row p-5 sm:p-5 sm:border-2 my-10 sm:rounded-md sm:shadow-md sm:border-gray-400 items-center">
                <img
                    className="rounded-full h-full sm:ml-3
							shadow-md max-h-40 mx-auto"
                    alt="tiger"
                    src={person}
                />

                <article className={`w-max-2xl px-8 `}>
                    <div
                        className={`${AboutMePageCSS['jobInfo']} text-center font-bold pt-4 whitespace-pre-wrap `}>
                        <FormattedMessage
                            id="main.about_me.header"
                            defaultMessage="Über mich"></FormattedMessage>
                        <div
                            className={`${AboutMePageCSS['fadingEffect']} bg-white `}></div>
                    </div>

                    <span className="text-left block md:inline-block mr-10 font-bold whitespace-nowrap min-w-max">
                        <FormattedMessage
                            id="main.about_me.job"
                            defaultMessage="Software Entwickler"></FormattedMessage>
                    </span>
                    <span className="max-h-24 ">
                        <FormattedMessage id="main.about_me"></FormattedMessage>
                    </span>
                </article>
            </section>
        </div>
    )
}

export default AboutMePage
