import { Fragment } from 'react'
import PropTypes from 'prop-types'
import HelpIcon from '@material-ui/icons/Help'
import Superposition from '../Superposition'

const headers = [
  { id: 1, value: '' },
  { id: 2, value: 'Sequence Identity' },
  { id: 3, value: 'Max RMSD Quaternary' },
  { id: 4, value: 'Structural similarity ' },
  { id: 5, value: 'Coverage' },
  { id: 6, value: 'Structurally equivalent residue pairs' },
  { id: 7, value: 'Cover based on alignment length' },
  { id: 8, value: 'Typical distance error' },
  { id: 9, value: 'Biological Assembly' },
  { id: 10, value: 'pH' },
  { id: 11, value: 'Length' },
  { id: 12, value: 'Resolution' },
  { id: 13, value: 'Temperature' },
  { id: 14, value: 'Ligands' },
]

const Comparison = ({ data, codnasqId, query, target, flag }) => {
  return (
    <Fragment>
      <div className="border border-gray-200 rounded-t-xl shadow-md hover:shadow-2xl">
        <div className="bg-gray-200 rounded-t-xl p-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-justify">
            Maximum RMSD Quaternary pair Comparison
            <div className="has-tooltip text-xs sm:text-sm inline text-justify">
              <div className="tooltip rounded shadow-lg bg-primary-dark text-white sm:-mt-20 sm:ml-60 p-2">
                <h1 className="text-sm sm:text-base">
                  Comparison between the most different conformers for the cluster/protein.
                </h1>
              </div>
              <HelpIcon fontSize="small" className="text-gray-500 ml-1 mb-1" />
            </div>
          </h2>
        </div>
        <div className="overflow-x-auto overflow-y-auto">
          <table className="w-full table-auto table-striped">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-700">
                {headers.map((header) => (
                  <th key={header.id} className="italic text-center px-2 text-sm sm:text-base">
                    {header.value}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="w-full">
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                >
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      {item.name}
                    </p>
                  </td>
                  <td className="text-center pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {item.data.seq_id ? item.data.seq_id : ''}
                    </p>
                  </td>
                  <td className="text-center font-bold pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {item.data.max_rmsd_quat ? `${item.data.max_rmsd_quat}Å` : ''}
                    </p>
                  </td>
                  <td className="text-center pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {item.data.struct_similarity ? item.data.struct_similarity : ''}
                    </p>
                  </td>
                  <td className="text-center pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {item.data.coverage ? item.data.coverage : ''}
                    </p>
                  </td>
                  <td className="text-center pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {item.data.struct_equivalent ? item.data.struct_equivalent : ''}
                    </p>
                  </td>
                  <td className="text-center pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {item.data.cover ? item.data.cover : ''}
                    </p>
                  </td>
                  <td className="text-center pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {item.data.dist_error ? item.data.dist_error : ''}
                    </p>
                  </td>
                  <td className="text-center pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {item.data.bio_assembly ? item.data.bio_assembly : ''}
                    </p>
                  </td>
                  <td className="text-center pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {item.data.ph ? item.data.ph : ''}
                    </p>
                  </td>
                  <td className="text-center pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">{item.data.length}</p>
                  </td>
                  <td className="text-center pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {item.data.resolution ? item.data.resolution : ''}
                    </p>
                  </td>
                  <td className="text-center pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {item.data.temp === '' ? '' : `${item.data.temp}K`}
                    </p>
                  </td>
                  <td className="text-center pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {item.data.ligands}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {flag === 'true' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <Superposition query={query} target={target} />
            <div>
              <div className="overflow-auto">
                <div className="p-4 h-auto" style={{ width: '800px', textAlign: '-webkit-center' }}>
                  <img
                    className="mx-auto"
                    src={`http://ufq.unq.edu.ar/codnasq/assets/dendrograms/${codnasqId}_dendrogram_2020.png`}
                    alt="dendogram"
                  />
                </div>
              </div>
              <div className="text-center pb-4">
                <a
                  className="text-primary-original hover:text-primary-dark"
                  href={`http://ufq.unq.edu.ar/codnasq/assets/dendrograms/${codnasqId}_dendrogram_2020.png`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-sm sm:text-base">View full size dendrogram </span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  )
}

Comparison.defaultProps = {
  flag: 'true',
}

Comparison.propTypes = {
  data: PropTypes.any.isRequired,
  codnasqId: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  flag: PropTypes.string,
}

export default Comparison
