import { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import Cluster from '../Cluster'
import Conformer from '../Conformer'
import { useDispatch } from 'react-redux'
import { getSearchResultsFromAdvSearchAction } from '../../../actions/searchActions'
import { groups } from '../Cluster/data'

const Filter = ({ setLoaded }) => {
  const dispatch = useDispatch()
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
        console.log('PONER ERORR')
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
    </Fragment>
  )
}

Filter.propTypes = {
  setLoaded: PropTypes.func.isRequired,
}

export default Filter
