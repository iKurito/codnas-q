import { useState } from 'react'
import Cluster from '../Cluster'
import Conformer from '../Conformer'

const Filter = () => {
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

  /* const {
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
  } = query */

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log(query)
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
