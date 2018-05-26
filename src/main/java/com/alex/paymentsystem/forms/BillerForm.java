package com.alex.paymentsystem.forms;

import com.alex.paymentsystem.models.Biller;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BillerForm {

    private Long id;

    private String companyName;

    public static Biller from(BillerForm billerForm) {
        return Biller.builder()
            .companyName(billerForm.getCompanyName())
            .build();
    }
}