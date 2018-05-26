package com.alex.paymentsystem.restcontrollers;

import java.util.List;
import java.util.stream.Collectors;

import com.alex.paymentsystem.forms.CustomerForm;
import com.alex.paymentsystem.services.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/customers")
public class CustomerRestController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    public ResponseEntity<List<CustomerForm>> customers() {
        List<CustomerForm> customers = customerService.findAll().stream()
            .map(CustomerForm::new)
            .collect(Collectors.toList());
        return ResponseEntity.ok(customers);
    } 

    @GetMapping("/{id}")
    public ResponseEntity<CustomerForm> customer(@PathVariable("id") Long id) {
        CustomerForm customer = new CustomerForm(customerService.findById(id));
        return ResponseEntity.ok(customer);
    }

    @PostMapping
    public void createCustomer(@RequestBody CustomerForm customerForm) {
        customerService.save(customerForm);
    }

    @PutMapping("/{id}")
    public void updateCustomer(@RequestBody CustomerForm customerForm, @PathVariable("id") Long id) {
        customerForm.setId(id);
        customerService.save(customerForm);
    }

    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable("id") Long id) {
        customerService.deleteById(id);
    }
}