import { Component, OnInit, Input } from '@angular/core';
import { CustomerForm } from '../customer-form';
import { CustomersService } from '../customers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  @Input() customerForm: CustomerForm;

  isFirstNameValid: boolean = true;
  isLastNameValid: boolean = true;
  isDateOfBirthValid: boolean = true;

  constructor(private customersService: CustomersService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.findOne()
  }

  updateCustomer() {
    this.validate();
    if (!this.isFirstNameValid || !this.isLastNameValid || !this.isDateOfBirthValid) return;
    this.customersService.update(this.customerForm)
      .subscribe(() => this.router.navigate(["/customers"]));
  }

  findOne() {
    let id = +this.activatedRoute.snapshot.paramMap.get("id");
    this.customersService.findOne(id)
      .subscribe(customerForm => this.customerForm = customerForm);
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
    this.isDateOfBirthValid = this.customerForm.dateOfBirth.search(regex) !== -1;
    if (!this.isDateOfBirthValid) return;
  }

}
