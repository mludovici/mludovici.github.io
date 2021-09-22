import HomeComponent from './components/HomeComponent'
import { AuthProvider } from './providers/AuthProvider'
import Timeline from './components/Timeline/Timeline.jsx'
import Timeline2 from './components/Timeline/Timeline2.jsx'

import Trivia from './components/Games/Trivia'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Impressum from './components/Footer/Impressum'

import React from 'react'
import LoginRegister from './components/LoginRegister'
import DND from './components/Timeline/DnDComponent'
import TimeLineCard from './components/Timeline/TimeLineCard'
import Navigation from './components/Header/Navigation'
import StarRating from './components/StarRating'
function PageNotFound() {
    return <div>Sorry, no page found under that link!</div>
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navigation></Navigation>
                <Switch>
                    <Route path="/" exact component={HomeComponent} />

                    <Route path="/timeline" exact component={Timeline} />
                    <Route path="/cv" exact component={Timeline2} />

                    <Route path="/impressum" component={Impressum} />
                    <Route path="/login" component={LoginRegister} />
                    <Route path="/logout" component={LoginRegister} />

                    <Route path="/register" component={LoginRegister} />

                    <Route path="/trivia" component={Trivia} />
                    <Route path="/dnd" component={DND} />
                    <Route path="/tlt" component={TimeLineCard} />
                    <Route path="/star" component={StarRating} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App
