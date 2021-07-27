import { Fragment } from 'react'

const Information = () => {
  return (
    <Fragment>
      <div className="border border-gray-200 rounded-t-xl shadow-md hover:shadow-2xl">
        <div className="bg-gray-200 rounded-t-xl p-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-justify">
            Cluster Information
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
          <div className="overflow-x-auto overflow-y-auto">
            <table className="w-full table-auto table-striped min-w-max">
              <tbody className="w-full">
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Cluster ID:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">datum.value</p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Group:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">datum.value</p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Oligomeric State:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">datum.value</p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Number of Conformers:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">datum.value</p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Max RMSD Quaternary:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">datum.value</p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Max RMSD Tertiary:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">datum.value</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto overflow-y-auto">
            <table className="w-full table-auto table-striped min-w-max">
              <tbody className="w-full">
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Name:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">datum.value</p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Description:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">datum.value</p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Organism:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">datum.value</p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Genes:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">datum.value</p>
                  </td>
                </tr>
                <tr className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="text-left px-2 md:px-4">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      Length:
                    </p>
                  </td>
                  <td className="text-left pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">datum.value</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="lg:col-span-2 xl:col-span-1">3</div>
        </div>
      </div>
    </Fragment>
  )
}

export default Information
