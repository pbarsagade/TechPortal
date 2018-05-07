import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Answer } from '../../../model/answer';
import { Title } from '@angular/platform-browser';
import { QuestionAnswer } from '../../../model/questionAnswer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-answer',
  templateUrl: './post-answer.component.html',
  styleUrls: ['./post-answer.component.css']
})
export class PostAnswerComponent implements OnInit {

  prevBtnLbl = 'Preview';
  isEditable = true;
  quesAns: QuestionAnswer;
  yourAns: string;
  constructor(public dialog: MatDialog, private dialogRef: MatDialogRef<PostAnswerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.quesAns = this.data.queAns;
  }

  save() {
    this.dialogRef.close(this.quesAns);
  }

  onPreview(frmQue: NgForm) {
    this.prevBtnLbl = (this.prevBtnLbl === 'Preview') ? 'Edit' : 'Preview';
    this.isEditable = !this.isEditable;
    if (!this.isEditable) {
      // this.question = frmQue.value;
      console.log(frmQue.value);
      console.log(this.yourAns);
    }
  }
}
