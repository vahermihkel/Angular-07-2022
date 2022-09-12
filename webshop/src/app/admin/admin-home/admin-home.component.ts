import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import ecoopFailist from '../../../assets/ecoop.json';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  url = "https://api.saaremaa.ecoop.ee/supermarket/products";
  products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get<any>(this.url).subscribe(productsFromDb => this.products = productsFromDb.data);
   // {data: [..]}  ---> [..]
    this.products = ecoopFailist.data;
  }

}
