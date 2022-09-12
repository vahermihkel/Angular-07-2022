import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // component.ts failis private tähistab, et seda pole HTMLs
  // kui siin on private, siis .ts failid ei saa seda URLi kätte
  private url = "https://angular-08-22-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any[]>(this.url);
  }

  addProducts(products: any[]) {
    return this.http.put(this.url, products);
  }
}


// ilma HTML-ta, ilma CSS-ta
// Service-t pannakse component.ts sisse kui jagatakse funktsionaalsusi