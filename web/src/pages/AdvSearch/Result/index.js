import { useEffect, useMemo, useState } from 'react'
import ContentLoader from 'react-content-loader'
import Pagination from '../../../components/Pagination'
import { data } from './data'
import Protein from '../../../assets/img/protein.png'

const skeleton = [1, 2, 3, 4, 5, 6]

const PageSize = 10

const Result = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return data.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  return (
    <section className="pt-4 lg:pt-0 md:col-span-3">
      <div className="space-y-2">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">Results</h1>
        {!loading ? (
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
              totalCount={data.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 py-5">
              {currentTableData.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="col-span-1 mx-auto custom-shadow p-4 w-full  cursor-pointer"
                    onClick={() => console.log(item.id)}
                  >
                    <h1>Cluster {item.id}</h1>
                    <hr />
                    <div className="grid grid-cols-2">
                      <div className="self-center">
                        <h1>Group: {item.group}</h1>
                        <hr />
                        <h1>Oligomeric State: {item.oligomeric}</h1>
                        <hr />
                        <h1>Conformers Quantity: {item.num}</h1>
                        <hr />
                        <h1>Max RMSD Quaternary: {item.quat}</h1>
                        <hr />
                        <h1>Max RMSD Tertiary: {item.ter}</h1>
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
              totalCount={data.length}
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
