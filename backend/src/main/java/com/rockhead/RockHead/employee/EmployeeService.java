package com.rockhead.RockHead.employee;

import com.rockhead.RockHead.admin.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public void initialEmployeeData() {
        employeeRepository.deleteAll();
        Employee data = new Employee();
        data.setEmployeeNo(251171);
        data.setFirstname("Suthinan");
        data.setLastname("Musitmani");
        data.setStartDate(new Date());
        data.setPosition("Junior backend developer");
        data.setEmail("suthinan.musitmani@allianz.com");
        data.setPhone("0868441328");
        data.setPassport("1209701763081");
        employeeRepository.save(data);
    }

    public Employee findEmployeeById(int id) {
        return employeeRepository.findOneByEmployeeNo(id).orElse(null);
    }

    public Employee addEmployee(Employee request) {
        return employeeRepository.save(request);
    }

    public Employee modifyEmployeeById(int id, Employee request) {
        Employee employee = employeeRepository.findOneByEmployeeNo(id).orElse(null);
        employee.setEmail(request.getEmail());
        employee.setFirstname(request.getFirstname());
        employee.setLastname(request.getLastname());
        employee.setStartDate(request.getStartDate());
        employee.setPassport(request.getPassport());
        employee.setPhone(request.getPhone());
        employee.setPosition(request.getPosition());
        return employeeRepository.save(employee);
    }

    public Employee deactivateEmployeeById(int id) {
        Employee employee = employeeRepository.findOneByEmployeeNo(id).orElse(null);
        employee.setStatus(false);
        return employeeRepository.save(employee);
    }
}
