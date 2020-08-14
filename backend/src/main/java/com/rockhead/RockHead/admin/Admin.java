package com.rockhead.RockHead.admin;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Admin {
    @Id
    private String id;

    @JsonProperty("admin_no")
    private Integer adminNo;

    private String email;
}
