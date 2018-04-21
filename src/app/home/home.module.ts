import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from './header/header.module';
import { QuestionModule } from './questions/question.module';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    QuestionModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent,
    DashboardComponent
  ]
})
export class HomeModule { }
