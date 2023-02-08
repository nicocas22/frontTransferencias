import { Injectable } from '@angular/core';
import { HttpClient}from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: any) {
    console.log(user);
    
    return this.http.post<any>(this.URL + '/user', user);
  }

  signIn(auth: any) {
    return this.http.post<any>(this.URL + '/user/auth/singIn', auth)
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }

  usersFraud() {
    return this.http.get(this.URL + '/user/userfraud');
  }
}
