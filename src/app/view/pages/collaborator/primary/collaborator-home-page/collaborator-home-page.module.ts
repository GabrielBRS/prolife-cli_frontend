import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorHomePageComponent } from './collaborator-home-page.component';
import { DoctorHomeRoutingModule } from './client-home-routing.module';
import { NavbarDoctorModule } from 'src/app/view/components/doctor/navbar-doctor/navbar-doctor.module';
import { CredentialsDoctorModule } from 'src/app/view/components/doctor/credentials-doctor/credentials-doctor.module';



@NgModule({
  declarations: [
    CollaboratorHomePageComponent
  ],
  imports: [
    CommonModule,
    NavbarDoctorModule,
    DoctorHomeRoutingModule,
    CredentialsDoctorModule,
  ],
  exports:[CollaboratorHomePageComponent]
})
export class CollaboratorHomePageModule { }
