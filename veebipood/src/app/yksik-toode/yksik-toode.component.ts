import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yksik-toode',
  templateUrl: './yksik-toode.component.html',
  styleUrls: ['./yksik-toode.component.css']
})
export class YksikToodeComponent implements OnInit {
  toode: any; // kuvamaks HTML-s
  private tooted: any[] = [];

            // saamaks kätte Angulari standardkoodi (node_modules seest)
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
              // standardkood kuidas saada muutujat kätte URL-st
    const nimiURL = this.route.snapshot.paramMap.get("nimi");
    let tootedLS = localStorage.getItem("tooted");
            // vasak pool EI VÕRDU parema poolega, siis on OK
    if (tootedLS !== null) {
      this.tooted = JSON.parse(tootedLS);
    }
                                                // vasak pool võrdub parema poolega
                                                // "Tesla" === "Tesla"
    this.toode = this.tooted.find(element => element.nimi === nimiURL);
  }

}
