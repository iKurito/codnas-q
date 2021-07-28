import { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Superposition = ({ query, target }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const NGL = require('ngl')
      const conformer1 = `rcsb://${query}.pdb.gz`
      const conformer2 = `rcsb://${target}.pdb.gz`
      setLoaded(true)
      const stage = new NGL.Stage('viewport', { backgroundColor: 'white' })
      NGL.DatasourceRegistry.add(
        'data',
        new NGL.StaticDatasource('https://unpkg.com/ngl@0.10.4-1/')
      )
      stage.loadFile(conformer1).then(function lFile(o) {
        o.addRepresentation('cartoon', { color: 'red' })
        o.autoView()
      })
      stage.loadFile(conformer2).then(function lFile(o) {
        o.addRepresentation('cartoon', { color: 'green' })
        o.autoView()
      })
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const onWheel = () => {
    const element = document.getElementById('viewport')
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
    <Fragment>
      <div className="p-4 justify-self-center">
        {loaded && (
          <div
            id="viewport"
            className="h-80 w-40 lg:w-full min-w-full"
            onWheel={() => onWheel()}
          ></div>
        )}
      </div>
    </Fragment>
  )
}

Superposition.propTypes = {
  query: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
}

export default Superposition
