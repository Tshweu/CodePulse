import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(private _categoryService: CategoryService,private router: Router){
    this.model = {
      name: '',
      urlHandle: ''
    }
  }

  onFormSubmit(): void{
    this.addCategorySubscription = this._categoryService.addCategory(this.model).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/categories');
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
