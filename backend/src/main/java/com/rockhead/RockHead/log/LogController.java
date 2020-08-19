package com.rockhead.RockHead.log;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@RequestMapping("/api/v1/log")
@CrossOrigin
public class LogController {

    @Autowired
    private LogService logService;

    @GetMapping("")
    public ResponseEntity<?> findAll() {
        return new ResponseEntity<>(logService.findAllWithOperation(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> createLog(@RequestBody Log data) {
        return new ResponseEntity<>(logService.createLog(data), HttpStatus.CREATED);
    }
}
