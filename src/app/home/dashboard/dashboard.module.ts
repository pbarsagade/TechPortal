import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../../shared/material.module';

import { LeftBoardComponent } from './left-board/left-board.component';
import { RightBoardComponent } from './right-board/right-board.component';
import { TopLeadersComponent } from './top-leaders/top-leaders.component';

import { DashboardService } from './dashboard.service';
import { Routes, RouterModule } from '@angular/router';
import { PostQuestionComponent } from '../questions/post-question/post-question.component';

const leftNavRoutes: Routes = [
  { path: 'postQuery', component:  PostQuestionComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild(leftNavRoutes)
  ],
  exports: [
    LeftBoardComponent,
    RightBoardComponent
  ],
  declarations: [
    LeftBoardComponent,
    RightBoardComponent,
    TopLeadersComponent
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
