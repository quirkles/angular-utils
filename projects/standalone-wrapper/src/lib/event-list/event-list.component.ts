import { Component, OnInit, Input } from '@angular/core';
import {DebugEvent} from './debugEvent';

@Component({
  selector: 'lib-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  @Input() events: DebugEvent[];
  constructor() { }

  ngOnInit() {
  }

}
