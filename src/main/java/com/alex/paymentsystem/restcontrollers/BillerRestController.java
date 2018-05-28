package com.alex.paymentsystem.restcontrollers;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.alex.paymentsystem.forms.BillerForm;
import com.alex.paymentsystem.models.Biller;
import com.alex.paymentsystem.services.BillerService;
import com.alex.paymentsystem.transfer.BillerDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/billers")
public class BillerRestController {

    @Autowired
    private BillerService billerService;

    @GetMapping
    public ResponseEntity<List<BillerDto>> billers() {
        List<BillerDto> billers = billerService.findAll().stream()
            .map(BillerDto::new)
            .collect(Collectors.toList());
        return ResponseEntity.ok(billers);
    }

    @PostMapping
    public void createBiller(@RequestBody @Valid BillerForm billerForm, BindingResult bindingResult) {
        billerService.save(billerForm);
    }

    @PutMapping("/{id}")
    public void updateBiller(@RequestBody @Valid BillerForm billerForm, @PathVariable("id") Long id, BindingResult bindingResult) {
        billerService.update(billerForm);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BillerDto> biller(@PathVariable("id") Long id) {
        BillerDto biller = new BillerDto(billerService.findById(id));
        return ResponseEntity.ok(biller);
    }

    @DeleteMapping("/{id}")
    public void deleteBiller(@PathVariable("id") Long id) {
        billerService.deleteById(id);
    }
}