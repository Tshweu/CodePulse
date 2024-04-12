import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Category } from '../models/category.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void>{
    return this._http.post<void>(`${environment.apiBaseUrl}/api/Categories`,model);
  }

  getAllCategories(): Observable<Category[]>{
    return this._http.get<Category[]>(`${environment.apiBaseUrl}/api/Categories`);
  }
}
