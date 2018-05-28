package com.alex.paymentsystem.services;

import java.util.List;

import com.alex.paymentsystem.forms.PaymentForm;
import com.alex.paymentsystem.models.Payment;

public interface PaymentService {
    List<Payment> findAll();
    void create(PaymentForm paymentForm);
}