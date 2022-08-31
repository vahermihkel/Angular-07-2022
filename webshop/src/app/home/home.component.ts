import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'angular-toastify';
// ../ <--- kausta võrra ülespoole minek
// ../ home kaustast välja
// ../../ app kaustast välja
// ../../assets assets kausta
// ../../assets/products.json võtab siit kaustast selle faili
// import productsData from '../../assets/products.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = []; // <----- väljanäidatav lehel, muudan koguaeg
  // filtreerin/sorteerin
  originalProducts: any[] = []; // <--- ei muuda kunagi, ainult loen väärtust
  // products = productsData;
  // [1,1,2]     <- .map    [{name: "", category: 1}, {name: "", category: 1}, {name: "", category: 2}]
  // new Set()    -->    [1,2]
  categories: any[] = [];
  activeCategory = "";

  constructor(private _toastService: ToastService,
    private translateService: TranslateService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>("https://angular-08-22-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(productsFromDb => {
      this.products = productsFromDb;
      this.originalProducts = productsFromDb;
      this.categories = [... new Set(this.originalProducts.map(element => element.category))];
    });
  }

  filterByCategory(category: any) {
    if (category === '') {
      this.products = this.originalProducts;
    } else {
      this.products = this.originalProducts.filter(element => element.category === category);
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

// Andmebaasiühendused
// Kategooriate lisamise
// Toodete muutmise

// Nortali proovitöö: saate harjutada proovitöö järgi
// 14.09 <- Töötukassas ametlikult
// 19.09 <- meie viimane päev


// Lõpuprojekt - iseseisvalt mingisuguse projekti:
// 1. Webshopi edasiarendus
// 2. Youtube-i / Udemy järgi mingisugune projekt
// 3. Täitsa nullist enda välja mõeldud (portfoolio, enda veebileht)