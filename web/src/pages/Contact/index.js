import React, { Fragment } from 'react'

const Contact = () => {
  return (
    <Fragment>
      <div className="pt-6 pb-52">
        <div className="px-4 sm:px-16 md:px-24 lg:px-32 xl:px-48">
          <div className="p-5 sm:p-10 space-y-4">
            <h1 className="text-gray-700 text-3xl md:text-4xl font-bold text-center">Contact Us</h1>
            <p className="pt-5 text-sm sm:text-base text-justify">
              CoDNaS-Q —Conformational Diversity of Native State-Quaternary— is a high confidence
              database of conformational diversity in proteins that present a biologically relevant
              quaternary structure. CoDNaS Quaternary possess a collection of redundant complexes
              experimentally determined by X-Ray crystallography technique, including their
              experimental conditions (ligands, pH, temperature, etc), general information (PDB ID,
              length, etc), cross linked data with other databases (UniProt and Pfam) and structural
              information of the protein (RMSD, oligomeric state, conformers, etc).
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-justify">
              SBG Tools & Databases
            </h2>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-justify">
              Lead Scientists
            </h2>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Contact
