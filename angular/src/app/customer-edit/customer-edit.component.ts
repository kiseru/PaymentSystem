import { Component, OnInit, Input } from '@angular/core';
import { CustomerForm } from '../customer-form';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  @Input() customerForm: CustomerForm;

  constructor() { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer() {
    this.customerForm = { 
      firstName: "Sherlok", 
      lastName: "Holms", 
      address: "Baker St 221B",
      dayOfBirth: 23,
      monthOfBirth: 6,
      yearOfBirth: 1973
    };
  }

  updateCustomer() {
    console.log(this.customerForm);
  }

}
