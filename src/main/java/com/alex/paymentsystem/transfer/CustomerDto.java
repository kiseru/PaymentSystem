package com.alex.paymentsystem.transfer;

import com.alex.paymentsystem.models.Customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CustomerDto {

    private Long id;

    private String firstName;

    private String lastName;

    private String address;

    private String dateOfBirth;

    public CustomerDto(Customer customer) {
        this(customer.getId(), customer.getFirstName(), customer.getLastName(), customer.getAddress(), customer.getDateOfBirth().toString());
    }
}