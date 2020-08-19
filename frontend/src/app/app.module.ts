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
import { FormIdPipe } from './log/pipe/form-id.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    EventActionAddPageComponent,
    EventActionPageComponent,
    EventActionModifyPageComponent,
    EventActionRemovePageComponent,
    LogPageComponent,
    FormIdPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [FormIdPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
