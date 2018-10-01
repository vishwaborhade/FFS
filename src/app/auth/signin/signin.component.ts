import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { SigninService } from './signin.service';
import { SignupService } from '../signup/signup.service';

import { Designer } from '../../designer/designer.model';
import { DesignerService } from '../../designer/designer.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {

  wrongUserIDPwd: string = '';
    
  constructor(private router: Router, 
                private signinService: SigninService,
                private signupService: SignupService,
                private designerService: DesignerService) { }
  
  ngOnInit() {
  }
    
  onSignin(form: NgForm) {
    let formVal = form.value;
      
    if(this.signinService.validateUser(formVal.userName, formVal.password)) {
        this.router.navigate(['designer', this.designerService.activeDesigner.designerId]);
    } else {
        this.wrongUserIDPwd = 'Wrong user ID and Password.';
        return;
    }
  }

}
