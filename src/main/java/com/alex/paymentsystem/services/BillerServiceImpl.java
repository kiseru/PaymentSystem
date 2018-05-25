package com.alex.paymentsystem.services;

import java.util.List;

import com.alex.paymentsystem.forms.BillerForm;
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

	@Override
	public Biller findOneById(Long id) {
		return billerRepository.findById(id)
			.orElseThrow(IllegalArgumentException::new);
	}

	@Override
	public Biller save(BillerForm billerForm) {
		Biller biller = BillerForm.from(billerForm);
		return billerRepository.save(biller);
	}

	@Override
	public Biller update(Biller biller) {
		return billerRepository.save(biller);
	}
}