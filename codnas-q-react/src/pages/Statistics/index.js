import React, { Fragment } from 'react'
import ConfByCluster from '../../assets/img/stats-frequency-conformers-by-cluster.png'
import Resolution from '../../assets/img/stats-resolutions.png'
import Rmsd from '../../assets/img/stats-rmsd-max-q-distr.png'
import Specie from '../../assets/img/stats-species-coverage.png'
import { data } from './data'

const Statistics = () => {
  return (
    <Fragment>
      <div className="pt-6 pb-60">
        <div className="px-4 sm:px-16 md:px-24 lg:px-32 xl:px-48">
          <div className="p-5 sm:p-10 space-y-4">
            <h1 className="text-gray-700 text-3xl md:text-4xl font-bold text-center">Statistics</h1>
            <div className="pt-5 grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="custom-shadow p-4 space-y-4 pb-16">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-center">
                    Summary
                  </h2>
                  <div className="overflow-x-auto overflow-y-auto">
                    <table className="w-full table-auto table-striped min-w-max">
                      <tbody className="w-full">
                        {data.map((datum) => (
                          <tr
                            key={datum.key}
                            className="h-11 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                          >
                            <td
                              className={`text-left ${
                                datum.key === '6' || datum.key === '7' || datum.key === '8'
                                  ? 'pl-12 pr-2 md:pr-10 md:pl-20'
                                  : 'px-2 md:px-10'
                              }`}
                            >
                              <p className="text-xs sm:text-sm font-medium leading-none text-gray-800">
                                {datum.description}
                              </p>
                            </td>
                            <td className="text-right pl-10 pr-2 md:px-10 ">
                              <p className="text-xs sm:text-sm leading-5 text-gray-600">
                                {datum.value}
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="custom-shadow p-4 space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-center">
                    Source organisms
                  </h2>
                  <img
                    className="h-auto sm:h-60 xl:h-80 mx-auto"
                    src={Specie}
                    alt="maximum quaternary rmsd"
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div className="custom-shadow p-4 space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-center">
                    Maximum quaternary RMSD per cluster [Å]
                  </h2>
                  <img
                    className="h-auto sm:h-60 xl:h-80 mx-auto"
                    src={Rmsd}
                    alt="maximum quaternary rmsd"
                  />
                </div>
                <div className="custom-shadow p-4 space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-center">
                    Number of conformers per cluster
                  </h2>
                  <img
                    className="h-auto sm:h-60 xl:h-80 mx-auto"
                    src={ConfByCluster}
                    alt="conformer by cluster"
                  />
                </div>
                <div className="custom-shadow p-4 space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-center">
                    Conformers reesolution [Å]
                  </h2>
                  <img
                    className="h-auto sm:h-60 xl:h-80 mx-auto"
                    src={Resolution}
                    alt="resolution"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Statistics
