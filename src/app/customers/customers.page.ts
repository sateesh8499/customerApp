import { Router } from '@angular/router';
import { CustomerService } from './customer.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(private fb: FormBuilder, private customerService: CustomerService, private router: Router) { }
  customerForm: FormGroup;
  customer: any;
  ngOnInit() {
      this.customerForm = this.fb.group({
        name: [''],
        age: [''],
        dob: [''],
        gender: [''],
        phone: [''],
        email: [''],
        department: [''],
        isActive: [true],
        contact_reference: ['']
      });
      this.getAllCustomers();
  }
  getAllCustomers() {
      this.customerService.getCustomers().subscribe(data => data);
  }
  onSubmit(){
      this.customer = this.customerForm.value;
      this.customerService.createCustomer(this.customer).subscribe(data => {
        console.log(data);
      });
      this.getAllCustomers();
  }

}
