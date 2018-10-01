import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      console.log(this.route.snapshot.params['searchTxt']);
  }

}
