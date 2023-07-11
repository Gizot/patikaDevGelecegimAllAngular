import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryContentComponent } from './category-content/category-content.component';
import { CategoryListComponent } from './category-list/category-list.component';



@NgModule({
  declarations: [
    CategoryContentComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }
