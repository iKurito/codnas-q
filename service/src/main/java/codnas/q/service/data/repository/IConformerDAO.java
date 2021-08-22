package codnas.q.service.data.repository;

import codnas.q.service.core.model.Conformer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IConformerDAO extends JpaRepository<Conformer, Integer> {
    @Query(value = "SELECT * from conformer where cluster_id = :cluster_id", nativeQuery = true)
    List<Conformer> getAllConformersByClusterId(@Param("cluster_id") String cluster_id);

    @Query(value = "SELECT * from conformer where pdb_id = :pdb_id limit 1", nativeQuery = true)
    Conformer getConformerById(@Param("pdb_id") String pdb_id);

    @Query(value = "SELECT * from conformer where name like concat('%', :name, '%');", nativeQuery = true)
    List<Conformer> getConformersByName(@Param("name") String name);

    @Query(value = "SELECT * from conformer where organism like concat('%', :organism, '%');", nativeQuery = true)
    List<Conformer> getConformersByOrganism(@Param("organism") String organism);

    @Query(value = "select * from conformer where uniprot_id like concat('%', :uniprot, '%')", nativeQuery = true)
    List<Conformer> getConformersByUniProt(@Param("uniprot") String uniprot);

    @Query(value = "SELECT * from conformer where description like concat('%', :description, '%');", nativeQuery = true)
    List<Conformer> getConformersByDescription(@Param("description") String description);

    @Query(value = "SELECT * from conformer where biological_assembly = :biological_assembly", nativeQuery = true)
    List<Conformer> getConformersByBioAssembly(@Param("biological_assembly") Integer biological_assembly);

    @Query(value = "select * from conformer where resolution >= :resFrom and resolution <= :resTo", nativeQuery = true)
    List<Conformer> getAllByResolutionRange(@Param("resFrom") Double resFrom, @Param("resTo") Double resTo);

    @Query(value = "select * from conformer where length >= :lengthFrom and length <= :lengthTo", nativeQuery = true)
    List<Conformer> getAllByLengthRange(@Param("lengthFrom") Integer lengthFrom, @Param("lengthTo") Integer lengthTo);

    @Query(value = "select * from conformer where temperature >= :tempFrom and temperature <= :tempTo", nativeQuery = true)
    List<Conformer> getAllByTemperatureRange(@Param("tempFrom") Integer tempFrom, @Param("tempTo") Integer tempTo);
}
