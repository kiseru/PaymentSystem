import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerForm } from '../customer-form';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  @Input() customerForm: CustomerForm;

  isFirstNameValid: boolean;
  isLastNameValid: boolean;
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
  }

  private validateFirstName() {
    let regex = /^[A-Z][a-z]+$/;
    this.isFirstNameValid = this.customerForm.firstName.search(regex) !== -1;
  }

  private validateLastName() {
    let regex = /^[A-Z][a-z]+$/;    
    this.isLastNameValid = this.customerForm.lastName.search(regex) !== -1;
  }

  private validateDateOfBirth() {
    let currentYear = new Date(Date.now()).getTime();    
    let inputYear = new Date(this.customerForm.dateOfBirth).getTime();
    this.isDateOfBirthValid = inputYear < currentYear;
    if (!this.isDateOfBirthValid) return;

    let regex = /^([0-9]{4}-(0[1-9]?|1[0-2])-(0[1-9]|1[0-9]|2[0-8]))|([0-9]{4}-(0[13-9]|1[0-2])-(29|30))|([0-9]{4}-(0[13578]|1[02])-31)|(([0-9]{2}(0[48]|[13579][26]|[2468][048])|([13579][26]|[2468][048])00)-02-29)$/;
    this.isDateOfBirthValid = this.customerForm.lastName.search(regex) !== -1;
    if (!this.isDateOfBirthValid) return;
  }

  createCustomer() {
    this.validate();
    if (!this.isFirstNameValid || !this.isLastNameValid || !this.isDateOfBirthValid) return;
    this.customersService.create(this.customerForm)
      .subscribe(() => this.router.navigate(["/customers"]));
  }
}
