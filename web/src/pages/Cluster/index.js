import { Fragment, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Information from './Information'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getClusterDetailAction } from '../../actions/clusterActions'
import Maximum from './Maximum'
import Conformer from './Conformer'
import ReactLoading from 'react-loading'

const Cluster = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const params = useParams()
  const { id } = params
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getClusterDetail = () => dispatch(getClusterDetailAction(id))
    getClusterDetail()
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  const information = useSelector((state) => state.cluster.information)

  return (
    <Fragment>
      <div className="pt-6 pb-36">
        <div className="sm:px-4">
          {loading ? (
            <div className="space-y-4 pt-12">
              <div id="loader" style={{ textAlign: '-webkit-center' }}>
                <ReactLoading type="spin" color="#2d699b" />
              </div>
              <h1 className="text-center text-xl font-bold text-gray-700">
                Loading Cluster... Please wait.
              </h1>
            </div>
          ) : (
            <>
              {!information && (
                <div className="lg:px-80 p-5">
                  <h1 className="text-gray-700 text-3xl md:text-4xl font-bold">
                    Results Not Found
                  </h1>
                  <p className="pt-5 text-sm sm:text-base text-justify">
                    Sorry! Try with another search or go back to the Home page.
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
              )}
              <div className="p-5 sm:p-10 space-y-4">
                <div className="pt-5">{information && <Information />}</div>
                <div className="pt-5">{information && <Maximum />}</div>
                <div className="pt-5">{information && <Conformer />}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default Cluster
