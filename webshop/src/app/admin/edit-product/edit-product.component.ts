import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: any;
  products: any[] = [];
  productEditForm: any;
  index: any;
  private catUrl = "https://angular-08-22-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  categories: any[] = [];

  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(this.catUrl).subscribe(categoriesFromDb => {
      if (categoriesFromDb !== null) {
        this.categories = categoriesFromDb;
      }
    });

    const productId = this.route.snapshot.paramMap.get("id"); // alati URL-st võttes tuleb jutumärkidega väärtus
    this.http.get<any[]>("https://angular-08-22-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(productsFromDb => {
      this.products = productsFromDb;          //    3123123        "3123123"
      this.product = this.products.find(element => element.id === Number(productId));
      this.index = this.products.indexOf(this.product);
      this.productEditForm = new FormGroup({
        id: new FormControl(this.product.id),
        name: new FormControl(this.product.name),
        price: new FormControl(this.product.price),
        category: new FormControl(this.product.category),
        image: new FormControl(this.product.image),
        description: new FormControl(this.product.description),
        active: new FormControl(this.product.active),
      })
    });
  }

  onSubmit() {
    this.products[this.index] = this.productEditForm.value;
    this.http.put("https://angular-08-22-default-rtdb.europe-west1.firebasedatabase.app/products.json", this.products).subscribe();
  }

}
