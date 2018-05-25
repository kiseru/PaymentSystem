package com.alex.paymentsystem.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/customers")
public class CustomerController {

    @GetMapping
    public String customers() {
        return "/index.html";
    }

    @GetMapping("/new")
    public String customersNew() {
        return "/index.html";
    }

    @GetMapping("/{id}/edit")
    public String customersEdit(@PathVariable("id") Long id) {
        return "/index.html";
    }
}