import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
})
export class CustomersListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
customersData: any = [];
deleteMsg: any;
  ngOnInit() {
      this.getAllCustomers();
  }
  getAllCustomers() {
    this.customerService.getCustomers().subscribe(data => {
        this.customersData = data;
    });
  }
  deleteCustomer(id: any) {
      this.customerService.deleteCustomer(id).subscribe(deleted => {
      });
      this.getAllCustomers();
  }
  doRefresh(event){ 
      this.getAllCustomers();
      setTimeout(() => {
        event.target.complete();
      }, 2000);
  }
}
