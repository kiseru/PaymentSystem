package com.alex.paymentsystem.restcontrollers;

import java.util.List;

import com.alex.paymentsystem.models.Payment;
import com.alex.paymentsystem.services.PaymentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/payments")
public class PaymentRestController {

    @Autowired
    private PaymentService paymentService;

    @GetMapping
    public ResponseEntity<List<Payment>> payments() {
        List<Payment> payments = paymentService.findAll();
        return ResponseEntity.ok(payments);
    }
}