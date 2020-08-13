import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventActionAddPageComponent } from '@app/employee/components/event-action-add-page/event-action-add-page.component';
import { EventActionPageComponent } from './employee/components/event-action-page/event-action-page.component';
import { EventActionModifyPageComponent } from './employee/components/event-action-modify-page/event-action-modify-page.component';
import { EventActionRemovePageComponent } from './employee/components/event-action-remove-page/event-action-remove-page.component';
import { HistoryPageComponent } from './log/components/history-page/history-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EventActionAddPageComponent,
    EventActionPageComponent,
    EventActionModifyPageComponent,
    EventActionRemovePageComponent,
    HistoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
