package codnas.q.service.core.service.impl;

import codnas.q.service.core.model.Cluster;
import codnas.q.service.core.model.Conformer;
import codnas.q.service.core.service.ISearchService;
import codnas.q.service.data.parser.ResultParser;
import codnas.q.service.data.repository.IClusterDAO;
import codnas.q.service.data.repository.IConformerDAO;
import codnas.q.service.shared.dto.QueryDTO;
import codnas.q.service.shared.dto.ResultDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
                ResultDTO resultDTO = ResultParser.toResultDTO(cluster, conformers.size(), "", "");
                resultDTOS.add(resultDTO);
            });
            return resultDTOS;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<ResultDTO> getAllClustersByGroup(String group) {
        try {
            List<ResultDTO> resultDTOS = new ArrayList<>();
            List<Cluster> clusters = clusterDAO.getAllByGroup(group);
            clusters.forEach(cluster -> {
                List<Conformer> conformers = conformerDAO.getAllConformersByClusterId(cluster.getCodnasq_id());
                ResultDTO resultDTO = ResultParser.toResultDTO(cluster, conformers.size(), "", "");
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
            conformers.forEach(conformer -> addToResultDTOS(conformer, clusters, resultDTOS, "Name", "%".concat(name).concat("%")));
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
            conformers.forEach(conformer -> addToResultDTOS(conformer, clusters, resultDTOS, "Organism", "%".concat(organism).concat("%")));
            return resultDTOS;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<ResultDTO> getAllClustersByAllFieldsFromHome(String value) {
        try {
            List<ResultDTO> resultDTOS = new ArrayList<>();
            List<String> clusters = new ArrayList<>();
            List<Conformer> conformers;
            // PDB
            Conformer conformer = conformerDAO.getConformerById(value);
            if (conformer != null) {
                Cluster cluster = clusterDAO.getByCodnasqId(conformer.getCluster_id());
                conformers = conformerDAO.getAllConformersByClusterId(cluster.getCodnasq_id());
                resultDTOS.add(ResultParser.toResultDTO(cluster, conformers.size(), "PDB ID", value));
            }
            // Name
            conformers = conformerDAO.getConformersByName(value);
            conformers.forEach(conf -> addToResultDTOS(conf, clusters, resultDTOS, "Name", "%".concat(value).concat("%")));
            // Organism
            conformers = conformerDAO.getConformersByOrganism(value);
            conformers.forEach(conf -> addToResultDTOS(conf, clusters, resultDTOS, "Organism", "%".concat(value).concat("%")));
            return resultDTOS;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<ResultDTO> getAllClustersFromAdvSearch(QueryDTO queryDTO) {
        try {
            List<ResultDTO> resultDTOS = new ArrayList<>();
            List<String> clusters = new ArrayList<>();
            // Cluster ID
            if (!queryDTO.getClusterId().equals("")) {
                String[] strings = queryDTO.getClusterId().split(",");
                List<String> clustersStrings = Arrays.asList(strings);
                clustersStrings.forEach(s -> {
                    Pattern pat = Pattern.compile("[+-]?\\d*(\\.\\d+)?");
                    Matcher mat = pat.matcher(s);
                    if (mat.matches()) {
                        Cluster cluster = clusterDAO.getByClusterId(Integer.parseInt(s));
                        if (cluster != null) {
                            if (!(clusters.contains(cluster.getCodnasq_id()))) {
                                clusters.add(cluster.getCodnasq_id());
                                List<Conformer> conformerList = conformerDAO.getAllConformersByClusterId(cluster.getCodnasq_id());
                                resultDTOS.add(ResultParser.toResultDTO(cluster, conformerList.size(), "PDB ID", cluster.getCodnasq_id()));
                            }
                        }
                    } else {
                        Conformer conformer = conformerDAO.getConformerById(s);
                        if (conformer != null) {
                            addToResultDTOS(conformer, clusters, resultDTOS, "PDB ID", s);
                        }
                    }
                });
            }
            // Oligomeric State
            if (!queryDTO.getOligomericState().equals("")) {
                String[] strings = queryDTO.getOligomericState().split(",");
                List<String> clustersStrings = Arrays.asList(strings);
                clustersStrings.forEach(s -> {
                    List<Cluster> clusterList = clusterDAO.getAllByOligomericState(Integer.parseInt(s));
                    clusterList.forEach(cluster -> addToResultDTOSByCluster(cluster, clusters, resultDTOS,
                            "Oligomeric State", cluster.getOligomeric_state().toString()));
                });
            }
            // Group
            if (!queryDTO.getGroup().equals("")) {
                List<Cluster> clustersGroup = clusterDAO.getAllByGroup(queryDTO.getGroup());
                clustersGroup.forEach(cluster -> {
                    if (!(clusters.contains(cluster.getCodnasq_id()))) {
                        List<Conformer> conformersGroup = conformerDAO.getAllConformersByClusterId(cluster.getCodnasq_id());
                        ResultDTO resultDTO = ResultParser.toResultDTO(cluster, conformersGroup.size(), "", "");
                        resultDTOS.add(resultDTO);
                    }
                });
            }
            // QuatFrom && QuatTo
            if (!queryDTO.getQuatFrom().equals("") && !queryDTO.getQuatTo().equals("")) {
                List<Cluster> clusterList = clusterDAO.getAllByQuatRmsdRange(Double.parseDouble(queryDTO.getQuatFrom()), Double.parseDouble(queryDTO.getQuatTo()));
                clusterList.forEach(cluster -> addToResultDTOSByCluster(cluster, clusters, resultDTOS,
                        "RMSD Quat.", cluster.getMax_rmsd_quaternary().toString().concat(" Å")));
            }
            // TertFrom && TertTo
            if (!queryDTO.getTertFrom().equals("") && !queryDTO.getTertTo().equals("")) {
                List<Cluster> clusterList = clusterDAO.getAllByTertRmsdRange(Double.parseDouble(queryDTO.getTertFrom()), Double.parseDouble(queryDTO.getTertTo()));
                clusterList.forEach(cluster -> addToResultDTOSByCluster(cluster, clusters, resultDTOS,
                        "RMSD Tert.", cluster.getMax_rmsd_tertiary().toString().concat(" Å")));
            }
            // Description
            if (!queryDTO.getDescription().equals("")) {
                String[] strings = queryDTO.getDescription().split(",");
                List<String> descriptionStrings = Arrays.asList(strings);
                descriptionStrings.forEach(s -> {
                    List<Conformer> conformers = conformerDAO.getConformersByDescription(s);
                    conformers.forEach(conf -> addToResultDTOS(conf, clusters, resultDTOS,
                            "", ""));
                });
            }
            // Biological Assembly
            if (!queryDTO.getBioAssembly().equals("")) {
                String[] strings = queryDTO.getBioAssembly().split(",");
                List<String> bioStrings = Arrays.asList(strings);
                bioStrings.forEach(s -> {
                    Pattern pat = Pattern.compile("[+-]?\\d*(\\.\\d+)?");
                    Matcher mat = pat.matcher(s);
                    if (mat.matches()) {
                        List<Conformer> conformers = conformerDAO.getConformersByBioAssembly(Integer.parseInt(s));
                        conformers.forEach(conf -> addToResultDTOS(conf, clusters, resultDTOS, "", ""));
                    }
                });
            }
            // Resolution (From && To)
            if (!queryDTO.getResFrom().equals("") && !queryDTO.getResTo().equals("")) {
                List<Conformer> conformers = conformerDAO.getAllByResolutionRange(Double.parseDouble(queryDTO.getResFrom()), Double.parseDouble(queryDTO.getResTo()));
                conformers.forEach(conf -> addToResultDTOS(conf, clusters, resultDTOS, "Resolution", conf.getResolution().toString()));
            }
            // Length (From && To)
            if (!queryDTO.getLengthFrom().equals("") && !queryDTO.getLengthTo().equals("")) {
                List<Conformer> conformers =
                        conformerDAO.getAllByLengthRange(Integer.parseInt(queryDTO.getLengthFrom()), Integer.parseInt(queryDTO.getLengthTo()));
                conformers.forEach(conf -> addToResultDTOS(conf, clusters, resultDTOS, "Length", conf.getLength()));
            }
            // Name
            if (!queryDTO.getName().equals("")) {
                String[] strings = queryDTO.getName().split(",");
                List<String> nameStrings = Arrays.asList(strings);
                nameStrings.forEach(s -> {
                    List<Conformer> conformers = conformerDAO.getConformersByName(s);
                    conformers.forEach(conf -> addToResultDTOS(conf, clusters, resultDTOS, "Name", "%".concat(s).concat("%")));
                });
            }
            // Organism
            if (!queryDTO.getOrganism().equals("")) {
                String[] strings = queryDTO.getOrganism().split(",");
                List<String> organismStrings = Arrays.asList(strings);
                organismStrings.forEach(s -> {
                    List<Conformer> conformers = conformerDAO.getConformersByOrganism(s);
                    conformers.forEach(conf -> addToResultDTOS(conf, clusters, resultDTOS, "Organism", "%".concat(s).concat("%")));
                });
            }
            // Temperature (From && To)
            if (!queryDTO.getTempFrom().equals("") && !queryDTO.getTempTo().equals("")) {
                List<Conformer> conformers =
                        conformerDAO.getAllByTemperatureRange(Integer.parseInt(queryDTO.getTempFrom()), Integer.parseInt(queryDTO.getTempTo()));
                conformers.forEach(conf -> addToResultDTOS(conf, clusters, resultDTOS, "Temperature", conf.getTemperature().concat(" K")));
            }
            return resultDTOS;
        } catch (Exception e) {
            return null;
        }
    }

    private void addToResultDTOS(Conformer conformer, List<String> clusters, List<ResultDTO> resultDTOS, String name,
                                 String value) {
        if (!(clusters.contains(conformer.getCluster_id()))) {
            clusters.add(conformer.getCluster_id());
            Cluster cluster = clusterDAO.getByCodnasqId(conformer.getCluster_id());
            List<Conformer> conformerList = conformerDAO.getAllConformersByClusterId(cluster.getCodnasq_id());
            resultDTOS.add(ResultParser.toResultDTO(cluster, conformerList.size(), name, value));
        }
    }

    private void addToResultDTOSByCluster(Cluster cluster, List<String> clusters, List<ResultDTO> resultDTOS, String name,
                                          String value) {
        if (!(clusters.contains(cluster.getCodnasq_id()))) {
            clusters.add(cluster.getCodnasq_id());
            List<Conformer> conformerList = conformerDAO.getAllConformersByClusterId(cluster.getCodnasq_id());
            resultDTOS.add(ResultParser.toResultDTO(cluster, conformerList.size(), name, value));
        }
    }
}
