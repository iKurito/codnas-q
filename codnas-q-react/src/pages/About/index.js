import { Fragment } from 'react'
import Image from '../../assets/img/about-img.png'

const About = () => {
  return (
    <Fragment>
      <div className="pt-6 pb-52">
        <div className="px-4 sm:px-16 md:px-24 lg:px-32 xl:px-48">
          <div className="p-5 sm:p-10 space-y-4">
            <h1 className="text-gray-700 text-3xl md:text-4xl font-bold text-center">About</h1>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-justify">
              What is CoDNaS-Q?
            </h2>
            <p className="text-sm sm:text-base text-justify">
              CoDNaS-Q —Conformational Diversity of Native State-Quaternary— is a high confidence
              database of conformational diversity in proteins that present a biologically relevant
              quaternary structure. CoDNaS Quaternary possess a collection of redundant complexes
              experimentally determined by X-Ray crystallography technique, including their
              experimental conditions (ligands, pH, temperature, etc), general information (PDB ID,
              length, etc), cross linked data with other databases (UniProt and Pfam) and structural
              information of the protein (RMSD, oligomeric state, conformers, etc).
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-justify">
              What is it used for?
            </h2>
            <p className="text-sm sm:text-base text-justify">
              The database allows the user find through different criteria and filters proteins in
              several conformations, taking into account their biological quaternary structure.The
              different redundant structures (conformers) have been structurally aligned all vs all
              in order to assess the conformational variability for a given protein. Additionally,
              the experimental conditions associated to each structure have been considered to allow
              users associate protein conformational changes with the biological function.
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-justify">
              Database implementation
            </h2>
            <p className="text-sm sm:text-base text-justify">
              CoDNaS Quaternary uses homoligomeric proteins annotated by the algorithm QSbio (Dey et
              al. 2018), that combines PISA (Krissinel and Henrick 2007), EPPIC (Duarte et al. 2012)
              and QSalign (Dey et al. 2018), to predict different parameters of protein complexes.
              Using the BlastClust, all the different structures (in the same oligomeric state)
              deposited for a given protein were obtained. These structures are considered as
              putative conformers and provide snapshots of proteins dynamics. Structural alignments
              among each pair of conformeros for a given protein were performed by TopMatch. The
              maximum RMSD between pair of conformers is a measure of the protein conformational
              diversity.
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-justify">Example</h2>
            <p className="text-sm sm:text-base text-justify">
              The fructose-1,6-bisphosphatase (FBPase) is a key regulatory enzyme of gluconeogenic
              pathway. It catalyzes the hydrolysis of fructose-1,6-bisphosphate to
              fructose-6-phosphate and phosphate. This tetrameric enzyme presents two conformational
              states: R state, in which the enzyme is active and bounded with the substrate or
              product; and the T form, where the enzyme is bound to AMP in presence or absence of
              metallic ions.
            </p>
            <img className="about-image mx-auto" src={Image} alt="1rdx-1rdy" />
            <p className="text-xs sm:text-sm text-center">
              R and T state of FBPase. 1RDX conformer in gold colour and 1RDY showed in cian.
            </p>
            <p className="text-sm sm:text-base text-justify">
              In CoDNaS-Q we are able to find the R and T forms within the CQ1fpf cluster, and 66
              others conformers of this protein, some of them with the ligand bound. The maximum
              quaternary RMSD measured for this cluster is 3.38 Å.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default About
