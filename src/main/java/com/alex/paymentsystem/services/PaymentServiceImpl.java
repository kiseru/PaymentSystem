package com.alex.paymentsystem.services;

import java.util.List;

import com.alex.paymentsystem.models.Payment;
import com.alex.paymentsystem.repositories.PaymentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

	@Override
	public List<Payment> findAll() {
		return paymentRepository.findAll();
	}
}