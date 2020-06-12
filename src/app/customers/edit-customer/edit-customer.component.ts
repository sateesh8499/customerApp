import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-edit-customer',
    templateUrl: './edit-customer.component.html',
    styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {

    constructor(private customerService: CustomerService, private router: Router, private activatedRouter: ActivatedRoute, private fb: FormBuilder) { }
    customerData: any = [];
    editForm: FormGroup;
    customerIdUpdate: any;
    id: any;
    ngOnInit() {
        this.id = this.activatedRouter.snapshot.paramMap.get('id');
        this.editForm = this.fb.group({
            name: [''],
            age: [''],
            dob: [''],
            gender: [''],
            profilePic: [''],
            phone: [''],
            email: [''],
            department: [''],
            isActive: [true],
            contact_reference: ['']
        });
        this.autoFill();
    }
    onSubmit() {
        this.customerService.editCustomer(this.editForm.value, this.id).subscribe(data => {
            this.router.navigateByUrl('customers/customersList');
        });
    }
    autoFill() {
        this.customerService.getCustomer(this.id).subscribe(customer => {
            this.editForm.controls.name.setValue(customer.name);
            this.editForm.controls.age.setValue(customer.age);
            this.editForm.controls.dob.setValue(customer.dob);
            this.editForm.controls.gender.setValue(customer.gender);
            this.editForm.controls.profilePic.setValue(customer.profilePic);
            this.editForm.controls.phone.setValue(customer.phone);
            this.editForm.controls.email.setValue(customer.email);
            this.editForm.controls.department.setValue(customer.department);
            this.editForm.controls.isActive.setValue(customer.isActive);
            this.editForm.controls.contact_reference.setValue(customer.contact_reference);
        });
    }
}
