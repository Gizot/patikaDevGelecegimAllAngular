import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryContentComponent } from './category-content/category-content.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoryContentComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppModule,
    RouterModule,
  ]
})
export class CategoryModule { }
