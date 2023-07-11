import { Component } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.css']
})
export class CategoryContentComponent {
  category: Category = {
    categoryId: 0,
    name: "",
    creationDate: "",
  }
  

}
