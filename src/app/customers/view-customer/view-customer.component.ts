import { CustomerService } from './../customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss'],
})
export class ViewCustomerComponent implements OnInit {

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private customerService: CustomerService) { }
  customerData: any = [];
  ngOnInit() {
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    this.customerService.getCustomer(id).subscribe(data => {
        this.customerData.push(data);
        console.log(data);
    });
  }

}
