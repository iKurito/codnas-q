import { Fragment, useEffect } from 'react'
import { useParams } from 'react-router'
import Information from './Information' // Redux
import { useSelector, useDispatch } from 'react-redux'
import { getClusterDetailAction } from '../../actions/clusterActions'

const Cluster = () => {
  const dispatch = useDispatch()
  const params = useParams()

  const { id } = params

  useEffect(() => {
    const getClusterDetail = () => dispatch(getClusterDetailAction(id))
    getClusterDetail()
  }, [])

  const information = useSelector((state) => state.cluster.information)

  return (
    <Fragment>
      <div className="pt-6 pb-52">
        <div className="sm:px-4">
          <div className="p-5 sm:p-10 space-y-4">
            <h1 className="text-gray-700 text-3xl md:text-4xl font-bold text-center">
              Cluster {id}
            </h1>
            <div className="pt-5">{information && <Information />}</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Cluster
