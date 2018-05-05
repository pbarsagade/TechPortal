import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { QuestionAnswer } from '../../../model/questionAnswer';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  queDetails: QuestionAnswer;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: QuestionService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.queDetails = this.service.getQuestion(id);
  }
}
