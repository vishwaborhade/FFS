import { Injectable } from '@angular/core';

import { Designer } from './designer.model';

import { DataStorageService } from '../shared/data-storage.service';

@Injectable()
export class DesignerService {
    designers: Designer[] = [
        new Designer('D001', 'test', 'test', 'Which city you born?', 'Mumbai', 'FashionMart LLC', 'Indian Dress', true, 
            'Test', 'User', './assets/vishwa.jpg', 'Marine Drive',  'Coloba', 'Mumbai', 'MH',  'INDIA', '400001', 
            '022-88888888',  '',  'test.user@fss.com', 'Master on Fashion Designing', 'Corel Draw',  'Indian Atiers',  
            'Sherwanis', 'Expert',  'I am fond of Fashion',  ''),
        new Designer('D002', 'vishwa', 'vishwa', 'Which city you born?', 'Chicago', 'Borhade LLC', 'Formal Wear and Wedding Outfit', true, 
            'Vishwanath', 'Borhade', './assets/profile_pic.png', 'Michigan Avenue',  '', 'Chicago', 'FL',  'USA', '15067', 
            '800-888-1000',  '',  'vishwa.borhade@fss.com', 'MS in DTP', 'Photoshop',  'Suits Tuxedo',  
            'Tuxedo', 'Expert',  'Carry my own style',  '')
    ];
    
    activeDesigner: Designer;
    
    constructor(private dataStorageSerivce: DataStorageService) {}
    
    getDesigners() {
        return this.designers.slice();
    }
    
    getDesignersFromDB() {
        this.dataStorageSerivce.getDesigners()
//            .subscribe((designers: Designer[]) => {
//                console.log(designers);      
//            });
       .subscribe(
            (res: any) => {
                let tempDesigners: Designer[] = Object.keys(res).map((key) => { return res[key] });
                console.log('List of Designer: '+ tempDesigners);
                for(let designer1 of tempDesigners) {
                    console.log(designer1.firstName);                    
                }
            });
    }
}