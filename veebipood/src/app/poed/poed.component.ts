import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poed',
  templateUrl: './poed.component.html',
  styleUrls: ['./poed.component.css']
})
export class PoedComponent implements OnInit {
  // salvestused:
  // 1. faili
  // 2. brauserisse
  // 3. andmebaasi
  keskused = ['Kristiine', 'Mustamäe', 'Ülemiste', 'Balti jaam'];
  aadress = "";

  constructor() { }

  ngOnInit(): void {
  }

  // uut muutujat on võimalik tekitada KOLMES kohas:
  // 1. faili üleval, hiljem viitan talle kui this.
  // 2. sulgude sees, hiljem lihtsalt viitan talle
  // 3. let eesliidesega, hiljem lihtsalt viitan talle

  lisaPood(form: any) {
    this.keskused.push(form.value.pood);
  }

          //  "Kristiine"
  kustutaPood(keskus: string) {
    // let tähendab uue muutuja tekitamist
    //    0                [0,1,2,3]        // "Kristiine"
    let j2rjekorraNumber = this.keskused.indexOf(keskus);
    // [0,1,2,3].splice(0,1)    -->   [1,2,3]
    this.keskused.splice(j2rjekorraNumber, 1); // splice -> kustutamine. järjekorranumber ja mitu tükki tahan kustutada
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
  
  // parameetri väärtus tuleb sulgude vahelt ja saadetakse väärtuseks muutujale üleval
  muudaAadress(keskuseAadress: string) {
    this.aadress = keskuseAadress;
  }

}
