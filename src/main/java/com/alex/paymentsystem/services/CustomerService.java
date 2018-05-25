package com.alex.paymentsystem.services;

import java.util.List;

import com.alex.paymentsystem.models.Customer;

public interface CustomerService {
    List<Customer> findAll();
}