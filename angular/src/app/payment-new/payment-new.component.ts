import { Component, OnInit, Input } from '@angular/core';
import { PaymentForm } from '../payment-form';

@Component({
  selector: 'app-payment-new',
  templateUrl: './payment-new.component.html',
  styleUrls: ['./payment-new.component.css']
})
export class PaymentNewComponent implements OnInit {

  @Input() newPayment: PaymentForm;

  isAmountValid: boolean;
  isAccountValid: boolean;
  isCustomerValid: boolean;
  isBillerValid: boolean;

  constructor() { }

  ngOnInit() {
    this.newPayment = new PaymentForm();
    console.log(this.newPayment);
    this.isAccountValid = true;
    this.isAmountValid = true;
    this.isCustomerValid = true;
    this.isBillerValid = true;
  }

  createPayment() {
    this.validate();
    if (this.isAccountValid && this.isAmountValid && this.isCustomerValid && this.isBillerValid) console.log(this.newPayment);
  }

  private validate() {
    this.validateAccount();
    this.validateAmount();
    this.validateCustomer();
    this.validateBiller();
  }

  private validateAccount() {
    this.isAccountValid = this.newPayment.account !== "";
  }

  private validateAmount() {
    this.isAmountValid = this.newPayment.amount > 0;
  }

  private validateCustomer() {
    this.newPayment.customerId = Number.parseInt(this.newPayment.customerId.toString());
    this.isCustomerValid = this.newPayment.customerId > 0;
  }

  private validateBiller() {
    this.newPayment.billerId = Number.parseInt(this.newPayment.billerId.toString());
    this.isBillerValid = this.newPayment.billerId > 0;
  }
}
