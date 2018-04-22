import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  template: `
  <app-question-list>Loading...</app-question-list>
  `,
  styles: []
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
