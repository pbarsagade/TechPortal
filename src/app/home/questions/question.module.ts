import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../shared/material.module';

import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { PostQuestionComponent } from './post-question/post-question.component';
import { PostAnswerComponent } from './post-answer/post-answer.component';
import { QuestionComponent } from './question.component';

import { QuestionService } from './question.service';
import { Routes, RouterModule } from '@angular/router';

const queRoutes: Routes = [
  { path: '', component: QuestionListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild(queRoutes)
  ],
  exports: [
    QuestionComponent
  ],
  declarations: [
    QuestionListComponent,
    QuestionDetailComponent,
    PostQuestionComponent,
    PostAnswerComponent,
    QuestionComponent,
  ],
  providers: [QuestionService]
})
export class QuestionModule { }
