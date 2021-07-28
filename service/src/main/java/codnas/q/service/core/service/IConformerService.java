package codnas.q.service.core.service;

import codnas.q.service.shared.dto.ConformerInformationDTO;

public interface IConformerService {
    ConformerInformationDTO getConformer(String pdb_id);
}
