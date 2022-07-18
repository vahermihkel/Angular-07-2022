import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lisa(form: any) {
    let tooted = [];
    let tootedLS = localStorage.getItem("tooted");
    if (tootedLS !== null) {
      tooted = JSON.parse(tootedLS);
    }
    tooted.push(form.value.nimi);
    localStorage.setItem("tooted", JSON.stringify(tooted));
  }

  // 1. teeme uue muutuja, millele anname väärtuseks tühi massiiv     let        =   []
  // 2. võtame brauseri lokaalmälust kõik tooted                                localStorage.getItem
  // 3. KUI ON seal midagi olemas, asendame muutuja väärtuse                 if ( !== null) {}
  // 4. KUNA localStorage-s peab olema kõik jutumärkide väärtuses,            JSON.parse()
  // peame jutumärgid võetud väärtustel maha võtma
  // 5. lisame toote juurde sinna muutujasse                                   .push()
  // 6. paneme jutumärgid tagasi                                              JSON.stringify()
  // 7. paneme localStorage-sse tagasi                                  localStorage.setItem()

}
