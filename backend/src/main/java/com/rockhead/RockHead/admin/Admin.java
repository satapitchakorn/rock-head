package com.rockhead.RockHead.admin;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Admin {
    @Id
    private String id;

    private Integer adminNo;

    private String email;
}
