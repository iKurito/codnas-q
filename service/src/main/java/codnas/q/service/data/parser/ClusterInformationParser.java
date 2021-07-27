package codnas.q.service.data.parser;

import codnas.q.service.core.model.Cluster;
import codnas.q.service.core.model.Conformer;
import codnas.q.service.shared.dto.ClusterInformationDTO;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ClusterInformationParser {
    public static ClusterInformationDTO toClusterInformationDTO(Cluster cluster, Conformer conformer, Integer num) {
        ClusterInformationDTO clusterInformationDTO = new ClusterInformationDTO();
        clusterInformationDTO.setCluster_id(cluster.getCodnasq_id());
        clusterInformationDTO.setGroup(groupParse(cluster.getCluster_group()));
        clusterInformationDTO.setOligomeric_state(cluster.getOligomeric_state());
        clusterInformationDTO.setNum_conf(num);
        clusterInformationDTO.setMax_rmsd_quaternary(cluster.getMax_rmsd_quaternary());
        clusterInformationDTO.setMax_rmsd_tertiary(cluster.getMax_rmsd_tertiary());
        clusterInformationDTO.setName(conformer.getName());
        clusterInformationDTO.setDescription(conformer.getDescription());
        clusterInformationDTO.setOrganism(conformer.getOrganism());
        clusterInformationDTO.setGenes(conformer.getGene_names());
        clusterInformationDTO.setLength(conformer.getLength());
        return clusterInformationDTO;
    }

    private static String groupParse(String type) {
        if (!type.equals("a")) {
            if (type.equals("b")) return "Mixed Motions";
            else if (type.equals("c")) return "Rigid Body";
        } else {
            return "Tertiary Deformations";
        }
        return "Not Available";
    }
}
