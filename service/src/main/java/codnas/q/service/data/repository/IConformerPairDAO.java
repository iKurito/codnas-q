package codnas.q.service.data.repository;

import codnas.q.service.core.model.ConformerPair;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IConformerPairDAO extends JpaRepository<ConformerPair, Integer> {
    @Query(value = "select * from conformer_pair where cluster_id = :cluster_id and rmsd = :rmsd limit 1", nativeQuery = true)
    ConformerPair getConformerPairByMaxRmsd(@Param("cluster_id") String cluster_id, @Param("rmsd") Double rmsd);

    @Query(value = "select * from conformer_pair where (query_id = :query_id and target_id = :target_id) or " +
            "(query_id = :target_id and target_id = :query_id) limit 1", nativeQuery = true)
    ConformerPair getConformerPairByQueryIdAndTargetId(@Param("query_id") String query_id, @Param("target_id") String target_id);
}
