import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/users';
const customerUrl = 'http://localhost:3000/customers';
@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getbyId(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getbyEmail(email: any): Observable<any> {
    return this.http.get(`${baseUrl}/email/${email}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.patch(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  getCustomers(): Observable<any> {
    return this.http.get(`${customerUrl}`);
  }
  // inActivateUser(id): Observable<any> {
  //   return this.http.get(`${baseUrl}/inactivate/${id}`);
  // }
}
