import { useMemo, useState } from 'react'
import { useHistory } from 'react-router'
import ContentLoader from 'react-content-loader'
import Pagination from '../../../components/Pagination'
import Protein from '../../../assets/img/protein.png'
import { useSelector } from 'react-redux'
import { data } from './data'

const skeleton = [1, 2, 3, 4, 5, 6]

const PageSize = 10

const Result = () => {
  const history = useHistory()
  const [currentPage, setCurrentPage] = useState(1)

  // Get State
  const searchResults = useSelector((state) => state.search.searchResults)

  const currentTableData = useMemo(() => {
    if (searchResults) {
      const firstPageIndex = (currentPage - 1) * PageSize
      const lastPageIndex = firstPageIndex + PageSize
      return searchResults.slice(firstPageIndex, lastPageIndex)
    }
    return data
  }, [currentPage])

  return (
    <section className="pt-4 lg:pt-0 md:col-span-3">
      <div className="space-y-2">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">Results</h1>
        {!searchResults ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 pt-2">
            {skeleton.map((item) => (
              <div key={item} className="col-span-1 mx-auto custom-shadow pt-4 pl-6">
                <ContentLoader
                  className="h-24 sm:h-24 lg:h-28 xl:h-32"
                  speed={2}
                  viewBox="0 0 400 150"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <circle cx="10" cy="20" r="8" />
                  <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
                  <circle cx="10" cy="50" r="8" />
                  <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
                  <circle cx="10" cy="80" r="8" />
                  <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
                  <circle cx="10" cy="110" r="8" />
                  <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
                  <circle cx="578" cy="227" r="10" />
                  <circle cx="315" cy="63" r="55" />
                </ContentLoader>
              </div>
            ))}
          </div>
        ) : (
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
                        <h1 className="text-sm sm:text-base">
                          Conformers Quantity: {item.num_conf}
                        </h1>
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
        )}
      </div>
    </section>
  )
}

export default Result
