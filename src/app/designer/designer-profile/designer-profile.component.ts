import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Designer } from '../designer.model';
import { DesignerService } from '../designer.service';

@Component({
  selector: 'app-designer-profile',
  templateUrl: './designer-profile.component.html',
  styleUrls: ['./designer-profile.component.css']
})
export class DesignerProfileComponent implements OnInit {
  designer: Designer;
  viewFullProfile: boolean; 

  constructor(private route: ActivatedRoute, private designerService: DesignerService) { }

  ngOnInit() {
      this.designer = this.designerService.activeDesigner;
      this.viewFullProfile = this.route.snapshot.params['viewProfile'];
  }

}
