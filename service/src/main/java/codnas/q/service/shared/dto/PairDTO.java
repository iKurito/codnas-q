package codnas.q.service.shared.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PairDTO {
    private String query;
    private String target;
    private Integer seq_id;
    private Double max_rmsd_quat;
    private Integer struct_similarity;
    private Integer struct_equivalent;
    private Double dist_error;
    private PairQuatDTO pairQuatDTO;
}
