package codnas.q.service.core.service.impl;

import codnas.q.service.core.model.Cluster;
import codnas.q.service.core.model.Conformer;
import codnas.q.service.core.model.ConformerPair;
import codnas.q.service.core.model.Perm;
import codnas.q.service.core.service.IPairService;
import codnas.q.service.data.parser.PairParser;
import codnas.q.service.data.repository.IClusterDAO;
import codnas.q.service.data.repository.IConformerDAO;
import codnas.q.service.data.repository.IConformerPairDAO;
import codnas.q.service.shared.dto.PairDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class PairService implements IPairService {
    private static final Logger LOGGER = LoggerFactory.getLogger(PairService.class);

    private final IConformerPairDAO conformerPairDAO;
    private final IConformerDAO conformerDAO;
    private final IClusterDAO clusterDAO;

    public PairService(IConformerPairDAO conformerPairDAO, IConformerDAO conformerDAO,
                       IClusterDAO clusterDAO) {
        this.conformerPairDAO = conformerPairDAO;
        this.conformerDAO = conformerDAO;
        this.clusterDAO = clusterDAO;
    }

    @Override
    public List<PairDTO> getAllPairs(String query, String clusterId) {
        Cluster cluster;
        Pattern pat = Pattern.compile("[+-]?\\d*(\\.\\d+)?");
        Matcher mat = pat.matcher(clusterId);
        if (mat.matches()) {
            cluster = clusterDAO.getByClusterId(Integer.parseInt(clusterId));
        } else {
            if (clusterId.contains("CQ")) {
                String idCluster = clusterId.split("CQ")[1];
                cluster = clusterDAO.getByCodnasqId(idCluster);
            } else {
                cluster = null;
            }
        }
        try {
            if (cluster != null) {
                HashSet<Perm> pdbHashSet = new HashSet<>();
                List<PairDTO> pairDTOS = new ArrayList<>();
                String[] conformers = query.split("-");
                if (conformers.length > 1) {
                    Conformer conf = conformerDAO.getConformerById(conformers[0]);
                    if (conf != null) {
                        if (conf.getCluster_id().equals(cluster.getCodnasq_id())) {
                            Perm2(conformers, "", 2, conformers.length, pdbHashSet);
                            var ref = new Object() {
                                int id = 1;
                            };
                            pdbHashSet.forEach(s -> {
                                LOGGER.info("KURITO: INICIO {}. {}", ref.id, s);
                                ConformerPair conformerPair = conformerPairDAO.getConformerPairByQueryIdAndTargetId(s.getVal1(), s.getVal2());
                                if (conformerPair != null) {
                                    Conformer conformer1 = conformerDAO.getConformerById(conformerPair.getQuery_id());
                                    Conformer conformer2 = conformerDAO.getConformerById(conformerPair.getTarget_id());
                                    pairDTOS.add(PairParser.toPairParserDTO(ref.id, conformer1, conformer2, conformerPair, cluster));
                                    ref.id++;
                                }
                            });
                        }
                    }
                }
                return pairDTOS;
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    private void Perm2(String[] elem, String act, int n, int r, HashSet<Perm> pdbHashSet) {
        if (n == 0) {
            String temp[] = act.split(" ");
            Perm permModel = new Perm(temp[0], temp[1]);
            pdbHashSet.add(permModel);
        } else {
            for (int i = 0; i < r; i++) {
                if (!act.contains(elem[i])) {
                    Perm2(elem, act + elem[i] + " ", n - 1, r, pdbHashSet);
                }
            }
        }
    }
}
