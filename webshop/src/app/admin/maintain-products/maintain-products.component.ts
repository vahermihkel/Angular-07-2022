import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'angular-toastify';
import productsData from 'src/assets/products.json';
// import productsData from '../../../assets/products.json';

@Component({
  selector: 'app-maintain-products',
  templateUrl: './maintain-products.component.html',
  styleUrls: ['./maintain-products.component.css']
})
export class MaintainProductsComponent implements OnInit {
  products = productsData; //HTML jaoks
  // private products; <- kasutan kahes või enamas funktsioonis

  constructor(private _toastService: ToastService,
    private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  deleteProduct(product: any) {
    const index = this.products.indexOf(product);
    productsData.splice(index,1);
    // annab sõnumi, et kustutati
    //https://www.npmjs.com/package/angular-toastify
    this._toastService.success(this.translateService.instant('toast.deleted'));
  }

}
