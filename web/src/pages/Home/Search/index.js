import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ListBox from '../../../components/ListBox'
import { areas } from './data'

const Search = () => {
  const history = useHistory()

  const [area, setArea] = useState(areas[0])
  const [query, setQuery] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (query.trim() === '') {
      console.log('COLOCAR ERROR')
    } else {
      if (area.name === 'Cluster (by PDB)') {
        history.push(`/cluster/${query}`)
      } else {
        history.push('/adv-search')
      }
    }
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
      </form>
    </Fragment>
  )
}

export default Search
