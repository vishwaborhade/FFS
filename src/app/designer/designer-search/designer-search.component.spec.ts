import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerSearchComponent } from './designer-search.component';

describe('DesignerSearchComponent', () => {
  let component: DesignerSearchComponent;
  let fixture: ComponentFixture<DesignerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
