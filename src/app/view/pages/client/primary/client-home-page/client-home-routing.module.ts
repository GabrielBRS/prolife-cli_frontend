import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientScheduleComponent } from '../../../../components/client/client-schedule/client-schedule.component';
import { CalendarClientComponent } from '../../secondary/calendar-client/calendar-client.component';
import { ConfigurationClientComponent } from '../../secondary/configuration-client/configuration-client.component';
import { FeedClientComponent } from '../../secondary/feed-client/feed-client.component';
import { PerfilClientComponent } from '../../secondary/perfil-client/perfil-client.component';
import { ResultsClientComponent } from '../../secondary/results-client/results-client.component';

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
export class ClientHomeRoutingModule { }
