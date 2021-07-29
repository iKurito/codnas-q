import { useState } from 'react'
import Cluster from '../Cluster'
import Conformer from '../Conformer'
import { useDispatch } from 'react-redux'
import { getSearchResultsFromAdvSearchAction } from '../../../actions/searchActions'

const Filter = () => {
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
    resolution: '',
    length: '',
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
    resolution,
    length,
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
        resolution.trim() === '' &&
        length.trim() === '' &&
        name.trim() === '' &&
        organism.trim() === '' &&
        temperature.trim() === ''
      ) {
        console.log('PONER ERORR')
      } else {
        const getClusters = () => dispatch(getSearchResultsFromAdvSearchAction(query))
        getClusters()
      }
    }
  }

  return (
    <aside className="md:block space-y-4 md:col-span-1">
      <div className="space-y-2">
        <Cluster onKeyPress={onKeyPress} setQuery={setQuery} query={query} />
      </div>
      <div className="space-y-2">
        <Conformer onKeyPress={onKeyPress} setQuery={setQuery} query={query} />
      </div>
    </aside>
  )
}

export default Filter
