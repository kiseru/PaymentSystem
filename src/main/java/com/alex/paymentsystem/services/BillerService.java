package com.alex.paymentsystem.services;

import java.util.List;

import com.alex.paymentsystem.models.Biller;

public interface BillerService {
    List<Biller> findAll();
}