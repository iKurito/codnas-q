package codnas.q.service.core.service;

import codnas.q.service.shared.dto.QueryDTO;
import codnas.q.service.shared.dto.ResultDTO;

import java.util.List;

public interface ISearchService {
    List<ResultDTO> getAllClusters();
    List<ResultDTO> getAllClustersByGroup(String group);
    List<ResultDTO> getAllClustersByName(String name);
    List<ResultDTO> getAllClustersByDescription(String description);
    List<ResultDTO> getAllClustersByOrganism(String organism);
    List<ResultDTO> getAllClustersByUniProt(String uniprot);
    List<ResultDTO> getAllClustersByAllFieldsFromHome(String value);
    List<ResultDTO> getAllClustersFromAdvSearch(QueryDTO queryDTO);
}
