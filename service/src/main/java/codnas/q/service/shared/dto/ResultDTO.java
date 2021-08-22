package codnas.q.service.shared.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResultDTO {
    private Integer cluster_id;
    private String codnasq_id;
    private String group;
    private String oligomeric_state;
    private Integer num_conf;
    private Double max_rmsd_quaternary;
    private Double max_rmsd_tertiary;
    private String image_url;
    private NameValue search;
    private NameValue match;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class NameValue {
        private String name;
        private String value;
    }
}
