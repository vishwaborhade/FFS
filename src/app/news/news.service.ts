import { News } from './news.model'; 

export class NewsService {
    selectedNews: News;
    desingUploadNews: News[] = [];
    
    newsList: News[] = [
        new News('N01', 'Welcome to Google', 'https://www.google.com', 'Google', '001', 'Donald, Duck', '3 mins ago'),
        new News('N02', 'Welcome to Yahoo', 'https://www.yahoo.com', 'Yahoo', '001', 'Donald, Duck', '2/12/2018'),
        new News('N02', 'Welcome to MSN', 'https://www.msn.com', 'MSN', '002', 'Vishwanath, Borhade', '05/26/2018')
    ];
    
    
    
    getNewsDetail(newsId: string) {
        for(let news of this.newsList){
            if(news.newsId == newsId) {
                this.selectedNews = news;
            }
        }
    }

    getDesignerUploadNews(designerId: string) {
        this.desingUploadNews = [];
        for(let news of this.newsList){
            if(news.uploadedByDesigner == designerId) {
                this.desingUploadNews.push(news);
            }
        }
    }
    
    updateNews(modifiedNews: News) {
        for(let news of this.newsList){
            if(news.newsId == modifiedNews.newsId) {
                this.newsList.splice(this.newsList.indexOf(news), 1);
                this.newsList.push(modifiedNews);
                    break;
            }
        }        
    }
    
    deleteEvent(newsId: string) {
    }
}