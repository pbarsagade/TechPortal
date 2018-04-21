import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from './header/header.module';
import { QuestionModule } from './questions/question.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    DashboardModule,
    QuestionModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
