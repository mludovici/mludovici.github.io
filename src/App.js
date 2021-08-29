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

function App() {
	return (
		<AuthProvider>
			<Router>
				<Navigation></Navigation>
				<Switch>
					<Route path='/' exact component={HomeComponent} />
					<Route path='/login' component={LoginRegister} />
					<Route path='/timeline' component={Timeline} />
				</Switch>
				<Footer></Footer>
			</Router>
			<LoginStatusInfo></LoginStatusInfo>
		</AuthProvider>
	)
}

export default App
