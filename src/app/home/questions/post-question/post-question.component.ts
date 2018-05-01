import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from '../../../model/question';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.css']
})
export class PostQuestionComponent implements OnInit {
  question: Question;
  title: string;
  desc: string;
  category: string;
  prevBtnLbl = 'Preview';
  isEditable = true;
  constructor() { }

  ngOnInit() {
    this.question = new Question();
  }

  onSubmit(frmQue: NgForm) {
    if (frmQue.valid) {
      this.question = frmQue.value;
      console.log('onSubmit : ' + this.question);
    }
  }

  onPreview(frmQue: NgForm) {
    this.prevBtnLbl = (this.prevBtnLbl === 'Preview') ? 'Edit' : 'Preview';
    this.isEditable = !this.isEditable;
    if (!this.isEditable) {
      // this.question = frmQue.value;
      console.log(frmQue.value);
      console.log(this.title);
    }
  }

}
