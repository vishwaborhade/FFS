import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DesignerService } from '../../designer/designer.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor(private router: Router, private designerService: DesignerService) { }

    ngOnInit() {

    }

    navigate() {
        if(!this.designerService.activeDesigner) {
            console.log('This is not active user');
            this.router.navigate(['/']);
        } else {
            this.router.navigate(['/designer', this.designerService.activeDesigner.designerId]);
        }
    }
    
    logout() {
        this.designerService.activeDesigner = undefined;
        this.router.navigate(['/signIn']);
    }

}
