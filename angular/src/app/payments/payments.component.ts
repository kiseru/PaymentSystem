import { Component, Input, OnInit } from '@angular/core';
import { Biller } from '../biller';
import { BillersService } from '../billers.service';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';
import { Payment } from '../payment';
import { PaymentsService } from '../payments.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  @Input() customerId: string = "0";
  @Input() billerId: string = "0";

  private payments: Payment[];

  filteredPayments: Payment[];
  customers: Customer[];
  billers: Biller[];

  constructor(private paymentsService: PaymentsService,
              private customersService: CustomersService,
              private billersService: BillersService) { }

  ngOnInit() {
    this.paymentsService.findAll()
      .subscribe(payments => this.payments = payments,
                 error => console.log("Can got data"),
                 () => this.filteredPayments = this.payments.filter(payment => true));

    this.customersService.findAll()
      .subscribe(customers => this.customers = customers);

    this.billersService.findAll()
      .subscribe(billers => this.billers = billers);
  }

  onChangeSelector() {
    let customerId = +this.customerId;
    let billerId = +this.billerId;
    if (customerId == 0 && billerId == 0) this.filteredPayments = this.payments.filter(payments => true);
    else if (billerId == 0) this.filteredPayments = this.payments.filter(payment => payment.customer.id == customerId);
    else if (customerId == 0) this.filteredPayments = this.payments.filter(payment => payment.biller.id == billerId);
    else this.filteredPayments = this.payments.filter(payment => payment.customer.id == customerId && payment.biller.id == billerId); 
  }
}
