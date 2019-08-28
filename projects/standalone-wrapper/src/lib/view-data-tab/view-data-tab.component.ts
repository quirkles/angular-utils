import {Component, Input, OnInit} from '@angular/core';
import {StandaloneWrapperController} from '../standaloneWrapperController';

@Component({
  selector: 'lib-view-data-tab',
  templateUrl: './view-data-tab.component.html',
  styleUrls: ['./view-data-tab.component.scss']
})
export class ViewDataTabComponent implements OnInit {

  @Input() controller: StandaloneWrapperController;

  isEditing = false;
  editErrorMessage: string;

  format = json => JSON.stringify(json, null, 2);

  constructor() { }

  ngOnInit() {
  }

  startEditing() {
    this.isEditing = true;
  }

  stopEditing(val) {
    try {
      const data = JSON.parse(val);
      this.editErrorMessage = null;
      this.isEditing = false;
      this.controller.setData(data);
    } catch (e) {
      this.editErrorMessage = e.message;
    }
  }

}
