import { Fragment } from 'react'
import PropTypes from 'prop-types'
import Mail from '../../assets/img/mail.png'
import Orcid from '../../assets/img/orcid.png'
import Github from '../../assets/img/github.png'
import Gitlab from '../../assets/img/gitlab.png'

const Profile = ({ srcImg, name, email, orcid, github, gitlab, researcher, alt }) => {
  return (
    <Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-3 space-y-4">
        <div className="col-span-1 self-center justify-self-center">
          <img src={srcImg} className="w-28 h-32" alt={alt} />
        </div>
        <div className="col-span-2">
          <ul>
            <li className="text-sm sm:text-base text-left">
              Full Name: <span>{name}</span>
            </li>
            <li className="text-sm sm:text-base text-left">
              <img src={Mail} className="inline" alt="mail" /> :{' '}
              <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                <span className="text-primary-light hover:text-primary-dark">{email}</span>
              </a>
            </li>
            <li className="text-sm sm:text-base text-left">
              <img src={Orcid} className="inline" alt="orcid" /> :{' '}
              <a href={orcid} target="_blank" rel="noreferrer">
                <span className="text-primary-light hover:text-primary-dark">{orcid}</span>
              </a>
            </li>
            {github !== '' && (
              <li className="text-sm sm:text-base text-left">
                <img
                  src={Github}
                  className="inline"
                  style={{ height: '24px', width: '24px' }}
                  alt="github"
                />{' '}
                :{' '}
                <a href={github} target="_blank" rel="noreferrer">
                  <span className="text-primary-light hover:text-primary-dark">{github}</span>
                </a>
              </li>
            )}
            {gitlab !== '' && (
              <li className="text-sm sm:text-base text-left">
                <img
                  src={Gitlab}
                  className="inline"
                  style={{ height: '24px', width: '24px' }}
                  alt="gitlab"
                />{' '}
                :{' '}
                <a href={gitlab} target="_blank" rel="noreferrer">
                  <span className="text-primary-light hover:text-primary-dark">{gitlab}</span>
                </a>
              </li>
            )}
            <li className="text-sm sm:text-base text-left">
              Position: <span>{researcher}</span>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

Profile.defaultProps = {
  github: '',
  gitlab: '',
}

Profile.propTypes = {
  srcImg: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  orcid: PropTypes.node.isRequired,
  github: PropTypes.string,
  gitlab: PropTypes.string,
  researcher: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Profile
