package codnas.q.service.data.parser;

import codnas.q.service.core.model.Conformer;
import codnas.q.service.shared.dto.ConformerInformationDTO;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ConformerInformationParser {
    public static ConformerInformationDTO toConformerInformationDTO(Conformer conformer) {
        ConformerInformationDTO conformerInformationDTO = new ConformerInformationDTO();
        conformerInformationDTO.setPdb_id(conformer.getPdb_id());
        conformerInformationDTO.setDescription(conformer.getDescription());
        conformerInformationDTO.setPfam_id(conformer.getPfam_id());
        conformerInformationDTO.setUniprot_id(conformer.getUniprot_id());
        conformerInformationDTO.setGene_names(conformer.getGene_names());
        conformerInformationDTO.setBiological_assembly(conformer.getBiological_assembly());
        conformerInformationDTO.setLigands(conformer.getLigands());
        conformerInformationDTO.setResolution(conformer.getResolution());
        if (conformer.getLength().equals("")) {
            conformerInformationDTO.setLength("no/data");
        } else {
            conformerInformationDTO.setLength(conformer.getLength());
        }
        conformerInformationDTO.setName(conformer.getName());
        conformerInformationDTO.setOrganism(conformer.getOrganism());
        conformerInformationDTO.setPH(conformer.getPh());
        if (conformer.getTemperature().equals("")) {
            conformerInformationDTO.setTemp("no/data");
        } else {
            conformerInformationDTO.setTemp(conformer.getTemperature());
        }
        return conformerInformationDTO;
    }
}
