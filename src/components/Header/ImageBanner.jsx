import React from 'react'
import imageLake from '../../assets/images/LakeCropped.webp'
function ImageBanner() {
    const imageUrl = "https://res.cloudinary.com/dasan6utg/image/upload/c_crop,f_auto,g_center,q_auto:best,x_0,y_1073/v1665784794/Homepage/lake1_kikrb2"
    return (
        <>
            <div className="max-w-6xl mx-auto w-full relative">
                <img
                    src={imageUrl}
                    className="filter grayscale hover:grayscale-0 max-w-6xl w-full h-auto relative"
                    alt=""
                />
                <div className="inline-flex w-full top-1/2 left-0 absolute h-8">
                    <span className="text-white opacity-0 hover:opacity-100">
                        Hello ;
                    </span>
                </div>
            </div>
        </>
    )
}

export default ImageBanner
