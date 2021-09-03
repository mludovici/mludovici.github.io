import HomeComponent from './components/HomeComponent'
import LoginRegister from './components/LoginRegister/LoginRegister.jsx'
import { AuthProvider } from './providers/AuthProvider'
import LoginStatusInfo from './components/LoginStatusInfo'
import Timeline from './components/Timeline/Timeline.jsx'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from 'react-router-dom'
import Navigation from './components/Header/Navigation'
import Impressum from './components/Footer/Impressum'

import React from 'react'

function PageNotFound() {
	return <div>Sorry, no page found under that link!</div>
}

function App() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route path='/' exact component={HomeComponent} />
					<Route path='/login' component={LoginRegister} />
					<Route path='/timeline' component={Timeline} />
					<Route path='/impressum' component={Impressum} />

					<Route component={PageNotFound} />
				</Switch>
			</Router>

			<LoginStatusInfo></LoginStatusInfo>
		</AuthProvider>
	)
}

export default App
