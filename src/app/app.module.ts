import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from './shared/material.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ProfileComponent } from './user/profile/profile.component';
import { MyQuestionsComponent } from './user/my-questions/my-questions.component';
import { MyAnswersComponent } from './user/my-answers/my-answers.component';
import { MyTodoComponent } from './user/my-todo/my-todo.component';
import { ProfileDetailComponent } from './user/profile-detail/profile-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MyQuestionsComponent,
    MyAnswersComponent,
    MyTodoComponent,
    ProfileDetailComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
