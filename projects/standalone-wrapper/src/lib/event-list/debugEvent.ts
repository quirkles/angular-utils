import {COMPONENT_MOUNTED, COMPONENT_EMITTED_EVENT, COMPONENT_PROP_CHANGED} from './eventTypes';
import {Component} from '@angular/core';

const getMessage = eventData => {
    switch (eventData.type) {
      case COMPONENT_MOUNTED:
        return [
          [`Component: `],
          [eventData.component.constructor.name, 'blue'],
          [' mounted'],
        ];
      case COMPONENT_EMITTED_EVENT:
        return [
          [`Component: `],
          [eventData.component.constructor.name, 'blue'],
          [' emitted event: '],
          [eventData.eventName, 'yellow'],
          [' with payload: '],
          [eventData.eventPayload, 'yellow'],
        ];
      case COMPONENT_PROP_CHANGED:
        return [
          [`Prop: `],
          [eventData.propName, 'blue'],
          [` in component: `],
          [eventData.component.constructor.name, 'blue'],
          [' changed to: '],
          [JSON.stringify(eventData.newVal), 'yellow'],
        ];
    }
};

export class DebugEventData {
  type: string;
  component?: Component;
  eventName?: string;
  eventPayload?: string;
  propName?: string;
  newVal?: any;
  oldVal?: any;
}

export class DebugEvent {
  type: string;
  message: string[][];

  constructor(eventData: DebugEventData) {
    this.type = eventData.type;
    this.message = getMessage(eventData);
  }
  toJson(): any {
    return {
      type: this.type,
      message: this.message.map(parts => parts[0]).join('')
    };
  }
}
