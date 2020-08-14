import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventActionPageComponent } from '@app/employee/components/event-action-page/event-action-page.component';
import { EventActionAddPageComponent } from '@app/employee/components/event-action-add-page/event-action-add-page.component';
import { EventActionModifyPageComponent } from '@app/employee/components/event-action-modify-page/event-action-modify-page.component';
import { EventActionRemovePageComponent } from '@app/employee/components/event-action-remove-page/event-action-remove-page.component';
import { LogPageComponent } from '@app/log/components/log-page/log-page.component';

const routes: Routes = [
  { path: 'form', component: EventActionPageComponent },
  { path: 'form/add', component: EventActionAddPageComponent },
  { path: 'form/modify', component: EventActionModifyPageComponent },
  { path: 'form/remove', component: EventActionRemovePageComponent },
  { path: 'log', component: LogPageComponent },
  { path: '**', redirectTo: '/form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
