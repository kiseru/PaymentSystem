import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  @Input() searchString: string;

  customers: Customer[];

  constructor() {
    this.customers = [
      { id: 1, firstName: "Sherlok", lastName: "Holms", dateOfBirth: "23.06.1973", address: "Baker St 221B" },
      { id: 2, firstName: "Sherlok", lastName: "Holms", dateOfBirth: "23.06.1973", address: "Baker St 221B" },
      { id: 3, firstName: "Sherlok", lastName: "Holms", dateOfBirth: "23.06.1973", address: "Baker St 221B" },
      { id: 4, firstName: "Sherlok", lastName: "Holms", dateOfBirth: "23.06.1973", address: "Baker St 221B" },
      { id: 5, firstName: "Sherlok", lastName: "Holms", dateOfBirth: "23.06.1973", address: "Baker St 221B" },
      { id: 6, firstName: "Sherlok", lastName: "Holms", dateOfBirth: "23.06.1973", address: "Baker St 221B" },
      { id: 7, firstName: "Sherlok", lastName: "Holms", dateOfBirth: "23.06.1973", address: "Baker St 221B" }
    ];
  }

  ngOnInit() {
  }

  onChangeSearchString() {
    console.log(this.searchString);
  }

  delete(id: number) {
  }

}
