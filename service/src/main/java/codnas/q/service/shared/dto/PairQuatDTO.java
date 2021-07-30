package codnas.q.service.shared.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PairQuatDTO {
    private Integer id;
    private String name;
    private Information data;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Information {
        private Integer seq_id;
        private Double max_rmsd_quat;
        private Integer struct_similarity;
        private Integer coverage;
        private Integer struct_equivalent;
        private Integer cover;
        private Double dist_error;
        private Integer bio_assembly;
        private Double pH;
        private String length;
        private Double resolution;
        private String temp;
        private String ligands;
    }
}
