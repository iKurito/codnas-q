package codnas.q.service.core.service;

import codnas.q.service.shared.dto.ResultDTO;

import java.util.List;

public interface ISearchService {
    List<ResultDTO> getAllClusters();
    List<ResultDTO> getAllClutersByGroup(String group);
    List<ResultDTO> getAllClustersByName(String name);
    List<ResultDTO> getAllClustersByOrganism(String organism);
}
