package codnas.q.service.core.service;

import codnas.q.service.shared.dto.ClusterInformationDTO;
import codnas.q.service.shared.dto.ConformerDTO;
import codnas.q.service.shared.dto.ConformerInformationDTO;
import codnas.q.service.shared.dto.PairMaxQuatDTO;

import java.util.List;

public interface IClusterService {
    ClusterInformationDTO getClusterInformation(Integer cluster_id);
    List<PairMaxQuatDTO> getPairMaxQuat(Integer cluster_id);
    List<ConformerDTO> getConformers(Integer cluster_id);
}
