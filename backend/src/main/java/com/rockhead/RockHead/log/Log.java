package com.rockhead.RockHead.log;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@Document
public class Log {
    @Id
    private String id;
    @JsonProperty("employee_no")
    private Integer employeeNo;
    @JsonProperty("admin_no")
    private Integer adminNo;
    @JsonProperty("date_of_event")
    private Date dateOfEvent;
    @JsonProperty("log_objects")
    private List<Event> logObjects;
}
