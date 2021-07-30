import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Pairs = () => {
  const params = useParams()
  const { id, conformers } = params

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(conformers)
    setLoading(false)
  }, [])

  return (
    <Fragment>
      <div className="pt-6 pb-52">
        <div className="sm:px-4">
          <div className="p-5 sm:p-10 space-y-4">
            {loading ? (
              <h1 className="text-center text-xl font-bold text-gray-700">
                Loading of Selected Pairs... Please wait.
              </h1>
            ) : (
              <>
                <h1 className="text-gray-700 text-3xl md:text-4xl font-bold text-center">
                  Cluster {id}
                </h1>
                <div className="pt-5">
                  <div className="border border-gray-200 rounded-t-xl shadow-md hover:shadow-2xl">
                    <div className="bg-gray-200 rounded-t-xl p-4">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-justify">
                        Selected Pairs of Conformers
                      </h2>
                    </div>
                    <div className="p-4">
                      <h1 className="text-base sm:text-lg font-bold text-gray-500 text-justify">
                        Click on a row for further information about the selected pair of
                        conformers.
                      </h1>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Pairs
