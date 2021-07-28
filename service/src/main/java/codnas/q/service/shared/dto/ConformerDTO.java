package codnas.q.service.shared.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ConformerDTO {
    private String pdb_id;
    private Integer biological_assembly;
    private Double resolution;
    private String length;
    private String name;
    private String organism;
}
