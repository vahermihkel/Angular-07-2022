import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: any[] = []; // <- kui on tühi, siis näitab HTML-s seda

  constructor() { }

  ngOnInit(): void {
    let cartSS = sessionStorage.getItem("cart");
    if (cartSS !== null) {
      this.cartProducts = JSON.parse(cartSS); // kui ei ole tühi, siis näitab HTML-s
    }
  }

}
