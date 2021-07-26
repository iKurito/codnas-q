import { Fragment } from 'react'

const Section3 = () => {
  return (
    <Fragment>
      <div className="space-y-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-700">Clusters in CoDNaS-Q</h1>
        <p className="text-sm sm:text-base text-justify">
          Cluster entries comprise the main source of information provided by CoDNAs-Q. As mentioned
          before, a cluster entry contains general information about a cluster and all its
          conformers.
        </p>
        <p className="text-sm sm:text-base text-justify">
          A cluster entry has three different sections:
        </p>
        <hr />
        <ul className="list-decimal list-inside text-sm sm:text-base space-y-2">
          <li className="text-justify">
            <span className="text-sm sm:text-base font-bold">Cluster information: </span>
            <span className="text-sm sm:text-base">
              General information about the cluster, including oligomeric state of the protein(s)
              involved, number of conformers in the cluster, and brief statistics about the
              structures available and their comparison.
            </span>
          </li>
          <li className="text-justify">
            <span className="text-sm sm:text-base font-bold">Maximum RMSD pair information: </span>
            <span className="text-sm sm:text-base">
              Provides a comparison of the pair of conformers in the cluster that result in the
              maximum quaternary RMSD between any pair of conformers. The table shows columns with
              exclusive data for each of the two conformers, plus a third column provided the output
              of their structural comparison, as calculated with TopMatch. An interactive 3D display
              of the superposed structures is also shown.
            </span>
          </li>
          <li className="text-justify">
            <span className="text-sm sm:text-base font-bold">Conformers in cluster: </span>
            <span className="text-sm sm:text-base">
              Provides a table (analogous to the Search Results table) listing all conformers
              included in this cluster, with general information about them.
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

export default Section3
