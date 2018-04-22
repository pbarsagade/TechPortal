import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../dashboard.service';
import { TechExpert } from '../../../model/techExpert';

@Component({
  selector: 'app-left-board',
  templateUrl: './left-board.component.html',
  styleUrls: ['./left-board.component.css']
})
export class LeftBoardComponent implements OnInit {

  experts: TechExpert[];
  constructor(private service: DashboardService) {
    this.service = service;
  }

  ngOnInit() {
    this.service.loadAllExperts();
    this.service.expertList.subscribe(exp => {
      if (exp.length === 0) { return; }
      this.experts = exp;
    });
  }

}
