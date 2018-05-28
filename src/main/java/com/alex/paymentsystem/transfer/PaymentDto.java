package com.alex.paymentsystem.transfer;

import com.alex.paymentsystem.models.Payment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PaymentDto {

    private Long id;

    private String date;

    private CustomerDto customer;

    private BillerDto biller;

    private String account;

    private Long amount;

    public PaymentDto(Payment payment) {
        this(payment.getId(), 
             payment.getDate().toString(),
             new CustomerDto(payment.getCustomer()),
             new BillerDto(payment.getBiller()),
             payment.getAccount(), 
             payment.getAmount());
    }
}