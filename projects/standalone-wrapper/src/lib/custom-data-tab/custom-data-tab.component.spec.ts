import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDataTabComponent } from './custom-data-tab.component';

describe('CustomDataTabComponent', () => {
  let component: CustomDataTabComponent;
  let fixture: ComponentFixture<CustomDataTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDataTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDataTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
