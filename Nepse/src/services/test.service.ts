import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Company } from '../models/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Company[]> {
   return this.http.get<Company[]>("https://merolagani.com/handlers/AutoSuggestHandler.ashx?type=Company");
  }
}
