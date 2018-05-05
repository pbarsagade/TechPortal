import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Answer } from '../../../model/answer';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-answer',
  templateUrl: './post-answer.component.html',
  styleUrls: ['./post-answer.component.css']
})
export class PostAnswerComponent implements OnInit {

  answer: Answer;
  constructor(public dialog: MatDialog, private dialogRef: MatDialogRef<PostAnswerComponent>) { }

  ngOnInit() {
    this.answer = new Answer();
    this.answer.Title = 'Test Answer';
  }

  save() {
    this.dialogRef.close(this.answer);
  }

}
