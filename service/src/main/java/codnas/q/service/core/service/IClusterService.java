package codnas.q.service.core.service;

import codnas.q.service.shared.dto.ClusterInformationDTO;
import codnas.q.service.shared.dto.ConformerDTO;
import codnas.q.service.shared.dto.PairQuatDTO;

import java.util.List;

public interface IClusterService {
    ClusterInformationDTO getClusterInformation(String id_cluster);
    List<PairQuatDTO> getPairMaxQuaternary(String id_cluster);
    List<ConformerDTO> getConformers(String id_cluster);
}
