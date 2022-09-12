import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = "https://angular-08-22-default-rtdb.europe-west1.firebasedatabase.app/categories.json";

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any[]>(this.url);
  }

  addCategories(categories: any[]) {
    return this.http.put(this.url, categories);
  }
}

