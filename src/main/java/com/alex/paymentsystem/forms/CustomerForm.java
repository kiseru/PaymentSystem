package com.alex.paymentsystem.forms;

import java.sql.Date;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.alex.paymentsystem.models.Customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CustomerForm {

    @Min(0)
    private Long id;

    @NotNull
    @Pattern(regexp = "^[A-Z][a-z]+$")
    private String firstName;

    @NotNull
    @Pattern(regexp = "^[A-Z][a-z]+$")
    private String lastName;

    private String address;

    @NotNull
    @Pattern(regexp = "^([0-9]{4}-(0[1-9]?|1[0-2])-(0[1-9]|1[0-9]|2[0-8]))|([0-9]{4}-(0[13-9]|1[0-2])-(29|30))|([0-9]{4}-(0[13578]|1[02])-31)|(([0-9]{2}(0[48]|[13579][26]|[2468][048])|([13579][26]|[2468][048])00)-02-29)$")
    private String dateOfBirth;

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