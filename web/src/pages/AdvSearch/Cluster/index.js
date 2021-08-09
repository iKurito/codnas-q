import { Fragment } from 'react'
import PropTypes from 'prop-types'
import ListBox from '../../../components/ListBox'

const Cluster = ({ onKeyPress, setQuery, query, group, setGroup, groups }) => {
  return (
    <Fragment>
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">Cluster Properties</h1>
      <form className="space-y-2" onKeyPress={(e) => onKeyPress(e)}>
        <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Cluster ID</h2>
        <input
          className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
          id="clusterId"
          type="text"
          placeholder="Cluster ID..."
          name="clusterId"
          onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
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
              name="oligomericState"
              onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Group</h2>
            <ListBox selected={group} setSelected={setGroup} data={groups} />
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
                min="0"
                placeholder="From..."
                name="quatFrom"
                onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
              />
              <input
                className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
                id="quatTo"
                type="number"
                step=".01"
                min="0"
                placeholder="To..."
                name="quatTo"
                onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
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
                min="0"
                placeholder="From..."
                name="tertFrom"
                onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
              />
              <input
                className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
                id="tertTo"
                type="number"
                step=".01"
                min="0"
                placeholder="To..."
                name="tertTo"
                onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
              />
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

Cluster.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
  query: PropTypes.any.isRequired,
  group: PropTypes.any.isRequired,
  setGroup: PropTypes.func.isRequired,
  groups: PropTypes.any.isRequired,
}

export default Cluster
