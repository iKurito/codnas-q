import { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import MaterialTable from 'material-table'
import { useSelector, useDispatch } from 'react-redux'
import { getPairsDetailsAction } from '../../actions/pairActions'
import Comparison from '../../components/Comparison'
import ReactLoading from 'react-loading'

const Pairs = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const { id, conformers } = params

  const [loading, setLoading] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)
  const [idx, setIdx] = useState(0)
  const [loadSuperposition, setLoadSuperposition] = useState(true)

  const pairs = useSelector((state) => state.pair.comparison)

  useEffect(() => {
    const getPairsComparison = () => dispatch(getPairsDetailsAction(conformers))
    getPairsComparison()
  }, [])

  useEffect(() => {
    setLoadSuperposition(false)
    const timer = setTimeout(() => {
      setLoadSuperposition(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [idx, loading])

  const onRowClick = (row) => {
    setIdx(row.tableData.id)
    setSelectedRow(row.tableData.id)
    setLoading(true)
  }

  const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#2d699b',
      },
    },
  })

  return (
    <Fragment>
      <div className="pt-6 pb-52">
        <div className="sm:px-4">
          <div className="p-5 sm:p-10 space-y-4">
            {pairs ? (
              pairs.length === 0 ? (
                <div className="lg:px-80">
                  <h1 className="text-gray-700 text-3xl md:text-4xl font-bold">
                    Results Not Found
                  </h1>
                  <p className="pt-5 text-sm sm:text-base text-justify">
                    Sorry! Try with another search or go back to the Home page.
                  </p>
                  <div className="pt-5">
                    <button
                      className="px-4 py-2 bg-primary-dark rounded hover:bg-opacity-90 text-white border-1"
                      onClick={() => history.push('/home')}
                    >
                      Go back home
                    </button>
                  </div>
                </div>
              ) : `CQ${pairs[0].codnasq_id}` === id ||
                `cq${pairs[0].codnasq_id}` === id ||
                pairs[0].cluster_id === id ? (
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
                      <div className="text-xs sm:text-sm p-4">
                        <MuiThemeProvider theme={theme}>
                          <MaterialTable
                            columns={[
                              {
                                title: <h1 className="text-sm sm:text-base p-0">Conformer 1</h1>,
                                field: 'query',
                              },
                              {
                                title: <h1 className="text-sm sm:text-base">Conformer 2</h1>,
                                field: 'target',
                              },
                              {
                                title: <h1 className="text-sm sm:text-base">Seq. Id</h1>,
                                field: 'seq_id',
                              },
                              {
                                title: <h1 className="text-sm sm:text-base">RMSD [Å]</h1>,
                                field: 'rmsd',
                              },
                              {
                                title: <h1 className="text-sm sm:text-base">Struc. Similarity</h1>,
                                field: 'struct_similarity',
                              },
                              {
                                title: <h1 className="text-sm sm:text-base">Struc. Equivalent</h1>,
                                field: 'struct_equivalent',
                              },
                              {
                                title: <h1 className="text-sm sm:text-base">Distance Error</h1>,
                                field: 'dist_error',
                              },
                            ]}
                            data={pairs}
                            onRowClick={(evt, row) => onRowClick(row)}
                            options={{
                              padding: 'dense',
                              showTitle: false,
                              rowStyle: (rowData) => ({
                                backgroundColor:
                                  selectedRow === rowData.tableData.id ? '#66a1d3' : '#fff',
                              }),
                              headerStyle: {
                                minWidth: 40,
                              },
                            }}
                          />
                        </MuiThemeProvider>
                      </div>
                    </div>
                    <div className="pt-8">
                      {loading &&
                        (loadSuperposition ? (
                          <Comparison
                            data={pairs[idx].pairQuatDTOS}
                            query={pairs[idx].query}
                            target={pairs[idx].target}
                            flag="false"
                          />
                        ) : (
                          <div id="loader" style={{ textAlign: '-webkit-center' }}>
                            <ReactLoading type="spin" color="#2d699b" />
                          </div>
                        ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="lg:px-80">
                  <h1 className="text-gray-700 text-3xl md:text-4xl font-bold">
                    Results Not Found
                  </h1>
                  <p className="pt-5 text-sm sm:text-base text-justify">
                    Sorry! Try with another search or go back to the Home page.
                  </p>
                  <div className="pt-5">
                    <button
                      className="px-4 py-2 bg-primary-dark rounded hover:bg-opacity-90 text-white border-1"
                      onClick={() => history.push('/home')}
                    >
                      Go back home
                    </button>
                  </div>
                </div>
              )
            ) : (
              <>
                <div id="loader" style={{ textAlign: '-webkit-center' }}>
                  <ReactLoading type="spin" color="#2d699b" />
                </div>
                <h1 className="text-center text-xl font-bold text-gray-700">
                  Loading of Selected Pairs... Please wait.
                </h1>
              </>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Pairs
