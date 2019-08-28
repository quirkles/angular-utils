import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneWrapperComponent } from './standalone-wrapper.component';

describe('StandaloneWrapperComponent', () => {
  let component: StandaloneWrapperComponent;
  let fixture: ComponentFixture<StandaloneWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandaloneWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandaloneWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
