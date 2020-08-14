package com.rockhead.RockHead.log;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class LogService {
    @Autowired
    private final LogRepository logRepository;

    public LogService(LogRepository logRepository) {
        this.logRepository = logRepository;
    }

    public Log createLog(Log data) {
        return logRepository.save(data);
    }

    public Page<Log> findAll(Pageable pageable) {
        return logRepository.findAll(pageable);
    }
}
