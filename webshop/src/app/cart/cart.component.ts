
import { Component, OnInit } from '@angular/core';
import { ParcelMachineService } from './parcel-machine.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: any[] = []; // <- kui on tühi, siis näitab HTML-s seda
  cartSum = 0;
  parcelMachines: any[] = [];
  selectedParcelMachine: any;

  constructor(private parcelMachineService: ParcelMachineService) { }

  ngOnInit(): void {
    let cartSS = sessionStorage.getItem("cart");
    if (cartSS !== null) {
      this.cartProducts = JSON.parse(cartSS); // kui ei ole tühi, siis näitab HTML-s
    }

    this.parcelMachineService.getParcelMachines().subscribe(pm => 
        this.parcelMachines = pm.filter(e => e.A0_NAME === "EE"));

    this.cartProducts.forEach(element => this.cartSum = this.cartSum + element.product.price * element.quantity);
  }

  decreaseQuantity(cartProduct: any) {
    const index = this.cartProducts.indexOf(cartProduct);
    // const index = this.cartProducts.findIndex(element => element.product.id === cartProduct.product.id);
    this.cartProducts[index].quantity = this.cartProducts[index].quantity - 1;
    if (this.cartProducts[index].quantity <= 0) {
      // ostukorvist kustutamine täpsel nagu veebipoes
      this.removeFromCart(cartProduct);
    }
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.cartSum = 0;
    this.cartProducts.forEach(element => this.cartSum = this.cartSum + element.product.price * element.quantity);
  }

  increaseQuantity(cartProduct: any) {
    const index = this.cartProducts.indexOf(cartProduct);
    this.cartProducts[index].quantity = this.cartProducts[index].quantity + 1;
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.cartSum = 0;
    this.cartProducts.forEach(element => this.cartSum = this.cartSum + element.product.price * element.quantity);
  }

  removeFromCart(cartProduct: any) {
    const index = this.cartProducts.indexOf(cartProduct);
    this.cartProducts.splice(index,1);
    sessionStorage.setItem("cart", JSON.stringify(this.cartProducts));
    this.cartSum = 0;
    this.cartProducts.forEach(element => this.cartSum = this.cartSum + element.product.price * element.quantity);
  }

  showParcelMachineEE() {
    this.parcelMachineService.getParcelMachines().subscribe(pm => 
        this.parcelMachines = pm.filter(e => e.A0_NAME === "EE"));
  }

  showParcelMachineLV() {
    this.parcelMachineService.getParcelMachines().subscribe(pm => 
        this.parcelMachines = pm.filter(e => e.A0_NAME === "LV"));
  }

  showParcelMachineLT() {
    this.parcelMachineService.getParcelMachines().subscribe(pm => 
        this.parcelMachines = pm.filter(e => e.A0_NAME === "LT"));
  }

}
