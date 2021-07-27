package codnas.q.service.data.repository;

import codnas.q.service.core.model.Conformer;
import codnas.q.service.core.model.ConformerPair;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IConformerPairDAO extends JpaRepository<ConformerPair, Integer> {
    @Query(value = "select * from conformer_pair where cluster_id = :cluster_id and rmsd = :rmsd limit 1", nativeQuery = true)
    ConformerPair getConformerPairByMaxRmsd(@Param("cluster_id") String cluster_id, @Param("rmsd") Double rmsd);
}
