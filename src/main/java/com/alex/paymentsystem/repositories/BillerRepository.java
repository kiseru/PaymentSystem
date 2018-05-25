package com.alex.paymentsystem.repositories;

import com.alex.paymentsystem.models.Biller;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BillerRepository extends JpaRepository<Biller, Long> {}