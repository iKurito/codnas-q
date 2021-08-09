import { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import Cluster from '../Cluster'
import Conformer from '../Conformer'
import { useDispatch } from 'react-redux'
import { getSearchResultsFromAdvSearchAction } from '../../../actions/searchActions'
import { groups } from '../Cluster/data'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const Filter = ({ setLoaded }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [msgError, setMsgError] = useState('')
  const [groupBy, setGroup] = useState(groups[0])
  const [query, setQuery] = useState({
    clusterId: '',
    oligomericState: '',
    group: groupBy.value,
    quatFrom: '',
    quatTo: '',
    tertFrom: '',
    tertTo: '',
    description: '',
    bioAssembly: '',
    resFrom: '',
    resTo: '',
    lengthFrom: '',
    lengthTo: '',
    name: '',
    organism: '',
    tempFrom: '',
    tempTo: '',
  })

  const {
    clusterId,
    oligomericState,
    group,
    quatFrom,
    quatTo,
    tertFrom,
    tertTo,
    description,
    bioAssembly,
    resFrom,
    resTo,
    lengthFrom,
    lengthTo,
    name,
    organism,
    tempFrom,
    tempTo,
  } = query

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (
        clusterId.trim() === '' &&
        oligomericState.trim() === '' &&
        group.trim() === '' &&
        quatFrom.trim() === '' &&
        quatTo.trim() === '' &&
        tertFrom.trim() === '' &&
        tertTo.trim() === '' &&
        description.trim() === '' &&
        bioAssembly.trim() === '' &&
        resFrom.trim() === '' &&
        resTo.trim() === '' &&
        lengthFrom.trim() === '' &&
        lengthTo.trim() === '' &&
        name.trim() === '' &&
        organism.trim() === '' &&
        tempFrom.trim() === '' &&
        tempTo.trim() === ''
      ) {
        setMsgError('Please, you must fill in at least one field')
        handleClick()
      } else {
        const getClusters = () => dispatch(getSearchResultsFromAdvSearchAction(query))
        getClusters()
        setLoaded(true)
      }
    }
  }

  useEffect(() => {
    setQuery({ ...query, group: groupBy.value })
  }, [groupBy])

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (_e, reason) => {
    if (reason === 'clickaway') return
    setOpen(false)
  }

  return (
    <Fragment>
      <div className="space-y-2">
        <Cluster
          onKeyPress={onKeyPress}
          setQuery={setQuery}
          query={query}
          group={groupBy}
          setGroup={setGroup}
          groups={groups}
        />
      </div>
      <div className="space-y-2">
        <Conformer onKeyPress={onKeyPress} setQuery={setQuery} query={query} />
      </div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        style={{ textAlign: 'center' }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="error">
          {msgError}
        </Alert>
      </Snackbar>
    </Fragment>
  )
}

Filter.propTypes = {
  setLoaded: PropTypes.func.isRequired,
}

export default Filter
