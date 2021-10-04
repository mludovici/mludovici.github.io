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
                    <h2>Please disable your Adblocker!</h2>
                    <p>
                        This site uses google Analytics for page visit
                        statistics only.
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
                            just continue
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {isAdBlockerOn ? (
                <Modal show={true}>{noticeContentJSX()}</Modal>
            ) : (
                children
            )}
        </>
    )
}

export default AdBlockComponent
