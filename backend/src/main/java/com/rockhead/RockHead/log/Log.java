package com.rockhead.RockHead.log;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Log {
    @Id
    private String id;
}
