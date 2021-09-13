import HomeComponent from './components/HomeComponent'
import { AuthProvider } from './providers/AuthProvider'
import LoginStatusInfo from './components/LoginStatusInfo'
import Timeline from './components/Timeline/Timeline.jsx'
import Timeline2 from './components/Timeline/Timeline2.jsx'

import Trivia from './components/Games/Trivia'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom'
import Impressum from './components/Footer/Impressum'

import React from 'react'
import LoginComponent from './components/LoginRegister/LoginComponent'
import LoginRegister from './components/LoginRegister/LoginRegister'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function PageNotFound() {
    return <div>Sorry, no page found under that link!</div>
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/" exact component={HomeComponent} />

                    <Route path="/timeline" exact component={Timeline} />
                    <Route path="/tl2" exact component={Timeline2} />

                    <Route path="/impressum" component={Impressum} />
                    <Route path="/login" component={LoginRegister} />
                    <Route path="/register" component={LoginRegister} />

                    <Route path="/trivia" component={Trivia} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>

            {/* <LoginStatusInfo></LoginStatusInfo> */}
        </AuthProvider>
    )
}

export default App
