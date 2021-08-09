import { Fragment, useEffect } from 'react'
import { useParams } from 'react-router'
import Information from './Information'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getClusterDetailAction } from '../../actions/clusterActions'
import Maximum from './Maximum'
import Conformer from './Conformer'

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
            <div className="pt-5">{information && <Information />}</div>
            <div className="pt-5">{information && <Maximum />}</div>
            <div className="pt-5">{information && <Conformer />}</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Cluster
