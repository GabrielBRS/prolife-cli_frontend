import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarClientComponent } from '../../../client/secondary/calendar-client/calendar-client.component';
import { ConfigurationClientComponent } from '../../../client/secondary/configuration-client/configuration-client.component';
import { FeedClientComponent } from '../../../client/secondary/feed-client/feed-client.component';
import { PerfilClientComponent } from '../../../client/secondary/perfil-client/perfil-client.component';
import { ResultsClientComponent } from '../../../client/secondary/results-client/results-client.component';

const routes: Routes = [

  {
    path: 'feed',
    component: FeedClientComponent,
  },
  {
    path: 'perfil',
    component: PerfilClientComponent,
  },
  {
    path: 'calendar',
    component: CalendarClientComponent,
  },
  {
    path: 'calendar/:index',
    component: CalendarClientComponent,
  },
  {
    path: 'results',
    component: ResultsClientComponent,
  },
  {
    path: 'configurations',
    component: ConfigurationClientComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorHomeRoutingModule { }
