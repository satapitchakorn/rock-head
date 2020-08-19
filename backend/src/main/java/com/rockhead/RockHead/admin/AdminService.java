package com.rockhead.RockHead.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public void initDataAdmin() {
        adminRepository.deleteAll();
        createAdmin(251181,"narongrit.rodphroboon@allianz.com");
        createAdmin(251194,"supachai.uthawisan@allianz.com");
    }

    private void createAdmin(int adminNo, String email) {
        Admin data = new Admin();
        data.setEmail(email);
        data.setAdminNo(adminNo);
        adminRepository.save(data);
    }
}
