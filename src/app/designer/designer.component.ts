import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { DesignerService } from './designer.service';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {
  firstName: string;

  constructor(private router: Router, 
                private route: ActivatedRoute,
                private designerService: DesignerService) { }

  ngOnInit() {
      if(this.designerService.activeDesigner == undefined) {
            this.router.navigate(['/']);
      } else {
            this.firstName = this.designerService.activeDesigner.firstName;
      }
     
  }
  
  searchDesing(form: NgForm) {
    this.router.navigate(['/']);
  }

}
