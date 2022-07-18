import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
  ostukorv: any = [];

  constructor() { }

  ngOnInit(): void {
    let ostukorvLS = localStorage.getItem("ostukorv");
    if (ostukorvLS !== null) {
      this.ostukorv = JSON.parse(ostukorvLS);
    }
  }

  lisa(toode: any) {
    this.ostukorv.push(toode);
    localStorage.setItem("ostukorv", JSON.stringify(this.ostukorv));
  }

  kustuta(toode: any) {
    let j2rjekorraNumber = this.ostukorv.indexOf(toode);
    this.ostukorv.splice(j2rjekorraNumber, 1);
    localStorage.setItem("ostukorv", JSON.stringify(this.ostukorv));
  }

}
