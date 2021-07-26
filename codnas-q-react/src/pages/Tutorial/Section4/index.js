import { Fragment } from 'react'

const Section4 = () => {
  return (
    <Fragment>
      <div id="conformers" className="space-y-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-700">Conformers entries</h1>
        <p className="text-sm sm:text-base text-justify">
          CoDNAs-Q provides a separate entry for each individual conformer. As mentioned before, a
          conformer entry contains general description about a conformer and its participation in a
          cluster.
        </p>
        <p className="text-sm sm:text-base text-justify">
          A conformer entry has three different sections:
        </p>
        <hr />
        <ul className="list-decimal list-inside text-sm sm:text-base space-y-2">
          <li className="text-justify">
            <span className="text-sm sm:text-base font-bold">Conformer information: </span>
            <span className="text-sm sm:text-base">
              General information about the conformer derived from the PDB file, including
              experimental conditions (pH, temperature, ligands, etc). It also lists the UniProt and
              Pfam IDs of the protein, cross-linked to these databases.
            </span>
          </li>
          <li className="text-justify">
            <span className="text-sm sm:text-base font-bold">3D View: </span>
            <span className="text-sm sm:text-base">
              An interactive 3D display of the conformer.
            </span>
          </li>
          <li className="text-justify">
            <span className="text-sm sm:text-base font-bold">Conformers: </span>
            <span className="text-sm sm:text-base">
              A table listing all conformers belonging to the same cluster as the entry. Equivalent
              to the section with the same name in the corresponding Cluster entry.
            </span>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Section4
