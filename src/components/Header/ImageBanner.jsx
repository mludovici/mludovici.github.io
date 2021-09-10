import React from 'react'
import imageLake from '../../assets/images/LakeCropped.png'
function ImageBanner() {
	return (
		<>
			<div className='max-w-6xl mx-auto w-full relative'>
				<img
					src={imageLake}
					className='filter grayscale hover:grayscale-0 max-w-6xl w-full h-auto relative'
					alt=''
				/>
				<div className='inline-flex w-full top-1/2 left-0 absolute h-8'>
					<span className='text-white opacity-0 hover:opacity-100'>
						Hello
					</span>
				</div>
			</div>
		</>
	)
}

export default ImageBanner
