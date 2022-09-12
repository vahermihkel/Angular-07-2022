import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categoriesFromDb => {
      if (categoriesFromDb !== null) {
        this.categories = categoriesFromDb;
      }
    });
  }

  onSubmit(form: any) {
    this.categories.push(form.value);
    this.categoryService.addCategories(this.categories).subscribe();
  }

  onDelete(category: any) {
    const index = this.categories.indexOf(category);
    this.categories.splice(index,1);
    this.categoryService.addCategories(this.categories).subscribe();
  } 

}
