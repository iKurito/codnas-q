package codnas.q.service.api.controller;

import codnas.q.service.api.response.RestResponse;
import codnas.q.service.core.service.impl.ClusterService;
import codnas.q.service.shared.dto.ClusterInformationDTO;
import codnas.q.service.shared.dto.ConformerDTO;
import codnas.q.service.shared.dto.PairQuatDTO;
import codnas.q.service.shared.util.message.ClusterMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT})
public class ClusterController {
    private final ClusterService clusterService;

    public ClusterController(ClusterService clusterService) {
        this.clusterService = clusterService;
    }

    @GetMapping(value = "/cluster/information/{id_cluster}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getClusterInformation(@PathVariable String id_cluster) {
        RestResponse restResponse;
        ClusterInformationDTO clusterInformationDTO = clusterService.getClusterInformation(id_cluster);
        if (clusterInformationDTO == null) restResponse = new RestResponse(HttpStatus.OK, ClusterMessage.NO_SUCCESS_GET_CLUSTER_INFORMATION);
        else restResponse = new RestResponse(HttpStatus.OK, ClusterMessage.SUCCESS_GET_CLUSTER_INFORMATION, clusterInformationDTO);
        return ResponseEntity.
                status(restResponse.getStatus()).
                body(restResponse);
    }

    @GetMapping(value = "/cluster/pairMaxQuat/{id_cluster}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getPairMaximumQuaternary(@PathVariable String id_cluster) {
        RestResponse restResponse;
        List<PairQuatDTO> pairQuatDTOS = clusterService.getPairMaxQuaternary(id_cluster);
        if (pairQuatDTOS == null) restResponse = new RestResponse(HttpStatus.OK, ClusterMessage.NO_SUCCESS_GET_PAIR_MAXIMUM);
        else restResponse = new RestResponse(HttpStatus.OK, ClusterMessage.SUCCESS_GET_PAIR_MAXIMUM, pairQuatDTOS);
        return ResponseEntity.
                status(restResponse.getStatus()).
                body(restResponse);
    }

    @GetMapping(value = "/cluster/conformers/{id_cluster}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getConformers(@PathVariable String id_cluster) {
        RestResponse restResponse;
        List<ConformerDTO> conformerDTOS = clusterService.getConformers(id_cluster);
        if (conformerDTOS == null) restResponse = new RestResponse(HttpStatus.OK, ClusterMessage.NO_SUCCESS_GET_CONFORMERS);
        else restResponse = new RestResponse(HttpStatus.OK, ClusterMessage.SUCCESS_GET_CONFORMERS, conformerDTOS);
        return ResponseEntity.
                status(restResponse.getStatus()).
                body(restResponse);
    }
}
