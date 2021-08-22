import Pucp from './Pucp'
import Unq from './Unq'

const Team = () => {
  return (
    <div className="border border-gray-200 rounded-xl shadow-md hover:shadow-2xl p-4 space-y-4">
      <h1 className="text-gray-700 text-3xl md:text-4xl font-bold text-center">Our Team</h1>
      <p className="text-sm sm:text-base text-justify">
        CoDNaS-Q —Conformational Diversity of Native State-Quaternary— is a high confidence database
        of conformational diversity in proteins that present a biologically relevant quaternary
        structure. CoDNaS Quaternary possess a collection of redundant complexes experimentally
        determined by X-Ray crystallography technique, including their experimental conditions
        (ligands, pH, temperature, etc), general information (PDB ID, length, etc), cross linked
        data with other databases (UniProt and Pfam) and structural information of the protein
        (RMSD, oligomeric state, conformers, etc).
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Unq />
        <Pucp />
      </div>
    </div>
  )
}

export default Team
