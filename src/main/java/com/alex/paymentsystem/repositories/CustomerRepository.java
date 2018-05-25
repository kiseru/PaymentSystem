package com.alex.paymentsystem.repositories;

import com.alex.paymentsystem.models.Customer;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {}