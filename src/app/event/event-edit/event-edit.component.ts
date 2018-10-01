import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Event } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  eventId: string;
  event: Event;
    
  defaultEventId: string;
  defaultEventName: string;
  defaultEventImg: string;
  defaultEventType: string;
  defaultLocation: string;
  defaultDesc: string;
  defaultEventDate: string;
  defaultOrganizerName: string;
  defaultOrgnizerContact: string;
  defaultEntryFees: string;
  defaultNoteFromOrganizer: string;

  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService) { }

  ngOnInit() {
      this.eventId = this.route.snapshot.params['eventId'];
      this.eventService.getEvent(this.eventId);
      this.event = this.eventService.selectedEvent;
      
      this.defaultEventId = this.event.eventId;
      this.defaultEventName = this.event.eventName;
      this.defaultEventImg = this.event.eventImg;
      this.defaultEventType = this.event.eventType;
      this.defaultLocation = this.event.location
      this.defaultDesc = this.event.desc;
      this.defaultEventDate = this.event.eventDate;
      this.defaultOrganizerName = this.event.organizerName;
      this.defaultOrgnizerContact = this.event.contactOrgnizer;
      this.defaultEntryFees = this.event.entryFees;
      this.defaultNoteFromOrganizer = this.event.noteFromOrganizer;
      
  }
    
  modifyEvent(form: NgForm) {
      const formVal = form.value;
      console.log('In modify method');
      
      const modifiedEvent: Event = new Event(formVal.eventId, formVal.eventName, formVal.eventImg, formVal.eventType, formVal.location, formVal.dec, 
                formVal.eventDate, this.event.createdDate, new Date().toString(), formVal.organizerName, 
                formVal.contactOrgnizer, formVal.entryFees, formVal.noteFromOrganizer, this.event.uploadedByDesigner);
      
      this.eventService.updateEvent(modifiedEvent);
      
      this.router.navigate(['/event', this.eventId]);
      
  }
  
  onCancel() {
      this.router.navigate(['/showAllEvents']);
  }

}
