import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Answer } from '../../../model/answer';
import { Title } from '@angular/platform-browser';
import { QuestionAnswer } from '../../../model/questionAnswer';

@Component({
  selector: 'app-post-answer',
  templateUrl: './post-answer.component.html',
  styleUrls: ['./post-answer.component.css']
})
export class PostAnswerComponent implements OnInit {

  quesAns: QuestionAnswer;
  constructor(public dialog: MatDialog, private dialogRef: MatDialogRef<PostAnswerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.quesAns = this.data.queAns;
  }

  save() {
    this.dialogRef.close(this.quesAns);
  }
}
