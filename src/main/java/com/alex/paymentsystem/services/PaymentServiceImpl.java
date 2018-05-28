package com.alex.paymentsystem.services;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;

import com.alex.paymentsystem.forms.PaymentForm;
import com.alex.paymentsystem.models.Biller;
import com.alex.paymentsystem.models.Customer;
import com.alex.paymentsystem.models.Payment;
import com.alex.paymentsystem.repositories.PaymentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
	private PaymentRepository paymentRepository;
	
	@Autowired
	private CustomerService customerService;

	@Autowired
	private BillerService billerService;

	@Override
	public List<Payment> findAll() {
		return paymentRepository.findAll();
	}

	@Override
	public void create(PaymentForm paymentForm) {
		Customer customer = customerService.findById(paymentForm.getCustomerId());
		Biller biller = billerService.findById(paymentForm.getBillerId());

		Date currentDate = new Date(Calendar.getInstance().getTime().getTime());

		Payment payment = Payment.builder()
			.id(paymentForm.getId())
			.date(currentDate)
			.customer(customer)
			.biller(biller)
			.account(paymentForm.getAccount())
			.amount(paymentForm.getAmount())
			.build();
		
		paymentRepository.save(payment);
	}
}