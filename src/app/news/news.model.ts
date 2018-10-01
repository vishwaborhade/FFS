export class News {
    public newsId: string;
    public headline: string;
    public sourceLink: string;
    public publisher: string;
    public uploadedByDesigner: string;
    public uploadedByDesignerNm: string;
    public uploadedDate: string;
    
    constructor(newsId: string, headline: string, sourceLink: string, publisher: string, uploadedByDesigner: string, 
                uploadedByDesignerNm: string, uploadedDate: string) {
        this.newsId = newsId;
        this.headline = headline;
        this.sourceLink = sourceLink;
        this.publisher = publisher;
        this.uploadedByDesigner = uploadedByDesigner;
        this.uploadedByDesignerNm = uploadedByDesignerNm;
        this.uploadedDate = uploadedDate;
    }
        
}