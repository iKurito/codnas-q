package codnas.q.service.shared.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class QueryDTO {
    private String clusterProperty;
    private String clusterId;
    private String oligomericState;
    private String group;
    private String quatFrom;
    private String quatTo;
    private String tertFrom;
    private String tertTo;
    private String description;
    private String bioAssembly;
    private String resFrom;
    private String resTo;
    private String lengthFrom;
    private String lengthTo;
    private String name;
    private String organism;
    private String tempFrom;
    private String tempTo;
}
