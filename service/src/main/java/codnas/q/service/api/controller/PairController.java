package codnas.q.service.api.controller;

import codnas.q.service.api.response.RestResponse;
import codnas.q.service.core.service.impl.PairService;
import codnas.q.service.shared.dto.PairDTO;
import codnas.q.service.shared.util.message.PairMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT})
public class PairController {
    private final PairService pairService;

    public PairController(PairService pairService) {
        this.pairService = pairService;
    }
    @GetMapping(value = "/pair/{cluster}/comparison/{query}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllPairs(@PathVariable String cluster, @PathVariable String query) {
        RestResponse restResponse;
        List<PairDTO> pairDTOS = pairService.getAllPairs(query, cluster);
        if (pairDTOS == null) restResponse = new RestResponse(HttpStatus.OK, PairMessage.NO_SUCCESS_GET_PAIRS);
        else restResponse = new RestResponse(HttpStatus.OK, PairMessage.SUCCESS_GET_PAIRS, pairDTOS);
        return ResponseEntity.
                status(restResponse.getStatus()).
                body(restResponse);
    }
}
