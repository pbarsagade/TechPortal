import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuestionListComponent } from './home/questions/question-list/question-list.component';
import { QuestionDetailComponent } from './home/questions/question-detail/question-detail.component';
import { PostQuestionComponent } from './home/questions/post-question/post-question.component';
import { PostAnswerComponent } from './home/questions/post-answer/post-answer.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MyQuestionsComponent } from './user/my-questions/my-questions.component';
import { MyAnswersComponent } from './user/my-answers/my-answers.component';
import { MyTodoComponent } from './user/my-todo/my-todo.component';
import { ProfileDetailComponent } from './user/profile-detail/profile-detail.component';
import { HomeComponent } from './home/home.component';


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
    ProfileDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
