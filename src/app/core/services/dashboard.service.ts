import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = environment.apiUrl;
  constructor(private http : HttpClient ) {}

  getsportsCatogories() {
    return this.http.get<any>('assets/JsonData/sportscategories.json')
    // return this.http.get<any>(`${this.apiUrl}/apiendpoint`) // Add here when apiendpoint exist for future API integration
  }

  getSportsData() {
    return this.http.get<any>('assets/JsonData/sportsdata.json')
    // return this.http.get<any>(`${this.apiUrl}/apiendpoint`) // Add here when apiendpoint exist for future API integration

  }


  getGreyhoundRacingData () {
    return this.http.get<any>('assets/JsonData/greyhoundRacing.json')
    // return this.http.get<any>(`${this.apiUrl}/apiendpoint`) // Add here when apiendpoint exist for future API integration

  }

  getHorseRacingData () {
    return this.http.get<any>('assets/JsonData/horseracingData.json')
    // return this.http.get<any>(`${this.apiUrl}/apiendpoint`) // Add here when apiendpoint exist for future API integration

  }

}
