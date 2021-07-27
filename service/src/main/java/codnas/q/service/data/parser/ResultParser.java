package codnas.q.service.data.parser;

import codnas.q.service.core.model.Cluster;
import codnas.q.service.shared.dto.ResultDTO;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ResultParser {

    public static ResultDTO toResultDTO(Cluster cluster) {
        ResultDTO resultDTO = new ResultDTO();
        resultDTO.setCluster_id(cluster.getCluster_id());
        resultDTO.setCodnasq_id(cluster.getCodnasq_id());
        resultDTO.setGroup(groupParse(cluster.getCluster_group()));
        resultDTO.setOligomeric_state(cluster.getOligomeric_state());
        resultDTO.setNum_conf(0);
        resultDTO.setMax_rmsd_quaternary(cluster.getMax_rmsd_quaternary());
        resultDTO.setMax_rmsd_tertiary(cluster.getMax_rmsd_tertiary());
        return resultDTO;
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
