import { Fragment } from 'react'

const Conformer = () => {
  return (
    <Fragment>
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">
        Conformer Properties
      </h1>
      <form className="space-y-2">
        <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Description</h2>
        <input
          className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
          id="description"
          type="text"
          placeholder="Description..."
        />
        <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">
          Biological Assembly
        </h2>
        <input
          className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
          id="bioAssembly"
          type="text"
          placeholder="Biological Assembly..."
        />
        <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Resolution</h2>
        <input
          className=" text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
          id="resolution"
          type="text"
          placeholder="Resolution..."
        />
        <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Length</h2>
        <input
          className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
          id="length"
          type="text"
          placeholder="Length..."
        />
        <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Name</h2>
        <input
          className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
          id="name"
          type="text"
          placeholder="Name..."
        />
        <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Organism</h2>
        <input
          className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
          id="organism"
          type="text"
          placeholder="Organism..."
        />
        <h2 className="text-sm sm:text-base font-bold text-gray-700 text-justify">Temperature</h2>
        <input
          className="text-xs sm:text-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
          id="emperature"
          type="text"
          placeholder="Temperature..."
        />
      </form>
    </Fragment>
  )
}

export default Conformer
