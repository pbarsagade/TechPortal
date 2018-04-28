import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DemoComponent } from './demo.component';
import { DashboardModule } from './dashboard/dashboard.module';

const homeRoutes: Routes = [
  {
    path: '',
    loadChildren: './questions/question.module#QuestionModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: []
})
export class HomeRoutingModule { }
