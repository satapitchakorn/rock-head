package com.rockhead.RockHead.log;

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
    private Integer employeeNo;
    private Integer adminNo;
    private Date dateOfEvent;
    private List<Event> logObjects;
}
