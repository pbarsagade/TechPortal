import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';

const appRouts: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
