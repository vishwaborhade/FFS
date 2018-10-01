export class Design {
    public designId: string;
    public designerId: string;
    public designerName: string;
    public designName: string;
    public description: string;
    public style: string;
    public gender: string;
    public color: string;
    public occasion: string;
    public designType: string;
    public fabrics: string;
    public pattern: string;
    public season: string;
    public care: string;
    public availCountry: string;
    public uploadedTs: string;
    
    constructor(designId: string, designerId: string, designerName: string, designName: string, description: string, style: string, 
                fabrics: string, uploadedTs: string) {
        this.designId = designId;
        this.designerId = designerId;
        this.designerName = designerName;
        this.designName = designName;
        this.description = description;
        this.style = style;
        this.fabrics = fabrics;
        this.uploadedTs = uploadedTs;
    }
}