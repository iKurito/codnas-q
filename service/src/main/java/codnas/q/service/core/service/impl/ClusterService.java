package codnas.q.service.core.service.impl;

import codnas.q.service.core.model.Cluster;
import codnas.q.service.core.model.Conformer;
import codnas.q.service.core.model.ConformerPair;
import codnas.q.service.core.service.IClusterService;
import codnas.q.service.data.parser.ClusterInformationParser;
import codnas.q.service.data.parser.PairMaxQuatParser;
import codnas.q.service.data.repository.IClusterDAO;
import codnas.q.service.data.repository.IConformerDAO;
import codnas.q.service.data.repository.IConformerPairDAO;
import codnas.q.service.shared.dto.ClusterInformationDTO;
import codnas.q.service.shared.dto.PairMaxQuatDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ClusterService implements IClusterService {
    private final IClusterDAO clusterDAO;
    private final IConformerDAO conformerDAO;
    private final IConformerPairDAO conformerPairDAO;

    public ClusterService(IClusterDAO clusterDAO, IConformerDAO conformerDAO, IConformerPairDAO conformerPairDAO) {
        this.clusterDAO = clusterDAO;
        this.conformerDAO = conformerDAO;
        this.conformerPairDAO = conformerPairDAO;
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

    @Override
    public List<PairMaxQuatDTO> getPairMaxQuat(Integer cluster_id) {
        try {
            Optional<Cluster> cluster = clusterDAO.findById(cluster_id);
            if (cluster.isPresent()) {
                List<PairMaxQuatDTO> pairMaxQuatDTOS = new ArrayList<>();
                ConformerPair conformerPair = conformerPairDAO.getConformerPairByMaxRmsd(cluster.get().getCodnasq_id(),
                        cluster.get().getMax_rmsd_quaternary());
                // Conformer 1
                Conformer conformer1 = conformerDAO.getConformerById(conformerPair.getQuery_id());
                pairMaxQuatDTOS.add(PairMaxQuatParser.toPairMaxQuatDTO(conformer1, conformerPair, 1, true));
                // Conformer 2
                Conformer conformer2 = conformerDAO.getConformerById(conformerPair.getTarget_id());
                pairMaxQuatDTOS.add(PairMaxQuatParser.toPairMaxQuatDTO(conformer2, conformerPair, 2, true));
                // Comparison
                pairMaxQuatDTOS.add(PairMaxQuatParser.toPairMaxQuatDTO(conformer1, conformerPair, 3, false));
                return pairMaxQuatDTOS;
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }
}
