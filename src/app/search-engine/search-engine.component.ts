import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css']
})
export class SearchEngineComponent implements OnInit {
  isAdvSrch: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isAdvSrch = false;
  }

  setAdvSrch() {
    if(this.isAdvSrch) {
        this.isAdvSrch = false;
    } else {
        this.isAdvSrch = true;
    }    
  }

  searchDesing(form: NgForm) {
     const formVal = form.value;
     this.router.navigate(['/searchAll', formVal.searchTxt]);
        
  }
}
