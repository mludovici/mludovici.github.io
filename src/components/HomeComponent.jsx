import React from 'react'

import Header from './Header/Header'
import LoginStatusInfo from './LoginStatusInfo'
import Mainpage from './Main/Mainpage'
import Navigation from './Header/Navigation'
import Footer from './Footer/Footer'
import {
	BrowserRouter as Router,
	Route,
	useRouteMatch,
	Link,
} from 'react-router-dom'
import LoginComponent from './LoginRegister/LoginComponent'

function HomeComponent() {
	let match = useRouteMatch()

	return (
		<div>
			<Navigation></Navigation>
			<Router>
				<Route path='/' exact component={Mainpage}></Route>
				<Route path='/login' component={LoginComponent}></Route>
			</Router>
			<Footer></Footer>
		</div>
	)
}

export default HomeComponent
