package codnas.q.service.api.controller;

import codnas.q.service.api.response.RestResponse;
import codnas.q.service.core.service.impl.ClusterService;
import codnas.q.service.shared.dto.ClusterInformationDTO;
import codnas.q.service.shared.util.message.ClusterMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT})
public class ClusterController {
    private final ClusterService clusterService;

    public ClusterController(ClusterService clusterService) {
        this.clusterService = clusterService;
    }

    @GetMapping(value = "/cluster/information/{cluster_id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getClusterInformation(@PathVariable Integer cluster_id) {
        RestResponse restResponse;
        ClusterInformationDTO clusterInformationDTO = clusterService.getClusterInformation(cluster_id);
        if (clusterInformationDTO == null) restResponse = new RestResponse(HttpStatus.OK, ClusterMessage.NO_SUCCESS_GET_CLUSTER_INFORMATION);
        else restResponse = new RestResponse(HttpStatus.OK, ClusterMessage.SUCCESS_GET_CLUSTER_INFORMATION, clusterInformationDTO);
        return ResponseEntity.
                status(restResponse.getStatus()).
                body(restResponse);
    }
}
