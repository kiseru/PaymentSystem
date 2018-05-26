package com.alex.paymentsystem.transfer;

import com.alex.paymentsystem.models.Biller;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BillerDto {

    private Long id;

    private String companyName;

    public BillerDto(Biller biller) {
        this(biller.getId(), biller.getCompanyName());
    }
}