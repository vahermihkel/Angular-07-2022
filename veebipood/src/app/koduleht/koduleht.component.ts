import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-koduleht',
  templateUrl: './koduleht.component.html',
  styleUrls: ['./koduleht.component.css']
})
export class KodulehtComponent implements OnInit {
  // koolon tähistab tüüpi, võrdusmärk tähistab väärust
  tooted: any = []; // siia lisan muutujad, mis lähevad HTMLi
  
  // KUI OLI LISA-TOODE, siis võtsin tooted selleks, et sinna ühte juurde panna
  // ja tagasi localStorage-sse need saata

  // SIIN võtan tooted ja näitan neid HTML-s

  constructor() { }

  ngOnInit(): void {
    let tootedLS = localStorage.getItem("tooted");
    if (tootedLS !== null) {
      this.tooted = JSON.parse(tootedLS);
    }
  }

  // 1.         "Coca cola"
  // 2.         "Fanta"
  lisaOstukorvi(toode: any) {
    //1. ostukorv = [];
    //2. ostukorv = [];
    let ostukorv = []; // ei kuva HTML-s
    //  ostukorvLS = null;
    //  ostukorvLS = '["Coca cola"]' 
    let ostukorvLS = localStorage.getItem("ostukorv");
    if (ostukorvLS !== null) { // 1. VÄÄR -> ei tee blokki 2. TÕDE 
      ostukorv = JSON.parse(ostukorvLS);
      // 2. ostukorv = ["Coca cola"];
    }
    //1. [].push("Coca cola") ---> ["Coca cola"];
    //2. ["Coca cola"].push("Fanta") --> ["Coca cola", "Fanta"];
    ostukorv.push(toode);
    //1. VÕTI "ostukorv"
    //1. VÄÄRTUS '["Coca cola"]'  
    //2. VÕTI "ostukorv"
    //2. '["Coca cola", "Fanta"]'  
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
  }

}
