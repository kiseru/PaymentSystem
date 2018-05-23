import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentNewComponent } from './payment-new/payment-new.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { BillersComponent } from './billers/billers.component';
import { BillerNewComponent } from './biller-new/biller-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaymentsComponent,
    PaymentNewComponent,
    CustomersComponent,
    CustomerNewComponent,
    CustomerEditComponent,
    BillersComponent,
    BillerNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
