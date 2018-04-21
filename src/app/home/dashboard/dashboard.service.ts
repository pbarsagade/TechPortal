import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Category } from '../../model/category';
import { User } from '../../model/user';
import { TechExpert } from '../../model/techExpert';

@Injectable()
export class DashboardService {

  private experts: BehaviorSubject<TechExpert[]>;

  private dataStore: {
    experts: TechExpert[];
  };

  constructor(private http: HttpClient) {
    this.dataStore = { experts: [] };
    this.experts = new BehaviorSubject<TechExpert[]>([]);
  }

  get expertList(): Observable<TechExpert[]> {
    return this.experts.asObservable();
  }

  loadAllExperts() {
    const dataUrl = '../../../assets/data/techExpert.json';

    return this.http.get<TechExpert[]>(dataUrl)
      .subscribe(res => {
        this.dataStore.experts = res;
        this.experts.next(Object.assign({}, this.dataStore).experts);
      },
        error => {
          console.log('Failed to fetch users');
        });
  }
}
