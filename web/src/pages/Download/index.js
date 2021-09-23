import React, { Fragment } from 'react'
import Data from './Data'

const Download = () => {
  const downloadData = () => {
    window.open(
      'https://s3.us-east-1.amazonaws.com/codnas.inf.pucp.edu.pe/codnas-q/downloads/maxRMSD-Q_CoDNaS-Q.csv'
    )
  }

  return (
    <Fragment>
      <div className="pt-6 pb-56">
        <div className="px-4 sm:px-16 md:px-24 lg:px-32 xl:px-48">
          <div className="p-5 sm:p-10 space-y-4">
            <h1 className="text-gray-700 text-3xl md:text-4xl font-bold text-center">Download</h1>
            <p className="pt-5 text-sm sm:text-base text-justify">
              Download a custom semicolon-separated file with the main information about protein
              clusters in CoDNaS-Q.
            </p>
            <button
              className="px-4 py-2 bg-primary-dark rounded hover:bg-opacity-90 text-white border-1"
              onClick={downloadData}
            >
              Click here
            </button>
            <Data />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Download
