export class Blogs {
    public blogsId: string;
    public blogsType: string;
    public blogsTitle: string;
    public blogsBy: string;
    public blogsCreatedDt: string;
    public blogsMsg: string;

    constructor(blogsId: string, blogsType: string, blogsTitle: string, blogsBy: string, blogsCreatedDt: string, blogsMsg: string) {
        this.blogsId = blogsId;
        this.blogsType = blogsType;
        this.blogsTitle = blogsTitle;
        this.blogsBy = blogsBy;
        this.blogsCreatedDt = blogsCreatedDt;
        this.blogsMsg = blogsMsg;
    }
}