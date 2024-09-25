import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductByTextService {
  private apiUrl = 'https://dummyjson.com/products/search';

  constructor(private http: HttpClient) {}

  getProducts(text: string): Observable<any> {
    const url = `${this.apiUrl}?q=${text}`;
    return this.http.get<any>(url);
  }
}
