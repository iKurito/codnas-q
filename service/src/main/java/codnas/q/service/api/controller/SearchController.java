package codnas.q.service.api.controller;

import codnas.q.service.api.response.RestResponse;
import codnas.q.service.core.service.impl.SearchService;
import codnas.q.service.shared.dto.QueryDTO;
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

    @GetMapping(value = "/search/clusters/group/{group}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllClustersByGroup(@PathVariable String group) {
        RestResponse restResponse;
        List<ResultDTO> resultDTOS = searchService.getAllClustersByGroup(group);
        if (resultDTOS == null) restResponse = new RestResponse(HttpStatus.OK, SearchMessage.NO_SUCCESS_GET_RESULTS);
        else restResponse = new RestResponse(HttpStatus.OK, SearchMessage.SUCCESS_GET_RESULTS, resultDTOS);
        return ResponseEntity.
                status(restResponse.getStatus()).
                body(restResponse);
    }

    @GetMapping(value = "/search/clusters/name/{name}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllClustersByName(@PathVariable String name) {
        RestResponse restResponse;
        List<ResultDTO> resultDTOS = searchService.getAllClustersByName(name);
        if (resultDTOS == null) restResponse = new RestResponse(HttpStatus.OK, SearchMessage.NO_SUCCESS_GET_RESULTS);
        else restResponse = new RestResponse(HttpStatus.OK, SearchMessage.SUCCESS_GET_RESULTS, resultDTOS);
        return ResponseEntity.
                status(restResponse.getStatus()).
                body(restResponse);
    }

    @GetMapping(value = "/search/clusters/description/{description}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllClustersByDescription(@PathVariable String description) {
        RestResponse restResponse;
        List<ResultDTO> resultDTOS = searchService.getAllClustersByDescription(description);
        if (resultDTOS == null) restResponse = new RestResponse(HttpStatus.OK, SearchMessage.NO_SUCCESS_GET_RESULTS);
        else restResponse = new RestResponse(HttpStatus.OK, SearchMessage.SUCCESS_GET_RESULTS, resultDTOS);
        return ResponseEntity.
                status(restResponse.getStatus()).
                body(restResponse);
    }

    @GetMapping(value = "/search/clusters/organism/{organism}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllClustersByOrganism(@PathVariable String organism) {
        RestResponse restResponse;
        List<ResultDTO> resultDTOS = searchService.getAllClustersByOrganism(organism);
        if (resultDTOS == null) restResponse = new RestResponse(HttpStatus.OK, SearchMessage.NO_SUCCESS_GET_RESULTS);
        else restResponse = new RestResponse(HttpStatus.OK, SearchMessage.SUCCESS_GET_RESULTS, resultDTOS);
        return ResponseEntity.
                status(restResponse.getStatus()).
                body(restResponse);
    }

    @GetMapping(value = "/search/clusters/uniprot/{uniprot}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllClustersByUniProt(@PathVariable String uniprot) {
        RestResponse restResponse;
        List<ResultDTO> resultDTOS = searchService.getAllClustersByUniProt(uniprot);
        if (resultDTOS == null) restResponse = new RestResponse(HttpStatus.OK, SearchMessage.NO_SUCCESS_GET_RESULTS);
        else restResponse = new RestResponse(HttpStatus.OK, SearchMessage.SUCCESS_GET_RESULTS, resultDTOS);
        return ResponseEntity.
                status(restResponse.getStatus()).
                body(restResponse);
    }

    @GetMapping(value = "/search/clusters/allFields/{value}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllClustersByAllFields(@PathVariable String value) {
        RestResponse restResponse;
        List<ResultDTO> resultDTOS = searchService.getAllClustersByAllFieldsFromHome(value);
        if (resultDTOS == null) restResponse = new RestResponse(HttpStatus.OK, SearchMessage.NO_SUCCESS_GET_RESULTS);
        else restResponse = new RestResponse(HttpStatus.OK, SearchMessage.SUCCESS_GET_RESULTS, resultDTOS);
        return ResponseEntity.
                status(restResponse.getStatus()).
                body(restResponse);
    }

    @PostMapping(value = "/search/clusters/allFields", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllClustersFromAdvSearch(@RequestBody QueryDTO queryDTO) {
        RestResponse restResponse;
        List<ResultDTO> resultDTOS = searchService.getAllClustersFromAdvSearch(queryDTO);
        if (resultDTOS == null) restResponse = new RestResponse(HttpStatus.OK, SearchMessage.NO_SUCCESS_GET_RESULTS);
        else restResponse = new RestResponse(HttpStatus.OK, SearchMessage.SUCCESS_GET_RESULTS, resultDTOS);
        return ResponseEntity.
                status(restResponse.getStatus()).
                body(restResponse);
    }
}
