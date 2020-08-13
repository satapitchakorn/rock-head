package com.rockhead.RockHead.log;

import lombok.Data;

@Data
public class Event {
    private String action;

    private String eventMessage;
}
