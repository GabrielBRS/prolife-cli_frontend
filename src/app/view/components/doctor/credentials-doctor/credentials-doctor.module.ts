import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredentialsDoctorComponent } from './credentials-doctor.component';



@NgModule({
  declarations: [
    CredentialsDoctorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CredentialsDoctorComponent]
})
export class CredentialsDoctorModule { }
