import { Fragment, useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import MuiAlert from '@material-ui/lab/Alert'
import HelpIcon from '@material-ui/icons/Help'
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Overview from './Overview'
import ReactLoading from 'react-loading'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const Conformer = () => {
  const [loadPdb, setLoadPdb] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)
  const [loading, setLoading] = useState(false)
  const [idx, setIdx] = useState(0)
  const [open, setOpen] = useState(false)

  const conformers = useSelector((state) => state.cluster.conformers)
  const information = useSelector((state) => state.cluster.information)

  useEffect(() => {
    setLoadPdb(false)
    const timer = setTimeout(() => {
      setLoadPdb(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [idx, loading])

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (_e, reason) => {
    if (reason === 'clickaway') return
    setOpen(false)
  }

  const onClick = (rowData) => {
    if (rowData.length > 1) {
      handleClose()
      let query = ''
      for (let i = 0; i < rowData.length - 1; i += 1) {
        query = query.concat(rowData[i].pdb_id).concat('-')
      }
      query = query.concat(rowData[rowData.length - 1].pdb_id)
      window.open(`/cluster/${information.cluster_id}/pairs/${query}`)
    } else {
      handleClick()
    }
  }

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
      <div className="border border-gray-200 rounded-t-xl shadow-md hover:shadow-2xl">
        <div className="bg-gray-200 rounded-t-xl p-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-justify">
            Conformers
            <div className="has-tooltip text-xs sm:text-sm inline text-justify">
              <div className="tooltip rounded shadow-lg bg-primary-dark text-white sm:-mt-12 sm:ml-40 p-2">
                <h1 className="text-sm sm:text-base">
                  List of others conformers of the cluster/protein.
                </h1>
              </div>
              <HelpIcon fontSize="small" className="text-gray-500 ml-1 mb-2" />
            </div>
          </h2>
        </div>
        {open && (
          <Alert onClose={handleClose} severity="error">
            Please, select at least 2 conformers
          </Alert>
        )}
        <div className="text-xs sm:text-sm ">
          <MuiThemeProvider theme={theme}>
            <MaterialTable
              columns={[
                {
                  title: <h1 className="text-sm sm:text-base p-0">PDB</h1>,
                  field: 'pdb_id',
                  width: null,
                  cellStyle: { width: 20 },
                },
                { title: <h1 className="text-sm sm:text-base">Name</h1>, field: 'name' },
                { title: <h1 className="text-sm sm:text-base">Organism</h1>, field: 'organism' },
                {
                  title: <h1 className="text-sm sm:text-base">Resolution</h1>,
                  field: 'resolution',
                  type: 'numeric',
                  align: 'left',
                  width: null,
                  cellStyle: { width: 20 },
                },
                {
                  title: <h1 className="text-sm sm:text-base">Length</h1>,
                  field: 'length',
                  width: null,
                  cellStyle: { width: 20 },
                },
                {
                  title: <h1 className="text-sm sm:text-base">pH</h1>,
                  field: 'information.ph',
                  type: 'numeric',
                  align: 'left',
                  width: null,
                  cellStyle: { width: 20 },
                },
                {
                  title: <h1 className="text-sm sm:text-base">Temperature</h1>,
                  field: 'information.temp',
                  type: 'numeric',
                  align: 'left',
                  width: null,
                  cellStyle: { width: 20 },
                },
                {
                  title: <h1 className="text-sm sm:text-base">Ligands</h1>,
                  field: 'information.ligands',
                },
              ]}
              data={conformers}
              onRowClick={(evt, row) => onRowClick(row)}
              options={{
                padding: 'dense',
                selection: true,
                showTitle: false,
                rowStyle: (rowData) => ({
                  backgroundColor: selectedRow === rowData.tableData.id ? '#66a1d3' : '#fff',
                }),
                headerStyle: {
                  minWidth: 40,
                },
              }}
              actions={[
                {
                  icon: 'search',
                  tooltip: 'Compare',
                  onClick: (event, rowData) => onClick(rowData),
                },
              ]}
              components={{
                // eslint-disable-next-line react/display-name
                Action: (props) => (
                  <button
                    // eslint-disable-next-line react/prop-types
                    onClick={(event) => props.action.onClick(event, props.data)}
                    className="ml-2 px-4 py-2 bg-primary-dark rounded hover:bg-opacity-90 text-white border-1"
                    title="Compare"
                  >
                    <CompareArrowsIcon fontSize="small" />
                    <span className="ml-2">Compare</span>
                  </button>
                ),
              }}
            />
          </MuiThemeProvider>
        </div>
      </div>
      {loading &&
        (loadPdb ? (
          <Overview idx={idx} />
        ) : (
          <div id="loader" className="pt-12" style={{ textAlign: '-webkit-center' }}>
            <ReactLoading type="spin" color="#2d699b" />
          </div>
        ))}
    </Fragment>
  )
}

export default Conformer
