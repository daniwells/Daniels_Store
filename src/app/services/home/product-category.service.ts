import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private apiUrl = 'https://dummyjson.com/products/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<{name: string, slug: string, url: string}[]> {
    return this.http.get<{name: string, slug: string, url: string}[]>(this.apiUrl);
  }
}