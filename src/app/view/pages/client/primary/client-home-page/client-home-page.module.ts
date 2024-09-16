import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientHomePageComponent } from './client-home-page.component';
import { RouterModule } from '@angular/router';
import { NavbarClientModule } from 'src/app/view/components/client/navbar-client/navbar-client.module';
import { ClientHomeRoutingModule } from './client-home-routing.module';
import { CredentialsClientModule } from 'src/app/view/components/client/credentials-client/credentials-client.module';

@NgModule({
  declarations: [
    ClientHomePageComponent
  ],
  exports:[
    ClientHomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavbarClientModule,
    ClientHomeRoutingModule,
    CredentialsClientModule,
  ]
})
export class ClientHomePageModule { }
