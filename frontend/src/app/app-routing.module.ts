import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventActionPageComponent } from '@app/employee/components/event-action-page/event-action-page.component';
import { EventActionAddPageComponent } from '@app/employee/components/event-action-add-page/event-action-add-page.component';
import { EventActionModifyPageComponent } from '@app/employee/components/event-action-modify-page/event-action-modify-page.component';
import { EventActionRemovePageComponent } from '@app/employee/components/event-action-remove-page/event-action-remove-page.component';
import { HistoryPageComponent } from '@app/log/components/history-page/history-page.component';

const routes: Routes = [
  {
    path: 'form', component: EventActionPageComponent,
    children: [
      { path: 'add', component: EventActionAddPageComponent },
      { path: 'modify', component: EventActionModifyPageComponent },
      { path: 'remove', component: EventActionRemovePageComponent }
    ]
  },
  { path: 'log', component: HistoryPageComponent },
  { path: '**', redirectTo: '/form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
