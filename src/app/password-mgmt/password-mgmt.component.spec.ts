import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordMgmtComponent } from './password-mgmt.component';

describe('PasswordMgmtComponent', () => {
  let component: PasswordMgmtComponent;
  let fixture: ComponentFixture<PasswordMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
