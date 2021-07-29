package codnas.q.service.shared.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class QueryDTO {
    private String clusterId;
    private String oligomericState;
    private String group;
    private Double quatFrom;
    private Double quatTo;
    private Double tertFrom;
    private Double tertTo;
    private String description;
    private String bioAssembly;
    private String resolution;
    private String length;
    private String name;
    private String organism;
    private String temperature;
}
