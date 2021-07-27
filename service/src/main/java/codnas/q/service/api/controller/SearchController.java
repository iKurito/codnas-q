package codnas.q.service.api.controller;

import codnas.q.service.api.response.RestResponse;
import codnas.q.service.core.service.impl.SearchService;
import codnas.q.service.shared.dto.ResultDTO;
import codnas.q.service.shared.util.message.SearchMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT})
public class SearchController {
    private final SearchService searchService;

    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @GetMapping(value = "/search/clusters", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllClusters() {
        RestResponse restResponse;
        List<ResultDTO> resultDTOS = searchService.getAllClusters();
        if (resultDTOS == null) restResponse = new RestResponse(HttpStatus.OK, SearchMessage.NO_SUCCESS_GET_RESULTS);
        else restResponse = new RestResponse(HttpStatus.OK, SearchMessage.SUCCESS_GET_RESULTS, resultDTOS);
        return ResponseEntity.
                status(restResponse.getStatus()).
                body(restResponse);
    }
}
