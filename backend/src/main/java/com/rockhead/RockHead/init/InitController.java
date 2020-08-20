package com.rockhead.RockHead.init;

import com.rockhead.RockHead.admin.AdminService;
import com.rockhead.RockHead.employee.EmployeeService;
import com.rockhead.RockHead.log.LogService;
import com.rockhead.RockHead.response.ResponseModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class InitController {
    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private LogService logService;
    @Autowired
    private AdminService adminService;

    @GetMapping("/init")
    public ResponseEntity<?> initData() {
        employeeService.initialEmployeeData();
        logService.initialLogData();
        adminService.initDataAdmin();
        return new ResponseEntity<>(new ResponseModel(true, "Initial data successful."), HttpStatus.CREATED);
    }

    @GetMapping("/add")
    public ResponseEntity<?> injectLogInformation(@RequestParam(value = "n", defaultValue = "20") int n) {
        logService.addLogData(n);
        return new ResponseEntity<>(new ResponseModel(true, "add data successful."), HttpStatus.CREATED);
    }
}
