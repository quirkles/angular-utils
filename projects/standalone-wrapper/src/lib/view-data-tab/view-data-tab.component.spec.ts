import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDataTabComponent } from './view-data-tab.component';

describe('ViewDataTabComponent', () => {
  let component: ViewDataTabComponent;
  let fixture: ComponentFixture<ViewDataTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDataTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDataTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
