import React, { useEffect, useState } from 'react'
import { useDetectAdBlock } from 'adblock-detect-react'
import Modal from './Modal'

function AdBlockComponent({ children }) {
    const adBlockDetected = useDetectAdBlock()
    const [isAdBlockerOn, setIsAdBlockerOn] = useState(false)


    useEffect(() => {
        if (adBlockDetected) {
            setIsAdBlockerOn(true)
        } else {
            setIsAdBlockerOn(false)
        }
    }, [adBlockDetected])

    const noticeContentJSX = () => {
        return (
            <div className="mx-auto">
                <div className="mx-auto text-center space-y-4">
                    <h2 className="text-xl font-semibold">Disclaimer</h2>
                    <p>
                        This site uses Google Analytics for page visit
                        statistics. Therefore,
                        <b> Please disable your Adblocker to continue. </b>
                        Once you disabled your Adblocker, by clicking "Refresh"
                        or "Just Continue", you automatically consent to the
                        fact that this site is using Google Analytics and Google
                        Tag Manager third party plugins. Click "Just continue"
                        to proceed without disabling Adblocker.`
                    </p>
                    <div className="flex justify-around">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5"
                            onClick={() => window.location.reload()}>
                            Refresh
                        </button>
                        <p className=" py-2 px-4  mt-5">or</p>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5"
                            onClick={() => setIsAdBlockerOn(false)}>
                            Just continue
                        </button>
                    </div>
                </div>


            </div>
        )
    }
    return (
            isAdBlockerOn ? <Modal show={true}>{noticeContentJSX()}</Modal> : children 
    )
}

export default AdBlockComponent
