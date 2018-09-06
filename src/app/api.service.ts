import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

// we can now access environment.apiUrl
const API_URL = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  //variable initialization
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private baseURL = environment.apiBaseUrl;
  constructor(private http: HttpClient) {
  }

  addEmployee(user: any) {
    var logdinUser = {
      email: user.username,
      password: user.password,
    }
    return this.http.post(this.baseURL + '/api/login', logdinUser, { headers: this.headers });
  }

  userList() {
    return this.http.get('https://jsonplaceholder.typicode.com/users', { headers: this.headers });
  }

}
