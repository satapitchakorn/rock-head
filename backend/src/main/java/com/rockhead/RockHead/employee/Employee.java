package com.rockhead.RockHead.employee;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document
public class Employee {
    @Id
    private String id;
    @JsonProperty("employee_no")
    private Integer employeeNo;
    private String firstname;
    private String lastname;
    @JsonProperty("start_date")
    private Date startDate;
    private String position;
    private String email;
    private String phone;
    private String passport;
}
