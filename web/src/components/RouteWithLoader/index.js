import React, { Fragment, useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Preloader from '../Preloader'

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Route
      {...rest}
      render={(props) => (
        <Fragment>
          <Preloader show={!loaded} />
          <Component {...props} />
        </Fragment>
      )}
    />
  )
}

RouteWithLoader.propTypes = {
  component: PropTypes.any.isRequired,
}

export default RouteWithLoader
