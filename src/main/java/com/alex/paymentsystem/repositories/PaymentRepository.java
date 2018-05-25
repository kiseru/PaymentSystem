package com.alex.paymentsystem.repositories;

import com.alex.paymentsystem.models.Payment;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {}