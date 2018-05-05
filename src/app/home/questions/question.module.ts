import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';

import { MaterialModule } from '../../shared/material.module';
import { ModelsModule } from '../../model/models.module';

import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { PostQuestionComponent } from './post-question/post-question.component';
import { PostAnswerComponent } from './post-answer/post-answer.component';
import { QuestionComponent } from './question.component';

import { QuestionService } from './question.service';
import { CategoryService } from './category.service';
import { QuestionGuard } from './question-guard.guard';


const queRoutes: Routes = [
  { path: '', component: QuestionListComponent },
  { path: 'question/detail/:id', canActivate: [QuestionGuard], component: QuestionDetailComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    ModelsModule,
    OrderModule,
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
  providers: [
    QuestionService,
    CategoryService,
    QuestionGuard,
  ]
})
export class QuestionModule { }
