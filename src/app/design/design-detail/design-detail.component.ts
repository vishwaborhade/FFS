import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DesignService } from '../design.service';
import { Design } from '../design.model';

@Component({
  selector: 'app-design-detail',
  templateUrl: './design-detail.component.html',
  styleUrls: ['./design-detail.component.css']
})
export class DesignDetailComponent implements OnInit {
  design: Design;

  constructor(private route: ActivatedRoute, private designService: DesignService) { }

  ngOnInit() {
      this.design = this.designService.getSelectedDesign(this.route.snapshot.params['selectedDesign']);
  }

}
