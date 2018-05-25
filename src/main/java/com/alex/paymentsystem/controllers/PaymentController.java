package com.alex.paymentsystem.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/payments")
public class PaymentController {
    
    @GetMapping
    public String payments() {
        return "/index.html";
    }

    @GetMapping("/new")
    public String paymentsNew() {
        return "/index.html";
    }
}