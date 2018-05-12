import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';

import { QuestionService } from '../services/question.service';
import { Question } from '../../../model/question';
import { QuestionAnswer } from '../../../model/questionAnswer';
import { ActivatedRoute } from '@angular/router';
import { SearchFilterService } from '../../search-filter.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  queAnsList: Array<QuestionAnswer>;
  filteredqueAnsList: Array<QuestionAnswer>;

  constructor(private questionSvc: QuestionService, private searchSvc: SearchFilterService, private route: ActivatedRoute) {
    this.queAnsList = new Array<QuestionAnswer>();
  }

  ngOnInit() {
    this.questionSvc.loadAllQuestions();
    this.questionSvc.questionList.subscribe((ques: QuestionAnswer[]) => {
      if (ques.length === 0) { return; }
      this.queAnsList = ques;
      this.filteredqueAnsList = this.queAnsList;
    });
    this.searchSvc.filterText.subscribe(filtertxt => {
      if (filtertxt === '') {
        this.filteredqueAnsList = this.queAnsList;
      } else {
        this.filteredqueAnsList = this.queAnsList.filter(ques => ques.Question.Title.toLowerCase().indexOf(filtertxt.toLowerCase()) >= 0);
      }
    });
  }
}
