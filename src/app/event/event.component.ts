import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventMgmtComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {  }
    
  addEvent() {
      this.router.navigate(['/addEvent']);
  }

  showEvents() {
      this.router.navigate(['/showAllEvents']);
  }
}
