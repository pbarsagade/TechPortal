import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from './header/header.module';
import { QuestionModule } from './questions/question.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import {HomeRoutingModule} from './home-routing.module';
import { DemoComponent } from './demo.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    DashboardModule,
    RouterModule,
    QuestionModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent,
    DemoComponent
  ]
})
export class HomeModule { }
