import { Customer } from './customer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    private rootUrl = 'http://localhost:3000';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
    constructor(private http: HttpClient) { }
    getCustomers(): Observable<Customer[]> {
       return this.http.get<Customer[]>(this.rootUrl + '/customersList')
       .pipe(
           catchError(this.errorHandler)
       );
    }
    getCustomer(id: any): Observable<Customer> {
        return this.http.get<Customer>(this.rootUrl + '/customersList/' + id)
        .pipe(
            catchError(this.errorHandler)
        );
    }
    createCustomer(customer: any): Observable<Customer> {
        return this.http.post<Customer>(this.rootUrl + '/customersList', customer, this.httpOptions)
        .pipe(
            catchError(this.errorHandler)
        );
    }
    deleteCustomer(id: any): Observable<Customer> {
        return this.http.delete<Customer>(this.rootUrl + '/customersList/' + id, this.httpOptions)
        .pipe(
            catchError(this.errorHandler)
        );
    }
    errorHandler(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
     }
    // getCustomers() {
    //     return this.http.get('https://my-json-server.typicode.com/sateesh8499/customerApp/customersList/');
    //  }
    //  getCustomer(id: any) {
    //      return this.http.get('https://my-json-server.typicode.com/sateesh8499/customerApp/customersList/' + id);
    //  }
    //  createCustomer(customer: any) {
    //      return this.http.post('https://my-json-server.typicode.com/sateesh8499/customerApp/customersList/', customer);
    //  }
    //  deleteCustomer(id: any) {
    //      return this.http.delete(this.apiServer + '/customersList/' + id, this.httpOptions);
    //  }
}
