import { Component, OnInit } from '@angular/core';

import { DesignerService } from '../designer.service';

@Component({
  selector: 'app-designer-list',
  templateUrl: './designer-list.component.html',
  styleUrls: ['./designer-list.component.css']
})
export class DesignerListComponent implements OnInit {

  constructor(private desingerService: DesignerService) { }

  ngOnInit() {
      
  }
    
  getDesigners() {
      console.log('In Designer List');
      this.desingerService.getDesignersFromDB();
      
  }

}
