package com.alex.paymentsystem.restcontrollers;

import java.util.List;
import java.util.stream.Collectors;

import com.alex.paymentsystem.forms.PaymentForm;
import com.alex.paymentsystem.services.PaymentService;
import com.alex.paymentsystem.transfer.PaymentDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/payments")
public class PaymentRestController {

    @Autowired
    private PaymentService paymentService;

    @GetMapping
    public ResponseEntity<List<PaymentDto>> payments() {
        List<PaymentDto> payments = paymentService.findAll().stream()
            .map(PaymentDto::new)
            .collect(Collectors.toList());
        return ResponseEntity.ok(payments);
    }

    @PostMapping
    public void paymentsCreate(@RequestBody PaymentForm paymentForm) {
        paymentService.create(paymentForm);
    }
}