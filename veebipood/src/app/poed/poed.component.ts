import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poed',
  templateUrl: './poed.component.html',
  styleUrls: ['./poed.component.css']
})
export class PoedComponent implements OnInit {
  aadress = "";

  constructor() { }

  ngOnInit(): void {
  }

  // aadressKristiine () {
  //   this.aadress = "Tulika tänav 12";
  // }

  // aadressMustamae () {
  //   this.aadress = "Tammsaare tee 76";
  // }

  // aadressYlemiste () {
  //   this.aadress = "Lennujaama tee 45";
  // }
  
  muudaAadress(keskuseAadress: string) {
    this.aadress = keskuseAadress;
  }

}
