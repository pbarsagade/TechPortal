import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

import { Category } from '../../model/category';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  private categories: BehaviorSubject<Category[]>;

  private dataStore: {
    categoryList: Category[];
  };

  constructor(private http: HttpClient) {
    this.dataStore = { categoryList: [] };
    this.categories = new BehaviorSubject<Category[]>([]);
  }

  get categoryList(): Observable<Category[]> {
    return this.categories.asObservable();
  }

  loadAllCategories() {
    const dataUrl = '../../../assets/data/category.json';

    return this.http.get<Category[]>(dataUrl)
      .subscribe(res => {
        this.dataStore.categoryList = res;
        this.categories.next(Object.assign({}, this.dataStore).categoryList);
      },
        error => {
          console.log('Failed to fetch categories');
        });
  }

}
