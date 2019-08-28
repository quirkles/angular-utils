import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StandaloneWrapperController} from '../standaloneWrapperController';

@Component({
  selector: 'lib-config-pane',
  templateUrl: './config-pane.component.html',
  styleUrls: ['./config-pane.component.scss']
})
export class ConfigPaneComponent implements OnInit {

  @Input() controller: StandaloneWrapperController;
  @Output() mountComponentClicked = new EventEmitter<string>();
  @Output() logEventStreamClicked = new EventEmitter<string>();
  @Output() generateDataClick = new EventEmitter<string>();

  activeTab = 'settings';

  entries = Object.entries;

  constructor() { }

  ngOnInit() {
  }

  onMountComponentClicked(): void {
    this.mountComponentClicked.emit();
  }

  onLogEventStreamClicked(): void {
    this.logEventStreamClicked.emit();
  }

  onGenerateDataClick(): void {
    this.generateDataClick.emit();
  }

  toggleActiveTab(activeTab) {
    this.activeTab = activeTab;
  }
}
