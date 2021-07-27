package codnas.q.service.core.service.impl;

import codnas.q.service.core.model.Cluster;
import codnas.q.service.core.model.Conformer;
import codnas.q.service.core.service.IClusterService;
import codnas.q.service.data.parser.ClusterInformationParser;
import codnas.q.service.data.repository.IClusterDAO;
import codnas.q.service.data.repository.IConformerDAO;
import codnas.q.service.shared.dto.ClusterInformationDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClusterService implements IClusterService {
    private final IClusterDAO clusterDAO;
    private final IConformerDAO conformerDAO;

    public ClusterService(IClusterDAO clusterDAO, IConformerDAO conformerDAO) {
        this.clusterDAO = clusterDAO;
        this.conformerDAO = conformerDAO;
    }

    @Override
    public ClusterInformationDTO getClusterInformation(Integer cluster_id) {
        try {
            Optional<Cluster> cluster = clusterDAO.findById(cluster_id);
            if (cluster.isPresent()) {
                Conformer conformer = conformerDAO.getConformerById(cluster.get().getCodnasq_id());
                List<Conformer> conformers = conformerDAO.getAllConformersByClusterId(cluster.get().getCodnasq_id());
                return ClusterInformationParser.toClusterInformationDTO(cluster.get(), conformer, conformers.size());
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }
}
