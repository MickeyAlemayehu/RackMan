package com.gym.gym.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gym.gym.Entity.Manager;

@RestController
@RequestMapping("/api/manager")
public class ManagerController {

    private Manager manager = new Manager(); 

    @GetMapping
    public Manager getManager() {
        return manager; 
    }
}