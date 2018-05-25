package com.alex.paymentsystem.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/billers")
public class BillerController {

    @GetMapping
    public String billers() {
        return "/index.html";
    }

    @GetMapping("/new")
    public String billersNew() {
        return "/index.html";
    }

    @GetMapping("/{id}/edit") 
    public String billersEdit() {
        return "/index.html";
    }
}