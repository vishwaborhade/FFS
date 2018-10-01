import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EventService } from '../event.service';
import { Event } from '../event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event;

  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService) { }

  ngOnInit() {;
      const eventId = this.route.snapshot.params['eventId']; 
      if(eventId == undefined) {
            this.router.navigate(['/']);
      } else {
           this.eventService.getEvent(eventId);
            this.event = this.eventService.selectedEvent;
            console.log(this.route.snapshot.params['eventId']);
      }
  }

  onCancel() {
      this.router.navigate(['/showAllEvents']);
  }
}
