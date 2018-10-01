import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  @Input() test;
    
  constructor(private router: Router) { }

  ngOnInit() {
  }
    
  addDesign() {
      this.router.navigate(['/addDesign']);
  }
    
  showDesigns() {
      this.router.navigate(['/showDesigns']);
  }

}
