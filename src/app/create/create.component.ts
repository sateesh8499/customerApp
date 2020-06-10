import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  customerForm: FormGroup;
  customers: any = [];
  stored: any;
  ngOnInit() {
      this.customerForm = this.fb.group({
          name: [''],
          city: [''],
          orderTotal: ['']
      });
    //   this.stored = JSON.parse(localStorage.getItem('customerData'));
  }
  onSubmit() {
  }
}
