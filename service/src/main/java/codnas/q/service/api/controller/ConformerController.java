package codnas.q.service.api.controller;

import codnas.q.service.api.response.RestResponse;
import codnas.q.service.core.service.impl.ConformerService;
import codnas.q.service.shared.dto.ConformerInformationDTO;
import codnas.q.service.shared.util.message.ConformerMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT})
public class ConformerController {
    private final ConformerService conformerService;

    public ConformerController(ConformerService conformerService) {
        this.conformerService = conformerService;
    }

    @GetMapping(value = "/conformer/{pdb_id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getConformers(@PathVariable String pdb_id) {
        RestResponse restResponse;
        ConformerInformationDTO conformerInformationDTO = conformerService.getConformer(pdb_id);
        if (conformerInformationDTO == null) restResponse = new RestResponse(HttpStatus.OK, ConformerMessage.NO_SUCCESS_GET_CONFORMER_INFORMATION);
        else restResponse = new RestResponse(HttpStatus.OK, ConformerMessage.SUCCESS_GET_CONFORMER_INFORMATION, conformerInformationDTO);
        return ResponseEntity.
                status(restResponse.getStatus()).
                body(restResponse);
    }
}
