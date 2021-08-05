package codnas.q.service.data.repository;

import codnas.q.service.core.model.Cluster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IClusterDAO extends JpaRepository<Cluster, Integer> {
    @Query(value = "select * from cluster where id_cluster = :id_cluster", nativeQuery = true)
    Cluster getByClusterId(@Param("id_cluster") Integer id_cluster);

    @Query(value = "select * from cluster where cluster_group = :group", nativeQuery = true)
    List<Cluster> getAllByGroup(@Param("group") String group);

    @Query(value = "select * from cluster where codnasq_id = :codnasq_id", nativeQuery = true)
    Cluster getByCodnasqId(@Param("codnasq_id") String codnasq_id);

    @Query(value = "select * from cluster where oligomeric_state = :oligomeric_state", nativeQuery = true)
    List<Cluster> getAllByOligomericState(@Param("oligomeric_state") Integer oligomeric_state);

    @Query(value = "select * from cluster where max_rmsd_quaternary >= :quatFrom and max_rmsd_quaternary <= :quatTo", nativeQuery = true)
    List<Cluster> getAllByQuatRmsdRange(@Param("quatFrom") Double quatFrom, @Param("quatTo") Double quatTo);

    @Query(value = "select * from cluster where max_rmsd_tertiary >= :tertFrom and max_rmsd_tertiary <= :tertTo", nativeQuery = true)
    List<Cluster> getAllByTertRmsdRange(@Param("tertFrom") Double tertFrom, @Param("tertTo") Double tertTo);
}
