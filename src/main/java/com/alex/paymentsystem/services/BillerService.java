package com.alex.paymentsystem.services;

import java.util.List;

import com.alex.paymentsystem.forms.BillerForm;
import com.alex.paymentsystem.models.Biller;

public interface BillerService {
    List<Biller> findAll();
    Biller findById(Long id);
    Biller save(BillerForm billerForm);
	Biller update(Biller biller);
	void deleteById(Long id);
}