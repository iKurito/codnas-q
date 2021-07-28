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
        clusterInformationDTO.setOligomeric_state(oligomericStateParse(cluster.getOligomeric_state()));
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

    private static String oligomericStateParse(Integer type) {
        String oligomeric_state = type.toString();
        if (type == 2) oligomeric_state = "Dimer";
        else if (type == 3) oligomeric_state = "Trimer";
        else if (type == 4) oligomeric_state ="Tetramer";
        else if (type == 5) oligomeric_state = "Pentamer";
        else if (type == 6) oligomeric_state = "Hexamer";
        else if (type == 7) oligomeric_state = "Heptamer";
        else if (type == 8) oligomeric_state = "Octamer";
        else if (type == 9) oligomeric_state = "Nonamer";
        else if (type == 10) oligomeric_state ="Decamer";
        else if (type == 11) oligomeric_state = "Undecamer";
        else if (type == 12) oligomeric_state = "Dodecamer";
        else if (type == 14) oligomeric_state = "Tetradecamer";
        else if (type == 24) oligomeric_state = "24-mer";
        else if (type == 60) oligomeric_state = "60-mer";
        return oligomeric_state;
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
