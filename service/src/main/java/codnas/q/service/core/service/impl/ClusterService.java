package codnas.q.service.core.service.impl;

import codnas.q.service.core.model.Cluster;
import codnas.q.service.core.model.Conformer;
import codnas.q.service.core.model.ConformerPair;
import codnas.q.service.core.service.IClusterService;
import codnas.q.service.data.parser.ClusterInformationParser;
import codnas.q.service.data.parser.ConformerParser;
import codnas.q.service.data.parser.PairQuatParser;
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
    public ClusterInformationDTO getClusterInformation(String id_cluster) {
        try {
            Pattern pat = Pattern.compile("[+-]?\\d*(\\.\\d+)?");
            Matcher mat = pat.matcher(id_cluster);
            if (mat.matches()) {
                Cluster cluster = clusterDAO.getByClusterId(Integer.parseInt(id_cluster));
                if (cluster != null) {
                    Conformer conformer = conformerDAO.getConformerById(cluster.getCodnasq_id());
                    List<Conformer> conformers = conformerDAO.getAllConformersByClusterId(cluster.getCodnasq_id());
                    return ClusterInformationParser.toClusterInformationDTO(cluster, conformer, conformers.size());
                }
            } else {
                Pattern pat1 = Pattern.compile("cq([0-9][a-zA-Z_0-9]{3})");
                Pattern pat2 = Pattern.compile("[0-9][a-zA-Z_0-9]{3}");
                Matcher mat1 = pat1.matcher(id_cluster.toLowerCase());
                Matcher mat2 = pat2.matcher(id_cluster.toLowerCase());
                if (mat1.matches()) {
                    Conformer conformer = conformerDAO.getConformerById(id_cluster.toLowerCase().substring(2));
                    Cluster cluster = clusterDAO.getByCodnasqId(conformer.getCluster_id());
                    List<Conformer> conformers = conformerDAO.getAllConformersByClusterId(cluster.getCodnasq_id());
                    return ClusterInformationParser.toClusterInformationDTO(cluster, conformer, conformers.size());
                } else if (mat2.matches()) {
                    Conformer conformer = conformerDAO.getConformerById(id_cluster);
                    Cluster cluster = clusterDAO.getByCodnasqId(conformer.getCluster_id());
                    List<Conformer> conformers = conformerDAO.getAllConformersByClusterId(cluster.getCodnasq_id());
                    return ClusterInformationParser.toClusterInformationDTO(cluster, conformer, conformers.size());
                }
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<PairQuatDTO> getPairMaxQuaternary(String id_cluster) {
        try {
            Pattern pat = Pattern.compile("[+-]?\\d*(\\.\\d+)?");
            Matcher mat = pat.matcher(id_cluster);
            ConformerPair conformerPair = new ConformerPair();
            if (mat.matches()) {
                Optional<Cluster> cluster = clusterDAO.findById(Integer.parseInt(id_cluster));
                if (cluster.isPresent()) {
                    conformerPair = conformerPairDAO.getConformerPairByMaxRmsd(cluster.get().getCodnasq_id(),
                            cluster.get().getMax_rmsd_quaternary());
                }
            } else {
                Pattern pat1 = Pattern.compile("cq([0-9][a-zA-Z_0-9]{3})");
                Pattern pat2 = Pattern.compile("[0-9][a-zA-Z_0-9]{3}");
                Matcher mat1 = pat1.matcher(id_cluster.toLowerCase());
                Matcher mat2 = pat2.matcher(id_cluster.toLowerCase());
                if (mat1.matches()) {
                    Conformer conformer = conformerDAO.getConformerById(id_cluster.toLowerCase().substring(2));
                    Cluster cluster = clusterDAO.getByCodnasqId(conformer.getCluster_id());
                    conformerPair = conformerPairDAO.getConformerPairByMaxRmsd(cluster.getCodnasq_id(),
                            cluster.getMax_rmsd_quaternary());
                } else if (mat2.matches()) {
                    Conformer conformer = conformerDAO.getConformerById(id_cluster);
                    Cluster cluster = clusterDAO.getByCodnasqId(conformer.getCluster_id());
                    conformerPair = conformerPairDAO.getConformerPairByMaxRmsd(cluster.getCodnasq_id(),
                            cluster.getMax_rmsd_quaternary());
                }
            }
            List<PairQuatDTO> pairMaxQuaternaryDTOS = new ArrayList<>();
            // Conformer 1
            Conformer conformer1 = conformerDAO.getConformerById(conformerPair.getQuery_id());
            pairMaxQuaternaryDTOS.add(PairQuatParser.toPairQuatDTO(conformer1, conformerPair, 1, false));
            // Conformer 2
            Conformer conformer2 = conformerDAO.getConformerById(conformerPair.getTarget_id());
            pairMaxQuaternaryDTOS.add(PairQuatParser.toPairQuatDTO(conformer2, conformerPair, 2, false));
            // Comparison
            pairMaxQuaternaryDTOS.add(PairQuatParser.toPairQuatDTO(conformer1, conformerPair, 3, true));
            return pairMaxQuaternaryDTOS;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<ConformerDTO> getConformers(String id_cluster) {
        try {
            Pattern pat = Pattern.compile("[+-]?\\d*(\\.\\d+)?");
            Matcher mat = pat.matcher(id_cluster);
            List<Conformer> conformers = new ArrayList<>();
            if (mat.matches()) {
                Optional<Cluster> cluster = clusterDAO.findById(Integer.parseInt(id_cluster));
                if (cluster.isPresent()) {
                    conformers = conformerDAO.getAllConformersByClusterId(cluster.get().getCodnasq_id());
                }
            } else {
                Pattern pat1 = Pattern.compile("cq([0-9][a-zA-Z_0-9]{3})");
                Pattern pat2 = Pattern.compile("[0-9][a-zA-Z_0-9]{3}");
                Matcher mat1 = pat1.matcher(id_cluster.toLowerCase());
                Matcher mat2 = pat2.matcher(id_cluster.toLowerCase());
                if (mat1.matches()) {
                    Conformer conformer = conformerDAO.getConformerById(id_cluster.substring(2));
                    Cluster cluster = clusterDAO.getByCodnasqId(conformer.getCluster_id());
                    conformers = conformerDAO.getAllConformersByClusterId(cluster.getCodnasq_id());
                } else if (mat2.matches()) {
                    Conformer conformer = conformerDAO.getConformerById(id_cluster);
                    Cluster cluster = clusterDAO.getByCodnasqId(conformer.getCluster_id());
                    conformers = conformerDAO.getAllConformersByClusterId(cluster.getCodnasq_id());
                }
            }
            List<ConformerDTO> conformerDTOS = new ArrayList<>();
            conformers.forEach(conformer -> conformerDTOS.add(ConformerParser.toConformerDTO(conformer)));
            return conformerDTOS;
        } catch (Exception e) {
            return null;
        }
    }
}
