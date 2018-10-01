import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DesignerService } from '../../designer/designer.service';
import { News } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsList: News[];
  designerId: string;
   

  constructor(private router: Router, private designerService: DesignerService, private newsService: NewsService) { }

  ngOnInit() {
      if(this.designerService.activeDesigner){
          this.designerId = this.designerService.activeDesigner.designerId;
          this.newsService.getDesignerUploadNews(this.designerId);
          this.newsList = this.newsService.newsList;
      }
  }
    
  editNews(newsId: string) {
      this.router.navigate(['editNews', newsId]);
  }
    
  deleteNews(newsId: string) {
      this.newsService.deleteEvent(newsId);            
  }
}
