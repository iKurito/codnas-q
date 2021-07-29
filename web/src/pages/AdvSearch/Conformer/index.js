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
        <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Resolution</h2>
        <input
          className=" text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
          id="resolution"
          type="text"
          placeholder="Resolution..."
          name="resolution"
          onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
        />
        <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Length</h2>
        <input
          className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
          id="length"
          type="text"
          placeholder="Length..."
          name="length"
          onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
        />
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
        <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Temperature</h2>
        <input
          className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
          id="emperature"
          type="text"
          placeholder="Temperature..."
          name="temperature"
          onChange={(e) => setQuery({ ...query, [e.target.name]: e.target.value })}
        />
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
