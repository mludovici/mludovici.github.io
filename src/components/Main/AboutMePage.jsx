import React from 'react'
//import tigerImage from '../../assets/images/tiger.jpg'
import giraffe from '../../assets/images/giraffe.jpg'
function AboutMePage() {
    return (
        <div className="min-w-xl max-w-4xl mx-auto">
            <section
                id="profile"
                className="flex flex-column sm:flex-row max-h-96 sm:p-5 sm:border-2 sm:rounded-md m-10 sm:shadow-md sm:border-gray-400">
                <img
                    className="rounded-full h-full
							shadow-md max-h-40"
                    alt="tiger"
                    src={giraffe}
                />

                <article className="w-max-2xl px-8">
                    <p className="text-center font-bold pb-4 whitespace-pre-wrap">
                        About me
                    </p>
                    <span className="text-left block md:inline-block mr-10 font-bold whitespace-nowrap min-w-max">
                        Software Entwickler.
                    </span>
                    Ich bin Master-Absolvent in praktischer Informatik mit 3
                    Jahren Berufserfahrung. Meine Erfahrungen sind auf dem
                    Gebiet Web-Entwicklung mit dem Javascript Stack und Data
                    Science. In meiner Freizeit bilde ich mich fortlaufend
                    weiter.
                </article>
            </section>
        </div>
    )
}

export default AboutMePage
