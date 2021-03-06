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
import { BillerEditComponent } from './biller-edit/biller-edit.component';
import { HttpClientModule } from '@angular/common/http';

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
    BillerNewComponent,
    BillerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
