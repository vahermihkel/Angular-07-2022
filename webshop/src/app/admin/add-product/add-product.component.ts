import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import productsData from 'src/assets/products.json';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addNewProduct(form: NgForm) {
    productsData.push(form.value);
    this.router.navigateByUrl("/admin/halda-tooteid");
  }

}
