import { Fragment } from 'react'
import PropTypes from 'prop-types'

const Conformer = ({ onKeyPress, setQuery, query }) => {
  return (
    <Fragment>
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">
        Conformer Properties
      </h1>
      <form className="space-y-2" onKeyPress={(e) => onKeyPress(e, 's')}>
        <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Description</h2>
        <input
          className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
          id="description"
          type="text"
          placeholder="Description..."
          name="description"
          onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
        />
        <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">
          Biological Assembly
        </h2>
        <input
          className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
          id="bioAssembly"
          type="text"
          placeholder="Biological Assembly..."
          name="bioAssembly"
          onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-4 sm:pt-2">
          <div className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">
              Resolution
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <input
                className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
                id="resFrom"
                type="number"
                step=".01"
                min="0"
                placeholder="From..."
                name="resFrom"
                onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
              />
              <input
                className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
                id="resTo"
                type="number"
                step=".01"
                min="0"
                placeholder="To..."
                name="resTo"
                onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Length</h2>
            <div className="grid grid-cols-2 gap-2">
              <input
                className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
                id="lengthFrom"
                type="number"
                step=".01"
                min="0"
                placeholder="From..."
                name="lengthFrom"
                onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
              />
              <input
                className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
                id="lengthTo"
                type="number"
                step=".01"
                min="0"
                placeholder="To..."
                name="lengthTo"
                onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
              />
            </div>
          </div>
        </div>
        <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Name</h2>
        <input
          className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
          id="name"
          type="text"
          placeholder="Name..."
          name="name"
          onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
        />
        <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Organism</h2>
        <input
          className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
          id="organism"
          type="text"
          placeholder="Organism..."
          name="organism"
          onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
        />
        <div className="space-y-2">
          <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Temperature</h2>
          <div className="grid grid-cols-2 gap-2">
            <input
              className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
              id="tempFrom"
              type="number"
              step=".01"
              min="0"
              placeholder="From..."
              name="tempFrom"
              onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
            />
            <input
              className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
              id="tempTo"
              type="number"
              step=".01"
              min="0"
              placeholder="To..."
              name="tempTo"
              onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
            />
          </div>
        </div>
      </form>
    </Fragment>
  )
}

Conformer.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
  query: PropTypes.any.isRequired,
}

export default Conformer
