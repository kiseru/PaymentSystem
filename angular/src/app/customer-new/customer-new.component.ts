import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { CustomerForm } from '../customer-form';
import { CustomersService } from '../customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  @Input() customerForm: CustomerForm;

  isFirstNameValid: boolean;
  isLastNameValid: boolean;
  isAddressValid: boolean;
  isDateOfBirthValid: boolean;

  constructor(private customersService: CustomersService,
              private router: Router) { }

  ngOnInit() {
    this.customerForm = new CustomerForm();
    this.isFirstNameValid = true;
    this.isLastNameValid = true;
    this.isDateOfBirthValid = true;
  }

  private validate() {
    this.validateFirstName();
    this.validateLastName();
    this.validateDateOfBirth();
    this.validateAddress();
  }

  private validateFirstName() {
    this.isFirstNameValid = this.customerForm.firstName !== "";
  }

  private validateLastName() {
    this.isLastNameValid = this.customerForm.lastName !== "";
  }

  private validateDateOfBirth() {
    this.isDateOfBirthValid = this.customerForm.dateOfBirth !== "";
  }

  private validateAddress() {
    this.isAddressValid = this.customerForm.address != "";
  }

  createCustomer() {
    this.customersService.create(this.customerForm)
      .subscribe(() => this.router.navigate(["/customers"]));
  }

}
