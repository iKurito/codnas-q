package codnas.q.service.core.service;

import codnas.q.service.shared.dto.PairDTO;

import java.util.List;

public interface IPairService {
    List<PairDTO> getAllPairs(String query, String clusterId);
}
