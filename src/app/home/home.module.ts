import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionDetailComponent } from './questions/question-detail/question-detail.component';
import { PostQuestionComponent } from './questions/post-question/post-question.component';
import { PostAnswerComponent } from './questions/post-answer/post-answer.component';
import { QuestionComponent } from './questions/question.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    PostQuestionComponent,
    PostAnswerComponent,
    QuestionComponent,
    DashboardComponent,
    HeaderComponent
  ]
})
export class HomeModule { }
