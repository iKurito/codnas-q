import { Fragment } from 'react'
import { useParams } from 'react-router'
import Information from './Information'

const Cluster = () => {
  const params = useParams()

  const { id } = params

  return (
    <Fragment>
      <div className="pt-6 pb-52">
        <div className="sm:px-4">
          <div className="p-5 sm:p-10 space-y-4">
            <h1 className="text-gray-700 text-3xl md:text-4xl font-bold text-center">
              Cluster {id}
            </h1>
            <div className="pt-5">
              <Information />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Cluster
