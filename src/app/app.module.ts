import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionDetailComponent } from './questions/question-detail/question-detail.component';
import { PostQuestionComponent } from './questions/post-question/post-question.component';
import { PostAnswerComponent } from './questions/post-answer/post-answer.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MyQuestionsComponent } from './user/my-questions/my-questions.component';
import { MyAnswersComponent } from './user/my-answers/my-answers.component';
import { MyTodoComponent } from './user/my-todo/my-todo.component';
import { ProfileDetailComponent } from './user/profile-detail/profile-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    PostQuestionComponent,
    PostAnswerComponent,
    ProfileComponent,
    MyQuestionsComponent,
    MyAnswersComponent,
    MyTodoComponent,
    ProfileDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
