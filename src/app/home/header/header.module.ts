import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../shared/material.module';

import { HeaderComponent } from './header.component';
import { SearchComponent } from './search/search.component';
import { MatInput } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

const headRouts: Routes = [
  { path: 'home', loadChildren: '../home.module#HomeModule' }
];


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild(headRouts)
  ],
  exports: [
    HeaderComponent,
    FlexLayoutModule
  ],
  declarations: [
    SearchComponent,
    HeaderComponent
  ]
})
export class HeaderModule { }
