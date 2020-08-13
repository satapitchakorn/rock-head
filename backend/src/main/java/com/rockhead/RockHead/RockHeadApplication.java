package com.rockhead.RockHead;

import com.rockhead.RockHead.admin.AdminService;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class RockHeadApplication {
    @Autowired
    private AdminService adminService;

    public static void main(String[] args) {
        SpringApplication.run(RockHeadApplication.class, args);
    }

    @Bean
    InitializingBean sendDatabase() {
        return () -> {
            adminService.initialAdminData();
        };
    }
}
