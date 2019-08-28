import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StandaloneWrapperController} from '../standaloneWrapperController';

@Component({
  selector: 'lib-config-settings-tab',
  templateUrl: './config-settings-tab.component.html',
  styleUrls: ['./config-settings-tab.component.scss']
})
export class ConfigSettingsTabComponent implements OnInit {

  @Input() controller: StandaloneWrapperController;
  @Output() mountComponentClicked = new EventEmitter<string>();

  entries = Object.entries;

  constructor() { }

  ngOnInit() {
  }

  trackByControlName(i, item) {
    return item[0];
  }

  isPrimitiveControl(control) {
    return control.value === null || control.value.constructor.name !== 'Object';
  }

  getInputTypeFromControl(control) {
    const controlType = control.value.constructor.name.toLowerCase();
    switch (controlType) {
      case 'number':
        return 'number';
      case 'boolean':
        return 'checkbox';
      default:
        return 'text';
    }
  }

}
