import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerEditProfileComponent } from './designer-edit-profile.component';

describe('DesignerEditProfileComponent', () => {
  let component: DesignerEditProfileComponent;
  let fixture: ComponentFixture<DesignerEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
