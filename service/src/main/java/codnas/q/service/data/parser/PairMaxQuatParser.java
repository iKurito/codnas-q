package codnas.q.service.data.parser;

import codnas.q.service.core.model.Conformer;
import codnas.q.service.core.model.ConformerPair;
import codnas.q.service.shared.dto.PairMaxQuatDTO;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class PairMaxQuatParser {
    public static PairMaxQuatDTO toPairMaxQuatDTO(Conformer conformer, ConformerPair conformerPair,
                                                  Integer id, Boolean isComparison) {
        PairMaxQuatDTO pairMaxQuatDTO = new PairMaxQuatDTO();
        pairMaxQuatDTO.setId(id);
        if (isComparison) pairMaxQuatDTO.setName(conformer.getPdb_id());
        else pairMaxQuatDTO.setName("Comparison");
        pairMaxQuatDTO.setData(toInformation(conformerPair, conformer, isComparison));
        return pairMaxQuatDTO;
    }

    private static PairMaxQuatDTO.Information toInformation(ConformerPair conformerPair, Conformer conformer,
                                                            Boolean isComparison) {
        PairMaxQuatDTO.Information information = new PairMaxQuatDTO.Information();
        if (isComparison) {
            information.setSeq_id(0);
            information.setMax_rmsd_quat(0.0);
            information.setStruct_similarity(0);
            information.setStruct_equivalent(0);
            information.setDist_error(0.0);
            if (conformerPair.getQuery_id().equals(conformer.getPdb_id())) {
                information.setCoverage(conformerPair.getQuery_cover());
                information.setCover(conformerPair.getQuery_cover_based_on_alignment_length());
            }
            else {
                information.setCoverage(conformerPair.getTarget_cover());
                information.setCover(conformerPair.getTarget_cover_based_on_alignment_length());
            }
            information.setBio_assembly(conformer.getBiological_assembly());
            information.setPH(conformer.getPh());
            information.setLength(conformer.getLength());
            information.setResolution(conformer.getResolution());
            information.setTemp(conformer.getTemperature());
            information.setLigands(conformer.getLigands());
        } else {
            information.setSeq_id(conformerPair.getSequence_identity());
            information.setMax_rmsd_quat(conformerPair.getRmsd());
            information.setStruct_similarity(conformerPair.getStructural_similarity());
            information.setStruct_equivalent(conformerPair.getStructurally_equivalent_residue_pairs());
            information.setDist_error(conformerPair.getTypical_distance_error());
            information.setCoverage(0);
            information.setCover(0);
            information.setBio_assembly(0);
            information.setPH(0.0);
            information.setLength("");
            information.setResolution(0.0);
            information.setTemp("");
            information.setLigands("");
        }
        return information;
    }
}
