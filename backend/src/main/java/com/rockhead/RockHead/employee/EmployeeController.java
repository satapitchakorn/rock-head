package com.rockhead.RockHead.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/employee")
@CrossOrigin
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/init")
    public ResponseEntity<?> init() {
        employeeService.initialEmployeeData();
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable int id) throws Exception {
        return new ResponseEntity<>(employeeService.findEmployeeById(id), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> addEmployee(@RequestBody Employee request) {
        return new ResponseEntity<>(employeeService.addEmployee(request), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> modifyEmployee(@PathVariable int id, @RequestBody Employee request) {
        return new ResponseEntity<>(employeeService.modifyEmployeeById(id, request), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deactivateEmployee(@PathVariable int id) {
        return new ResponseEntity<>(employeeService.deactivateEmployeeById(id), HttpStatus.OK);
    }
}
