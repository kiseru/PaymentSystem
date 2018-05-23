import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentNewComponent } from './payment-new/payment-new.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { BillersComponent } from './billers/billers.component';
import { BillerNewComponent } from './biller-new/biller-new.component';
import { BillerEditComponent } from './biller-edit/biller-edit.component';

const routes: Routes = [
  { path: 'payments', component: PaymentsComponent },
  { path: 'payments/new', component: PaymentNewComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/new', component: CustomerNewComponent },
  { path: 'customers/:id/edit', component: CustomerEditComponent },
  { path: 'billers', component: BillersComponent },
  { path: 'billers/new', component: BillerNewComponent },
  { path: 'billers/:id/edit', component: BillerEditComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
