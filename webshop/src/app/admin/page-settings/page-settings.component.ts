import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrls: ['./page-settings.component.css']
})
export class PageSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addSettings(form: NgForm) {
    // .push(form.value) <--- [{},{UUS}]
    // key            |    value
    // cartProducts   |    [{},{UUS}]

    // contact        |    {UUS}
    localStorage.setItem("contact", JSON.stringify(form.value));
  }

}
