import { Fragment } from 'react'
import PropTypes from 'prop-types'

const NotFound = ({ history }) => {
  return (
    <Fragment>
      <div className="pt-6 pb-52">
        <div className="px-4 sm:px-16 md:px-24 lg:px-32 xl:px-48">
          <div className="p-5 sm:p-10 space-y-4">
            <h1 className="text-gray-700 text-3xl md:text-4xl font-bold">Page Not Found</h1>
            <p className="pt-5 text-sm sm:text-base text-justify">
              Sorry, the page you were trying to view does not exist.
            </p>
            <div className="pt-5">
              <button
                className="px-4 py-2 bg-primary-dark rounded hover:bg-opacity-90 text-white border-1"
                onClick={() => history.push('/home')}
              >
                Go back home
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

NotFound.propTypes = {
  history: PropTypes.any.isRequired,
}

export default NotFound
