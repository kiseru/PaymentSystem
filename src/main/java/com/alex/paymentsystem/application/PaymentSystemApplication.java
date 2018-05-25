package com.alex.paymentsystem.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "com.alex.paymentsystem")
@EntityScan(basePackages = "com.alex.paymentsystem.models")
@EnableJpaRepositories(basePackages = "com.alex.paymentsystem.repositories")
public class PaymentSystemApplication {
    public static void main(String[] args) {
        SpringApplication.run(PaymentSystemApplication.class);
    }
}