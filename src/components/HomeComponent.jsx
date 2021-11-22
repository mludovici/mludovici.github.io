import React from 'react'
import Mainpage from './Main/Mainpage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function HomeComponent() {
    return (
        <div className="dark:bg-gray-800">
                    <Mainpage></Mainpage>
        </div>
    )
}

export default HomeComponent
