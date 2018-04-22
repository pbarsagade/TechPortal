import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-top-leaders',
  templateUrl: './top-leaders.component.html',
  styleUrls: ['./top-leaders.component.css']
})

export class TopLeadersComponent implements OnInit {
  leaders: User[];

  constructor(private service: DashboardService) {
    this.service = service;
  }

  ngOnInit() {
    this.service.loadAllLeaders();
    this.service.leaderList.subscribe(ldr => {
      if (ldr.length === 0) { return; }
      this.leaders = ldr;
    });
  }
}
