package codnas.q.service.data.repository;

import codnas.q.service.core.model.Cluster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IClusterDAO extends JpaRepository<Cluster, Integer> {
    @Query(value = "select * from cluster where cluster_group = :group", nativeQuery = true)
    List<Cluster> getAllByGroup(@Param("group") String group);
}
