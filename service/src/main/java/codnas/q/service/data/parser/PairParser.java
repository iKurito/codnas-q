package codnas.q.service.data.parser;

import codnas.q.service.core.model.Cluster;
import codnas.q.service.core.model.Conformer;
import codnas.q.service.core.model.ConformerPair;
import codnas.q.service.shared.dto.PairDTO;
import codnas.q.service.shared.dto.PairQuatDTO;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;

@Slf4j
public class PairParser {
    public static PairDTO toPairParserDTO(Integer id, Conformer conformer1,
                                          Conformer conformer2, ConformerPair conformerPair,
                                          Cluster cluster) {
        PairDTO pairDTO = new PairDTO();
        pairDTO.setId(id);
        pairDTO.setCluster_id(cluster.getId_cluster().toString());
        pairDTO.setQuery(conformerPair.getQuery_id());
        pairDTO.setCodnasq_id(conformer1.getCluster_id());
        pairDTO.setTarget(conformerPair.getTarget_id());
        pairDTO.setSeq_id(conformerPair.getSequence_identity());
        pairDTO.setRmsd(conformerPair.getRmsd());
        pairDTO.setStruct_similarity(conformerPair.getStructural_similarity());
        pairDTO.setStruct_equivalent(conformerPair.getStructurally_equivalent_residue_pairs());
        pairDTO.setDist_error(conformerPair.getTypical_distance_error());
        List<PairQuatDTO> pairQuatDTOS = new ArrayList<>();
        pairQuatDTOS.add(PairQuatParser.toPairQuatDTO(conformer1, conformerPair, 1,false));
        pairQuatDTOS.add(PairQuatParser.toPairQuatDTO(conformer2, conformerPair, 2,false));
        pairQuatDTOS.add(PairQuatParser.toPairQuatDTO(conformer1, conformerPair, 3,true));
        pairDTO.setPairQuatDTOS(pairQuatDTOS);
        return pairDTO;
    }
}
