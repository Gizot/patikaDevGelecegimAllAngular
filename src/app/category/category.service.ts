import { Injectable } from '@angular/core';
import { Category } from './category';
import { PostService } from '../post/post.service';
import { defaultcategories } from 'src/assets/defaultCategories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories : Category [] = [];

  constructor( postService: PostService) { }

  getCategories(): Category[] {
    return this.categories;
  }

  setCategories(): void {
    this.categories = defaultcategories;
  }

  deleteCategory($event: number) {

  }

  getCategoryById(id: number): Category | undefined {
    return 
  }



  

}
