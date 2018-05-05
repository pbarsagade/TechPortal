import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { QuestionAnswer } from '../../../model/questionAnswer';
import { PostAnswerComponent } from '../post-answer/post-answer.component';
import { MatDialog } from '@angular/material';
import { Answer } from '../../../model/answer';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  answer: Answer;
  queDetails: QuestionAnswer;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: QuestionService,
    public dialog: MatDialog) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.queDetails = this.service.getQuestion(id);
    this.answer = this.queDetails.Answers[0];
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PostAnswerComponent, {
      width: '600px', height: '450px',
      data: { answer: this.answer }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.answer = result;
    });
  }
}
