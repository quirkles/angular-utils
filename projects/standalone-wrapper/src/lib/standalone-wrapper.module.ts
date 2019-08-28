import {NgModule} from '@angular/core';


import {StandaloneWrapperComponent} from './standalone-wrapper.component';
import {CustomDataTabComponent} from './custom-data-tab/custom-data-tab.component';
import {ConfigSettingsTabComponent} from './config-settings-tab/config-settings-tab.component';
import {ViewDataTabComponent} from './view-data-tab/view-data-tab.component';
import {ConfigPaneComponent} from './config-pane/config-pane.component';
import {EventListComponent} from './event-list/event-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    StandaloneWrapperComponent,
    CustomDataTabComponent,
    ConfigSettingsTabComponent,
    ViewDataTabComponent,
    ConfigPaneComponent,
    EventListComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [StandaloneWrapperComponent],
})
export class AppModule { }
