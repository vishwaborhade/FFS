import { Injectable } from '@angular/core';

import { Designer } from '../../designer/designer.model';
import { DesignerService } from '../../designer/designer.service';

@Injectable()
export class SigninService {
  
  constructor(private designerService: DesignerService) {}

  validateUser(designerUsrNm: string, designerPwd: string) {
      for(let designer of this.designerService.getDesigners()){
         if(designerUsrNm == designer.userName && designerPwd == designer.password){
            this.designerService.activeDesigner = designer;
            return true;
         } 
      }
      return false;
  }
    
}