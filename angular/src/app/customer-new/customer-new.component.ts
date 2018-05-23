import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { CustomerForm } from '../customer-form';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  @Input() customerForm: CustomerForm;

  isFirstNameValid: boolean;
  isLastNameValid: boolean;
  isDayOfBirthValid: boolean;
  isMonthOfBirthValid: boolean;
  isYearOfBirthValid: boolean;
  isAddressValid: boolean;

  constructor() { }

  ngOnInit() {
    this.customerForm = new CustomerForm();
    this.isFirstNameValid = true;
    this.isLastNameValid = true;
    this.isDayOfBirthValid = true;
    this.isMonthOfBirthValid = true;
    this.isYearOfBirthValid = true;
  }

  private validate() {
    this.validateFirstName();
    this.validateLastName();
    this.validateDayOfBirth();
    this.validateAddress();
  }

  private validateFirstName() {
    this.isFirstNameValid = this.customerForm.firstName !== "";
  }

  private validateLastName() {
    this.isLastNameValid = this.customerForm.lastName !== "";
  }

  private validateDayOfBirth() {
    this.isDayOfBirthValid = this.customerForm.dayOfBirth > 0;
  }

  private validateMonthOfBirth() {
    this.isMonthOfBirthValid = true;
  }

  private validateYearOfBirth() {
    this.isYearOfBirthValid = this.customerForm.yearOfBirth > 1900;
  }

  private validateAddress() {
    this.isAddressValid = this.customerForm.address != "";
  }

}
