package com.rockhead.RockHead.log;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LogService {
    @Autowired
    private LogRepository logRepository;
}
