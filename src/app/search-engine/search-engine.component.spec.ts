import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEgineComponent } from './search-egine.component';

describe('SearchEgineComponent', () => {
  let component: SearchEgineComponent;
  let fixture: ComponentFixture<SearchEgineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEgineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEgineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
