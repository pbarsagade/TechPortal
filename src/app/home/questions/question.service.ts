import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Question } from '../../model/question';
import { Category } from '../../model/category';
import { QuestionAnswer } from '../../model/questionAnswer';


@Injectable()
export class QuestionService {

  private questions: BehaviorSubject<QuestionAnswer[]>;

  private dataStore: {
    questionList: QuestionAnswer[];
  };

  constructor(private http: HttpClient) {
    this.dataStore = { questionList: [] };
    this.questions = new BehaviorSubject<QuestionAnswer[]>([]);
  }

  get questionList(): Observable<QuestionAnswer[]> {
    return this.questions.asObservable();
  }

  newquestion(ques: Question): number {
    ques.Id = 5;
    const qa = new QuestionAnswer();
    qa.Question = ques;
    this.dataStore.questionList.push(qa);
    this.questions.next(Object.assign({}, this.dataStore).questionList);
    return ques.Id;
  }

  loadAllQuestions() {
    if (this.dataStore.questionList.length !== 0) { return; }

    const dataUrl = '../../../assets/data/queAns.json';

    return this.http.get<QuestionAnswer[]>(dataUrl)
      .subscribe(res => {
        this.dataStore.questionList = res;
        this.questions.next(Object.assign({}, this.dataStore).questionList);
      },
        error => {
          console.log('Failed to fetch questions');
        });
  }

}
