import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Biller } from '../biller';
import { BillersService } from '../billers.service';
import { CustomerForm } from '../customer-form';
import { CustomersService } from '../customers.service';
import { PaymentForm } from '../payment-form';
import { PaymentsService } from '../payments.service';

@Component({
  selector: 'app-payment-new',
  templateUrl: './payment-new.component.html',
  styleUrls: ['./payment-new.component.css']
})
export class PaymentNewComponent implements OnInit {

  @Input() paymentForm: PaymentForm;
  @Input() billerSearchString: string;
  @Input() customerSearchString: string;

  private billers: Biller[];
  private customers: CustomerForm[];

  filteredBillers: Biller[];
  filteredCustomers: CustomerForm[];

  isCustomerValid: boolean = true;
  isBillerValid: boolean = true;
  isAmountValid: boolean = true;

  constructor(private paymentsService: PaymentsService,
              private customersService: CustomersService,
              private billersService: BillersService,
              private router: Router) { }

  ngOnInit() {
    this.paymentForm = new PaymentForm();
    this.getAllBillers();
    this.getAllCustomers();
  }

  createPayment() {
    this.validate();
    if (!this.isCustomerValid || !this.isBillerValid || !this.isAmountValid) return;
    this.paymentForm.billerId = this.billers
      .filter(biller => biller.companyName == this.billerSearchString)[0].id;
    this.paymentForm.customerId = this.customers
      .filter(customer => `${customer.firstName} ${customer.lastName}` == this.customerSearchString)[0].id;
    this.paymentsService.create(this.paymentForm)
      .subscribe(() => this.router.navigate(["/payments"]));
  }

  onChangeBillerSearchString() {
    if (this.billerSearchString == "") this.filteredBillers = this.billers.filter(biller => true);
    else this.filteredBillers = this.billers
      .filter(biller => biller.companyName.toLowerCase().includes(this.billerSearchString.toLowerCase()));
  }

  onChangeCustomerSearchString() {
    if (this.customerSearchString == "") this.filteredCustomers = this.customers.filter(customer => true);
    else this.filteredCustomers = this.customers
      .filter(customer => `${customer.firstName} ${customer.lastName}`.toLowerCase().includes(this.customerSearchString.toLowerCase()));
  }

  private getAllBillers() {
    this.billersService.findAll()
      .subscribe(billers => this.billers = billers);
  }

  private getAllCustomers() {
    this.customersService.findAll()
      .subscribe(customers => this.customers = customers);
  }

  private validate() {
    this.validateCustomer();
    this.validateBiller();
  }

  private validateCustomer() {
    this.isCustomerValid = (+this.paymentForm.customerId) > 0;
  }

  private validateBiller() {
    this.isBillerValid = (+this.paymentForm.billerId) > 0;
  }

  private validateAmount() {
    this.isAmountValid = this.paymentForm.amount > 0;
  }
}
