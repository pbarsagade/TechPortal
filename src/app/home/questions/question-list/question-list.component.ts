import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../../../model/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Question[];
  constructor(private service: QuestionService) {
    this.service = service;
  }

  ngOnInit() {
    this.service.loadAllQuestions();
    this.service.questionList.subscribe(ques => {
      if (ques.length === 0) { return; }
      this.questions = ques;
    });
  }
}
