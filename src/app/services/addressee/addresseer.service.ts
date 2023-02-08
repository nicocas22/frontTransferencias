import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddresseerService {
  private URL = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  createAddressee( addressee: any) {
    return this.http.post(this.URL + '/addressee', addressee)
  }

  searchForSender(rutSenders: any) {
    return this.http.get(this.URL + `/addressee/searchForSender/${rutSenders}` )
  }


  
}
