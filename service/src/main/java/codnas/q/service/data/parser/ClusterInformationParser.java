package codnas.q.service.data.parser;

import codnas.q.service.core.model.Cluster;
import codnas.q.service.core.model.Conformer;
import codnas.q.service.shared.dto.ClusterInformationDTO;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ClusterInformationParser {

    private static String url = "https://s3.us-east-1.amazonaws.com/codnas.inf.pucp.edu.pe/codnas-q/dendrograms/";

    public static ClusterInformationDTO toClusterInformationDTO(Cluster cluster, Conformer conformer, Integer num) {
        ClusterInformationDTO clusterInformationDTO = new ClusterInformationDTO();
        clusterInformationDTO.setCluster_id("CQ".concat(cluster.getCodnasq_id()));
        clusterInformationDTO.setCodnasq_id(cluster.getId_cluster());
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
        clusterInformationDTO.setImage_url(url.concat(cluster.getCodnasq_id()).concat("_dendogram_2020.png"));
        return clusterInformationDTO;
    }

    private static String oligomericStateParse(Integer type) {
        String oligomeric_state = type.toString();
        if (type == 2) oligomeric_state = "Dimer_2";
        else if (type == 3) oligomeric_state = "Trimer_3";
        else if (type == 4) oligomeric_state ="Tetramer_4";
        else if (type == 5) oligomeric_state = "Pentamer_5";
        else if (type == 6) oligomeric_state = "Hexamer_6";
        else if (type == 7) oligomeric_state = "Heptamer_7";
        else if (type == 8) oligomeric_state = "Octamer_8";
        else if (type == 9) oligomeric_state = "Nonamer_9";
        else if (type == 10) oligomeric_state ="Decamer_10";
        else if (type == 11) oligomeric_state = "Undecamer_11";
        else if (type == 12) oligomeric_state = "Dodecamer_12";
        else if (type == 14) oligomeric_state = "Tetradecamer_14";
        else if (type == 24) oligomeric_state = "24-mer_24";
        else if (type == 60) oligomeric_state = "60-mer_60";
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
