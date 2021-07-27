package codnas.q.service.api.response;

import codnas.q.service.shared.util.Format;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RestResponse {
    private HttpStatus status;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = Format.DATE_TIME)
    private LocalDateTime timestamp;
    private String message;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Object payload;


    public RestResponse(HttpStatus status, String message) {
        this.timestamp = LocalDateTime.now();
        this.status = status;
        this.message = message;
    }

    public RestResponse(HttpStatus status, String message, Object payload) {
        this(status, message);
        this.payload = payload;
    }
}
