import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountStatementService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  postData(data: any): Observable<any> {
     return this.http.post<any>(`${this.apiUrl}/endpoint`, data); // for feature api integration
  }


}
