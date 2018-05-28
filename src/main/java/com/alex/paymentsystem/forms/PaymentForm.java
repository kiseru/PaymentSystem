package com.alex.paymentsystem.forms;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PaymentForm {
    
    @Min(0)
    private Long id;

    @Min(0)
    @NotNull
    private Long customerId;

    @Min(0)
    @NotNull
    private Long billerId;

    @NotNull
    private String account;

    @NotNull
    @Min(0)
    private Long amount;
}