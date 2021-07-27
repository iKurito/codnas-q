package codnas.q.service.data.repository;

import codnas.q.service.core.model.Cluster;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IClusterDAO extends JpaRepository<Cluster, Integer> {
}
