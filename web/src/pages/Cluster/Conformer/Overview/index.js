import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import View from '../View'

const Overview = ({ idx }) => {
  const conformer = useSelector((state) => state.cluster.conformers[idx])

  return (
    <Fragment>
      <div className="mt-8 border border-gray-200 rounded-t-xl shadow-md hover:shadow-2xl">
        <div className="bg-gray-200 rounded-t-xl p-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-justify">
            Conformer Information
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-4">
          <div className="overflow-x-auto overflow-y-auto">
            <table className="w-full table-fixed table-striped">
              <tbody className="w-full">
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="w-1/3 text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      PDB ID:
                    </p>
                  </td>
                  <td className="w-2/3 text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      <a
                        className="text-primary-original hover:text-primary-dark"
                        href={`https://www.rcsb.org/structure/${conformer.information.pdb_id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {conformer.information.pdb_id}
                      </a>
                    </p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Description:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {conformer.information.description}
                    </p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Pfam IDs:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      <a
                        className="text-primary-original hover:text-primary-dark"
                        href={`https://pfam.xfam.org/family/${conformer.information.pfam_id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {conformer.information.pfam_id}
                      </a>
                    </p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      UniProt ID:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      <a
                        className="text-primary-original hover:text-primary-dark"
                        href={`https://www.uniprot.org/uniprot/${conformer.information.uniprot_id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {conformer.information.uniprot_id}
                      </a>
                    </p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Gene names:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {conformer.information.gene_names}
                    </p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Biological Assembly:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {conformer.information.biological_assembly}
                    </p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Ligands:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {conformer.information.ligands}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto overflow-y-auto">
            <table className="w-full table-fixed table-striped">
              <tbody className="w-full">
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="w-1/3 text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Resolution:
                    </p>
                  </td>
                  <td className="w-2/3 text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {conformer.information.resolution}
                    </p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Length:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {conformer.information.length}
                    </p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Name:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {conformer.information.name}
                    </p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Organism:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {conformer.information.organism}
                    </p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">pH:</p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {conformer.information.ph}
                    </p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Temperature:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {conformer.information.temp} K
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <View idx={idx} />
    </Fragment>
  )
}

Overview.propTypes = {
  idx: PropTypes.number.isRequired,
}

export default Overview
