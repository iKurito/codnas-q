import React, { useEffect, useState } from 'react'

const ViewTest = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      // eslint-disable-next-line
      const NGL = require('ngl')
      const pdbName = '1m5k'
      const pdb = `rcsb://${pdbName}.mmtf.gz`
      const stage = new NGL.Stage('view', { backgroundColor: 'white' })
      NGL.DatasourceRegistry.add(
        'data',
        new NGL.StaticDatasource('https://unpkg.com/ngl@0.10.4-1/')
      )
      stage.loadFile(pdb).then(function lFile(o) {
        o.addRepresentation('cartoon')
        o.addRepresentation('base')
        o.autoView()
      })
    }, 2000)
  }, [])

  const onWheel = () => {
    const element = document.getElementById('view')
    function wheel(event) {
      event.preventDefault()
      return false
    }
    element.onmouseenter = function x() {
      element.addEventListener('DOMMouseScroll', wheel, false)
    }
    document.onmousewheel = wheel
    element.onmousewheel = document.onmousewheel
  }

  return (
    <div>
      <h1 className="text-red-300 text-2xl">Tailwind CSS + React</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div
          id="view"
          className="justify-center h-96"
          onWheel={() => onWheel()}
        />
      )}
    </div>
  )
}

export default ViewTest
