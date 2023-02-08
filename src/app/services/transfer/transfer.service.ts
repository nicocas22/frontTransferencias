import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private URL = 'http://localhost:3000/api'
  constructor(private http: HttpClient, private router: Router) { }

  createTransfer(data: any) {
    return this.http.post(this.URL + '/transfer', data);
  }

  getTransferForSender(idSender: any) {
    return this.http.get(this.URL + `/transfer/searchForSender/${idSender}`)
  }

}
