import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Category } from './category';
import { User } from './user';
import { TechExpert } from './techExpert';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    Category,
    User,
    TechExpert
  ],
  declarations: [
    Category,
    User,
    TechExpert
  ]
})
export class ModelsModule {

}
