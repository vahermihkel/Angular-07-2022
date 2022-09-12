import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
// import productsData from 'src/assets/products.json';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private products: any[] = [];
  categories: any[] = [];

  constructor(private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService) { }

    // kontroll kui on null
  ngOnInit(): void {
    // this.http.get<any[]>(this.url).subscribe(productsFromDb => 
    //   this.products = productsFromDb
    // );
    this.productService.getProducts().subscribe(productsFromDb =>
       this.products = productsFromDb
       );

    this.categoryService.getCategories().subscribe(categoriesFromDb => {
      if (categoriesFromDb !== null) {
        this.categories = categoriesFromDb;
      }
    });
  }

  addNewProduct(form: NgForm) {
    this.products.push(form.value);
    // this.http.put(this.url, this.products).subscribe(() => this.router.navigateByUrl("/admin/halda-tooteid"));
    this.productService.addProducts(this.products).subscribe( 
      () => this.router.navigateByUrl("/admin/halda-tooteid")
    );
  }

}
