import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Preloader = ({ show }) => {
  return (
    <Fragment>
      <div
        className={`elevate justify-center bg-gray-100 ${show ? '' : 'show'}`}
      >
        <img
          className={`h-10 mb-10 2xl:mr-20 ${show ? 'rotated' : 'loaded'}`}
          src="/favicon.ico"
          alt="codnas-q-logo"
        />
      </div>
    </Fragment>
  )
}

Preloader.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default Preloader
