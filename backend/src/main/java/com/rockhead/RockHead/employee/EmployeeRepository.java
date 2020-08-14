package com.rockhead.RockHead.employee;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface EmployeeRepository extends MongoRepository<Employee, String> {

    Optional<Employee> findOneByEmployeeNo(int empNo);
}
