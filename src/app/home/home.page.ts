import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  customerData: any = [];
  ngOnInit() {
    this.customerData = [
        { id: 1, name: 'Sateesh', city: 'Chilakaluripet', orderTotal: 1000 },
    ];
    localStorage.setItem('customerData', this.customerData);
    // this.customerData = JSON.parse(localStorage.getItem('customerData'));
  }
}
