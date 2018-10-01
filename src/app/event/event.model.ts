export class Event {
  public eventId: string;
  public eventName: string;
  public eventImg: string;
  public eventType: string;
  public location: string;
  public desc: string;
  public eventDate: string;
  public createdDate: string;
  public modifiedDate: string;
  public organizerName: string;
  public contactOrgnizer: string;
  public entryFees: string;
  public noteFromOrganizer: string;
  public uploadedByDesigner: string; 
    

  constructor(eventId: string, eventName: string, eventImg: string, eventType: string, location: string, desc: string, 
                eventDate: string, createdDate: string, modifiedDate: string, organizerName: string, 
                contactOrgnizer: string, entryFees: string, noteFromOrganizer: string,
                uploadedByDesigner: string) {
    this.eventId = eventId;
    this.eventName = eventName;
    this.eventImg = eventImg;
    this.eventType = eventType;
    this.location = location;
    this.desc = desc;
    this.eventDate = eventDate;
    this.createdDate = createdDate;
    this.modifiedDate = modifiedDate;
    this.organizerName = organizerName;
    this.contactOrgnizer = contactOrgnizer;
    this.entryFees = entryFees;
    this.noteFromOrganizer = noteFromOrganizer;
    this.uploadedByDesigner = uploadedByDesigner;
  }
}
