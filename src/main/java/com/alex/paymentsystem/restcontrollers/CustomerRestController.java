package com.alex.paymentsystem.restcontrollers;

import java.util.List;

import com.alex.paymentsystem.models.Customer;
import com.alex.paymentsystem.services.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/customers")
public class CustomerRestController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    public ResponseEntity<List<Customer>> billers() {
        List<Customer> customers = customerService.findAll();
        return ResponseEntity.ok(customers);
    } 
}