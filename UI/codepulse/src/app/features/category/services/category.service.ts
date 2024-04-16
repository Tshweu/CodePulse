import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Category } from '../models/category.model';
import { environment } from '../../../../environments/environment';
import { UpdateCategoryRequest } from '../models/update-category-request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void>{
    return this._http.post<void>(`${environment.apiBaseUrl}/api/categories`,model);
  }

  getAllCategories(): Observable<Category[]>{
    return this._http.get<Category[]>(`${environment.apiBaseUrl}/api/categories`);
  }

  getCategoryById(id: string): Observable<Category>{
    return this._http.get<Category>(`${environment.apiBaseUrl}/api/categories/${id}`);
  }

  updateCategory(id: string,updateCategoryRequest: UpdateCategoryRequest): Observable<Category>{
    return this._http.put<Category>(`${environment.apiBaseUrl}/api/categories/${id}`,updateCategoryRequest)
  }
}
