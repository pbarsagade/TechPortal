import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../../shared/material.module';

import { LeftBoardComponent } from './left-board/left-board.component';
import { RightBoardComponent } from './right-board/right-board.component';

import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [LeftBoardComponent, RightBoardComponent],
  declarations: [LeftBoardComponent, RightBoardComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
