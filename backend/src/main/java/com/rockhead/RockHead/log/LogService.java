package com.rockhead.RockHead.log;

import com.rockhead.RockHead.admin.AdminRepository;
import com.rockhead.RockHead.employee.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class LogService {
    @Autowired
    private final LogRepository logRepository;
    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private EmployeeRepository employeeRepository;

    public LogService(LogRepository logRepository) {
        this.logRepository = logRepository;
    }

    public Log createLog(Log data) {
        return logRepository.save(data);
    }

    public Page<Log> findAll(Pageable pageable) {
        Page<Log> result = logRepository.findAll(pageable);
        for (Log d : result.getContent()) {
            d.setAdminNo(adminRepository.findOneByAdminNo(d.getAdminNo().getAdminNo()));
            d.setEmployeeNo(employeeRepository.findOneByEmployeeNo(d.getEmployeeNo().getEmployeeNo()).orElse(null));
        }
//        return logRepository.findAll(pageable);
        return result;
    }
}
