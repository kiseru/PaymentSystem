package com.alex.paymentsystem.services;

import java.util.List;

import com.alex.paymentsystem.forms.CustomerForm;
import com.alex.paymentsystem.models.Customer;

public interface CustomerService {
    List<Customer> findAll();
    Customer findById(Long id);
    Customer save(CustomerForm customerForm);
    Customer update(CustomerForm customerForm);
    void deleteById(Long id);
}