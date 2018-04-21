import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './header.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
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
