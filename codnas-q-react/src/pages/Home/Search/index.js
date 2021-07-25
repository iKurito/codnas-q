import React, { Fragment } from 'react'

const Search = () => {
  return (
    <Fragment>
      <form>
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <input
              className="inline g-white appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
              id="inline-full-name"
              type="text"
              placeholder="Search by..."
            />
            <input
              className="inline g-white appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
              id="inline-full-name"
              type="text"
              placeholder="Search by..."
            />
            <button
              className="flex-shrink-0 bg-primary-dark hover:bg-opacity-90 text-sm border-1 text-white py-2 px-4 rounded"
              type="button"
            >
              Search
            </button>
          </div>
        </div>
      </form>
      <form className="">
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-5">
            <input
              className="col-span-2 appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
              id="inline-full-name"
              type="text"
              placeholder="Search by..."
            />
            <input
              className="col-span-1 appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-primary-dark"
              id="inline-full-name"
              type="text"
              placeholder="Search by..."
            />
            <button
              className="col-span-1 flex-shrink-0 bg-primary-dark hover:bg-opacity-90 text-sm border-1 text-white py-2 px-4 rounded"
              type="button"
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
