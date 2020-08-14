package com.rockhead.RockHead.employee;

import com.rockhead.RockHead.admin.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public void initialEmployeeData() {
        employeeRepository.deleteAll();
        Employee data = new Employee();
        data.setEmployeeNo(251165);
        data.setFirstname("Suthinan");
        data.setLastname("Musitmani");
        data.setStartDate(new Date());
        data.setPosition("Junior backend developer");
        data.setEmail("suthinan.musitmani@allianz.com");
        data.setPhone("0868441328");
        data.setPassport("1209701763081");
        employeeRepository.save(data);
    }
}
