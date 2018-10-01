import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermandconditnComponent } from './termandconditn.component';

describe('TermandconditnComponent', () => {
  let component: TermandconditnComponent;
  let fixture: ComponentFixture<TermandconditnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermandconditnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermandconditnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
