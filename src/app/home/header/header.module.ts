import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../shared/material.module';

import { HeaderComponent } from './header.component';
import { SearchComponent } from './search/search.component';
import { MatInput } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FlexLayoutModule
  ],
  declarations: [
    HeaderComponent,
    SearchComponent
  ]
})
export class HeaderModule { }
