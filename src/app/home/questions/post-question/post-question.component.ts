import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from '../../../model/question';
import { QuestionService } from '../question.service';
import { CategoryService } from '../category.service';
import { Category } from '../../../model/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.css']
})
export class PostQuestionComponent implements OnInit {
  question: Question;
  categories: Category[];
  title: string;
  desc: string;
  category: string;
  prevBtnLbl = 'Preview';
  isEditable = true;
  constructor(private queSvc: QuestionService, private catSvc: CategoryService, private router: Router) { }

  ngOnInit() {
    this.question = new Question();
    this.loadCategories();
  }

  loadCategories() {
    this.catSvc.loadAllCategories();
    this.catSvc.categoryList.subscribe(res => {
      if (res.length === 0) { return; }
      this.categories = res;
    });
  }
  onSubmit(frmQue: NgForm) {
    if (frmQue.valid) {
      // this.question = frmQue.value;
      console.log('onSubmit : ' + this.question);
      this.queSvc.newquestion(this.question);
      this.router.navigate(['']);
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
