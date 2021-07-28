package codnas.q.service.data.parser;

import codnas.q.service.core.model.Conformer;
import codnas.q.service.shared.dto.ConformerDTO;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ConformerParser {
    public static ConformerDTO toConformerDTO(Conformer conformer) {
        ConformerDTO conformerDTO = new ConformerDTO();
        conformerDTO.setPdb_id(conformer.getPdb_id());
        conformerDTO.setBiological_assembly(conformer.getBiological_assembly());
        conformerDTO.setResolution(conformer.getResolution());
        conformerDTO.setLength(conformer.getLength());
        conformerDTO.setName(conformer.getName());
        conformerDTO.setOrganism(conformer.getOrganism());
        conformerDTO.setInformation(ConformerInformationParser.toConformerInformationDTO(conformer));
        return conformerDTO;
    }
}
