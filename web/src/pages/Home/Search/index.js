import { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  getSearchResultsByNameAction,
  getSearchResultsByDescriptionAction,
  getSearchResultsByOrganismAction,
  getSearchResultsByAllFieldsAction,
  getSearchResultsByUniProtAction,
} from '../../../actions/searchActions'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import ListBox from '../../../components/ListBox'
import { areas } from './data'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const Search = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [msgError, setMsgError] = useState('')
  const [open, setOpen] = useState(false)
  const [area, setArea] = useState(areas[0])
  const [query, setQuery] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (query.trim() === '') {
      setOpen(true)
      setMsgError('Please, you must fill in the field')
    } else {
      if (area.name === 'Cluster (by PDB)') {
        history.push(`/cluster/${query}`)
      } else {
        if (area.name === 'Name') {
          const getClusters = () => dispatch(getSearchResultsByNameAction(query.trim()))
          getClusters()
        } else if (area.name === 'Organism') {
          const getClusters = () => dispatch(getSearchResultsByOrganismAction(query.trim()))
          getClusters()
        } else if (area.name === 'UniProt') {
          const regex = /[OPQ][0-9][A-Z0-9]{3}[0-9]|[A-NR-Z][0-9]([A-Z][A-Z0-9]{2}[0-9]){1,2}/
          if (regex.test(query)) {
            const getClusters = () => dispatch(getSearchResultsByUniProtAction(query.trim()))
            getClusters()
          } else {
            setOpen(true)
            setMsgError('Please, the values in the UniProt field must be valid identifiers')
            return
          }
        } else if (area.name === 'Description') {
          const getClusters = () => dispatch(getSearchResultsByDescriptionAction(query.trim()))
          getClusters()
        } else {
          const getClusters = () => dispatch(getSearchResultsByAllFieldsAction(query.trim()))
          getClusters()
        }
        history.push('/adv-search')
      }
    }
  }

  const handleClose = (_e, reason) => {
    if (reason === 'clickaway') return
    setOpen(false)
  }

  return (
    <Fragment>
      <form className="" onSubmit={(e) => onSubmit(e)}>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-2 lg:gap-5">
            <input
              className="sm:col-span-2 md:col-span-3 appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
              id="inline-full-name"
              name="query"
              type="text"
              placeholder="Search by..."
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="sm:col-span-1 md:col-span-2 text-justify">
              <ListBox selected={area} setSelected={setArea} data={areas} />
            </div>
            <button
              className="sm:col-span-3 md:col-span-1 flex-shrink-0 bg-primary-dark hover:bg-opacity-90 text-sm border-1 text-white py-2 px-4 rounded"
              type="button"
              onClick={(e) => onSubmit(e)}
            >
              Search
            </button>
          </div>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          style={{ textAlign: 'center' }}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert onClose={handleClose} severity="error">
            {msgError}
          </Alert>
        </Snackbar>
      </form>
    </Fragment>
  )
}

export default Search
