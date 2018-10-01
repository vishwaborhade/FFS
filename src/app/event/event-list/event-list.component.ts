import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from '../event.service'; 
import { Event } from '../event.model';

import { DesignerService } from '../../designer/designer.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  @Input() eventBy;
  events: Event[] = [];
  designerId: string;

  constructor(private router: Router, private eventService: EventService, private designerService: DesignerService) {  }

  ngOnInit() {
      this.events = [];      
      if(this.designerService.activeDesigner != undefined) {
          this.designerId = this.designerService.activeDesigner.designerId;
          this.events = this.eventService.events;
      }
  }

  editEvent(eventId: string) {
      this.router.navigate(['editEvent', eventId]);
  }
    
  deleteEvent(eventId: string) {
      this.eventService.deleteEvent(eventId);            
  }
    
  removeEvent() {
  }
}
