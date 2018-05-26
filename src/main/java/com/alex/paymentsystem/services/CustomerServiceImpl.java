package com.alex.paymentsystem.services;

import java.util.List;

import com.alex.paymentsystem.forms.CustomerForm;
import com.alex.paymentsystem.models.Customer;
import com.alex.paymentsystem.repositories.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

	@Override
	public List<Customer> findAll() {
		return customerRepository.findAll();
	}

	@Override
	public Customer findById(Long id) {
		return customerRepository.findById(id)
			.orElseThrow(IllegalArgumentException::new);
	}

	@Override
	public Customer save(CustomerForm customerForm) {
		Customer customer = CustomerForm.from(customerForm);
		return customerRepository.save(customer);
	}

	@Override
	public Customer update(CustomerForm customerForm) {
		Customer customer = CustomerForm.from(customerForm);
		return customerRepository.save(customer);
	}

	@Override
	public void deleteById(Long id) {
		customerRepository.deleteById(id);
	}

}