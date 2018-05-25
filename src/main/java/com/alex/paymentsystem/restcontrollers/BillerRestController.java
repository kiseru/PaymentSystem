package com.alex.paymentsystem.restcontrollers;

import java.util.List;

import com.alex.paymentsystem.models.Biller;
import com.alex.paymentsystem.services.BillerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/billers")
public class BillerRestController {

    @Autowired
    private BillerService billerService;

    @GetMapping
    public ResponseEntity<List<Biller>> billers() {
        List<Biller> billers = billerService.findAll();
        return ResponseEntity.ok(billers);
    } 
}