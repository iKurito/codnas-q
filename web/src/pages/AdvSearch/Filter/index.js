import { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import Cluster from '../Cluster'
import Conformer from '../Conformer'
import { useDispatch } from 'react-redux'
import { getSearchResultsFromAdvSearchAction } from '../../../actions/searchActions'

const Filter = ({ setLoaded }) => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState({
    clusterId: '',
    oligomericState: '',
    group: '',
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
    temperature: '',
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
    temperature,
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
        temperature.trim() === ''
      ) {
        console.log('PONER ERORR')
      } else {
        const getClusters = () => dispatch(getSearchResultsFromAdvSearchAction(query))
        getClusters()
        setLoaded(true)
      }
    }
  }

  return (
    <Fragment>
      <div className="space-y-2">
        <Cluster onKeyPress={onKeyPress} setQuery={setQuery} query={query} />
      </div>
      <div className="space-y-2">
        <Conformer onKeyPress={onKeyPress} setQuery={setQuery} query={query} />
      </div>
    </Fragment>
  )
}

Filter.propTypes = {
  setLoaded: PropTypes.func.isRequired,
}

export default Filter
