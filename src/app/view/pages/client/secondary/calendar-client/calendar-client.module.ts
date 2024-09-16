import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarClientComponent } from './calendar-client.component';
import { AuthenticationServer } from 'src/app/engine/services/authentication/authentication-server.service';



@NgModule({
  declarations: [
    CalendarClientComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CalendarClientComponent],
  providers:[AuthenticationServer],
})
export class CalendarClientModule { }
