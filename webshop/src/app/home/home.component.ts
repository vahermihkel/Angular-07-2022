import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'angular-toastify';
// ../ <--- kausta võrra ülespoole minek
// ../ home kaustast välja
// ../../ app kaustast välja
// ../../assets assets kausta
// ../../assets/products.json võtab siit kaustast selle faili
import productsData from '../../assets/products.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = productsData;

  constructor(private _toastService: ToastService,
    private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    let cart = []; // <- kui on tühi siis siia
    let cartSS = sessionStorage.getItem("cart");
    if (cartSS !== null) {
      cart = JSON.parse(cartSS); // <- kui ei ole tühi siis siia
    }
    cart.push(product); // <- lisab ühe juurde
    sessionStorage.setItem("cart", JSON.stringify(cart));
    // parem klõps -> inspect -> application -> session storage
    this._toastService.success(this.translateService.instant("toast.added-to-cart"));
  }

}
