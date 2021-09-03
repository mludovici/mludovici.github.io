import React from 'react'
import imageLake from '../../assets/images/LakeCropped.png'
import tigerImage from '../../assets/images/tiger.jpg'
import Services from './Services/Services'
function ImageBanner() {
	return (
		<>
			<div class='max-w-6xl mx-auto  relative'>
				<img
					src={imageLake}
					className='filter grayscale hover:grayscale-0 max-w-6xl max-h-content object-contain'
					alt=''
				/>
				<div
					className='inline-flex w-full absolute -translate-x-1/2 -translate-y-1/2 text-center top-1/2 left-1
				 text-white'
				></div>
			</div>
			<div className='min-w-xl max-w-4xl mx-auto'>
				<section
					id='profile'
					className='flex flex-column sm:flex-row 
 max-h-96 sm:p-5 sm:border-2 sm:rounded-md m-10 sm:shadow-md sm:border-gray-400'
				>
					<img
						className='rounded-full h-full
							shadow-md max-h-40'
						alt='profile Image'
						src={tigerImage}
					/>

					<article className='w-max-2xl px-8'>
						<p className='text-center font-bold pb-4 whitespace-pre-wrap'>
							About me
						</p>
						<span className='text-left block md:inline-block mr-10 font-bold whitespace-nowrap min-w-max'>
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
			<Services></Services>
		</>
	)
}

export default ImageBanner
