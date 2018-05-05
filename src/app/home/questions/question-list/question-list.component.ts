import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';

import { QuestionService } from '../question.service';
import { Question } from '../../../model/question';
import { QuestionAnswer } from '../../../model/questionAnswer';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  queAnsList: Array<QuestionAnswer>;
  constructor(private service: QuestionService) {
    this.service = service;
    this.queAnsList = [];
  }

  ngOnInit() {
    this.service.loadAllQuestions();
    this.service.questionList.subscribe((ques: QuestionAnswer[]) => {
      if (ques.length === 0) { return; }
      this.queAnsList = ques;
    });
  }
}
