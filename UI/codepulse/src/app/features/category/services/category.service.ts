import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from '../models/add-category-request.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void>{
    return this._http.post<void>(`https://localhost:5000/api/categories`,model);
  }
}
