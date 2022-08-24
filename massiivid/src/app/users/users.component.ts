import { Component, OnInit } from '@angular/core';
import usersFromFile from "../../assets/users.json";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = usersFromFile;
  otsitavNimi = "";
  // get unique items in array javascript
  telefoniNumbriAlgus: any[] = [... new Set(usersFromFile.map(element => element.phone.charAt(0)))].sort();
  viimatiklikitudTelNumAlgus = "0";

  constructor() { }

  ngOnInit(): void {
  }

  // .push   // unshift

  // phone      .map()     
  // email
  // user.address.geo.lat

  filtreeriTelAlgus(telNumAlgus: any) {
    this.viimatiklikitudTelNumAlgus = telNumAlgus;
    this.users = usersFromFile.filter(element => element.phone.startsWith(telNumAlgus))
  }

  otsi() {
    this.users = usersFromFile.filter(element => 
      element.email.includes(this.otsitavNimi) || 
      element.name.includes(this.otsitavNimi) ||
      element.phone.includes(this.otsitavNimi)
      );
  }

  filtreeri() {
    this.users = this.users.filter(element => element.name.startsWith("C"));
  }

  sorteeri() {
    this.users.sort((a,b) => a.name.localeCompare(b.name));
  }

}
