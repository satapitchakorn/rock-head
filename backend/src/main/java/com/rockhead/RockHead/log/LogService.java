package com.rockhead.RockHead.log;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.LookupOperation;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;


@Service
public class LogService {
    @Autowired
    private final LogRepository logRepository;
    @Autowired
    private MongoTemplate mongoTemplate;

    public void initialLogData() {
        logRepository.deleteAll();
        List<Log> logList = new ArrayList() {
            {
                add(createEmployee(251181, 251182, "Hasaneeya", "Kaenthram"));
                add(createEmployee(251181, 251166, "Kanawat", "Phuengphadung"));
            }
        };
        logRepository.saveAll(logList);
    }

    private Log createEmployee(int adminNo, int empNo, String firstname, String lastname) {
        Log data = new Log();
        data.setAdminNo(adminNo);
        data.setDateOfEvent(new Date());
        data.setEmployeeNo(empNo);
        Event eventData = new Event();
        eventData.setElementName("-");
        eventData.setEventMessage("Add " + firstname + " " + lastname + " successful.");
        eventData.setFormId("001");
        data.setLogObjects(Arrays.asList(eventData));
        return data;
    }

    public LogService(LogRepository logRepository, MongoTemplate mongoTemplate) {
        this.logRepository = logRepository;
        this.mongoTemplate = mongoTemplate;
    }

    public Log createLog(Log data) {
        return logRepository.save(data);
    }

    public Page<LogModel> findAllWithOperationAndPageable(Pageable pageable) {
        LookupOperation lookupEmployee = LookupOperation.newLookup()
                .from("employee")
                .localField("employeeNo")
                .foreignField("employeeNo")
                .as("employee");

        LookupOperation lookupAdmin = LookupOperation.newLookup()
                .from("admin")
                .localField("adminNo")
                .foreignField("adminNo")
                .as("admin");
        Aggregation aggregation = Aggregation.newAggregation(lookupEmployee, lookupAdmin, Aggregation.skip(pageable.getPageNumber() * pageable.getPageSize()),
                Aggregation.limit(pageable.getPageSize()));
        List<LogModel> results = mongoTemplate.aggregate(aggregation, "log", LogModel.class).getMappedResults();
        
        return new PageImpl<>(results, pageable, pageable.getPageSize());
    }
}
