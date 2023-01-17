package com.example.learnerspringboot.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @GetMapping(path = "/fetch/data")
    public String fetchData(){
        return "ok"; 
    }
}