package com.rockhead.RockHead.employee;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document
public class Employee {
    @Id
    private String id;
    private Integer employeeNo;
    private String firstName;
    private String lastName;
    private Date startDate;
    private String position;
    private String email;
    private String phone;
    private String passport;
}
