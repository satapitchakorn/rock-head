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
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormIdPipe } from './log/pipe/form-id.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { EventActionListComponent } from './employee/components/event-action-list/event-action-list.component';
@NgModule({
  declarations: [
    AppComponent,
    EventActionAddPageComponent,
    EventActionPageComponent,
    EventActionModifyPageComponent,
    EventActionRemovePageComponent,
    LogPageComponent,
    FormIdPipe,
    EventActionListComponent,
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
    MatTableModule,
    Ng2SearchPipeModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [FormIdPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
