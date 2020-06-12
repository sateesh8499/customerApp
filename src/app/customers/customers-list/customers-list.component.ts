import { transition, style, animate, trigger } from '@angular/animations';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
  animations: [
      trigger('items', [
          transition(':enter', [
              style({
                  opacity: 0,
                  left: '30%',
                }),
              animate('1s', style({opacity: 1, left: 0}))
          ]),
      ])
  ]
})
export class CustomersListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
customersData: Customer[] = [];
deleteMsg: any;
  ngOnInit() {
      this.getAllCustomers();
  }
  getAllCustomers() {
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
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
