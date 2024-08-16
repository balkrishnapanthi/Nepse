import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { companyDetails } from '../models/companyDetails';
import { urls } from '../shared/urls';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Company[]> {
   return this.http.get<Company[]>("/handlers/AutoSuggestHandler.ashx?type=Company");
  }

  getCompanyData(symbol : string): Observable<companyDetails> {
    let url = urls.companyDetailurl.replace("[@symbol]", symbol);
  return this.http.get<companyDetails>(url);

  }
}
