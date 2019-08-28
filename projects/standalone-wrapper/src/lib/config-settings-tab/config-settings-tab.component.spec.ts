import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSettingsTabComponent } from './config-settings-tab.component';

describe('ConfigSettingsTabComponent', () => {
  let component: ConfigSettingsTabComponent;
  let fixture: ComponentFixture<ConfigSettingsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigSettingsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigSettingsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
