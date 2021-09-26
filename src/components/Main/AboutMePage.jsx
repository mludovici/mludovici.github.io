import React from 'react'
//import tigerImage from '../../assets/images/tiger.jpg'
import giraffe from '../../assets/images/giraffe.jpg'
function AboutMePage() {
    return (
        <div className="min-w-xl max-w-4xl mx-auto px-4 overflow-y-auto">
            <section
                id="profile"
                className="flex flex-col sm:flex sm:flex-row max-h-96 sm:p-5 sm:border-2 my-10 sm:rounded-md sm:shadow-md sm:border-gray-400 items-center">
                <img
                    className="rounded-full h-full sm:ml-3
							shadow-md max-h-40 mx-auto"
                    alt="tiger"
                    src={giraffe}
                />

                <article className="w-max-2xl px-8  ">
                    <p className="text-center font-bold pb-4 pt-4 whitespace-pre-wrap">
                        Über mich
                    </p>
                    <span className="text-left block md:inline-block mr-10 font-bold whitespace-nowrap min-w-max">
                        Software Entwickler.
                    </span>
                    <span className="max-h-24 ">
                        Ich bin Master-Absolvent in praktischer Informatik mit 3
                        Jahren Berufserfahrung. Meine Erfahrungen sind auf dem
                        Gebiet Web-Entwicklung mit dem Javascript Stack und Data
                        Science. In meiner Freizeit bilde ich mich fortlaufend
                        weiter.
                    </span>
                </article>
            </section>
        </div>
    )
}

export default AboutMePage
