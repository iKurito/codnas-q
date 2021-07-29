import { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'
import Pagination from '../../../components/Pagination'
import Protein from '../../../assets/img/protein.png'
// import { data } from './data'

const PageSize = 10

const Result = ({ searchResults }) => {
  const history = useHistory()
  const [currentPage, setCurrentPage] = useState(1)

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    console.log(searchResults)
    console.log(searchResults.slice(firstPageIndex, lastPageIndex))
    return searchResults.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  return (
    <section className="pt-4 lg:pt-0 md:col-span-3">
      <div className="space-y-2">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">Results</h1>
        <>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={searchResults.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-5">
            {currentTableData.map((item) => {
              return (
                <div
                  key={item.cluster_id}
                  className="col-span-1 mx-auto custom-shadow p-4 w-full cursor-pointer hover:shadow-2xl"
                  onClick={() => history.push(`/cluster/${item.cluster_id}`)}
                >
                  <h1 className="pb-2 text-base sm:text-lg md:text-xl font-bold text-gray-700">
                    Cluster: {item.codnasq_id}
                  </h1>
                  <hr />
                  <div className="grid grid-cols-1 xl:grid-cols-2">
                    <div className="self-center space-y-2">
                      <h1 className="pt-2 text-sm sm:text-base">Group: {item.group}</h1>
                      <hr />
                      <h1 className="text-sm sm:text-base">
                        Oligomeric State: {item.oligomeric_state}
                      </h1>
                      <hr />
                      <h1 className="text-sm sm:text-base">Conformers Quantity: {item.num_conf}</h1>
                      <hr />
                      <h1 className="text-sm sm:text-base">
                        Max RMSD Quaternary: {item.max_rmsd_quaternary} Å
                      </h1>
                      <hr />
                      <h1 className="text-sm sm:text-base">
                        Max RMSD Tertiary: {item.max_rmsd_tertiary} Å
                      </h1>
                    </div>
                    <div className="slef-center">
                      <img className="mx-auto" src={Protein} alt="protein" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={searchResults.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      </div>
    </section>
  )
}

Result.propTypes = {
  searchResults: PropTypes.array.isRequired,
}

export default Result
