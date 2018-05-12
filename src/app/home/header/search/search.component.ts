import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../questions/services/question.service';
import { SearchFilterService } from '../../search-filter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private searchSvc: SearchFilterService, private router: Router) { }
  searchText: string;
  ngOnInit() {
  }
  onSearch(): void {
    this.searchSvc.filter.next(this.searchText);
    if (this.router.url.indexOf('/') >= 0) {
      this.router.navigate(['']);
    }
  }
}
