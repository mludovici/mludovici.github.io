import React from 'react'
import Mainpage from './Main/Mainpage'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function HomeComponent() {
    return (
        <div>
            <Router>
                <Route path="/" exact component={Mainpage}></Route>
            </Router>
        </div>
    )
}

export default HomeComponent
