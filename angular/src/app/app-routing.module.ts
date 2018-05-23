import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentNewComponent } from './payment-new/payment-new.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';

const routes: Routes = [
  { path: 'payments', component: PaymentsComponent },
  { path: 'payments/new', component: PaymentNewComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/new', component: CustomerNewComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
