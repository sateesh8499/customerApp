import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    private apiServer = 'http://localhost:3000';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
    constructor(private http: HttpClient) { }
    getCustomers() {
       return this.http.get('http://localhost:3000/customersList');
    }
    getCustomer(id: any) {
        return this.http.get('http://localhost:3000/customersList/' + id);
    }
    createCustomer(customer: any) {
        return this.http.post('http://localhost:3000/customersList/', customer);
    }
    deleteCustomer(id: any) {
        return this.http.delete(this.apiServer + '/customersList/' + id, this.httpOptions);
    }
}
