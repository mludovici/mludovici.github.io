import React from 'react'
import Mainpage from './Main/Mainpage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function HomeComponent() {
    return (
        <div className="dark:bg-gray-800">
            <Router>
                <Route path="/" exact>
                    <Mainpage></Mainpage>
                </Route>
            </Router>
        </div>
    )
}

export default HomeComponent
