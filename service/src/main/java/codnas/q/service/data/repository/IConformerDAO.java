package codnas.q.service.data.repository;

import codnas.q.service.core.model.Conformer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IConformerDAO extends JpaRepository<Conformer, Integer> {
    @Query(value = "SELECT * from conformer where cluster_id = :cluster_id", nativeQuery = true)
    List<Conformer> getAllConformersByClusterId(@Param("cluster_id") String cluster_id);

    @Query(value = "SELECT * from conformer where pdb_id = :pdb_id", nativeQuery = true)
    Conformer getConformerById(@Param("pdb_id") String pdb_id);

    @Query(value = "SELECT * from conformer where name like concat('%', :name, '%');", nativeQuery = true)
    List<Conformer> getConformersByName(@Param("name") String name);
}
