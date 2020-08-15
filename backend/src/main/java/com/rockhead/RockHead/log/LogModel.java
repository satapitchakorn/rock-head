package com.rockhead.RockHead.log;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.rockhead.RockHead.admin.Admin;
import com.rockhead.RockHead.employee.Employee;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class LogModel {
    private String id;

    @JsonProperty("employee_no")
    private Employee employee;

    @JsonProperty("admin_no")
    private Admin admin;

    @JsonProperty("date_of_event")
    private Date dateOfEvent;
    @JsonProperty("log_objects")
    private List<Event> logObjects;
}
