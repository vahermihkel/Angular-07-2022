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
  // [1,1,2]     <- .map    [{name: "", category: 1}, {name: "", category: 1}, {name: "", category: 2}]
  // new Set()    -->    [1,2]
  categories = [... new Set(productsData.map(element => element.category))];
  activeCategory = "";

  constructor(private _toastService: ToastService,
    private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  filterByCategory(category: any) {
    if (category === '') {
      this.products = productsData;
    } else {
      this.products = productsData.filter(element => element.category === category);
    }
    this.activeCategory = category;
  }

  sortAZ() {
    this.products.sort((a,b) => a.name.localeCompare(b.name));
  }

  sortZA() {
    this.products.sort((a,b) => b.name.localeCompare(a.name));
  }

  sortPriceAsc() {
    this.products.sort((a,b) => a.price - b.price);
  }

  sortPriceDesc() {
    this.products.sort((a,b) => b.price - a.price);
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
