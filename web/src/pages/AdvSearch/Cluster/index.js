import { Fragment } from 'react'

const Cluster = () => {
  return (
    <Fragment>
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">Cluster Properties</h1>
      <form className="space-y-2">
        <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Cluster ID</h2>
        <input
          className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
          id="clusterId"
          type="text"
          placeholder="Cluster ID..."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-4 sm:pt-2">
          <div className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">
              Oligomeric State
            </h2>
            <input
              className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
              id="oligState"
              type="text"
              placeholder="Oligomeric State..."
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Group</h2>
            <input
              className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
              id="oligState"
              type="text"
              placeholder="Oligomeric State..."
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-4 sm:pt-2">
          <div className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">
              Max RMSD Quaternary Range
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <input
                className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
                id="quatFrom"
                type="number"
                step=".01"
                placeholder="From..."
              />
              <input
                className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
                id="quatTo"
                type="number"
                step=".01"
                placeholder="To..."
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">
              Max RMSD Tertiary Range
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <input
                className="text-xs sm:text-sm appearance- border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
                id="tertFrom"
                type="number"
                step=".01"
                placeholder="From..."
              />
              <input
                className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
                id="tertTo"
                type="number"
                step=".01"
                placeholder="To..."
              />
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default Cluster
