import { Fragment } from 'react'
import Filter from './Filter'
import Result from './Result'

const AdvSearch = () => {
  return (
    <Fragment>
      <div className="pt-6 pb-52">
        <div className="sm:px-4">
          <div className="p-5 sm:p-10 space-y-4">
            <h1 className="text-gray-700 text-3xl md:text-4xl font-bold text-center">
              Advanced Search
            </h1>
            <div className="pt-5  md:space-y-0 lg:space-x-10 grid lg:grid-cols-4">
              <Filter />
              <Result />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AdvSearch
