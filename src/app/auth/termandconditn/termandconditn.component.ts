import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-termandconditn',
  templateUrl: './termandconditn.component.html',
  styleUrls: ['./termandconditn.component.css']
})
export class TermandconditnComponent implements OnInit {
  @ViewChild('f') termCondForm: NgForm;
  userMsg: string = '';
  accSelected: string;
  
  
  constructor(private router: Router) {
      this.accSelected = 'yes';  
  }

  ngOnInit() {
      //this.termCondForm.form.patchValue({
        //acceptance: 'yes'  
     //}); 
  }
    
  continueToSignUp() {
      if(this.termCondForm.value.acceptance == 'yes') {
        this.router.navigate(['/signUp']);
      } else {
         this.userMsg = 'Please accept terms and conditions to proceed.';
      }
  }

  onCancel() {
      this.router.navigate(['/']);
  }
}
