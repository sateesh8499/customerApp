import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { CustomerService } from './customer.service';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomersPageRoutingModule } from './customers-routing.module';

import { CustomersPage } from './customers.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [CustomersPage, CustomersListComponent, ViewCustomerComponent],
  providers:[
    CustomerService
  ]
})
export class CustomersPageModule {}
