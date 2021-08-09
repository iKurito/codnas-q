import { Fragment } from 'react'
import Profile from '../../../../components/Profile'
import Map from '../../../../components/Map'
import GParisi from '../../../../assets/img/gparisi.png'
import NPalopoli from '../../../../assets/img/npalopoli.png'
import NEscobedo from '../../../../assets/img/nescobedo.png'
import GCaruso from '../../../../assets/img/gcaruso.jpeg'

const Unq = () => {
  return (
    <Fragment>
      <div className="space-y-4">
        <div className="space-y-2 lg:h-44 xl:h-40">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-center">SBG-UNQ</h2>
          <hr />
          <p className="text-sm sm:text-base text-justify pt-2">
            The{' '}
            <a href="http://ufq.unq.edu.ar/sbg/" target="_blank" rel="noreferrer">
              <span className="text-primary-light hover:text-primary-dark">
                Structural Bioinformatics Group
              </span>
            </a>{' '}
            is focused in advancing knowledge about the structure, dynamics, evolution and function
            of biological macromolecules by developing and applying computational tools.
          </p>
        </div>
        <div className="space-y-2">
          <Profile
            srcImg={GParisi}
            name="Gustavo Daniel Parisi"
            email="gustavo@unq.edu.ar"
            orcid="https://orcid.org/0000-0001-7444-1624"
            researcher="Associated Professor, UNQ & Principal Researcher, CONICET (Argentina)"
            alt="GParisi"
          />
          <Profile
            srcImg={GParisi}
            name="Alexander Monzon"
            email="monzon.alexander@gmail.com"
            orcid="https://orcid.org/0000-0003-0362-8218"
            researcher="PhD, Postdoctoral Researcher (University of Padova)"
            alt="SFornasari"
          />
          <Profile
            srcImg={NPalopoli}
            name="Nicolas Palopoli"
            email="npalopoli@unq.edu.ar"
            orcid="https://orcid.org/0000-0001-7925-6436"
            github="https://github.com/NPalopoli"
            researcher="Professor, UNQ & Adjunct Researcher, CONICET (Argentina)"
            alt="NPalopoli"
          />
          <Profile
            srcImg={NEscobedo}
            name="Nahuel Escobedo"
            email="nahuelescobedo@gmail.com"
            orcid="https://orcid.org/0000-0003-1123-9853"
            gitlab="https://gitlab.com/Nahuele"
            researcher="PhD Student, UNQ-CONICET (Argentina)"
            alt="NEscobedo"
          />
          <Profile
            srcImg={GCaruso}
            name="Gastón Caruso"
            email="gstn.caruso@gmail.com"
            orcid="https://orcid.org/0000-0003-1123-9853"
            github="https://github.com/gstn-caruso/"
            researcher="Software Developer"
            alt="GCaruso"
          />
        </div>
        <Map
          query="UNIVERSIDAD+NACIONAL+DE+QUILMES"
          group="Structural Bioinformatics Group"
          university="Universidad Nacional de Quilmes"
          address="Roque Sáenz Peña 352, Bernal, B1876BXD - Bs. As - Argentina"
          site="http://ufq.unq.edu.ar/sbg/"
        />
      </div>
    </Fragment>
  )
}

export default Unq
