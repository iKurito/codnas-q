import { Fragment } from 'react'
// Redux
import { useSelector } from 'react-redux'
import Superposition from './Superposition'

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

const Maximum = () => {
  const pairMaximum = useSelector((state) => state.cluster.pairMaximum)

  return (
    <Fragment>
      <div className="border border-gray-200 rounded-t-xl shadow-md hover:shadow-2xl">
        <div className="bg-gray-200 rounded-t-xl p-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-justify">
            Maximum RMSD Quaternary pair Comparison
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
              {pairMaximum.map((item) => (
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
                      {item.data.max_rmsd_quat ? `${item.data.max_rmsd_quat} Å` : ''}
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
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">{item.data.temp}</p>
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
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Superposition />
          <div className="p-4">
            <img
              className="h-96 mx-auto"
              src={`http://ufq.unq.edu.ar/codnasq/assets/dendrograms/${pairMaximum[0].name}_dendrogram_2020.png`}
              alt="dendogram"
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Maximum
