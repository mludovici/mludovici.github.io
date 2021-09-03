import React from 'react'
import ImageBanner from './ImageBanner'
import CardList from './CardList/CardList'
function Mainpage() {
	return (
		<>
			<ImageBanner></ImageBanner>
			<CardList className='mx-auto'></CardList>
		</>
	)
}

export default Mainpage
