import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersPage } from './customers.page';

const routes: Routes = [
  {
    path: '',
    component: CustomersPage
  },
  { path: 'customersList', component: CustomersListComponent },
  { path: 'view_customer/:id', component: ViewCustomerComponent },
  { path: 'edit_customer/:id', component: EditCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersPageRoutingModule {}
