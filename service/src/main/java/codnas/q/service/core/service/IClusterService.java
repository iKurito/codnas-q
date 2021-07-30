package codnas.q.service.core.service;

import codnas.q.service.shared.dto.ClusterInformationDTO;
import codnas.q.service.shared.dto.ConformerDTO;
import codnas.q.service.shared.dto.PairMaxQuatDTO;

import java.util.List;

public interface IClusterService {
    ClusterInformationDTO getClusterInformation(String cluster_id);
    List<PairMaxQuatDTO> getPairMaxQuaternary(String cluster_id);
    List<ConformerDTO> getConformers(String cluster_id);
}
