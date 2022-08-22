import { Component, OnInit } from '@angular/core';
import nimedFailist from "../../assets/nimed.json";

@Component({
  selector: 'app-nimed',
  templateUrl: './nimed.component.html',
  styleUrls: ['./nimed.component.css']
})
export class NimedComponent implements OnInit {
  nimed = nimedFailist;
  j2rjekorranumber: any;
  leitud: any;
  summa: any = 0;  // NaN  ---> Not a Number kui pole algväärtust

  constructor() { }

  ngOnInit(): void {
  }

  arvutaSumma() {
    this.nimed.forEach(element => this.summa = this.summa + element.length)
  }

  leia() {                      // "Fawkes"         true
    this.leitud = this.nimed.find(element => element.includes("kus"));
  }

  popFunktsioon() {
    this.nimed.pop(); // kustutab lõpust ühe ära
  }

  shiftFunktsioon() {
    this.nimed.shift(); // kustutab algusest ühe ära
  }

  unshiftFunktsioon() {
    this.nimed.unshift("Test"); // lisab algusesse ühe juurde
  }

  pushFunktsioon() {
    this.nimed.push("Test"); // lisab algusesse ühe juurde
  }

  spliceFunktsioon() {
    this.nimed.splice(5); // kustutab alates selles numbrist kõik ära
  }

  kustutaAlgusest() {
    this.nimed.splice(2,1); // kustutab alates selles numbrist ühe ära
  }

  kustuta(nimi: any) {
    const index = this.nimed.indexOf(nimi);
    this.nimed.splice(index,1);
  }

  tyhjenda() {
    this.nimed = [];
    // this.nimed.splice(0);
  }

  indexOfFunktsioon(nimi: any) {
    this.j2rjekorranumber = this.nimed.indexOf(nimi);
  }

  filterFunktsioon() {
                              //   "Markus"    -> true
    this.nimed = this.nimed.filter(element => element.length === 1);
  }

  filterFunktsioon2() {
    this.nimed = this.nimed.filter(element => element.startsWith("S"));
  }

  mapFunktsioon() {           // Aaron       "TEST-Aaron"
    this.nimed = this.nimed.map(element => "TEST-" + element);
  }

  mapFunktsioon2() {
    this.nimed = this.nimed.map(element => element.charAt(2));
  }

  sorteeri() {    // Aaran Aaren  -> -1/1    posiiivse korral vahetab asukohta
    this.nimed.sort((a,b)=> a.localeCompare(b));
  }

  sorteeri2() {
    this.nimed.sort((a,b)=> b.localeCompare(a));
  }

  sorteeri3() {   //           6           5
    this.nimed.sort((a,b)=> a.length - b.length);
  }

  sorteeri4() {   //                   6           5
    this.nimed.sort((a,b)=> -1 * (a.length - b.length));
  }
  // .pop()  .shift  .unshift() .sort()   .filter()    .map()   
  // .push()   .splice()   .find()    .indexOf()   .length   .forEach()

}
