package codnas.q.service.shared.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ConformerInformationDTO {
    private String pdb_id;
    private String description;
    private String pfam_id;
    private String uniprot_id;
    private String gene_names;
    private Integer biological_assembly;
    private String ligands;
    private Double resolution;
    private String length;
    private String name;
    private String organism;
    private Double pH;
    private String temp;
}
