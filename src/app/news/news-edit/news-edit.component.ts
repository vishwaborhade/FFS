import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


import { News } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})
export class NewsEditComponent implements OnInit {
  newsId: string;
  news: News;
    
  tempNewsId: string;
  tempHeadline: string;
  tempSourceLink: string;
  tempPublisher: string;
    
  constructor(private route: ActivatedRoute, private router: Router, private newsService: NewsService) { }

  ngOnInit() {
    this.newsId = this.route.snapshot.params['newsId'];
    this.newsService.getNewsDetail(this.newsId);
    this.news = this.newsService.selectedNews;
      
    this.tempNewsId = this.news.newsId;
    this.tempHeadline = this.news.headline;
    this.tempSourceLink = this.news.sourceLink;
    this.tempPublisher = this.news.publisher;
  }

  modifyNews(form: NgForm) {
      const formVal = form.value;
      console.log('In modify News method');
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      
      const modifiedNews: News = new News(formVal.newsId, formVal.headline, formVal.sourceLink,
                        formVal.publisher, this.news.uploadedByDesigner, 
                        this.news.uploadedByDesignerNm, new Date().toLocaleDateString());
                        //.toLocaleDateString('hi-IN', options)); //new Date().toString())
            
      this.newsService.updateNews(modifiedNews);
      
      this.router.navigate(['/news', this.newsId]);
  }
  
  onCancel() {
      this.router.navigate(['/showAllNews']);
  }
}
 