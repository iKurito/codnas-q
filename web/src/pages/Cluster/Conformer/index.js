import { Fragment, useState } from 'react'
import MaterialTable from 'material-table'
import MuiAlert from '@material-ui/lab/Alert'
import CompareArrowsIcon from '@material-ui/icons/CompareArrows'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Overview from './Overview'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const Conformer = () => {
  const [selectedRow, setSelectedRow] = useState(null)
  const [loading, setLoading] = useState(false)
  const [idx, setIdx] = useState(0)
  const [open, setOpen] = useState(false)

  const conformers = useSelector((state) => state.cluster.conformers)

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
      // setCurrentInput(cluster)
      for (let i = 0; i < rowData.length - 1; i += 1) {
        query = query.concat(rowData[i].conformer).concat('-')
      }
      query = query.concat(rowData[rowData.length - 1].conformer)
      // window.open(`/cluster/${cluster}/pairs/${query}`)
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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-justify">Conformer</h2>
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
                {
                  title: <h1 className="text-sm sm:text-base">Biological Assembly</h1>,
                  field: 'biological_assembly',
                  type: 'numeric',
                  align: 'left',
                  width: null,
                  cellStyle: { width: 250 },
                },
                {
                  title: <h1 className="text-sm sm:text-base">Resolution</h1>,
                  field: 'resolution',
                  type: 'numeric',
                  align: 'left',
                  width: null,
                  cellStyle: { width: 250 },
                },
                {
                  title: <h1 className="text-sm sm:text-base">Length</h1>,
                  field: 'length',
                  width: null,
                  cellStyle: { width: 250 },
                },
                { title: <h1 className="text-sm sm:text-base">Name</h1>, field: 'name' },
                { title: <h1 className="text-sm sm:text-base">Organism</h1>, field: 'organism' },
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
      {loading && <Overview idx={idx} />}
    </Fragment>
  )
}

export default Conformer
