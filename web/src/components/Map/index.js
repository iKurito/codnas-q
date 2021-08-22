import { Fragment } from 'react'
import PropTypes from 'prop-types'
import RoomIcon from '@material-ui/icons/Room'
import { MAPS_KEY } from '../../constants'

const Map = ({ query, group, university, address, site }) => {
  return (
    <Fragment>
      <div className="px-4">
        <div>
          <iframe
            title="Location"
            style={{ width: '100%', height: '450px' }}
            src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_KEY}&q=${query}`}
            allowFullScreen
          />
        </div>
        <div className="space-y-4 text-center text-sm sm:text-base ">
          <h4>
            <RoomIcon style={{ color: '#2bbbad' }} />
          </h4>
          <h4>{group}</h4>
          <h4>{university}</h4>
          <h4>{address}</h4>
          <h4>
            Website:{' '}
            <a href={site} target="blank_">
              <span className="text-primary-light hover:text-primary-dark">{site}</span>
            </a>
          </h4>
        </div>
      </div>
    </Fragment>
  )
}

Map.propTypes = {
  query: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
}

export default Map
