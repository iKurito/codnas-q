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
@Table(name = "conformer")
public class Conformer {
    @Id
    @Column
    private Integer id_conformer;

    @Column
    private String cluster_id;

    @Column
    private String pdb_id;

    @Column
    private Integer biological_assembly;

    @Column
    private Double resolution;

    @Column
    private String method;

    @Column
    private String length;

    @Column
    private String name;

    @Column
    private String organism;

    @Column
    private String ligands;

    @Column
    private String description;

    @Column
    private String uniprot_id;

    @Column
    private String gene_names;

    @Column
    private String pfam_id;

    @Column
    private Double ph;

    @Column
    private String temperature;

    @Column
    private String created_at;

    @Column
    private String updated_at;
}
