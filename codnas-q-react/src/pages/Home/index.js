import React, { Fragment } from 'react'
import Search from './Search'
import Logo from '../../assets/img/codnas-q-logo.png'
import MovFixed from '../../assets/img/mov_mixed.gif'
import MovRigid from '../../assets/img/mov_rigid.gif'
import MovTern from '../../assets/img/mov_tert.gif'

const Home = () => {
  return (
    <Fragment>
      <div className="pt-10 pb-60">
        <div className="px-4 sm:px-16 md:px-32 lg:px-48">
          <div className="px-1 shadow-2xl">
            <div className="p-5 sm:p-10 space-y-4 text-center">
              <img className="h-16 sm:h-24 md:h-32 mx-auto" src={Logo} alt="codnas-q-logo" />
              <h1 className="text-gray-700 text-xl sm:text-2xl md:text-4xl font-bold">
                Conformational Diversity of Native State - Quaternary
              </h1>
              <h2 className="text-sm sm:text-base">
                CoDNaS-Q is a high-quality collection of homo-oligomeric conformers obtained from
                the Protein Data Bank (PDB).
              </h2>
              <h2 className="text-sm sm:text-base">
                It allows the exploration of conformational diversity and its determinants at the
                quaternary level, for a large number of proteins determined under different
                experimental conditions and from a wide variety of families and species.
              </h2>
              <Search />
              <h2 className="text-sm sm:text-base">
                Example entries: 2vcq | Hydrolase | Mus musculus
              </h2>
              <h2 className="text-sm sm:text-base pt-6 pb-2">browse by type of movement</h2>
              <div className="px-6 lg:px-24">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  <div className="col-span-1">
                    <img
                      className="h-24 md:h-36 xl:h-48 mx-auto"
                      src={MovTern}
                      alt="tertiary-deformations"
                    />
                    <h1 className="mt-5 text-red-500 font-bold text-xs sm:text-base">
                      Tertiary Deformations
                    </h1>
                  </div>
                  <div className="col-span-1">
                    <img
                      className="h-24 md:h-36 xl:h-48 mx-auto"
                      src={MovFixed}
                      alt="mixed-motions"
                    />
                    <h1 className="mt-5 text-green-500 font-bold text-xs sm:text-base">
                      Mixed Motions
                    </h1>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <img className="h-24 md:h-36 xl:h-48 mx-auto" src={MovRigid} alt="rigid-body" />
                    <h1 className="mt-5 text-blue-500 font-bold text-xs sm:text-base">
                      Rigid Body
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
