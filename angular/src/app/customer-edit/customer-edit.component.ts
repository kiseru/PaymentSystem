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

  constructor(private customersService: CustomersService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.findOne()
  }

  updateCustomer() {
    this.customersService.update(this.customerForm)
      .subscribe(() => this.router.navigate(["/customers"]));
  }

  findOne() {
    let id = +this.activatedRoute.snapshot.paramMap.get("id");
    this.customersService.findOne(id)
      .subscribe(customerForm => this.customerForm = customerForm);
  }

}
