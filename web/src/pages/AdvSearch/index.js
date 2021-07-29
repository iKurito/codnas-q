import { Fragment, useEffect } from 'react'
import Filter from './Filter'
import Result from './Result'
import ContentLoader from 'react-content-loader'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getSearchResultsAction } from '../../actions/searchActions'

const skeleton = [1, 2, 3, 4, 5, 6]

const AdvSearch = () => {
  const dispatch = useDispatch()

  const searchResults = useSelector((state) => state.search.searchResults)
  const loading = useSelector((state) => state.search.loading)

  useEffect(() => {
    if (!loading) {
      if (searchResults.length === 0) {
        const getClusters = () => dispatch(getSearchResultsAction())
        getClusters()
      }
    }
  }, [])

  return (
    <Fragment>
      <div className="pt-6 pb-52">
        <div className="sm:px-4">
          <div className="p-5 sm:p-10 space-y-4">
            <h1 className="text-gray-700 text-3xl md:text-4xl font-bold text-center">
              Advanced Search
            </h1>
            <div className="pt-5  md:space-y-0 lg:space-x-10 grid lg:grid-cols-4">
              <Filter />
              {searchResults.length > 0 ? (
                <Result searchResults={searchResults} />
              ) : (
                <div className="md:col-span-3">
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AdvSearch
