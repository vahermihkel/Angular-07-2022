import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  url = "https://angular-08-22-default-rtdb.europe-west1.firebasedatabase.app/categories.json";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(this.url).subscribe(categoriesFromDb => {
      if (categoriesFromDb !== null) {
        this.categories = categoriesFromDb;
      }
    });
  }

  onSubmit(form: any) {
    this.categories.push(form.value);
    this.http.put(this.url, this.categories).subscribe();
  }

  onDelete(category: any) {
    const index = this.categories.indexOf(category);
    this.categories.splice(index,1);
    this.http.put(this.url, this.categories).subscribe();
  } 

}
