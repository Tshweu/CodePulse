import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnDestroy {

  model: AddCategoryRequest;
  addCategorySubscription?: Subscription;

  constructor(private _categoryService: CategoryService){
    this.model = {
      name: '',
      urlHandle: ''
    }
  }

  onFormSubmit(): void{
    this.addCategorySubscription = this._categoryService.addCategory(this.model).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  ngOnDestroy(): void {
      this.addCategorySubscription?.unsubscribe();
  }
}
