import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarDoctorComponent } from './navbar-doctor.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarDoctorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[NavbarDoctorComponent]
})
export class NavbarDoctorModule { }
