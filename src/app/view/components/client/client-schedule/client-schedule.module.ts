import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientScheduleComponent } from './client-schedule.component';



@NgModule({
  declarations: [
    ClientScheduleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ClientScheduleComponent]
})
export class ClientScheduleModule { }
