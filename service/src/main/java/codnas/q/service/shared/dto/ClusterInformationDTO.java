package codnas.q.service.shared.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClusterInformationDTO {
    private String cluster_id;
    private Integer codnasq_id;
    private String group;
    private String oligomeric_state;
    private Integer num_conf;
    private Double max_rmsd_quaternary;
    private Double max_rmsd_tertiary;
    private String name;
    private String description;
    private String organism;
    private String genes;
    private String length;
    private String image_url;
}
