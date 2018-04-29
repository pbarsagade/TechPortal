import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { MyAnswersComponent } from './my-answers/my-answers.component';
import { MyQuestionsComponent } from './my-questions/my-questions.component';
import { MyTodoComponent } from './my-todo/my-todo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ProfileComponent],
  declarations: [
    ProfileComponent,
    ProfileDetailComponent,
    MyAnswersComponent,
    MyQuestionsComponent,
    MyTodoComponent
  ]
})
export class ProfileModuleModule { }
