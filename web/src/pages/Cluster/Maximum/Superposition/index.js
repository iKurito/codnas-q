import { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ReactLoading from 'react-loading'

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
      Promise.all([
        stage.loadFile(conformer1, { sele: ':A' }).then(function lFile(o) {
          o.addRepresentation('cartoon', { color: 'red' })
          return o
        }),
        stage.loadFile(conformer2, { sele: ':A' }).then(function lFile(o) {
          o.addRepresentation('cartoon', { color: 'green' })
          return o
        }),
      ]).then(function lFile(o) {
        o[0].superpose(o[1], false, '1-320:A')
        o[0].autoView(':A')
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
        {loaded ? (
          <div id="viewport" className="h-80 w-40 lg:w-96" onWheel={() => onWheel()} />
        ) : (
          <div id="loader">
            <ReactLoading type="spin" color="#2d699b" />
          </div>
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
