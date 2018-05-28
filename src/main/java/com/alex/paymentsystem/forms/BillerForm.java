package com.alex.paymentsystem.forms;

import javax.validation.constraints.NotNull;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Min;
import javax.validation.constraints.Pattern;

import com.alex.paymentsystem.models.Biller;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BillerForm {

    @Min(0)
    private Long id;

    @NotNull
    @Pattern(regexp = "^[A-Za-z ]$")
    private String companyName;

    public static Biller from(BillerForm billerForm) {
        return Biller.builder()
            .companyName(billerForm.getCompanyName())
            .build();
    }
}