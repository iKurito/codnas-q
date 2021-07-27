package codnas.q.service.core.service;

import codnas.q.service.shared.dto.ClusterInformationDTO;

public interface IClusterService {
    ClusterInformationDTO getClusterInformation(Integer cluster_id);
}
