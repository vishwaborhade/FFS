import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SignupService } from './signup.service'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  designerUsrNmErr: string = '';

  constructor(private router: Router, private signupService: SignupService) { }
    
  ngOnInit() {
  }

  onRegister(form: NgForm) {
      let formVal = form.value;
      
      if(this.signupService.isUserNameExist(formVal.designerUsrNm)) {
          this.designerUsrNmErr = 'User name is already exist.';
      } else {
          const designerID = this.signupService.saveDesignerDtl(formVal);
          this.router.navigate(['designer', designerID]);
      }
  }
    
  onCancel() {
      this.router.navigate(['/']);
  }
}
