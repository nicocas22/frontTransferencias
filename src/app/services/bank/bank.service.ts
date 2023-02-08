import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private URL = 'https://servertransferencias-production.up.railway.app/api'
  constructor(private http: HttpClient) { }

  searchAllBank() {
    return this.http.get(this.URL + `/bank/`);
  }
}
