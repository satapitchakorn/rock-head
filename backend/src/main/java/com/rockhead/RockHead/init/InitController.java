package com.rockhead.RockHead.init;

import com.rockhead.RockHead.employee.EmployeeService;
import com.rockhead.RockHead.log.LogService;
import com.rockhead.RockHead.response.ResponseModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class InitController {
    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private LogService logService;

    @GetMapping("/init")
    public ResponseEntity<?> initData() {
        employeeService.initialEmployeeData();
        logService.initialLogData();
        return new ResponseEntity<>(new ResponseModel(true, "Initial data successful."), HttpStatus.CREATED);
    }
}
