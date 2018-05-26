package com.alex.paymentsystem.forms;

import java.sql.Date;

import com.alex.paymentsystem.models.Customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CustomerForm {

    private Long id;

    private String firstName;

    private String lastName;

    private String address;

    private String dateOfBirth;

    public CustomerForm(Customer customer) {
        this(customer.getId(), customer.getFirstName(), customer.getLastName(), customer.getAddress(), customer.getDateOfBirth().toString());
    }

    public static Customer from(CustomerForm customerForm) {
        return Customer.builder()
            .id(customerForm.getId())
            .firstName(customerForm.getFirstName())
            .lastName(customerForm.getLastName())
            .address(customerForm.getAddress())
            .dateOfBirth(Date.valueOf(customerForm.getDateOfBirth()))
            .build();
    }
}