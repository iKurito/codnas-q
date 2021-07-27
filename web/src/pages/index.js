import React from 'react'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { Routes } from '../routes'
import RouteWithLoader from '../components/RouteWithLoader'
// pages
import Home from './Home'
import AdvSearch from './AdvSearch'
import Download from './Download'
import Statistics from './Statistics'
import About from './About'
import Tutorial from './Tutorial'
import Contact from './Contact'
import Cluster from './Cluster'
// components
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
// Redux
import { Provider } from 'react-redux'
import store from '../store'

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <div className="min-h-screen relative">
          <Header />
          <ScrollToTop />
          <Switch>
            <RouteWithLoader exact path={Routes.Home.path} component={Home} />
            <RouteWithLoader exact path={Routes.AdvSearch.path} component={AdvSearch} />
            <RouteWithLoader exact path={Routes.Download.path} component={Download} />
            <RouteWithLoader exact path={Routes.Statistics.path} component={Statistics} />
            <RouteWithLoader exact path={Routes.About.path} component={About} />
            <RouteWithLoader exact path={Routes.Tutorial.path} component={Tutorial} />
            <RouteWithLoader exact path={Routes.Contact.path} component={Contact} />
            <RouteWithLoader exact path={Routes.Cluster.path} component={Cluster} />
            <Redirect exact path="/" to={Routes.Home.path} />
          </Switch>
          <Footer />
        </div>
      </Provider>
    </Router>
  )
}

export default App
