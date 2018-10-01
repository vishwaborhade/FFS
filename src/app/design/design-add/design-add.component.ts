import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { DesignerService } from '../../designer/designer.service';
import { DesignService } from '../design.service';
import { Design } from '../design.model';

@Component({
  selector: 'app-design-add',
  templateUrl: './design-add.component.html',
  styleUrls: ['./design-add.component.css']
})
export class DesignAddComponent implements OnInit {

  constructor(private router: Router, private designerService: DesignerService, private designService: DesignService) { }

  ngOnInit() {
  }
    
  addDesign(form: NgForm) {
      const formVal = form.value;
      const desingerId = this.designerService.activeDesigner.designerId;
      const newDesign: Design = new Design(formVal.designId, desingerId, 
                                      this.designerService.activeDesigner.firstName + ', '+ this.designerService.activeDesigner.lastName, 
                                      formVal.designName, formVal.description, formVal.style, formVal.fabrics, new Date().toString());
      
      this.designService.addDesign(newDesign);
      this.router.navigate(['designer', desingerId]);
      
                  
  }
  

}
