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

    private String firstName;

    private String lastName;

    private String address;
    
    private String dateOfBirth;

    private static Customer from(CustomerForm customerForm) {
        return Customer.builder()
            .firstName(customerForm.getFirstName())
            .lastName(customerForm.getLastName())
            .address(customerForm.getLastName())
            .dateOfBirth(Date.valueOf(customerForm.getDateOfBirth()))
            .build();
    }
}