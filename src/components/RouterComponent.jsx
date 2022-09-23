import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomeComponent from './HomeComponent'
import Test from './Impressum'
import LoginRegister from './LoginRegister'
import CV from './CV/CV'
import Trivia from './TriviaQuiz/TriviaGame';
import SettingsPage from './Settings'
import ProfilePage from './ProfilePage'
import { useAuth } from '../providers/AuthProvider'
import Navigation from './Header/Navigation'
import CandyCrush from './Games/CandyCrush'


function RouterComponent() {
	const { currentUser } = useAuth()

	const routes = [
		{
			path: '/',
			component: <HomeComponent />
		},
		{
			path: 'cv',
			component: <CV />
		},
		{
			path: 'impressum',
			component: <Test />
		},
		{
			path: 'trivia',
			component: <Trivia />
		},
		{
			path: 'profile',
			component: <HomeComponent />
		},
		{
			path: '/candycrush',
			component: <CandyCrush />
		},
	]
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route exact path="/" element={<HomeComponent />} key={1} />
				<Route path="cv" element={<CV />} key={3} />
				<Route path="impressum" element={<Test />} key={4} />
				<Route path="trivia" element={<Trivia />} key={5} />
				{['/login', '/logout', '/register'].map((path, index) => (
            <Route path={path} element={<LoginRegister />} key={index+"1"} />
  			))}
					<Route	path="/profile"
						element={
								currentUser ? (
										<ProfilePage currentUser={currentUser} />
								) : (
										<LoginRegister />
								)
						}
						key={8}
				/>
				<Route
						path="/settings"
						element={
								<SettingsPage />
						}
						
						key={9}
				/>
				<Route 
				path = "/candycrush" 
				element={<CandyCrush />}
				key={10}
				/>
				<Route path="*" element={<PageNotFound />} 
						key={444}/>
			</Routes>
		</Router>
		)
}

export default RouterComponent


function PageNotFound() {
	return <div>Sorry, no page found under that link!</div>
}
