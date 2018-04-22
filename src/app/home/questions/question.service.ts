import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import {Question} from '../../model/question';


@Injectable()
export class QuestionService {

  private questions: BehaviorSubject<Question[]>;

  private dataStore: {
    questionList: Question[];
  };

  constructor(private http: HttpClient) {
    this.dataStore = { questionList: [] };
    this.questions = new BehaviorSubject<Question[]>([]);
  }

  get questionList(): Observable<Question[]> {
    return this.questions.asObservable();
  }

  loadAllQuestions() {
    const dataUrl = '../../../assets/data/queAns.json';

    return this.http.get<Question[]>(dataUrl)
      .subscribe(res => {
        this.dataStore.questionList = res;
        this.questions.next(Object.assign({}, this.dataStore).questionList);
      },
        error => {
          console.log('Failed to fetch questions');
        });
  }

}
