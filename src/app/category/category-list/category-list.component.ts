import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories: Category [] = [];

  constructor(private categoryService : CategoryService, private router : Router){
    if(this.categoryService.getCategor)
  }


}
