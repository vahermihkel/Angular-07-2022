import { Component, OnInit } from '@angular/core';
import usersFromFile from "../../assets/users.json";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = usersFromFile;

  constructor() { }

  ngOnInit(): void {
  }

  // .push   // unshift

  filtreeri() {
    this.users = this.users.filter(element => element.name.startsWith("C"));
  }

  sorteeri() {
    this.users.sort((a,b) => a.name.localeCompare(b.name));
  }

}
