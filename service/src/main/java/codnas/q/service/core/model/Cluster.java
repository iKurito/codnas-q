package codnas.q.service.core.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cluster")
public class Cluster {
    @Id
    @Column
    private Integer id_cluster;

    @Column
    private String codnasq_id;

    @Column
    private Integer oligomeric_state;

    @Column
    private Double max_rmsd_tertiary;

    @Column
    private String cluster_group;

    @Column
    private String created_at;

    @Column
    private String updated_at;

    @Column
    private Double max_rmsd_quaternary;
}
