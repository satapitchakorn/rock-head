import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventActionAddPageComponent } from '@app/employee/components/event-action-add-page/event-action-add-page.component';
import { EventActionPageComponent } from './employee/components/event-action-page/event-action-page.component';
import { EventActionModifyPageComponent } from './employee/components/event-action-modify-page/event-action-modify-page.component';
import { EventActionRemovePageComponent } from './employee/components/event-action-remove-page/event-action-remove-page.component';
import { LogPageComponent } from './log/components/log-page/log-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    EventActionAddPageComponent,
    EventActionPageComponent,
    EventActionModifyPageComponent,
    EventActionRemovePageComponent,
    LogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
