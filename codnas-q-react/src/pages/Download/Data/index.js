import { Fragment } from 'react'
import { data } from './data'

const Data = () => {
  return (
    <Fragment>
      <div className="pt-2 container">
        <div className="bg-gray-200 custom-shadow overflow-x-auto overflow-y-auto">
          <table className="w-full table-fixed table-striped min-w-max">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="w-1/3 font-bold text-left px-4 md:px-10 text-base sm:text-2xl">
                  Value
                </th>
                <th className="w-2/3 font-bold text-left pl-10 pr-2 md:px-10 text-base sm:text-2xl">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="w-full">
              {data.map((datum) => (
                <tr
                  key={datum.key}
                  className="h-16 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                >
                  <td className="text-left px-2 md:px-10 ">
                    <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                      {datum.value}
                    </p>
                  </td>
                  <td className="text-justify pl-10 pr-2 md:px-10 ">
                    <p className="text-xs sm:text-sm leading-5 text-gray-600">
                      {datum.description}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  )
}

export default Data
