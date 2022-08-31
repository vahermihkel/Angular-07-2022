import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'angular-toastify';
// import productsData from 'src/assets/products.json';
// import productsData from '../../../assets/products.json';

@Component({
  selector: 'app-maintain-products',
  templateUrl: './maintain-products.component.html',
  styleUrls: ['./maintain-products.component.css']
})
export class MaintainProductsComponent implements OnInit {
  products: any[] = []; //HTML jaoks
  // private products; <- kasutan kahes või enamas funktsioonis

  constructor(private _toastService: ToastService,
    private translateService: TranslateService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>("https://angular-08-22-default-rtdb.europe-west1.firebasedatabase.app/products.json").subscribe(productsFromDb => 
      this.products = productsFromDb
    );
  }

  deleteProduct(product: any) {
    const index = this.products.indexOf(product);
    this.products.splice(index,1);
    // annab sõnumi, et kustutati
    //https://www.npmjs.com/package/angular-toastify
    this._toastService.success(this.translateService.instant('toast.deleted'));

    this.http.put("https://angular-08-22-default-rtdb.europe-west1.firebasedatabase.app/products.json", this.products).subscribe();

  }

}
