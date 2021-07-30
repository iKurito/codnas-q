package codnas.q.service.shared.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PairDTO {
    private Integer id;
    private String cluster_id;
    private String codnasq_id;
    private String query;
    private String target;
    private Integer seq_id;
    private Double rmsd;
    private Integer struct_similarity;
    private Integer struct_equivalent;
    private Double dist_error;
    private List<PairQuatDTO> pairQuatDTOS;
}
