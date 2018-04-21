import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../dashboard.service';
import { TechExpert } from '../../../model/techExpert';

@Component({
  selector: 'app-left-board',
  templateUrl: './left-board.component.html',
  styleUrls: ['./left-board.component.css']
})
export class LeftBoardComponent implements OnInit {


  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
  servive: DashboardService;
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
