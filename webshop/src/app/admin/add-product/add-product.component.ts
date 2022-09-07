import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import productsData from 'src/assets/products.json';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private products: any[] = [];
  private url = "https://angular-08-22-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  private catUrl = "https://angular-08-22-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  categories: any[] = [];

  constructor(private router: Router,
    private http: HttpClient) { }

    // kontroll kui on null
  ngOnInit(): void {
    this.http.get<any[]>(this.url).subscribe(productsFromDb => 
      this.products = productsFromDb
    );

    this.http.get<any[]>(this.catUrl).subscribe(categoriesFromDb => {
      if (categoriesFromDb !== null) {
        this.categories = categoriesFromDb;
      }
    });
  }

  addNewProduct(form: NgForm) {
    this.products.push(form.value);
    this.http.put(this.url, this.products).subscribe(() => this.router.navigateByUrl("/admin/halda-tooteid"));
  }

}
