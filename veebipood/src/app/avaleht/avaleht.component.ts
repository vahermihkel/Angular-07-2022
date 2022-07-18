import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {
  kogus = 0; // numbrilistega saab teha tehteid: korrutamine,jagamine,liitmine,lahutamine
  s6num = "Muuda kogust!"; // saab välja kuvada
  kasSisestatud = false; // rangelt väär või tõde

  constructor() { }

  ngOnInit(): void { // funktsioon algab loogelisest sulust
    // console.log("lehe käimaminemise funktsioon");
  } // funktsioon lõppeb loogelise suluga
  // funktsioon võib minna lõputult käima

  tagasiNulli() {
    this.kogus = 0;
    this.s6num = "Kogus pandud tagasi nulli!"
  }

  v2hendaKogust() {
    if (this.kogus > 0) { // sulgude sees on avaldis, mis küsib tõest või väära 
      // tõene blokk
      this.kogus = this.kogus - 1; 
      this.s6num = "Kogus vähendatud!";
    } else {
      // väär blokk
      this.s6num = "Kogus ei saa olla miinuses!";
    }
  }

  suurendaKogust() {
    // võrdusmärgiga annan uue väärtuse
    // this. viitab sellele, et see muutuja on sama nimetusega üleval olemas
    // this.kogus paremal pool võrdusmärki --> võtab väärtuse ja paneb vasakule poole
    this.kogus = this.kogus + 1;
    this.s6num = "Kogus suurendatud!";
  }

  sisesta() {
    this.kasSisestatud = true;
  }  

}

// parem klõps -> split right
// ctrl + *