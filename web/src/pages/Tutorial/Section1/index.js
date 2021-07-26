import { Fragment } from 'react'

const Section1 = () => {
  return (
    <Fragment>
      <div className="space-y-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-700">How to use CoDNaS-Q</h1>
        <p className="text-sm sm:text-base text-justify">
          There are different ways to find your protein of interest in the CoDNaS-Q database. The
          Home Page displays a basic search bar. The user can enter a term and hit the ‘Search’
          button to retrieve the results. By default, the search is performed on all available
          fields.
        </p>
        <p className="text-sm sm:text-base text-justify">
          A drop-down menu allows the user to limit the search to pre-defined fields:
        </p>
        <ul id="search" className="list-disc list-inside text-sm sm:text-base space-y-2">
          <li>
            <span className="text-sm sm:text-base text-justify">
              A PDB identifier (example: 2vcq)
            </span>
          </li>
          <li>
            <span className="text-sm sm:text-base text-justify">
              A protein name (example: Hydrolase)
            </span>
          </li>
          <li>
            <span className="text-sm sm:text-base text-justify">
              An organism (example: Mus musculus)
            </span>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Section1
