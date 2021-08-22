import { Fragment } from 'react'
import Profile from '../../../../components/Profile'
import Map from '../../../../components/Map'
import LHirsh from '../../../../assets/img/lhirsh.jpeg'
import EGarcia from '../../../../assets/img/egarcia.jpg'
import RTunque from '../../../../assets/img/rtunque.jpg'

const Pucp = () => {
  return (
    <Fragment>
      <div className="space-y-4">
        <div className="space-y-2 lg:h-44 xl:h-40">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-center">IA-PUCP</h2>
          <hr />
          <p className="text-sm sm:text-base text-justify pt-2">
            The{' '}
            <a href="http://ia.inf.pucp.edu.pe/" target="_blank" rel="noreferrer">
              <span className="text-primary-light hover:text-primary-dark">
                Artificial Intelligence Group
              </span>
            </a>{' '}
            is the most important Peruvian center in Artificial Intelligence and one of the most
            groundbreaking research groups at PUCP.
          </p>
        </div>
        <div className="space-y-2">
          <Profile
            srcImg={LHirsh}
            name="Layla Hirsh"
            email="lhirsh@pucp.edu.pe"
            orcid="https://orcid.org/0000-0002-8215-6716"
            researcher="Principal Researcher & AI-PUCP Leader, PUCP (Perú)"
            alt="LHirsh"
          />
          <Profile
            srcImg={EGarcia}
            name="Emilio García Ríos"
            email="emilio.garcia@pucp.edu.pe"
            orcid="https://orcid.org/0000-0002-0699-4769"
            github="https://github.com/gariem"
            researcher="Researcher"
            alt="EGarcia"
          />
          <Profile
            srcImg={RTunque}
            name="Ronaldo Romario Tunque Cahui"
            email="ronaldo.tunque@pucp.edu.pe"
            orcid="https://orcid.org/0000-0002-1010-1222"
            github="https://github.com/SfrRonaldo"
            researcher="Student, PUCP (Perú)"
            alt="RTunque"
          />
        </div>
        <Map
          query="Pontificia+Universidad+Católica+del+Perú"
          group="Artificial Intelligence Group"
          university="Pontificia Universidad Católica de Perú"
          address="Av. Universitaria 1801, San Miguel 15088, Perú"
          site="http://ia.inf.pucp.edu.pe/"
        />
      </div>
    </Fragment>
  )
}

export default Pucp
