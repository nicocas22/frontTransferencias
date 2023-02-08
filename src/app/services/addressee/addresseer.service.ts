import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddresseerService {
  private URL = 'https://servertransferencias-production.up.railway.app/api'
  constructor(private http: HttpClient) { }

  createAddressee( addressee: any) {
    return this.http.post(this.URL + '/addressee', addressee)
  }

  searchForSender(rutSenders: any) {
    return this.http.get(this.URL + `/addressee/searchForSender/${rutSenders}` )
  }


  
}
