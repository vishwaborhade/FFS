import { Injectable } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import { DesignerService } from '../../designer/designer.service';
import { Designer } from '../../designer/designer.model';

import { DataStorageService } from '../../shared/data-storage.service';

@Injectable()
export class SignupService {
    profilePicURL: string = './assets/profile_pic.png';
    
    constructor(private designerService: DesignerService, private dataStorageService: DataStorageService) { }

    isUserNameExist(userName: string) {
        for(let designer of this.designerService.getDesigners()) {
            if(userName == designer.userName) {
                return true;
            }
        }
        return false;
    }
    
    getDesignerUsingUserName(userName: string) {
        for(let designer of this.designerService.getDesigners()) {
            if(userName == designer.userName) {
                this.designerService.activeDesigner = designer;
            }
        }
    }
    
    setActiveDesigner(designerId: string) {
        for(let designer of this.designerService.getDesigners()) {
            if(designerId == designer.designerId) {
                this.designerService.activeDesigner = designer;
            }
        }
    }
    
    saveDesignerDtl(formVal: Designer) {

        const designer = new Designer('D004',  formVal.userName,  formVal.password,  formVal.seqQuestion,  formVal.seqAnswer,  
                formVal.businessName,  formVal.businessDetail,  false,  formVal.firstName,  formVal.lastName,  this.profilePicURL,
                formVal.address1,  formVal.address2,  formVal.city,  formVal.state,  formVal.country, formVal.zipCode,  
                formVal.contactNum1,  formVal.contactNum2,  formVal.email, formVal.qualification, formVal.course,  
                formVal.expertise,  formVal.experience,  
                formVal.skillLevel,  formVal.aboutMe,  formVal.socMediaLink);
        
        this.designerService.designers.push(designer);
        this.designerService.activeDesigner = designer;
        this.dataStorageService.addDesigner(designer)
            .subscribe(
                    (response: HttpEvent<Object>) => {
                        console.log(response);
                        console.log(response.type === HttpEventType.Sent);
                    } // type will give which type of event 4 is for normal.
                );
        return 'D004';
    }
}

