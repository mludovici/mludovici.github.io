import React from 'react'
import AboutMePage from './AboutMePage'
import CardList from './CardList/CardList'
import Services from './Services/Services'
import ImageBanner from '../Header/ImageBanner'
import Footer from '../Footer/Footer'
function Mainpage() {
    return (
        <div className="h-full">
            <ImageBanner></ImageBanner>
            <AboutMePage></AboutMePage>
            <Services></Services>
            <CardList></CardList>
            <Footer></Footer>
        </div>
    )
}

export default Mainpage
