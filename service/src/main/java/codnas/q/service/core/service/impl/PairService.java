package codnas.q.service.core.service.impl;

import codnas.q.service.core.service.IPairService;
import codnas.q.service.shared.dto.PairDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PairService implements IPairService {
    @Override
    public List<PairDTO> getAllPairs(String query) {
        return null;
    }
}
