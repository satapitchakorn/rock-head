package com.rockhead.RockHead.log;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Event {

    private String action;

    @JsonProperty("event_message")
    private String eventMessage;

    @JsonProperty("form_id")
    private Integer formId;

    @JsonProperty("element_name")
    private String elementName;
}
