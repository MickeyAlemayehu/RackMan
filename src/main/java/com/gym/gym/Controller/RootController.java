package com.gym.gym.Controller;

import org.springframework.web.bind.annotation.GetMapping;
 import org.springframework.web.bind.annotation.RequestMapping;
  import org.springframework.web.bind.annotation.RestController;
   @RestController
    @RequestMapping("/") 
   public class RootController {
     @GetMapping 
     public String home() {
         return "Welcome to the Home Page!"; 
        }
     }
