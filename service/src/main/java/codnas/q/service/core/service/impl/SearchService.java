package codnas.q.service.core.service.impl;

import codnas.q.service.core.model.Cluster;
import codnas.q.service.core.model.Conformer;
import codnas.q.service.core.service.ISearchService;
import codnas.q.service.data.parser.ResultParser;
import codnas.q.service.data.repository.IClusterDAO;
import codnas.q.service.data.repository.IConformerDAO;
import codnas.q.service.shared.dto.ResultDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SearchService implements ISearchService {
    private final IClusterDAO clusterDAO;
    private final IConformerDAO conformerDAO;

    public SearchService(IClusterDAO clusterDAO, IConformerDAO conformerDAO) {
        this.clusterDAO = clusterDAO;
        this.conformerDAO = conformerDAO;
    }

    @Override
    public List<ResultDTO> getAllClusters() {
        try {
            List<ResultDTO> resultDTOS = new ArrayList<>();
            List<Cluster> clusters = clusterDAO.findAll();
            clusters.forEach(cluster -> {
                List<Conformer> conformers = conformerDAO.getAllConformersByClusterId(cluster.getCodnasq_id());
                ResultDTO resultDTO = ResultParser.toResultDTO(cluster, conformers.size());
                resultDTOS.add(resultDTO);
            });
            return resultDTOS;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<ResultDTO> getAllClutersByGroup(String group) {
        try {
            List<ResultDTO> resultDTOS = new ArrayList<>();
            List<Cluster> clusters = clusterDAO.getAllByGroup(group);
            clusters.forEach(cluster -> {
                List<Conformer> conformers = conformerDAO.getAllConformersByClusterId(cluster.getCodnasq_id());
                ResultDTO resultDTO = ResultParser.toResultDTO(cluster, conformers.size());
                resultDTOS.add(resultDTO);
            });
            return resultDTOS;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<ResultDTO> getAllClustersByName(String name) {
        try {
            List<ResultDTO> resultDTOS = new ArrayList<>();
            List<Conformer> conformers = conformerDAO.getConformersByName(name);
            List<String> clusters = new ArrayList<>();
            conformers.forEach(conformer -> {
                if (!(clusters.contains(conformer.getCluster_id()))) {
                    clusters.add(conformer.getCluster_id());
                    Cluster cluster = clusterDAO.getByCodnasqId(conformer.getCluster_id());
                    List<Conformer> conformerList = conformerDAO.getAllConformersByClusterId(cluster.getCodnasq_id());
                    resultDTOS.add(ResultParser.toResultDTO(cluster, conformerList.size()));
                }
            });
            return resultDTOS;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<ResultDTO> getAllClustersByOrganism(String organism) {
        try {
            List<ResultDTO> resultDTOS = new ArrayList<>();
            List<Conformer> conformers = conformerDAO.getConformersByOrganism(organism);
            List<String> clusters = new ArrayList<>();
            conformers.forEach(conformer -> {
                if (!(clusters.contains(conformer.getCluster_id()))) {
                    clusters.add(conformer.getCluster_id());
                    Cluster cluster = clusterDAO.getByCodnasqId(conformer.getCluster_id());
                    List<Conformer> conformerList = conformerDAO.getAllConformersByClusterId(cluster.getCodnasq_id());
                    resultDTOS.add(ResultParser.toResultDTO(cluster, conformerList.size()));
                }
            });
            return resultDTOS;
        } catch (Exception e) {
            return null;
        }
    }
}
