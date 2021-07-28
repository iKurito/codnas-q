package codnas.q.service.core.service.impl;

import codnas.q.service.core.model.Conformer;
import codnas.q.service.core.service.IConformerService;
import codnas.q.service.data.parser.ConformerInformationParser;
import codnas.q.service.data.repository.IConformerDAO;
import codnas.q.service.shared.dto.ConformerInformationDTO;
import org.springframework.stereotype.Service;

@Service
public class ConformerService implements IConformerService {
    private final IConformerDAO conformerDAO;

    public ConformerService(IConformerDAO conformerDAO) {
        this.conformerDAO = conformerDAO;
    }
    @Override
    public ConformerInformationDTO getConformer(String pdb_id) {
        try {
            Conformer conformer = conformerDAO.getConformerById(pdb_id);
            return ConformerInformationParser.toConformerInformationDTO(conformer);
        } catch (Exception e) {
            return null;
        }
    }
}
