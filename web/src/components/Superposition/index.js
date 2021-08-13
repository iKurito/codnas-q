import { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ReactLoading from 'react-loading'
import Brightness1Icon from '@material-ui/icons/Brightness1'

const Superposition = ({ query, target, bioQuery, bioTarget, codnasqId }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      const NGL = require('ngl')
      const conformer1 = `https://s3.us-east-1.amazonaws.com/codnas.inf.pucp.edu.pe/codnas-q/clusters_aligned_max/${query}.pdb`
      const conformer2 = `https://s3.us-east-1.amazonaws.com/codnas.inf.pucp.edu.pe/codnas-q/clusters_aligned_max/${target}.pdb`
      const stage = new NGL.Stage('viewport2', { backgroundColor: 'white' })
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
    const element = document.getElementById('viewport2')
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
      <div className="p-4 justify-self-center" style={{ textAlign: '-webkit-center' }}>
        {loading ? (
          <>
            <div id="viewport2" className="h-40 sm:h-96 w-40 lg:w-96" onWheel={() => onWheel()} />
            <span className="text-sm sm:text-base">View superposed coordinates files</span>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div>
                <Brightness1Icon
                  fontSize="small"
                  style={{ color: 'red', marginRight: '1vh', marginBottom: '0.5vh' }}
                />
                <a
                  className="text-primary-original hover:text-primary-dark"
                  href={`https://codnasq.herokuapp.com/pdb/${query}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-xs sm:text-lg">{query} (query)</span>
                </a>
              </div>
              <div>
                <Brightness1Icon
                  fontSize="small"
                  style={{ color: 'green', marginRight: '1vh', marginBottom: '0.5vh' }}
                />
                <a
                  className="text-primary-original hover:text-primary-dark"
                  href={`https://codnasq.herokuapp.com/pdb/${target}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-xs sm:text-lg">{target} (target)</span>
                </a>
              </div>
            </div>
          </>
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
  bioQuery: PropTypes.number.isRequired,
  bioTarget: PropTypes.number.isRequired,
  codnasqId: PropTypes.string.isRequired,
}

export default Superposition
