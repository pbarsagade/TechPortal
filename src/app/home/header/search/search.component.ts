import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../questions/services/question.service';
import { SearchFilterService } from '../../search-filter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private searchSvc: SearchFilterService) { }
  searchText: string;
  ngOnInit() {
  }
  onSearch(): void {
    this.searchSvc.filter.next(this.searchText);
  }
}
