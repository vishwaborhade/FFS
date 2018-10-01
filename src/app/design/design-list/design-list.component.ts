import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DesignerService } from '../../designer/designer.service';
import { DesignService } from '../design.service';
import { Design } from '../design.model';  

@Component({
  selector: 'app-design-list',
  templateUrl: './design-list.component.html',
  styleUrls: ['./design-list.component.css']
})
export class DesignListComponent implements OnInit {
  @Input() test;
    
  designerId: string;
  designs: Design[] = [];

  constructor(private router: Router, private designService: DesignService, private designerService: DesignerService) { }

  ngOnInit() {
      this.designs = [];
      if(this.designerService.activeDesigner == undefined) {
            this.router.navigate(['/']);
      } else if(this.test != undefined){
          this.designerId = this.designerService.activeDesigner.designerId;
          this.designs = this.designService.getDesignOfSDesigner(this.designerId, this.test);
      } else {
          this.designs = this.designService.getAllDesings(this.designerService.activeDesigner.designerId);
      }
  }
  
  editDesign(designId: string) {
      console.log(designId);
  }
      
  deleteDesign(designId: string) {
      this.designService.deleteDesign(designId, this.designerService.activeDesigner.designerId);
//      this.router.navigate(['showDesigns']);
      this.ngOnInit();
  }
    
}
