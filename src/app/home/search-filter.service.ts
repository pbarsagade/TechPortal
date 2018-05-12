import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchFilterService {
  filter: BehaviorSubject<string>;

  constructor() {
    this.filter = new BehaviorSubject<string>('');
  }

  get filterText(): Observable<string> {
    return this.filter.asObservable();
  }
}
