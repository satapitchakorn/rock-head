package com.rockhead.RockHead.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public void initialAdminData() {
        adminRepository.deleteAll();
        Admin data = new Admin();
        data.setAdminNo(251165);
        data.setEmail("satapitchakorn.punjarat@allianz.com");
        adminRepository.save(data);
    }
}
