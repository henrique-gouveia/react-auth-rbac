import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './pages/home'
import DashboardPage from './pages/dashboard'
import CallbackPage from './pages/callback'
import Auth from './components/auth'

function App() {
    return (
        <div className='App Container'>
            <Auth>
                <div className='jumbotron'>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={HomePage} />
                            <Route exact path='/dashboard' component={DashboardPage} />
                            <Route exact path='/callback' component={CallbackPage} />
                        </Switch>
                    </Router>
                </div>
            </Auth>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)
