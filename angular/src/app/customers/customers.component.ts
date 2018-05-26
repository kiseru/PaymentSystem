import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';
import { Router } from '@angular/router';
import { CustomerForm } from '../customer-form';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  @Input() searchString: string;

  customers: CustomerForm[];

  constructor(private customersService: CustomersService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAllCustomers();
  }

  onChangeSearchString() {
    console.log(this.searchString);
  }

  getAllCustomers() {
    this.customersService.findAll()
      .subscribe(customers => this.customers = customers);
  }

  delete(id: number) {
    this.customersService.delete(id)
      .subscribe(() => this.router.navigate(["/customers"]));
    this.customers = this.customers.filter(customer => customer.id != id);
  }

}
