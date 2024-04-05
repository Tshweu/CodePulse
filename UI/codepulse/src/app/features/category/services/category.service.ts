import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }
}
