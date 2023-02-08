import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private URL = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  searchAllBank() {
    return this.http.get(this.URL + `/bank/`);
  }
}
