export const data = [
  { key: '1', value: 'Cluster ID', description: 'CoDNaS-Q identification number' },
  { key: '2', value: 'Oligomeric State', description: 'Subunits Quantity' },
  { key: '3', value: 'PDB ID query', description: 'query PDB code' },
  {
    key: '4',
    value: 'Biological Assembly query',
    description: 'query Biological Assembly (or Chain ID)',
  },
  { key: '5', value: 'PDB ID target', description: 'target PDB code' },
  {
    key: '6',
    value: 'Biological Assembly target',
    description: '	target Biological Assembly (or Chain ID)',
  },
  {
    key: '7',
    value: 'Type of alignment',
    description:
      'Basic structure alignments are denoted by `b`, composite alignments are denoted by `c`, and sequence alignments are denoted by `q`.',
  },
  { key: '8', value: 'Rank of alignment', description: 'Rank of alignment' },
  {
    key: '9',
    value: 'Structural similarity',
    description:
      'Measure of structural similarity based on Gaussian functions. If the structurally equivalent parts in query and target match perfectly, S is equal to L. With increasing spatial deviation of the aligned residues, S approaches 0.',
  },
  {
    key: '10',
    value: 'Query cover',
    description:
      'Query cover based on similarity score, expressed in percent (= 100 x S/Qn, where Qn is the length of the query sequence).',
  },
  {
    key: '11',
    value: 'Target cover',
    description:
      'Target cover based on similarity score, expressed in percent (= 100 x S/Tn, where Tn is the length of the target sequence).',
  },
  {
    key: '12',
    value: 'Structurally equivalent residue pairs',
    description: 'Number of residue pairs that are structurally equivalent (= alignment length).',
  },
  {
    key: '13',
    value: 'Query cover based on alignment length',
    description:
      'Query cover based on alignment length, expressed in percent (= 100 x L/Qn, where Qn is the length of the query sequence).',
  },
  {
    key: '14',
    value: 'Target cover based on alignment length',
    description:
      'Target cover based on alignment length, expressed in percent (= 100 x L/Tn, where Tn is the length of the target sequence).',
  },
  {
    key: '15',
    value: 'Typical distance error',
    description:
      'For details on the construction of this per-residue measure of structural similarity, see Sippl & Wiederstein (2012).',
  },
  {
    key: '16',
    value: 'RMSD',
    description:
      'Root-mean-square error of superposition in Angstroms, calculated using all structurally equivalent C-alpha atoms.',
  },
  {
    key: '17',
    value: 'Sequence identity',
    description:
      'Sequence identity of query and target in the equivalent regions, expressed in percent.',
  },
  { key: '18', value: 'Permutations', description: 'Number of permutations in the alignment.' },
  { key: '19', value: 'Query resolution', description: 'Experimental resolution of query' },
  { key: '20', value: 'Target resolution', description: 'Experimental resolution of target' },
  { key: '21', value: 'Query method', description: 'Experimental technique of the query' },
  { key: '22', value: 'Target method', description: 'Experimental technique of the target' },
  { key: '23', value: 'Query length', description: 'Oligomer length' },
  { key: '24', value: 'Target length', description: 'Oligomer length' },
  { key: '25', value: 'Query name', description: 'Name of molecule query' },
  { key: '26', value: 'Target name', description: 'Name of molecule target' },
  { key: '27', value: 'Query organism', description: 'Species source registered in the PDB entry' },
  {
    key: '28',
    value: 'Target organism',
    description: '	Species source registered in the PDB entry',
  },
  { key: '29', value: 'Query ligands', description: 'Query ligands included in the PDB file' },
  { key: '30', value: 'Target ligands', description: 'Target ligands included in the PDB file' },
  { key: '31', value: 'Query description', description: 'Query title of the PDB entry' },
  {
    key: '32',
    value: 'Target description',
    description: 'Target title of the PDB entry',
  },
  { key: '33', value: 'Target UniProt ID', description: 'Target UniProt entry name' },
  { key: '34', value: 'Target Gene names', description: 'Gene name according UniProt' },
  { key: '35', value: 'Target Pfam', description: 'Target Pfam ID' },
  { key: '36', value: 'Query UniProt ID', description: 'Query UniProt entry name' },
  { key: '37', value: 'Query Gene names', description: 'Gene name according UniProt' },
  { key: '38', value: 'Query Pfam', description: 'Query Pfam ID' },
  { key: '39', value: 'Group', description: 'Tertiary vs Quaternary state comparison' },
  { key: '40', value: 'target pH', description: 'Target pH conditions' },
  {
    key: '41',
    value: 'target Temperature',
    description: 'Target experimental Temperature (K)',
  },
  { key: '42', value: 'query pH', description: 'Query pH conditions' },
  { key: '43', value: 'query Temperature', description: 'Target experimental Temperature (K)' },
  {
    key: '44',
    value: 'QueryChainID',
    description:
      'Query PDB code and chain identifiers of the maximum tertiary pair for the cluster',
  },
  {
    key: '45',
    value: 'TargetChainID',
    description:
      'Target PDB code and chain identifiers of the maximum tertiary pair for the cluster',
  },
  {
    key: '46',
    value: 'maxRMSD_T',
    description: 'Maximum Tertiary RMSD measured in the cluster. In Angstroms',
  },
]
