import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meist',
  templateUrl: './meist.component.html',
  styleUrls: ['./meist.component.css']
})
export class MeistComponent implements OnInit {

  inimesed = [
    {eesnimi: "Koit", perenimi: "Toome", vanus: 36, email: "koit@angular.ee"},
    {eesnimi: "Priit", perenimi: "Kuus", vanus: 46, email: "priit@angular.ee"},
    {eesnimi: "Tõnis", perenimi: "Mägi", vanus: 66, email: "tõnis@angular.ee"},
    {eesnimi: "Kersti", perenimi: "Kaljulaid", vanus: 56, email: "kersti@angular.ee"},
    {eesnimi: "Anu", perenimi: "Välba", vanus: 46, email: "anu@angular.ee"}
  ]

  klikitudEmail = "";

  constructor() { }

  ngOnInit(): void {
  }

  lisa(vorm: any) {
    this.inimesed.push(vorm.value);
  }
   
  kustuta(inimene: any) {
    const index = this.inimesed.indexOf(inimene);
    this.inimesed.splice(index,1);
  }

  email(inimene: any) {
    this.klikitudEmail = inimene.email;
  }
}
