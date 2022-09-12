import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

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
    private productService: ProductService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categoriesFromDb => {
      if (categoriesFromDb !== null) {
        this.categories = categoriesFromDb;
      }
    });

    const productId = this.route.snapshot.paramMap.get("id"); // alati URL-st võttes tuleb jutumärkidega väärtus
    this.productService.getProducts().subscribe(productsFromDb => {
      this.products = productsFromDb;          //    3123123        "3123123"
      this.product = this.products.find(element => element.id === Number(productId));
      this.index = this.products.indexOf(this.product);
      this.productEditForm = new FormGroup({
        id: new FormControl(this.product.id, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
        name: new FormControl(this.product.name, [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
        price: new FormControl(this.product.price),
        category: new FormControl(this.product.category),
        image: new FormControl(this.product.image, [Validators.required, Validators.email]),
        description: new FormControl(this.product.description),
        active: new FormControl(this.product.active),
      })
    });
  }

  onSubmit() {
    this.products[this.index] = this.productEditForm.value;
    this.productService.addProducts(this.products).subscribe();
  }

}
