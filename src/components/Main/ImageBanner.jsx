import React from 'react'
import imageLake from '../../assets/images/LakeCropped.png'
import tigerImage from '../../assets/images/tiger.jpg'
function ImageBanner() {			
	return (
		<>
			<div class="w-full relative"
			>
				<img src={imageLake} alt=""/>
				<div className="inline-flex w-full absolute -translate-x-1/2 -translate-y-1/2 text-center top-1/2 left-1
				 text-white"
				>
				</div>
			
			</div>
			<div>
				<section>
					<img className="w-2xl max-h-24 rounded-full"
					alt=""
						src={tigerImage}
				
					/>
					<p margin-auto>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
						sed diam nonumy eirmod tempor invidunt ut labore et
						dolore magna aliquyam erat, sed diam voluptua. At vero
						eos et accusam et justo duo dolores et ea rebum. Stet
						clita kasd gubergren, no sea takimata sanctus est Lorem
						ipsum dolor sit amet. Lorem ipsum dolor sit amet,
						consetetur sadipscing elitr, sed diam nonumy eirmod
						tempor invidunt ut labore et dolore magna aliquyam erat,
						sed diam voluptua. At vero eos et accusam et justo duo
						dolores et ea rebum. Stet clita kasd gubergren, no sea
						takimata sanctus est Lorem ipsum dolor sit amet.
					</p>
				</section>
			</div>
		</>
	)
}

export default ImageBanner
