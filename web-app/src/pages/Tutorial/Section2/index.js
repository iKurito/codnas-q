import { Fragment } from 'react'

const Section2 = () => {
  return (
    <Fragment>
      <div className="space-y-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-700">Search results</h1>
        <p className="text-sm sm:text-base text-justify">
          After a search, the results page shows a table of matching PDB entries. Each row
          corresponds to a different conformer from a certain cluster. General information about
          each cluster is displayed.
        </p>
        <p className="text-sm sm:text-base text-justify">
          We define a conformer as any of the alternative structures for a protein; each PDB
          identifier describes a different conformer. All conformers in CoDNaS-Q are oligomeric
          proteins. From the results table, the user can access a certain entry in CoDNaS-Q.
        </p>
        <p className="text-sm sm:text-base text-justify">
          There are two types of entries in CoDNaS (described in more detail below):
        </p>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-2">
          <li>
            <span className="text-sm sm:text-base text-justify">
              Clicking on a Cluster ID (first column) would take the user to a Cluster entry, with
              information about a cluster and all conformers that it contains.
            </span>
          </li>
          <li id="clusters">
            <span className="text-sm sm:text-base text-justify">
              Clicking on a PDB ID (second column) takes the user to a Conformer entry, with
              information specific to that conformer.
            </span>
          </li>
        </ul>
        <p className="text-sm sm:text-base text-justify">
          It is also possible to click on the Name or Species columns to retrieve a list of entries
          matching the protein name or the organism, respectively.
        </p>
      </div>
    </Fragment>
  )
}

export default Section2
