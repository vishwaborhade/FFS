import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsService } from '../news.service';
import { News } from '../news.model';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  selectedNews: News;

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit() {
      this.newsService.getNewsDetail(this.route.snapshot.params['newsId']);
      this.selectedNews = this.newsService.selectedNews; 
  }

}
