package codnas.q.service.core.service.impl;

import codnas.q.service.core.model.Cluster;
import codnas.q.service.core.model.Conformer;
import codnas.q.service.core.model.ConformerPair;
import codnas.q.service.core.service.IClusterService;
import codnas.q.service.data.parser.ClusterInformationParser;
import codnas.q.service.data.parser.ConformerParser;
import codnas.q.service.data.parser.PairMaxQuatParser;
import codnas.q.service.data.repository.IClusterDAO;
import codnas.q.service.data.repository.IConformerDAO;
import codnas.q.service.data.repository.IConformerPairDAO;
import codnas.q.service.shared.dto.ClusterInformationDTO;
import codnas.q.service.shared.dto.ConformerDTO;
import codnas.q.service.shared.dto.PairQuatDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
    public ClusterInformationDTO getClusterInformation(String cluster_id) {
        try {
            Pattern pat = Pattern.compile("[+-]?\\d*(\\.\\d+)?");
            Matcher mat = pat.matcher(cluster_id);
            if (mat.matches()) {
                Optional<Cluster> cluster = clusterDAO.findById(Integer.parseInt(cluster_id));
                if (cluster.isPresent()) {
                    Conformer conformer = conformerDAO.getConformerById(cluster.get().getCodnasq_id());
                    List<Conformer> conformers = conformerDAO.getAllConformersByClusterId(cluster.get().getCodnasq_id());
                    return ClusterInformationParser.toClusterInformationDTO(cluster.get(), conformer, conformers.size());
                }
            } else {
                Conformer conformer = conformerDAO.getConformerById(cluster_id);
                Cluster cluster = clusterDAO.getByCodnasqId(conformer.getCluster_id());
                List<Conformer> conformers = conformerDAO.getAllConformersByClusterId(cluster.getCodnasq_id());
                return ClusterInformationParser.toClusterInformationDTO(cluster, conformer, conformers.size());
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<PairQuatDTO> getPairMaxQuaternary(String cluster_id) {
        try {
            Pattern pat = Pattern.compile("[+-]?\\d*(\\.\\d+)?");
            Matcher mat = pat.matcher(cluster_id);
            ConformerPair conformerPair = new ConformerPair();
            if (mat.matches()) {
                Optional<Cluster> cluster = clusterDAO.findById(Integer.parseInt(cluster_id));
                if (cluster.isPresent()) {
                    conformerPair = conformerPairDAO.getConformerPairByMaxRmsd(cluster.get().getCodnasq_id(),
                            cluster.get().getMax_rmsd_quaternary());
                }
            } else {
                Conformer conformer = conformerDAO.getConformerById(cluster_id);
                Cluster cluster = clusterDAO.getByCodnasqId(conformer.getCluster_id());
                conformerPair = conformerPairDAO.getConformerPairByMaxRmsd(cluster.getCodnasq_id(),
                        cluster.getMax_rmsd_quaternary());
            }
            List<PairQuatDTO> pairMaxQuaternaryDTOS = new ArrayList<>();
            // Conformer 1
            Conformer conformer1 = conformerDAO.getConformerById(conformerPair.getQuery_id());
            pairMaxQuaternaryDTOS.add(PairMaxQuatParser.toPairMaxQuatDTO(conformer1, conformerPair, 1, true));
            // Conformer 2
            Conformer conformer2 = conformerDAO.getConformerById(conformerPair.getTarget_id());
            pairMaxQuaternaryDTOS.add(PairMaxQuatParser.toPairMaxQuatDTO(conformer2, conformerPair, 2, true));
            // Comparison
            pairMaxQuaternaryDTOS.add(PairMaxQuatParser.toPairMaxQuatDTO(conformer1, conformerPair, 3, false));
            return pairMaxQuaternaryDTOS;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<ConformerDTO> getConformers(String cluster_id) {
        try {
            Pattern pat = Pattern.compile("[+-]?\\d*(\\.\\d+)?");
            Matcher mat = pat.matcher(cluster_id);
            List<Conformer> conformers = new ArrayList<>();
            if (mat.matches()) {
                Optional<Cluster> cluster = clusterDAO.findById(Integer.parseInt(cluster_id));
                if (cluster.isPresent()) {
                    conformers = conformerDAO.getAllConformersByClusterId(cluster.get().getCodnasq_id());
                }
            } else {
                Conformer conformer = conformerDAO.getConformerById(cluster_id);
                Cluster cluster = clusterDAO.getByCodnasqId(conformer.getCluster_id());
                conformers = conformerDAO.getAllConformersByClusterId(cluster.getCodnasq_id());
            }
            List<ConformerDTO> conformerDTOS = new ArrayList<>();
            conformers.forEach(conformer -> conformerDTOS.add(ConformerParser.toConformerDTO(conformer)));
            return conformerDTOS;
        } catch (Exception e) {
            return null;
        }
    }
}
