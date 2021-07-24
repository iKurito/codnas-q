import React from 'react'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { Routes } from '../routes'
import RouteWithLoader from '../components/RouteWithLoader'
// pages
import Home from './Home'

const App = () => {
  return (
    <Router>
      <Switch>
        <RouteWithLoader exact path={Routes.Home.path} component={Home} />
        <Redirect exact path="/" to={Routes.Home.path} />
      </Switch>
    </Router>
  )
}

export default App
