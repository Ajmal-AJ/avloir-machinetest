import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = environment.apiUrl; // this is base url for future API integration

  constructor(private http :HttpClient) { }

  getExchangeData() {
    return this.http.get<any>('assets/JsonData/exchangedata.json');
    // return this.http.get<any>(`${this.apiUrl}/apiendpoint`) // Add here when apiendpoint exist for future API integration
  }


  getCasinosData() {
    return this.http.get<any>('assets/JsonData/casinos.json');
    // return this.http.get<any>(`${this.apiUrl}/apiendpoint`) // Add here when apiendpoint exist for future API integration
  }

  getGameProviders() {
    return this.http.get<any>('assets/JsonData/gameproviders.json')
    // return this.http.get<any>(`${this.apiUrl}/apiendpoint`) // Add here when apiendpoint exist for future API integration
  }


}
