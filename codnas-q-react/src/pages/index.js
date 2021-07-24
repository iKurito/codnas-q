import React from 'react'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { Routes } from '../routes'
import RouteWithLoader from '../components/RouteWithLoader'
// pages
import Home from './Home'
// components
import Header from '../components/Header'
import Footer from '../components/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <RouteWithLoader exact path={Routes.Home.path} component={Home} />
        <Redirect exact path="/" to={Routes.Home.path} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
