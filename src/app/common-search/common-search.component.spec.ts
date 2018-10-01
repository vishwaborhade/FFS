import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSearchComponent } from './desig-combo-search.component';

describe('CommonSearchComponent', () => {
  let component: CommonSearchComponent;
  let fixture: ComponentFixture<CommonSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
