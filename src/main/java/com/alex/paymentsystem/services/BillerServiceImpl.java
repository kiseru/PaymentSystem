package com.alex.paymentsystem.services;

import java.util.List;

import com.alex.paymentsystem.models.Biller;
import com.alex.paymentsystem.repositories.BillerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BillerServiceImpl implements BillerService {

    @Autowired
    private BillerRepository billerRepository;

	@Override
	public List<Biller> findAll() {
		return billerRepository.findAll();
	}

}