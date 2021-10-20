import React from 'react'
import WebDevPNG from '../../../assets/images/webdev.png'
import MERN from '../../../assets/images/mern.png'
//import DSPNG from '../../../assets/images/ds.png'
import Brain from '../../../assets/images/data_analyst_brain.png'
import { FormattedMessage } from 'react-intl'

function Services() {
    return (
        <div>
            <section
                id="services"
                className="bg-gray-50 pt-10 pb-28 px-8 dark:bg-gray-700">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-6xl text-gray-800 dark:text-gray-100">
                            <FormattedMessage
                                id="main.projects"
                                defaultMessage="Projects"></FormattedMessage>
                        </h1>
                        <p className="pt-2 dark:text-gray-100">
                            {/* <FormattedMessage id="main.projects.headline"></FormattedMessage> */}
                        </p>
                    </div>
                    <div
                        className="
						mt-8
						grid grid-cols-1
						md:grid-cols-2
						lg:grid-cols-3
						gap-20
					">
                        <div className="relative">
                            <div
                                className="
								absolute
								z-10
								inset-0
								bg-gradient-to-r
								from-primary
								to-secondary
								shadow-lg
								transform
								-skew-y-6
								sm:skey-y-0 sm:-rotate-6 sm:rounded-lg
							"></div>
                            <div
                                className="
								relative
								z-20
								bg-white
								h-full
								rounded-md
								shadow-md
							">
                                <a
                                    href="https://restaurantsrealm-gkrxk.mongodbstitch.com/"
                                    target="_blank"
                                    rel="noreferrer">
                                    <img
                                        style={{
                                            height: '220px',
                                            margin: 'auto',
                                            objectFit: 'cover',
                                        }}
                                        src={MERN}
                                        className="rounded-t-md servicesImageHeight cursor-pointer"
                                        alt=""
                                    />
                                    <div className="px-10 pb-6">
                                        <h2
                                            className="
										pt-3
										font-bold
										text-gray-800 text-2xl text-center
									">
                                            Fullstack App
                                        </h2>
                                        <p className="pt-3">
                                            React Frontend, Node Backend,
                                            MongoDB, MongoDB Realm
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div
                                className="
								absolute
								z-10
								inset-0
								bg-gradient-to-r
								from-primary
								to-secondary
								shadow-lg
								transform
								-skew-y-6
								sm:skey-y-0 sm:-rotate-6 sm:rounded-lg
							"></div>
                            <div
                                className="
								relative
								z-20
								bg-white
								h-full
								rounded-md
								shadow-md
							">
                                <img
                                    style={{ height: '220px', margin: 'auto' }}
                                    src="https://www.rouge-media.com/wp-content/uploads/2019/05/web-app-illustration-1.png"
                                    className="rounded-t-md servicesImageHeight"
                                    alt=""
                                />
                                <div className="px-10 pb-6">
                                    <h2
                                        className="
										pt-3
										font-bold
										text-gray-800 text-2xl text-center
									">
                                        Responsive Websites
                                    </h2>
                                    <p className="pt-3">
                                        Media Queries, CSS3, Bootstrap,
                                        TailwindCSS, Styled components, etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div
                                className="
								absolute
								z-10
								inset-0
								bg-gradient-to-r
								from-primary
								to-secondary
								shadow-lg
								transform
								-skew-y-6
								sm:skey-y-0 sm:-rotate-6 sm:rounded-lg
								"></div>
                            <div
                                className="
								relative
								z-20
								bg-white
								h-full
								rounded-md
								shadow-md
							">
                                <img
                                    style={{ height: '220px', margin: 'auto' }}
                                    src={WebDevPNG}
                                    className="
									bg-blue-300
									rounded-t-md
									servicesImageHeight
								"
                                    alt=""
                                />
                                <div className="px-10 pb-6">
                                    <h2
                                        className="
										pt-3
										font-bold
										text-gray-800 text-2xl text-center
									">
                                        Web Apps
                                    </h2>
                                    <p className="pt-3">
                                        Web Apps with Javascript HTML Css and
                                        Frameworks like React.js, Angular and
                                        Vue.js
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div
                                className="
								absolute
								z-10
								inset-0
								bg-gradient-to-r
								from-primary
								to-secondary
								shadow-lg
								transform
								-skew-y-6
								sm:skey-y-0 sm:-rotate-6 sm:rounded-lg
							"></div>
                            <div
                                className="
								relative
								z-20
								bg-white
								h-full
								rounded-md
								shadow-md
							">
                                <img
                                    style={{ height: '220px', margin: 'auto' }}
                                    src="https://nyc3.digitaloceanspaces.com/endive/2020/03/27175931/Importance-Of-Using-The-iOS-Platform-For-Your-Business-App-1140x694.jpg"
                                    className="rounded-t-md servicesImageHeight"
                                    alt=""
                                />
                                <div className="px-10 pb-6">
                                    <h2
                                        className="
										pt-3
										font-bold
										text-gray-800 text-2xl text-center
									">
                                        Mobile Apps
                                    </h2>
                                    <p className="pt-3">
                                        Mobile App development with Flutter and
                                        React native.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div
                                className="
								absolute
								z-10
								inset-0
								bg-gradient-to-r
								from-primary
								to-secondary
								shadow-lg
								transform
								-skew-y-6
								sm:skey-y-0 sm:-rotate-6 sm:rounded-lg
							"></div>
                            <div
                                className="
								relative
								z-20
								bg-white
								h-full
								rounded-md
								shadow-md
							">
                                <img
                                    style={{ height: '220px', margin: 'auto' }}
                                    src={Brain}
                                    className=" bg-blue-500
                                     rounded-t-md servicesImageHeight"
                                    alt=""
                                />
                                <div className="px-10 pb-6">
                                    <h2
                                        className="
                                        
										pt-3
										font-bold
										text-gray-800 text-2xl text-center
									">
                                        Data Science
                                    </h2>
                                    <p className="pt-3">
                                        Data Science with Python and RStudio.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
