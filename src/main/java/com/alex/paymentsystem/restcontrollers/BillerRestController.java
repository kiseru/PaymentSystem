package com.alex.paymentsystem.restcontrollers;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import com.alex.paymentsystem.forms.BillerForm;
import com.alex.paymentsystem.models.Biller;
import com.alex.paymentsystem.services.BillerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/billers")
public class BillerRestController {

    @Autowired
    private BillerService billerService;

    @GetMapping
    public ResponseEntity<List<Biller>> billers() {
        List<Biller> billers = billerService.findAll();
        return ResponseEntity.ok(billers);
    }

    @PostMapping
    public void createBiller(@RequestBody BillerForm billerForm) {
        billerService.save(billerForm);
    }

    @PutMapping("/{id}")
    public void updateBiller(@RequestBody Biller biller, @PathVariable("id") Long id) {
        billerService.update(biller);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Biller> biller(@PathVariable("id") Long id) {
        Biller biller = billerService.findOneById(id);
        return ResponseEntity.ok(biller);
    }

    @DeleteMapping("/{id}")
    public void deleteBiller(@PathVariable("id") Long id) {
        billerService.deleteById(id);
    }
}