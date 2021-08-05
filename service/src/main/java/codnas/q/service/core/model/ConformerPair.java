package codnas.q.service.core.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "conformer_pair")
public class ConformerPair {
    @Id
    @Column
    private Integer id_conformer_pair;

    @Column
    private String query_id;

    @Column
    private String target_id;

    @Column
    private String alignment_type;

    @Column
    private Integer alignment_rank;

    @Column
    private Integer structural_similarity;

    @Column
    private Integer query_cover;

    @Column
    private Integer target_cover;

    @Column
    private Integer structurally_equivalent_residue_pairs;

    @Column
    private Integer query_cover_based_on_alignment_length;

    @Column
    private Integer target_cover_based_on_alignment_length;

    @Column
    private Double typical_distance_error;

    @Column
    private Double rmsd;

    @Column
    private Integer sequence_identity;

    @Column
    private Integer permutations;

    @Column
    private String created_at;

    @Column
    private String updated_at;

    @Column
    private String max_rmsd_tert_q;

    @Column
    private String max_rmsd_tert_t;
}
